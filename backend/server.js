require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Allow all origins for dev
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Serve SCORM Content Statically (Simulates S3 for local dev) ---
// The URL will be like: http://localhost:5001/scorm_content/<courseId>/index.html
app.use('/scorm_content', express.static(path.join(__dirname, process.env.LOCAL_SCORM_CONTENT_PATH || 'public/scorm_content')));


// API Routes
app.use('/api', apiRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));


app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});