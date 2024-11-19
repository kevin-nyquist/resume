import './css/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './components/Resume'
import Extracurriculars from './pages/Extracurriculars'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/resume-website" element={<Home />} />
            <Route path="/resume-website/projects" element={<Projects />} />
            <Route path="/resume-website/resume" element={<Resume />} />
            <Route path="/resume-website/extracurriculars" element={<Extracurriculars />} />
          </Routes>
        </div>
      </>
  )
}

export default App
