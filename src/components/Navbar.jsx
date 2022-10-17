import { useState } from 'react'

export default function Navbar() {

  const [visible, setVisible] = useState(false)

  return (
    <div className='w-full p-2 bg-gradient-to-t from-black/25 to-black/0 fixed z-10'>
      <div className='flex justify-between items-center p-2'>
      <div className='font-roboto'>
        valay kamol
      </div>
      <div>
        <button
          className={`sm:hidden`} 
          onClick={() =>setVisible(v => v = !v)}>menu</button>
        <ul onClick={() =>setVisible(v => v = !v)} className={`${!visible ? 'hidden' : ''} sm:flex flex-col sm:flex-row absolute sm:relative w-full sm:w-auto top-auto right-0 gap-2 items-center bg-black/80 sm:bg-transparent p-2 my-2 sm:my-0 sm:p-0`}>
          <li
            onClick={() => {
              const hero = document.getElementById('hero')
              hero.scrollIntoView({behavior: "smooth"})
            }}
            className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal'><button>Home</button></li>
          {/* <li className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal'>About</li> */}
          {/* <li className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal'>Service</li> */}
          <li
            onClick={() => {
              const project = document.getElementById('project')
              project.scrollIntoView({behavior: "smooth"})
            }}
            className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal'><button>Projects</button></li>
          <li
            onClick={() => {
              const contact = document.getElementById('contact')
              contact.scrollIntoView({behavior: "smooth"})
            }}
            className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal bg-white text-black rounded'><button>Contact</button></li>
        </ul>
      </div>
      </div>
    </div>
  )
}
