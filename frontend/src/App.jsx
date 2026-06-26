import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProfileForm from './pages/ProfileForm'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<ProfileForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App