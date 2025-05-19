import React, { useEffect, useRef } from 'react';
import { Scorm12API, Scorm2004API } from 'scorm-again';

const API_URL = import.meta.env.VITE_API_URL;
const SCORM_CONTENT_BASE_URL = import.meta.env.VITE_SCORM_CONTENT_BASE_URL;

// Hardcoded for this example; in a real app, this comes from auth
const CURRENT_USER_ID = 'testUser123'; 

function ScormPlayer({ course }) {
  const iframeRef = useRef(null);
  const scormApiRef = useRef(null); // To hold the scorm-again API instance

  useEffect(() => {
    if (!course) return;

    let apiInstance;
    const courseId = course.courseId;

    const commonSettings = {
      lmsCommitUrl: `${API_URL}/cmi/${CURRENT_USER_ID}/${courseId}`,
      autocommit: true,
      logLevel: 'INFO', // 'DEBUG', 'INFO', 'WARN', 'ERROR', 'NONE'
      dataCommitFormat: "json", // Or "flattened" or "params"
      // For authentication with your backend if using cookies/tokens in headers:
      // fetchMode: 'cors', // if your backend is on a different domain
      // xhrWithCredentials: true, // if using cookies
      // xhrHeaders: { 'Authorization': `Bearer ${your_auth_token}` },
      responseHandler: async (response) => {
        try {
          if (!response.ok) { // fetch API's response.ok
            const errorText = await response.text();
            console.error("SCORM Commit to LMS failed on backend:", response.status, errorText);
            // Try to parse backend error if JSON
            try {
                const errorJson = JSON.parse(errorText);
                return { result: false, errorCode: errorJson.errorCode || "101" };
            } catch (e) {
                return { result: false, errorCode: "101" }; // General error
            }
          }
          const data = await response.json();
          return { result: data.success, errorCode: data.errorCode || "0" };
        } catch (error) {
          console.error("Error processing LMS commit response:", error);
          return { result: false, errorCode: "101" }; // General Exception
        }
      },
    };

    // Fetch initial CMI data
    fetch(`${API_URL}/cmi/${CURRENT_USER_ID}/${courseId}`)
      .then(res => res.json())
      .then(initialCmiData => {
        if (course.scormVersion === '1.2') {
          apiInstance = new Scorm12API({ ...commonSettings });
          window.API = apiInstance;
        } else if (course.scormVersion === '2004') {
          apiInstance = new Scorm2004API({ ...commonSettings });
          window.API_1484_11 = apiInstance;
        }
        scormApiRef.current = apiInstance;

        if (apiInstance && initialCmiData && Object.keys(initialCmiData).length > 0) {
          console.log("Loading initial CMI data into scorm-again:", initialCmiData);
          // scorm-again expects a flattened object for loadFromFlattenedJSON
          // or you can set properties directly on apiInstance.cmi
          if (apiInstance.loadFromFlattenedJSON) {
            apiInstance.loadFromFlattenedJSON(initialCmiData);
          } else { // Fallback for direct CMI object manipulation if method isn't readily available
            // This part might need adjustment based on scorm-again's exact CMI structure
            Object.keys(initialCmiData).forEach(key => {
              const pathParts = key.split('.');
              let current = apiInstance.cmi;
              pathParts.forEach((part, index) => {
                if (index === pathParts.length - 1) {
                  current[part] = initialCmiData[key];
                } else {
                  current[part] = current[part] || {};
                  current = current[part];
                }
              });
            });
          }
        }

        // Set iframe src AFTER API is on window and data might be preloaded
        if (iframeRef.current) {
          const launchUrl = `${SCORM_CONTENT_BASE_URL}/${course.contentPath}/${course.launchFile}`;
          iframeRef.current.src = launchUrl;
          console.log("Launching SCORM content at:", launchUrl);
        }
      })
      .catch(err => console.error("Error fetching initial CMI data:", err));

    return () => {
      // Cleanup: SCORM content should call Finish/Terminate, which triggers final commit.
      // scorm-again handles this. We just need to remove API from window.
      if (scormApiRef.current && scormApiRef.current.isInitialized() && !scormApiRef.current.isTerminated()) {
        console.warn("SCORM player unmounted but session was not terminated by content. This might lead to data loss if autoCommit is off.");
        // You could try to force a Terminate here, but it's better if content does it.
        // if (course.scormVersion === '1.2') scormApiRef.current.LMSFinish("");
        // else scormApiRef.current.Terminate("");
      }
      if (course.scormVersion === '1.2') delete window.API;
      else delete window.API_1484_11;
      scormApiRef.current = null;
      console.log("ScormPlayer unmounted, API removed from window.");
    };
  }, [course]); // Re-run if course changes

  if (!course) {
    return <p>Select a course to play.</p>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
      <h3>Playing: {course.title}</h3>
      <iframe
        ref={iframeRef}
        title={course.title}
        width="100%"
        height="600px"
        sandbox="allow-scripts allow-forms allow-pointer-lock allow-same-origin"
        // src is set in useEffect
      >
        Your browser does not support iframes.
      </iframe>
    </div>
  );
}

export default ScormPlayer;