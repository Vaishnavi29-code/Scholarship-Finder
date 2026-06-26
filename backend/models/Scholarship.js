const mongoose = require('mongoose')

const scholarshipSchema = new mongoose.Schema({
  name: String,
  provider: String,
  amount: String,
  deadline: String,
  eligibility: {
    grades: [String],
    streams: [String],
    states: [String],
    income: String,
    categories: [String],
    gender: String,
  },
  description: String,
  applyLink: String,
  documents: [String],
}, { timestamps: true })

module.exports = mongoose.model('Scholarship', scholarshipSchema)