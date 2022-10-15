import React from 'react'
import swe from '../assets/swe.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import email from '../assets/email.svg'

export default function Hero() {
  return (
    <div className='w-full h-screen flex flex-col sm:flex-row'>
      <div className='w-full h-1/2 sm:h-full flex sm:flex-col flex-row'>
        <img src={swe} alt="" className='sm:p-14 w-5/6 sm:w-full max-h-full grow'/>
        <div className='w-1/6 sm:w-full sm:p-2'>
          <ul className='flex flex-col sm:flex-row gap-2 justify-end h-full sm:justify-start items-center'>
            <li><a href="https://github.com/vlykamol"><img className='w-6' src={github} alt="github" /></a></li>
            <li><a href="https://www.linkedin.com/in/valaykamol/"><img className='w-6' src={linkedin} alt="linkedin" /></a></li>
            <li><a href="https://www.instagram.com/valay_kamol/"><img className='w-6' src={instagram} alt="instagram" /></a></li>
            <li><a href="#contact"><img className='w-6' src={email} alt="email" /></a></li>
          </ul>
        </div>
      </div>
      <div className='w-full h-1/2 sm:h-full p-4 flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-2'>
        <h3 className='text-xl sm:text-3xl px-2'>Hello, I'm</h3>
        <h1 className='text-6xl sm:text-6xl px-2'>VALAY KAMOL</h1>
        <p className='text-left w-4/5 px-2'>Software Engineer intersted in Front-End Devlopment, always dedicated to make users lives as easy as possible</p>
        </div>
      </div>
    </div>
  )
}
