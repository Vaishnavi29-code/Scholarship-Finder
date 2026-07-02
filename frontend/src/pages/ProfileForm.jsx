import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProfileForm() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    stream: '',
    state: '',
    income: '',
    category: '',
    gender: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    // basic validation
    if (!formData.name || !formData.email || !formData.grade || !formData.stream || !formData.state || !formData.income || !formData.category || !formData.gender) {
      alert('Please fill all fields!')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('https://scholarship-finder-7kcy.onrender.com/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (data.success) {
        localStorage.setItem('profileId', data.profileId)
        navigate('/results')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Tell Us About Yourself</h1>
          <p className="text-gray-500">Fill your profile once and let AI find the best scholarships for you</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8">

          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Grade */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Grade / Course</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your grade</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
              <option value="Undergraduate">Undergraduate (UG)</option>
              <option value="Postgraduate">Postgraduate (PG)</option>
              <option value="Diploma">Diploma</option>
              <option value="ITI">ITI</option>
            </select>
          </div>

          {/* Stream */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Stream</label>
            <select
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your stream</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
              <option value="Engineering">Engineering</option>
              <option value="Medical">Medical</option>
              <option value="Law">Law</option>
              <option value="Management">Management</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* State */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your state</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Bihar">Bihar</option>
              <option value="Delhi">Delhi</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Family Income */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Annual Family Income</label>
            <select
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select income range</option>
              <option value="Below 1 Lakh">Below ₹1 Lakh</option>
              <option value="1-2.5 Lakhs">₹1 - ₹2.5 Lakhs</option>
              <option value="2.5-5 Lakhs">₹2.5 - ₹5 Lakhs</option>
              <option value="5-8 Lakhs">₹5 - ₹8 Lakhs</option>
              <option value="Above 8 Lakhs">Above ₹8 Lakhs</option>
            </select>
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="EWS">EWS</option>
            </select>
          </div>

          {/* Gender */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <div className="flex gap-4">
              {['Male', 'Female', 'Other'].map((g) => (
                <label key={g} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    className="text-blue-600"
                  />
                  <span className="text-gray-700">{g}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl text-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Finding Scholarships...' : 'Find My Scholarships →'}
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProfileForm