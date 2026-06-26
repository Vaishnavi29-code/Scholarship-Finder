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
app.get('/ping', (req, res) => {
  res.json({ message: 'Backend is working!' })
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port 5000`)
})