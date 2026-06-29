// // import { useEffect, useState } from 'react'

// // function Results() {
// //   const [scholarships, setScholarships] = useState([])
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     fetch('http://localhost:5000/api/scholarships')
// //       .then(res => res.json())
// //       .then(data => {
// //         setScholarships(data)
// //         setLoading(false)
// //       })
// //       .catch(err => {
// //         console.log(err)
// //         setLoading(false)
// //       })
// //   }, [])

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <p className="text-gray-500 text-lg">Finding scholarships for you...</p>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-6">
// //       <div className="max-w-4xl mx-auto">

// //         {/* Header */}
// //         <div className="mb-8">
// //           <h1 className="text-3xl font-bold text-gray-800">Scholarships For You</h1>
// //           <p className="text-gray-500 mt-1">{scholarships.length} scholarships found</p>
// //         </div>

// //         {/* Scholarship Cards */}
// //         <div className="flex flex-col gap-6">
// //           {scholarships.map((s) => (
// //             <div key={s._id} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              
// //               {/* Top Row */}
// //               <div className="flex justify-between items-start mb-3">
// //                 <div>
// //                   <h2 className="text-xl font-bold text-gray-800">{s.name}</h2>
// //                   <p className="text-gray-500 text-sm mt-1">{s.provider}</p>
// //                 </div>
// //                 <div className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full text-sm whitespace-nowrap">
// //                   {s.amount}
// //                 </div>
// //               </div>

// //               {/* Description */}
// //               <p className="text-gray-600 text-sm mb-4">{s.description}</p>

// //               {/* Deadline */}
// //               <div className="flex items-center gap-2 mb-4">
// //                 <span className="text-red-500 text-sm font-medium">⏰ Deadline:</span>
// //                 <span className="text-gray-700 text-sm">{new Date(s.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
// //               </div>

// //               {/* Bottom Row */}
// //               <div className="flex justify-between items-center">
// //                 <div className="flex gap-2 flex-wrap">
// //                   {s.eligibility.categories.map((cat) => (
// //                     <span key={cat} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">{cat}</span>
// //                   ))}
// //                   <span className="bg-purple-50 text-purple-600 text-xs px-3 py-1 rounded-full">{s.eligibility.gender}</span>
// //                 </div>
// //                 <a href={s.applyLink} target="_blank" rel="noreferrer">
// //                   <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
// //                     Apply Now →
// //                   </button>
// //                 </a>
// //               </div>

// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Results
// import { useEffect, useState } from 'react'

// function Results() {
//   const [scholarships, setScholarships] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const profileId = localStorage.getItem('profileId')
//     const url = profileId
//       ? `http://localhost:5000/api/scholarships?profileId=${profileId}`
//       : 'http://localhost:5000/api/scholarships'

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         setScholarships(data)
//         setLoading(false)
//       })
//       .catch(err => {
//         console.log(err)
//         setLoading(false)
//       })
//   }, [])

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-500 text-lg">Finding scholarships for you...</p>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6">
//       <div className="max-w-4xl mx-auto">

//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Scholarships For You</h1>
//           <p className="text-gray-500 mt-1">{scholarships.length} scholarships found based on your profile</p>
//         </div>

//         {/* No results */}
//         {scholarships.length === 0 && (
//           <div className="bg-white rounded-2xl p-12 text-center">
//             <div className="text-4xl mb-4">😔</div>
//             <h2 className="text-xl font-bold text-gray-800 mb-2">No scholarships found</h2>
//             <p className="text-gray-500 mb-6">Try updating your profile with different details</p>
//             <a href="/find">
//               <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
//                 Update Profile
//               </button>
//             </a>
//           </div>
//         )}

//         {/* Scholarship Cards */}
//         <div className="flex flex-col gap-6">
//           {scholarships.map((s) => (
//             <div key={s._id} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">

//               {/* Top Row */}
//               <div className="flex justify-between items-start mb-3">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">{s.name}</h2>
//                   <p className="text-gray-500 text-sm mt-1">{s.provider}</p>
//                 </div>
//                 <div className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full text-sm whitespace-nowrap">
//                   {s.amount}
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-600 text-sm mb-4">{s.description}</p>

//               {/* Deadline */}
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-red-500 text-sm font-medium">⏰ Deadline:</span>
//                 <span className="text-gray-700 text-sm">{new Date(s.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
//               </div>

//               {/* Bottom Row */}
//               <div className="flex justify-between items-center">
//                 <div className="flex gap-2 flex-wrap">
//                   {s.eligibility.categories.map((cat) => (
//                     <span key={cat} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">{cat}</span>
//                   ))}
//                   <span className="bg-purple-50 text-purple-600 text-xs px-3 py-1 rounded-full">{s.eligibility.gender}</span>
//                 </div>
//                 <a href={s.applyLink} target="_blank" rel="noreferrer">
//                   <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
//                     Apply Now →
//                   </button>
//                 </a>
//               </div>

//             </div>
//           ))}
//         </div>

//         {/* Back button */}
//         {scholarships.length > 0 && (
//           <div className="mt-8 text-center">
//             <a href="/find">
//               <button className="text-blue-600 font-medium hover:underline">
//                 ← Update My Profile
//               </button>
//             </a>
//           </div>
//         )}

//       </div>
//     </div>
//   )
// }

// export default Results
import { useEffect, useState } from 'react'

function Results() {
  const [scholarships, setScholarships] = useState([])
  const [loading, setLoading] = useState(true)
  const [usingAI, setUsingAI] = useState(false)

  useEffect(() => {
    const profileId = localStorage.getItem('profileId')

    if (profileId) {
      // use AI matching
      setUsingAI(true)
      fetch('http://localhost:5000/api/ai-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profileId })
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            // fallback to basic filter
            return fetch(`http://localhost:5000/api/scholarships?profileId=${profileId}`)
              .then(res => res.json())
          }
          return data
        })
        .then(data => {
          setScholarships(data)
          setLoading(false)
        })
        .catch(err => {
          console.log(err)
          setLoading(false)
        })
    } else {
      fetch('http://localhost:5000/api/scholarships')
        .then(res => res.json())
        .then(data => {
          setScholarships(data)
          setLoading(false)
        })
    }
  }, [])

  const getFitColor = (score) => {
    if (score >= 80) return 'bg-green-100 text-green-700'
    if (score >= 60) return 'bg-yellow-100 text-yellow-700'
    return 'bg-red-100 text-red-700'
  }

  const saveScholarship = async (scholarship) => {
  const profileId = localStorage.getItem('profileId')
  if (!profileId) return alert('Please fill your profile first!')

  try {
    const response = await fetch('http://localhost:5000/api/saved', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        profileId,
        scholarshipId: scholarship._id,
        scholarshipName: scholarship.name,
        deadline: scholarship.deadline,
        amount: scholarship.amount,
        applyLink: scholarship.applyLink,
        provider: scholarship.provider
      })
    })
    const data = await response.json()
    alert(data.message)
  } catch (error) {
    alert('Something went wrong!')
  }
}

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 text-lg">
          {usingAI ? '🤖 AI is finding the best scholarships for you...' : 'Loading scholarships...'}
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Scholarships For You</h1>
            <p className="text-gray-500 mt-1">{scholarships.length} scholarships matched based on your profile</p>
          </div>
          {usingAI && (
            <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              🤖 AI Matched
            </div>
          )}
        </div>

        {/* No results */}
        {scholarships.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center">
            <div className="text-4xl mb-4">😔</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">No scholarships found</h2>
            <p className="text-gray-500 mb-6">Try updating your profile with different details</p>
            <a href="/find">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                Update Profile
              </button>
            </a>
          </div>
        )}

        {/* Scholarship Cards */}
        <div className="flex flex-col gap-6">
          {scholarships.map((s) => (
            <div key={s._id} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">

              {/* Top Row */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <a href={`/scholarship/${s._id}`} className="hover:text-blue-600">
                    <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer underline">{s.name}</h2>
                  </a>
                  <p className="text-gray-500 text-sm mt-1">{s.provider}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full text-sm whitespace-nowrap">
                    {s.amount}
                  </div>
                  {s.fitScore  !== undefined &&(
                    <div className={`font-bold px-4 py-1 rounded-full text-sm ${getFitColor(s.fitScore)}`}>
                      {s.fitScore}% match
                    </div>
                  )}
                </div>
              </div>

              {/* AI Reason */}
              {s.reason !== undefined && (
                <div className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg mb-4">
                  🤖 {s.reason}
                </div>
              )}

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
                  {s.eligibility?.categories.map((cat) => (
                    <span key={cat} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">{cat}</span>
                  ))}
                  <span className="bg-purple-50 text-purple-600 text-xs px-3 py-1 rounded-full">{s.eligibility?.gender}</span>
                </div>
                <div className="flex gap-2">
                  <a href={`/scholarship/${s._id}`}>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                      View Details
                    </button>
                  </a>
                  <button
                    onClick={() => saveScholarship(s)}
                    className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
                    🔖 Save
                  </button>
                  <a href={s.applyLink} target="_blank" rel="noreferrer">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                      Apply Now →
                    </button>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Back button */}
        {scholarships.length > 0 && (
          <div className="mt-8 text-center">
            <a href="/find">
              <button className="text-blue-600 font-medium hover:underline">
                ← Update My Profile
              </button>
            </a>
          </div>
        )}

      </div>
    </div>
  )
}

export default Results