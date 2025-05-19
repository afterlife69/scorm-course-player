const express = require('express');
const multer = require('multer');
const AdmZip = require('adm-zip');
const xml2js = require('xml2js');
const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Course = require('../models/Course');
const UserProgress = require('../models/UserProgress');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Store file in memory

const SCORM_CONTENT_DIR = process.env.LOCAL_SCORM_CONTENT_PATH || './public/scorm_content';
fs.ensureDirSync(SCORM_CONTENT_DIR); // Create directory if it doesn't exist

// --- Helper to parse imsmanifest.xml ---
async function parseManifest(xmlData) {
  const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });
  try {
    const result = await parser.parseStringPromise(xmlData);
    const manifest = result.manifest;
    let scormVersion = '';
    let launchFile = '';
    let title = '';

    if (manifest.metadata && manifest.metadata.schemaversion) {
      if (manifest.metadata.schemaversion.toString().includes('1.2')) {
        scormVersion = '1.2';
      } else if (manifest.metadata.schemaversion.toString().match(/2004|CAM 1.3/)) {
        scormVersion = '2004';
      }
    } else if (manifest.schemaversion) { // Some manifests have schemaversion directly under manifest
        if (manifest.schemaversion.toString().includes('1.2')) {
            scormVersion = '1.2';
        } else if (manifest.schemaversion.toString().match(/2004|CAM 1.3/)) {
            scormVersion = '2004';
        }
    }


    if (manifest.organizations && manifest.organizations.organization) {
      const org = Array.isArray(manifest.organizations.organization)
        ? manifest.organizations.organization[0]
        : manifest.organizations.organization;
      if (org && org.title) {
        title = org.title;
      }
      if (org && org.item) {
        const firstItem = Array.isArray(org.item) ? org.item[0] : org.item;
        if (firstItem && firstItem.identifierref) {
          const resourceId = firstItem.identifierref;
          if (manifest.resources && manifest.resources.resource) {
            const resources = Array.isArray(manifest.resources.resource)
              ? manifest.resources.resource
              : [manifest.resources.resource];
            const launchResource = resources.find(r => r.identifier === resourceId && (r['adlcp:scormtype'] === 'sco' || r.scormtype === 'sco'));
            if (launchResource && launchResource.href) {
              launchFile = launchResource.href;
            }
          }
        }
      }
    }
    if (!launchFile && manifest.resources && manifest.resources.resource) { // Fallback if org structure is weird
        const resources = Array.isArray(manifest.resources.resource)
              ? manifest.resources.resource
              : [manifest.resources.resource];
        const scoResource = resources.find(r => (r['adlcp:scormtype'] === 'sco' || r.scormtype === 'sco'));
        if(scoResource && scoResource.href) launchFile = scoResource.href;
    }


    return { title, scormVersion, launchFile };
  } catch (error) {
    console.error('Error parsing manifest:', error);
    throw new Error('Could not parse imsmanifest.xml');
  }
}

// --- Upload SCORM Package ---
router.post('/upload', upload.single('scormFile'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  try {
    const courseId = uuidv4();
    const zip = new AdmZip(req.file.buffer);
    const zipEntries = zip.getEntries();
    const manifestEntry = zipEntries.find(entry => entry.entryName.toLowerCase().includes('imsmanifest.xml'));

    if (!manifestEntry) {
      return res.status(400).json({ message: 'imsmanifest.xml not found in ZIP.' });
    }

    const manifestXml = zip.readAsText(manifestEntry);
    const { title, scormVersion, launchFile } = await parseManifest(manifestXml);

    if (!scormVersion || !launchFile) {
      return res.status(400).json({ message: 'Could not determine SCORM version or launch file from manifest.' });
    }

    const courseContentPath = path.join(SCORM_CONTENT_DIR, courseId);
    zip.extractAllTo(courseContentPath, true /* overwrite */);

    const newCourse = new Course({
      courseId,
      title: title || req.file.originalname.replace('.zip', ''),
      scormVersion,
      launchFile,
      contentPath: courseId, // Relative path for local serving
      originalFileName: req.file.originalname,
    });
    await newCourse.save();

    res.status(201).json({ message: 'Course uploaded successfully', course: newCourse });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Error processing SCORM package.', error: error.message });
  }
});

// --- List Courses ---
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

// --- Get CMI Data ---
router.get('/cmi/:userId/:courseId', async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const progress = await UserProgress.findOne({ userId, courseId });
    if (progress) {
      res.json(progress.cmiData || {});
    } else {
      res.json({}); // Return empty object if no progress found, SCORM content will init with defaults
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching CMI data' });
  }
});

// --- Save CMI Data ---
router.post('/cmi/:userId/:courseId', async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const cmiData = req.body; // scorm-again sends the full CMI object (or flattened)

    // Ensure cmiData is an object
    if (typeof cmiData !== 'object' || cmiData === null) {
        return res.status(400).json({ success: false, errorCode: "101", message: "Invalid CMI data format." });
    }

    await UserProgress.findOneAndUpdate(
      { userId, courseId },
      { cmiData, lastUpdated: Date.now() },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    // SCORM spec expects a specific response format from commit
    res.json({ success: true, errorCode: "0" }); // "0" means no error for SCORM
  } catch (error) {
    console.error('Error saving CMI data:', error);
    res.status(500).json({ success: false, errorCode: "101", message: 'Error saving CMI data' }); // General Exception
  }
});

module.exports = router;