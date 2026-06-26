const express = require('express')
const router = express.Router()
const Scholarship = require('../models/Scholarship')

router.get('/', async (req, res) => {
  try {
    const scholarships = await Scholarship.find()
    res.json(scholarships)
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router