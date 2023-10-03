import './css/App.css'
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/resume-website" element={<Home />} />
            <Route path="/resume-website/projects" element={<Projects />} />
          </Routes>
        </div>
      </>
  )
}

export default App
