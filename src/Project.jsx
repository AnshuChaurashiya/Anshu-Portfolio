import React from 'react'
import { ProjectBox } from './components/about/Project/ProjectBox.jsx'
import { Scroll } from './components/Animation/ScrollAnim.js'
// import import projects from '../../assets/data.js';
import projects from './assets/data.js';

const Project = () => {
  // Corrected and complete projects array with all data objects
 

  Scroll()

  return (
    <div className="relative w-full lg:px-10 font-[main]">
      <h1 className='projextText opacity-0 text-center border mt-10 cursor-pointer capitalize bg-black text-white w-fit m-auto px-5 py-5 rounded-full'>
        recent work
      </h1>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-1 lg:grid-cols-2 gap-5">
        {projects.map(({ image, description, link, title, tools }, index) => (
          <div key={index} className="ProjectBoxs opacity-0 scale-0 w-full px-3">
            <ProjectBox 
              src={image} 
              text={description} 
              link={link} 
              title={title} 
              tools={tools}
            />
          </div>
        ))}
      </div>

      <h1 className='flex justify-center relative items-center py-10 overflow-hidden'>
        <a  
          className='Magnetic z-10 hover:bg-blue-800 hover:text-white transition-all duration-200 px-5 overflow-hidden py-5 border rounded-full' 
          target='_blank' 
          rel="noopener noreferrer"
          href={"/work"}
        >
          See All Work
        </a>
      </h1>
    </div>
  )
}

export default Project
