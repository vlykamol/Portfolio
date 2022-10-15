import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <>
    <Navbar />
    <div className='absolute top-0'>
    <Hero />
    <Projects />
    </div>
    </>
  )
}

export default App
