function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find Scholarships Made for You
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          AI-powered matching that finds the right scholarships based on your profile — with document checklists, deadlines, and step-by-step guidance.
        </p>
        <a href="/find">
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full text-lg hover:bg-blue-50 transition">
            Find My Scholarships →
          </button>
        </a>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto py-12 px-6 text-center">
        <div>
          <div className="text-3xl font-bold text-blue-600">500+</div>
          <div className="text-gray-600 mt-1">Scholarships Listed</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600">AI</div>
          <div className="text-gray-600 mt-1">Powered Matching</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600">Free</div>
          <div className="text-gray-600 mt-1">Always Free to Use</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Why ScholarshipFinder 2.0?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-bold text-gray-800 mb-2">AI Matching</h3>
            <p className="text-gray-500 text-sm">Get a fit score for every scholarship based on your profile</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-gray-800 mb-2">Document Checklist</h3>
            <p className="text-gray-500 text-sm">Know exactly what documents you need before applying</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="font-bold text-gray-800 mb-2">Deadline Tracker</h3>
            <p className="text-gray-500 text-sm">Never miss a scholarship deadline with smart reminders</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-bold text-gray-800 mb-2">Application Guide</h3>
            <p className="text-gray-500 text-sm">Step-by-step guidance on how to apply for each scholarship</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-bold text-gray-800 mb-2">Hindi Support</h3>
            <p className="text-gray-500 text-sm">Use the platform in Hindi or English — your choice</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-bold text-gray-800 mb-2">Success Stories</h3>
            <p className="text-gray-500 text-sm">Learn from students who won scholarships just like you</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 text-center py-16 px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to find your scholarship?
        </h2>
        <p className="text-gray-500 mb-6">Fill your profile once and let AI do the rest</p>
        <a href="/find">
          <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition">
            Get Started — It's Free
          </button>
        </a>
      </div>

    </div>
  )
}

export default Home