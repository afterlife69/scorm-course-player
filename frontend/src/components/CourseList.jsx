import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function CourseList({ onSelectCourse }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/courses`);
      setCourses(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch courses.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h3>Available Courses</h3>
      {courses.length === 0 ? (
        <p>No courses uploaded yet.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.courseId} onClick={() => onSelectCourse(course)} style={{ cursor: 'pointer', margin: '5px 0', padding: '5px', border: '1px solid #eee' }}>
              {course.title} (SCORM {course.scormVersion}) - {course.originalFileName}
            </li>
          ))}
        </ul>
      )}
      <button onClick={fetchCourses}>Refresh List</button>
    </div>
  );
}

export default CourseList;