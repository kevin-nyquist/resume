import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Resume from './Resume'
import NavBar from './NavBar'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <div className='top-banner'>
          <h2> Built using React </h2>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className='resume-container'>
          <h2 className='res-title'>Resume:</h2>
          <Resume></Resume>
        </div>
      </div>
    </>
  )
}

export default App
