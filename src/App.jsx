import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from '../src/components/Contact'
import { useRef } from 'react'

function App() {
  const heroRef = useRef(null)
  const contactRef = useRef(null)
  return (
    <>
    <Navbar contactRef />
    <div className='absolute top-0 w-full'>
    <Hero className='-z-10' />
    <Projects />
    <div ref={contactRef}>
      <Contact />
    </div>
    </div>
    </>
  )
}

export default App
