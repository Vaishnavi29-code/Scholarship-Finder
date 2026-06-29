import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProfileForm from './pages/ProfileForm'
import Results from './pages/Results'
import Deadlines from './pages/Deadlines'
import ScholarshipDetail from './pages/ScholarshipDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<ProfileForm />} />
        <Route path="/results" element={<Results />} />
        <Route path="/deadlines" element={<Deadlines />} />
        <Route path="/scholarship/:id" element={<ScholarshipDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App