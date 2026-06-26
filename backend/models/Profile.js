const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  grade: String,
  stream: String,
  state: String,
  income: String,
  category: String,
  gender: String,
}, { timestamps: true })

module.exports = mongoose.model('Profile', profileSchema)