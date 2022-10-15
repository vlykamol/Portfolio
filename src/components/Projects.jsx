import React, { useState } from 'react'
import ss from '../assets/images/ss.png'

export default function Projects() {

  const [projects, setProjects] = useState(() => {
    return [
      {
        img: ss,
        name: 'project 1'
      },
      {
        img: ss,
        name: 'project 2'
      },
      {
        img: ss,
        name: 'project 3'
      },
      {
        img: ss,
        name: 'project 4'
      },
      {
        img: ss,
        name: 'project 4'
      }
    ]
  })

  return (
    <div id='project' className='w-full h-auto bg-white/5'>
      <div className='flex flex-col justify-center items-center px-4 py-8'>
        <h1 className='text-3xl font-semibold underline w-full sm:w-3/4 p-4'>Projects</h1>
        <div id='carousel' className='w-full sm:w-2/3 h-4/5 relative rounded overflow-auto bg-white/10'>
          <ul id='innerCarousel' className='relative w-full h-full flex gap-4 snap-x snap-proximity overflow-x-auto'>
              <li id='carouselItem' className="w-4 shrink-0">
                <div> </div>
              </li>
            {projects.map((p, key) => {
              return <li id='carouselItem' key={key} className="snap-center w-full h-full shrink-0">
                <img src={p.img} alt={p.name} className='w-full h-full object-cover' />
              </li>
            })}
            <li id='carouselItem' className="w-4 shrink-0">
                <div  className='w-full h-full object-cover' />
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
