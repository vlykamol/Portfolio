import React, { useState } from 'react'

export default function Navbar() {

  const [visible, setVisible] = useState(false)
  return (
    <div className='w-full p-2 flex justify-between items-center bg-gradient-to-t from-black/25 to-black/0 sticky top-0'>
      <div>
        valay kamol
      </div>
      <div>
        <button
          className={`sm:hidden`} 
          onClick={() => setVisible(v => v = !v)}>menu</button>
        <ul className={`${!visible ? 'hidden' : ''} sm:flex flex-col sm:flex-row absolute sm:relative w-full sm:w-auto  left-0 h-full gap-2 items-center`}>
          <li className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal '>Home</li>
          <li className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal '>About</li>
          <li className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal '>Service</li>
          <li className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal '>Projects</li>
          <li className='w-full text-center p-2 text-lg sm:text-base font-extrabold sm:font-normal '>Contact</li>
        </ul>
      </div>
    </div>
  )
}
