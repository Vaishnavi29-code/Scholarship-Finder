import { useEffect, useState } from 'react'

function Deadlines() {
  const [saved, setSaved] = useState([])
  const [loading, setLoading] = useState(true)

  const profileId = localStorage.getItem('profileId')

  useEffect(() => {
    if (!profileId) {
      setLoading(false)
      return
    }
    fetch(`https://scholarship-finder-7kcy.onrender.com/api/saved/${profileId}`)
      .then(res => res.json())
      .then(data => {
        setSaved(data)
        setLoading(false)
      })
  }, [])

  const getDaysLeft = (deadline) => {
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const diff = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24))
    return diff
  }

  const getUrgencyColor = (days) => {
    if (days <= 7) return 'bg-red-100 text-red-700 border-red-200'
    if (days <= 30) return 'bg-yellow-100 text-yellow-700 border-yellow-200'
    return 'bg-green-100 text-green-700 border-green-200'
  }

  const getUrgencyLabel = (days) => {
    if (days < 0) return 'Deadline passed'
    if (days === 0) return 'Due today!'
    if (days <= 7) return `${days} days left — Apply soon!`
    if (days <= 30) return `${days} days left`
    return `${days} days left`
  }

  const removeScholarship = async (id) => {
    await fetch(`https://scholarship-finder-7kcy.onrender.com/api/saved/${id}`, { method: 'DELETE' })
    setSaved(saved.filter(s => s._id !== id))
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading your saved scholarships...</p>
      </div>
    )
  }

  if (!profileId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Please fill your profile first</h2>
          <a href="/find">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
              Fill Profile
            </button>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">⏰ Deadline Tracker</h1>
          <p className="text-gray-500 mt-1">Track deadlines for your saved scholarships</p>
        </div>

        {/* Empty state */}
        {saved.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center">
            <div className="text-4xl mb-4">📭</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">No saved scholarships yet</h2>
            <p className="text-gray-500 mb-6">Go to results and click Save on scholarships you're interested in</p>
            <a href="/find">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                Find Scholarships
              </button>
            </a>
          </div>
        )}

        {/* Saved scholarships */}
        <div className="flex flex-col gap-4">
          {saved
            .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
            .map(s => {
              const daysLeft = getDaysLeft(s.deadline)
              return (
                <div key={s._id} className={`bg-white rounded-2xl p-6 border ${getUrgencyColor(daysLeft)}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">{s.scholarshipName}</h2>
                      <p className="text-gray-500 text-sm mt-1">{s.provider}</p>
                      <p className="text-green-600 font-medium text-sm mt-1">{s.amount}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full border ${getUrgencyColor(daysLeft)}`}>
                        {getUrgencyLabel(daysLeft)}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {new Date(s.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <a href={s.applyLink} target="_blank" rel="noreferrer">
                      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                        Apply Now →
                      </button>
                    </a>
                    <button
                      onClick={() => removeScholarship(s._id)}
                      className="text-red-500 border border-red-200 px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-50">
                      Remove
                    </button>
                  </div>
                </div>
              )
            })}
        </div>

      </div>
    </div>
  )
}

export default Deadlines