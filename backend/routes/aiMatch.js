const express = require('express')
const router = express.Router()
const Groq = require('groq-sdk')
const Scholarship = require('../models/Scholarship')
const Profile = require('../models/Profile')

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

router.post('/', async (req, res) => {
  try {
    const { profileId } = req.body

    // get profile
    const profile = await Profile.findById(profileId)
    if (!profile) return res.json({ error: 'Profile not found' })

    // get all scholarships
    const scholarships = await Scholarship.find()

    // build prompt
    const prompt = `
You are a scholarship matching expert for Indian students.

Here is the student profile:
- Name: ${profile.name}
- Grade/Course: ${profile.grade}
- Stream: ${profile.stream}
- State: ${profile.state}
- Annual Family Income: ${profile.income}
- Category: ${profile.category}
- Gender: ${profile.gender}

Here are the available scholarships:
${scholarships.map((s, i) => `
${i + 1}. ID: ${s._id}
   Name: ${s.name}
   Provider: ${s.provider}
   Amount: ${s.amount}
   Eligibility: Grades(${s.eligibility.grades.join(', ')}), Streams(${s.eligibility.streams.join(', ')}), States(${s.eligibility.states.join(', ')}), Income(${s.eligibility.income}), Categories(${s.eligibility.categories.join(', ')}), Gender(${s.eligibility.gender})
   Description: ${s.description}
`).join('')}

For each scholarship, analyze how well it matches the student profile and give a fit score from 0 to 100.
Consider eligibility match and how beneficial it would be for this specific student.

Return ONLY a valid JSON array with no extra text, no markdown, no backticks. Just raw JSON like this:
[
  {
    "scholarshipId": "the_id_here",
    "fitScore": 85,
    "reason": "One sentence why this is a good match"
  }
]

Only include scholarships with fitScore above 30. Sort by fitScore descending.
`

    // call Groq
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
    })

    const text = completion.choices[0]?.message?.content || ''

    // parse response
    let matches = []
    try {
      const clean = text.replace(/```json|```/g, '').trim()
      matches = JSON.parse(clean)
    } catch (e) {
      return res.json({ error: 'AI response parsing failed', raw: text })
    }

    // combine with scholarship details
    const enriched = matches.map(match => {
      const scholarship = scholarships.find(s => s._id.toString() === match.scholarshipId)
      return {
        ...scholarship?.toObject(),
        fitScore: match.fitScore,
        reason: match.reason
      }
    }).filter(s => s.name)

    res.json(enriched)

  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router