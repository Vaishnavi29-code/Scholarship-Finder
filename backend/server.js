// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// require('dotenv').config()

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected!'))
//   .catch(err => console.log(err))

// app.get('/ping', (req, res) => {
//   res.json({ message: 'Backend is working!' })
// })

// app.listen(process.env.PORT || 5000, () => {
//   console.log(`Server running on port 5000`)
// })
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const profileRoute = require('./routes/profile')
const scholarshipRoute = require('./routes/scholarships')
const aiMatchRoute = require('./routes/aiMatch')
const savedRoute = require('./routes/saved')
const checklistRoute = require('./routes/checklist')
const appGuideRoute = require('./routes/appGuide')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  family: 4
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log('Connection error:', err.message))
app.use('/api/profile', profileRoute)
app.use('/api/scholarships', scholarshipRoute)
app.use('/api/ai-match', aiMatchRoute)
app.use('/api/saved', savedRoute)
app.use('/api/checklist', checklistRoute)
app.use('/api/guide', appGuideRoute)
app.get('/ping', (req, res) => {
  res.json({ message: 'Backend is working!' })
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port 5000`)
})