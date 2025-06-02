import { useState, useEffect, useRef } from 'react'
import { ProjectBox } from '../../Project/ProjectBox.jsx'
import { useWorkAnimation } from '../Animation/WorkAnim.js'
import projects from '../../assets/data.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const headingRef = useRef(null)
    const buttonsRef = useRef(null)
    const projectsRef = useRef(null)

    // Use the work animation hook
    useWorkAnimation()

    useEffect(() => {
        // Heading animation
        gsap.fromTo(headingRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Buttons animation
        gsap.fromTo(buttonsRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: buttonsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Projects grid animation
        gsap.fromTo(projectsRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        )
    }, [])

    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeCategory)
    
    return (
        <div className="Aheading relative font-[main] px-10">
            {/* heading */}
            <div ref={headingRef} className="leading-10 py-20 text-center items-center">
                <h1 className='lg:text-8xl text-4xl capitalize text-center'>Creating next level</h1>
                <h1 className='lg:text-8xl text-4xl capitalize text-center'>digital products</h1>
            </div>

            {/* nav */}
            <div 
                ref={buttonsRef}
                className="work-btns flex lg:gap-5 gap-3 justify-center flex-wrap"
            >
                <button 
                    onClick={() => setActiveCategory('all')}
                    className={`h-20 w-20 rounded-full text-white transition-all duration-300 transform hover:scale-105 ${
                        activeCategory === 'all' 
                        ? 'bg-blue-600 shadow-lg shadow-blue-500/50' 
                        : 'bg-black hover:bg-blue-800'
                    }`}
                >
                    All
                </button>
                <button 
                    onClick={() => setActiveCategory('design')}
                    className={`px-10 py-5 transition-all duration-300 text-white rounded-full transform hover:scale-105 ${
                        activeCategory === 'design' 
                        ? 'bg-blue-600 shadow-lg shadow-blue-500/50' 
                        : 'bg-black hover:bg-blue-800'
                    }`}
                >
                    Design
                </button>
                <button 
                    onClick={() => setActiveCategory('development')}
                    className={`px-10 py-5 transition-all duration-300 text-white rounded-full transform hover:scale-105 ${
                        activeCategory === 'development' 
                        ? 'bg-blue-600 shadow-lg shadow-blue-500/50' 
                        : 'bg-black hover:bg-blue-800'
                    }`}
                >
                    Development
                </button>
            </div>

            {/* work box */}
            <div className="mt-20">
                <div 
                    ref={projectsRef}
                    className="w-full lg:grid grid-cols-2  "
                >
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
    )
}

export default Work