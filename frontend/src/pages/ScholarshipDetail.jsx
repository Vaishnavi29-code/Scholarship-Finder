import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ScholarshipDetail() {
  const { id } = useParams()
  const [scholarship, setScholarship] = useState(null)
  const [checklist, setChecklist] = useState(null)
  const [checked, setChecked] = useState({})
  const [loadingChecklist, setLoadingChecklist] = useState(true)

  useEffect(() => {
    // fetch scholarship details
    fetch(`http://localhost:5000/api/scholarships/${id}`)
      .then(res => res.json())
      .then(data => setScholarship(data))

    // fetch AI checklist
    fetch(`http://localhost:5000/api/checklist/${id}`)
      .then(res => res.json())
      .then(data => {
        setChecklist(data)
        setLoadingChecklist(false)
        // load saved checkboxes from localStorage
        const saved = localStorage.getItem(`checklist-${id}`)
        if (saved) setChecked(JSON.parse(saved))
      })
  }, [id])

  const toggleCheck = (index) => {
    const updated = { ...checked, [index]: !checked[index] }
    setChecked(updated)
    localStorage.setItem(`checklist-${id}`, JSON.stringify(updated))
  }

  const completedCount = Object.values(checked).filter(Boolean).length
  const totalCount = checklist?.documents?.length || 0

  if (!scholarship) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 font-medium hover:underline mb-6 block">
          ← Back to Results
        </button>

        {/* Scholarship Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{scholarship.name}</h1>
              <p className="text-gray-500 mt-1">{scholarship.provider}</p>
            </div>
            <div className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full text-sm">
              {scholarship.amount}
            </div>
          </div>
          <p className="text-gray-600 mb-4">{scholarship.description}</p>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-red-500 font-medium">⏰ Deadline:</span>
            <span className="text-gray-700">{new Date(scholarship.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <a href={scholarship.applyLink} target="_blank" rel="noreferrer">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
              Apply Now →
            </button>
          </a>
        </div>

        {/* Document Checklist */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">📋 Document Checklist</h2>
            {!loadingChecklist && (
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {completedCount}/{totalCount} ready
              </span>
            )}
          </div>

          {/* Progress bar */}
          {!loadingChecklist && totalCount > 0 && (
            <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              ></div>
            </div>
          )}

          {loadingChecklist ? (
            <div className="flex items-center gap-3 text-gray-500">
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p>🤖 AI is generating your document checklist...</p>
            </div>
          ) : checklist?.documents ? (
            <div className="flex flex-col gap-3">
              {checklist.documents.map((doc, index) => (
                <div
                  key={index}
                  onClick={() => toggleCheck(index)}
                  className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition border ${checked[index] ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition ${checked[index] ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                    {checked[index] && <span className="text-white text-xs">✓</span>}
                  </div>
                  <div>
                    <p className={`font-medium ${checked[index] ? 'text-green-700 line-through' : 'text-gray-800'}`}>
                      {doc.name}
                      {doc.mandatory && <span className="ml-2 text-xs text-red-500 no-underline">*required</span>}
                    </p>
                    <p className="text-gray-500 text-sm mt-0.5">{doc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Could not generate checklist. Please try again.</p>
          )}
        </div>

        {/* Tips */}
        {checklist?.tips && checklist.tips.length > 0 && (
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Application Tips</h2>
            <ul className="flex flex-col gap-3">
              {checklist.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">{index + 1}.</span>
                  <p className="text-gray-700">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}

export default ScholarshipDetail