const mongoose = require('mongoose');

const waitlistEntrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  university: {
    type: String,
    required: true,
  },
  otherUniversity: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('WaitlistEntry', waitlistEntrySchema);