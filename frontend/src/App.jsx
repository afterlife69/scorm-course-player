import React, { useState, useCallback } from 'react';
import UploadForm from './components/UploadForm';
import CourseList from './components/CourseList';
import ScormPlayer from './components/ScormPlayer';
import './App.css'; // You can create this file for basic styling

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [refreshCourseListKey, setRefreshCourseListKey] = useState(0); // To trigger list refresh

  const handleUploadSuccess = useCallback(() => {
    setRefreshCourseListKey(prevKey => prevKey + 1); // Increment key to re-fetch
  }, []);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="App" style={{ maxWidth: '900px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h1>Simple SCORM Player</h1>
      <UploadForm onUploadSuccess={handleUploadSuccess} />
      <hr style={{ margin: '20px 0' }} />
      <CourseList key={refreshCourseListKey} onSelectCourse={handleSelectCourse} />
      {selectedCourse && (
        <ScormPlayer course={selectedCourse} />
      )}
    </div>
  );
}

export default App;