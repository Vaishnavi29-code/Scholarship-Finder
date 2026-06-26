const express = require('express')
const router = express.Router()
const Profile = require('../models/Profile')

router.post('/', async (req, res) => {
  try {
    const profile = new Profile(req.body)
    await profile.save()
    res.json({ success: true, profileId: profile._id })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
})

module.exports = router