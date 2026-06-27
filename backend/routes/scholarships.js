// const express = require('express')
// const router = express.Router()
// const Scholarship = require('../models/Scholarship')

// router.get('/', async (req, res) => {
//   try {
//     const scholarships = await Scholarship.find()
//     res.json(scholarships)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

// module.exports = router
const express = require('express')
const router = express.Router()
const Scholarship = require('../models/Scholarship')
const Profile = require('../models/Profile')

router.get('/', async (req, res) => {
  try {
    const { profileId } = req.query

    // if no profileId just return all
    if (!profileId) {
      const all = await Scholarship.find()
      return res.json(all)
    }

    // get the student profile
    const profile = await Profile.findById(profileId)
    if (!profile) {
      const all = await Scholarship.find()
      return res.json(all)
    }

    // filter scholarships based on profile
    const all = await Scholarship.find()
    const filtered = all.filter(s => {

      // check grade
      const gradeMatch = s.eligibility.grades.includes(profile.grade)
      if (!gradeMatch) return false

      // check stream
      const streamMatch = s.eligibility.streams.includes(profile.stream) || s.eligibility.streams.includes('All')
      if (!streamMatch) return false

      // check state
      const stateMatch = s.eligibility.states.includes(profile.state) || s.eligibility.states.includes('All')
      if (!stateMatch) return false

      // check category
      const categoryMatch = s.eligibility.categories.includes(profile.category) || s.eligibility.categories.includes('All')
      if (!categoryMatch) return false

      // check gender
      const genderMatch = s.eligibility.gender === 'All' || s.eligibility.gender === profile.gender
      if (!genderMatch) return false

      return true
    })

    res.json(filtered)
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router