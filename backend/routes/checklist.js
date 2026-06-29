const express = require('express')
const router = express.Router()
const Groq = require('groq-sdk')
const Scholarship = require('../models/Scholarship')

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

router.get('/:scholarshipId', async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.scholarshipId)
    if (!scholarship) return res.json({ error: 'Scholarship not found' })

    const prompt = `
You are an expert on Indian scholarship applications.

For the following scholarship, provide a detailed document checklist that a student needs to prepare:

Scholarship: ${scholarship.name}
Provider: ${scholarship.provider}
Eligibility: Categories(${scholarship.eligibility.categories.join(', ')}), Income(${scholarship.eligibility.income})
Description: ${scholarship.description}

Return ONLY a valid JSON object with no extra text, no markdown, no backticks:
{
  "documents": [
    {
      "name": "Document name",
      "description": "Brief description of what this document should contain or where to get it",
      "mandatory": true
    }
  ],
  "tips": ["One helpful tip about applying", "Another tip"]
}

Include 5-8 documents. Make it specific to this scholarship.
`

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
    })

    const text = completion.choices[0]?.message?.content || ''

    let checklist = {}
    try {
      const clean = text.replace(/```json|```/g, '').trim()
      checklist = JSON.parse(clean)
    } catch (e) {
      return res.json({ error: 'Parsing failed', raw: text })
    }

    res.json(checklist)

  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router