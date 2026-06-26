import { useEffect, useState } from 'react'

function Results() {
  const [scholarships, setScholarships] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/scholarships')
      .then(res => res.json())
      .then(data => {
        setScholarships(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Finding scholarships for you...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Scholarships For You</h1>
          <p className="text-gray-500 mt-1">{scholarships.length} scholarships found</p>
        </div>

        {/* Scholarship Cards */}
        <div className="flex flex-col gap-6">
          {scholarships.map((s) => (
            <div key={s._id} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              
              {/* Top Row */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{s.name}</h2>
                  <p className="text-gray-500 text-sm mt-1">{s.provider}</p>
                </div>
                <div className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full text-sm whitespace-nowrap">
                  {s.amount}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{s.description}</p>

              {/* Deadline */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-red-500 text-sm font-medium">⏰ Deadline:</span>
                <span className="text-gray-700 text-sm">{new Date(s.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2 flex-wrap">
                  {s.eligibility.categories.map((cat) => (
                    <span key={cat} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">{cat}</span>
                  ))}
                  <span className="bg-purple-50 text-purple-600 text-xs px-3 py-1 rounded-full">{s.eligibility.gender}</span>
                </div>
                <a href={s.applyLink} target="_blank" rel="noreferrer">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                    Apply Now →
                  </button>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Results