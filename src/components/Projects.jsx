import React, { useState } from 'react'
import { images } from '../assets/images/images'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const {...img} = images
  const [projects, setProjects] = useState(() => {
    return [
      {
        name: 'eCommerce',
        des: 'full stack ecommerce website',
        tech: ['React', 'Tailwind', 'Node', 'MongoDB', 'Express'],
        img: [img.ec1, img.ec2, img.ec3],
        href: `https://ecommerce-vlykamol.vercel.app/`
      },
      {
        name: 'chatApp',
        img: [img.ca1, img.ca2, img.ca3, img.ca4],
        des: 'full stack chat app',
        tech: ['React', 'Tailwind', 'Node', 'MongoDB', 'Express', 'socket.io'],
        href: `https://github.com/vlykamol/chatApp2`
      },
      // {
      //   img: [ss],
      //   des: 'full stack ecommerce website',
      //   tech: ['React', 'Tailwind', 'Node', 'MongoDB', 'Express'],
      //   name: 'project 3',
      //   href: `https://ecommerce-vlykamol.vercel.app/`
      // },
      // {
      //   img: [ss],
      //   des: 'full stack ecommerce website',
      //   tech: ['React', 'Tailwind', 'Node', 'MongoDB', 'Express'],
      //   name: 'project 4',
      //   href: `https://ecommerce-vlykamol.vercel.app/`
      // },
      // {
      //   img: [ss],
      //   des: 'full stack ecommerce website',
      //   tech: ['React', 'Tailwind', 'Node', 'MongoDB', 'Express'],
      //   name: 'project 4',
      //   href: `https://ecommerce-vlykamol.vercel.app/`
      // }
    ]
  })

  return (
    <div id='project' className='w-full h-auto bg-white/5'>
      <div className='flex flex-col justify-center items-center px-4 py-8'>
        <h1 className='text-3xl font-semibold underline w-full sm:w-3/4 p-4 font-worksans'>Projects</h1>
        <div id='carousel' className='w-full sm:w-2/3 h-4/5 relative rounded overflow-auto bg-white/10'>
          <ul id='innerCarousel' className='relative w-full h-full flex gap-4 snap-x snap-proximity overflow-x-auto'>
              <li id='carouselItem' className="w-4 shrink-0">
                <div> </div>
              </li>
            {projects.map((p, key) => {
              return <li id='carouselItem' key={key} className="snap-center w-full h-full shrink-0">
                <ProjectCard {...p} />
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
