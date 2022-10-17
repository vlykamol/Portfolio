import React from 'react'
import sig from '../assets/images/sig.png'

export default function Footer() {
  return (
    <div className='bg-black p-2 flex flex-col justify-center items-center'>
        <img src={sig} alt="" className='w-32 h-auto' />
      	<div className='flex justify-center'>2022 | valay kamol</div>
    </div>
  )
}
