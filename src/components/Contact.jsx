import React from 'react'
import mail from '../assets/svgs/mail.svg'
import phone from '../assets/svgs/phone.svg'
import location from '../assets/svgs/location.svg'

export default function Contact() {
  const handelsubmit = (e) => {
    e.preventDefault()
    console.log('form submited');
  }
  return (
    <div id='contact' className='w-full h-full flex flex-col sm:flex-row p-4'>
      <div className='w-full sm:w-1/2 flex flex-col p-2'>
        <h1 className='text-2xl underline p-2'>Contact Me</h1>
        <p className='p-2'>Let's connect and make something new and meaningfull</p>
        <ul className='flex flex-col gap-2 h-full p-2'>
            <li className='flex text-lg items-center p-2'><img className='w-8 sm:w-10' src={mail} alt="email" /><p>&nbsp; : kamolvalay@gmail.com</p></li>
            <li className='flex text-lg items-center p-2'><img className='w-8 sm:w-10' src={phone} alt="github" /><p>&nbsp; : 6351773590</p></li>
            <li className='flex text-lg items-center p-2'><img className='w-8 sm:w-10' src={location} alt="linkedin" /><p>&nbsp; : sanjeli, Gujarat</p></li>
          </ul>
      </div>
      <form className='flex flex-col gap-2 p-4 sm:w-1/2'>
        <label htmlFor="Name">Name : </label>
        <input className='bg-transparent border-2 border-white/50 rounded-lg p-2' type="text" name="Name" id="Name" />
        <label htmlFor="Email">Email :  </label>
        <input className='bg-transparent border-2 border-white/50 rounded-lg p-2' type="text" name="Email" id="Email" />
        <label htmlFor="Message">Message : </label>
        <textarea className='bg-transparent border-2 border-white/50 rounded-lg p-2' name="Message" id="Message" cols="10" rows="6"></textarea>
        <button onClick={(e) => handelsubmit(e)} className='bg-white/60 text-black rounded-lg p-2 text-lg w-fit'>Submit</button>
      </form>
    </div>
  )
}
