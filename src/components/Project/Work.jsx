import React, { useState } from 'react'
import { ProjectBox } from '../../pages/Project/ProjectBox'
// import {UseTable} from 'react-'
import { HorkAnimation } from '../Animation/WorkAnim.js'
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from 'react-router';
import projects from '../../assets/data.js';



const Work = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    HorkAnimation()

  
    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeCategory)
    
    return (
        <>
            <div className="lg:px-32 Aheading relative top-10  font-[main] py-3 px-2 mb-10">
                {/* heading */} 
                <div className=" leading-10 workHeading opacity-0 py-20">
                    <h1 className=' lg:text-7xl text-4xl capitalize text-start '>Creating next level</h1>
                    <h1 className=' lg:text-7xl text-4xl  capitalize text-start '>digital products</h1>
                </div>

                {/* button */}
                <div className="work-btn w-0 opacity-0 mb-32 h-[1px] bg-slate-400 relative flex justify-end  items-center">
                    <button className=' w-32 h-32 mr-11  rounded-full '>
                        <svg width="150px" height="150px">
                            <path id='curve' fill='white' d='M 16 80 A 55 55 0 1 1 19 90'></path>
                            <text className='text '>
                                <textPath href='#curve' className='text uppercase w-full text-center'> - Download Resume - Download Resume </textPath>
                            </text>
                        </svg>
                        <a target='_blank' className=' absolute top-0' href={"/"}><FaArrowDownLong /></a>
                    </button>
                </div>


                {/* ṇav */}
                <div className=" work-btns opacity-0 flex lg:gap-5 gap-3 justify-center flex-wrap mt-10 ">
                    <button 
                        onClick={() => setActiveCategory('all')}
                        className={`w-full lg:w-fit px-10 py-5 transition-all duration-300 text-white rounded-full ${
                            activeCategory === 'all' 
                            ? 'bg-blue-600' 
                            : 'bg-black hover:bg-blue-800'
                        }`}
                    >
                        All
                    </button>
                    <button 
                        onClick={() => setActiveCategory('design')}
                        className={`px-10 py-5 transition-all duration-300 text-white rounded-full ${
                            activeCategory === 'design' 
                            ? 'bg-blue-600' 
                            : 'bg-black hover:bg-blue-800'
                        }`}
                    >
                        Design
                    </button>
                    <button 
                        onClick={() => setActiveCategory('development')}
                        className={`px-10 py-5 transition-all duration-300 text-white rounded-full ${
                            activeCategory === 'development' 
                            ? 'bg-blue-600' 
                            : 'bg-black hover:bg-blue-800'
                        }`}
                    >
                        Development
                    </button>
                </div>


                {/* work box */}
                <div className=" mt-20">
                   <div className=" w-full lg:grid grid-cols-2 gap-5 px-3">
                        {filteredProjects.map((project) => (
                            <ProjectBox 
                                key={project.id}
                                src={project.image} 
                                text={project.description} 
                                link={project.link} 
                                title={project.title} 
                                tools={project.tools} 
                            />
                        ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default Work