import React, { useRef, useState } from 'react'

let timeOut;

export default function ProjectCard(props) {
  const { img, name, des, tech, href } = props
  const [id, setId] = useState(0)
   
  const changeImg = () => {
    timeOut = setInterval(() => {
      setId(i =>i = (i + 1) % img.length)
    },2000)
  }
  const resumeImg = () => {
    clearInterval(timeOut)
  }
  return (
      <div onClick={() => window.location.href = href} onMouseOver={changeImg} onMouseOut={resumeImg} className='relative overflow-hidden'>
        <img src={img[id]} alt={name} className='w-full h-full object-cover' />
        <div className='absolute w-full h-full bg-gradient-to-t from-black to-black/0 -bottom-1/2 hover:bottom-0  left-0 ease-in-out duration-300'>
          <div className='w-full h-full flex flex-col justify-end p-4'>
            <h1 className='text-2xl'>{name}</h1>
            <p>{des}</p>
            <div className='flex gap-1'>{tech.map((t,key) => (<p key={key}>{t}</p>))}</div>
          </div>
        </div>
      </div>
  )
}
