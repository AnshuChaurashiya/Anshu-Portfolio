import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ProjectBox = ({ src, link, title, text, tools }) => {
  const boxRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const box = boxRef.current
    const content = contentRef.current
    const image = imageRef.current

    gsap.set(content, { y: 50, opacity: 0 })
    gsap.set(image, { scale: 1.1 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    })

    tl.to(box, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(image, {
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    // .to(content, {
    //   y: 0,
    //   opacity: 1,
    //   duration: 0.6,
    //   ease: "power2.out"
    // }, "-=0.4")

    const handleMouseEnter = () => {
      gsap.to(content, {
        y: -5,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(image, {
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(content, {
        y: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      })
    }

    box.addEventListener('mouseenter', handleMouseEnter)
    box.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      box.removeEventListener('mouseenter', handleMouseEnter)
      box.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="w-full  " ref={boxRef}>
      <div className="pbox mb-4 w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-[20px] bg-white">
        <div className="relative w-full overflow-hidden rounded-[20px]  group">
          <img 
            ref={imageRef}
            className='w-full md:h-[350px] object-cover transform transition-all duration-500 group-hover:scale-105' 
            src={src} 
            alt={title} 
          />
          
          <div 
            ref={contentRef}
            className="absolute w-full h-full top-0 inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col-reverse p-2"
          >
            <p className="text-gray-200 mb-4 line-clamp-3">{text}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tools.split(',').map((tool, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full"
                >
                  {tool.trim()}
                </span>
              ))}
            </div>
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className=" bg-blue-600 text-white rounded-full  w-fit m-auto p-5"
            >
             Live
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectBox.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired
}
