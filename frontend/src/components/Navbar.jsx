import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-blue-600 font-bold text-xl">
          🎓 ScholarshipFinder
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/find" className="hover:text-blue-600">Find Scholarships</a>
          <a href="/deadlines" className="hover:text-blue-600">Deadlines</a>
          <a href="/stories" className="hover:text-blue-600">Success Stories</a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 text-2xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-2 text-gray-600 font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/find" className="hover:text-blue-600">Find Scholarships</a>
          <a href="/deadlines" className="hover:text-blue-600">Deadlines</a>
          <a href="/stories" className="hover:text-blue-600">Success Stories</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar