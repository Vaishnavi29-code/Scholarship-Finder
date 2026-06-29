const express = require('express')
const router = express.Router()
const SavedScholarship = require('../models/SavedScholarship')

// save a scholarship
router.post('/', async (req, res) => {
  try {
    const { profileId, scholarshipId, scholarshipName, deadline, amount, applyLink, provider } = req.body

    // check if already saved
    const existing = await SavedScholarship.findOne({ profileId, scholarshipId })
    if (existing) return res.json({ success: false, message: 'Already saved!' })

    const saved = new SavedScholarship({ profileId, scholarshipId, scholarshipName, deadline, amount, applyLink, provider })
    await saved.save()
    res.json({ success: true, message: 'Scholarship saved!' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
})

// get all saved scholarships for a profile
router.get('/:profileId', async (req, res) => {
  try {
    const saved = await SavedScholarship.find({ profileId: req.params.profileId })
    res.json(saved)
  } catch (error) {
    res.json({ error: error.message })
  }
})

// delete a saved scholarship
router.delete('/:id', async (req, res) => {
  try {
    await SavedScholarship.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: 'Removed!' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
})

module.exports = router