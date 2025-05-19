const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // In a real app, link to a User model
  courseId: { type: String, required: true }, // Links to Course.courseId
  cmiData: { type: Object, default: {} }, // Stores the SCORM CMI object
  lastUpdated: { type: Date, default: Date.now },
});

// Ensure a user can only have one progress entry per course
userProgressSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('UserProgress', userProgressSchema);