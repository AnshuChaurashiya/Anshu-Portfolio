import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { Scroll } from '../components/Animation/ScrollAnim'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ProjectBox = ({ src, link, title, text , tools}) => {
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
    .to(content, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")

    const handleMouseEnter = () => {
      gsap.to(content, {
        y: -5,
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
    <>
      <div className="w-full px-2" ref={boxRef}>
        <div className="pbox mb-4 w-full overflow-hidden shadow-lg shadow-black/10 rounded-[20px] bg-white">
          <div className="relative w-full overflow-hidden rounded-[20px] group">
            <img 
              ref={imageRef}
              className='w-full h-[300px] object-cover transform transition-transform duration-500' 
              src={src} 
              alt={title} 
            />
            <div 
              ref={contentRef}
              className="absolute inset-0 bg-gradient-to-t from-purple-500/90 via-[#1a1a1a]/50 to-transparent p-6 flex flex-col justify-end transform transition-all duration-300"
            >
              <div className="transform translate-y-4 group-hover:translate-y-0  transition-transform duration-300">
                <h2 className="text-2xl font-semibold mb-2  text-white">
                  {title}
                </h2>
                <p className="text-sm text-black mb-4 line-clamp-2 ">
                  {text}
                </p>
                <div className=" flex gap-4  items-center">
                <a 
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:gap-3" 
                  href={link} target='_blank'
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <div className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:gap-3">
                  {tools}
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
