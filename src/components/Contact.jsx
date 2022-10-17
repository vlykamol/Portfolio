import React, { useRef, useState } from 'react'
import mail from '../assets/svgs/mail.svg'
import phone from '../assets/svgs/phone.svg'
import location from '../assets/svgs/location.svg'

export default function Contact() {

  const nameRef = useRef()
  const emailRef = useRef()
  const msgRef = useRef()

  const [message, setMessage] = useState('');

  const handelsubmit = (e) => {
    e.preventDefault()
    fetch('/api/contact', {
      method : 'POST',
      credentials: 'same-origin',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name : nameRef.current.value,
        email : emailRef.current.value,
        msg : msgRef.current.value
      })
    }).then(res => res.json()).then(res => {
      nameRef.current.value = '',
      emailRef.current.value = '',
      msgRef.current.value = '',
      setMessage(`I will contact you as soon as possible`)
    }).catch(err => console.log(err))
  }
  return (
    <div id='contact' className='w-full h-full flex flex-col sm:flex-row p-4'>
      <div className='w-full sm:w-1/2 flex flex-col p-2'>
        <h1 className='text-4xl underline p-2 font-worksans'>Contact Me</h1>
        <p className='p-2'>Let's connect and make something new and meaningfull</p>
        <ul className='flex flex-col gap-2 h-full p-2'>
            <li className='flex text-lg items-center p-2'><img className='w-8 sm:w-10' src={mail} alt="email" /><p>&nbsp; : kamolvalay@gmail.com</p></li>
            <li className='flex text-lg items-center p-2'><img className='w-8 sm:w-10' src={phone} alt="github" /><p>&nbsp; : 6351773590</p></li>
            <li className='flex text-lg items-center p-2'><img className='w-8 sm:w-10' src={location} alt="linkedin" /><p>&nbsp; : sanjeli, Gujarat</p></li>
          </ul>
      </div>
      <form onSubmit={(e) => handelsubmit(e)} className='flex flex-col gap-2 p-4 sm:w-1/2'>
        <label htmlFor="Name">Name : </label>
        <input ref={nameRef} className='bg-transparent border-2 border-white/50 rounded-lg p-2' type="text" name="Name"  id="Name" required />
        <label htmlFor="Email">Email :  </label>
        <input ref={emailRef} className='bg-transparent border-2 border-white/50 rounded-lg p-2' type="email" pattern='[a-zA-Z0-9._%+-]+@[a-z0-9]+\.[a-zA-Z]{2,4}' name="Email" id="Email" required/>
        <label htmlFor="Message">Message : </label>
        <textarea ref={msgRef} className='bg-transparent border-2 border-white/50 rounded-lg p-2' name="Message" id="Message" cols="10" rows="6" required></textarea>
        {message && <h1 className='text-center bg-white/90 text-black p-2'>{message}</h1> }
        <button type='submit' className='bg-white text-black rounded-lg p-2 text-lg w-fit'>Submit</button>
      </form>
    </div>
  )
}
