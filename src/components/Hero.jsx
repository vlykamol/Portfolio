import React from 'react'
import swe from '../assets/svgs/swe.svg'
import github from '../assets/svgs/github.svg'
import linkedin from '../assets/svgs/linkedin.svg'
import instagram from '../assets/svgs/instagram.svg'

export default function Hero() {
  return (
    <div id='hero' className='w-full h-screen flex flex-col sm:flex-row -z-20'>
      <div className='w-full h-1/2 sm:h-full flex sm:flex-col flex-row relative'>
        <img src={swe} alt="" className='p-4 sm:p-14 w-full h-full grow'/>
        <div className='p-4 absolute bottom-0 sm:bottom-10 sm:left-10'>
          <ul className='flex gap-2 justify-end h-full items-end'>
            <li><a href="https://github.com/vlykamol"><img className='w-8 sm:w-10' src={github} alt="github" /></a></li>
            <li><a href="https://www.linkedin.com/in/valaykamol/"><img className='w-8 sm:w-10' src={linkedin} alt="linkedin" /></a></li>
            <li><a href="https://www.instagram.com/valay_kamol/"><img className='w-8 sm:w-10' src={instagram} alt="instagram" /></a></li>
          </ul>
        </div>
      </div>
      <div className='w-full h-1/2 sm:h-full p-4 flex flex-col justify-center items-center'>
        <div className='flex flex-col'>
        <h3 className='text-xl sm:text-3xl px-2 font-medium text-white/80'>Hello, I'm</h3>
        <h1 className='text-6xl sm:text-6xl px-2 font-playfair font-bold'>VALAY KAMOL</h1>
        <p className='text-left w-4/5 px-2 text-white/60'>Software Engineer with good understanding in Front-End web Devlopment, passionate to make procees simple and fun</p>
        </div>
      </div>
    </div>
  )
}
