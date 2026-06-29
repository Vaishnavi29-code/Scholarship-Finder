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

Generate a clear step-by-step application guide for the following scholarship:

Scholarship: ${scholarship.name}
Provider: ${scholarship.provider}
Apply Link: ${scholarship.applyLink}
Description: ${scholarship.description}
Eligibility: Categories(${scholarship.eligibility.categories.join(', ')}), Income(${scholarship.eligibility.income})

Return ONLY a valid JSON object with no extra text, no markdown, no backticks:
{
  "steps": [
    {
      "stepNumber": 1,
      "title": "Short step title",
      "description": "Detailed description of what to do in this step",
      "important": true
    }
  ],
  "estimatedTime": "How long the application process takes",
  "importantNote": "One critical thing students must know"
}

Include 5-7 clear steps. Make it specific and actionable for Indian students.
`

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
    })

    const text = completion.choices[0]?.message?.content || ''

    let guide = {}
    try {
      const clean = text.replace(/```json|```/g, '').trim()
      guide = JSON.parse(clean)
    } catch (e) {
      return res.json({ error: 'Parsing failed', raw: text })
    }

    res.json(guide)

  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router