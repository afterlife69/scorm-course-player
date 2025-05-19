import React, { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setMessage('Please select a SCORM ZIP file.');
      return;
    }

    const formData = new FormData();
    formData.append('scormFile', file);
    setUploading(true);
    setMessage('Uploading...');

    try {
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (error) {
      setMessage(`Upload failed: ${error.response?.data?.message || error.message}`);
      console.error('Upload error:', error.response?.data || error);
    } finally {
      setUploading(false);
      setFile(null);
      event.target.reset(); // Reset the form input
    }
  };

  return (
    <div>
      <h3>Upload SCORM Course (.zip)</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".zip" onChange={handleFileChange} disabled={uploading} />
        <button type="submit" disabled={uploading || !file}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UploadForm;