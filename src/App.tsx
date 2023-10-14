import './css/App.css'
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import SpotifyApp from './SpotifyApp'
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
            <Route path="/resume-website/spotify" element={<SpotifyApp />} />
          </Routes>
        </div>
      </>
  )
}

export default App
