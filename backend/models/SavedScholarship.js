const mongoose = require('mongoose')

const savedScholarshipSchema = new mongoose.Schema({
  profileId: { type: String, required: true },
  scholarshipId: { type: String, required: true },
  scholarshipName: String,
  deadline: String,
  amount: String,
  applyLink: String,
  provider: String,
  reminderSent: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('SavedScholarship', savedScholarshipSchema)