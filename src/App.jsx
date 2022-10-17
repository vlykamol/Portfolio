import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from '../src/components/Contact'
import { useRef } from 'react'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar contactRef />
    <Hero className='-z-10' />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
