const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true }, // UUID
  title: { type: String, required: true },
  scormVersion: { type: String, required: true }, // '1.2' or '2004'
  launchFile: { type: String, required: true }, // e.g., 'index.html'
  contentPath: { type: String, required: true }, // Path relative to LOCAL_SCORM_CONTENT_PATH or S3 key prefix
  originalFileName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', courseSchema);