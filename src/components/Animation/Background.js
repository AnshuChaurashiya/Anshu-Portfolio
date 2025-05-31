import { useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'

export const Background = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.bg', {
            scrollTrigger: {
                trigger: '.bg',
                start: 'top 60%',
              end: '50% 30%', 
                scrub: 1,
                // markers: true,
                
            },
            backgroundColor: '#000000',
            duration: 1,
            ease: 'none'
        });
    }, [])
}


