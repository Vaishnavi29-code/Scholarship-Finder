function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-blue-600 font-bold text-xl">
        🎓 ScholarshipFinder
      </div>
      <div className="flex gap-6 text-gray-600 font-medium">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/find" className="hover:text-blue-600">Find Scholarships</a>
        <a href="/deadlines" className="hover:text-blue-600">Deadlines</a>
        <a href="/stories" className="hover:text-blue-600">Success Stories</a>
      </div>
    </nav>
  )
}

export default Navbar