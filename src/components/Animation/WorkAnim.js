import { useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'

export const useWorkAnimation = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); 
        const tl5 = gsap.timeline(ScrollTrigger)

        tl5.to(".workHeading",{
            opacity: 1,
            duration: 1,
            delay: 1,
        })
        tl5.to(".work-btn",{
            width: "100%",
            opacity: 1,
            duration: 1,
        })
        tl5.to(".work-btns",{
            opacity: 1,
            duration: 1,
            stagger: 1
        })

        return () => {
            // Cleanup animations
            tl5.kill();
        }
    }, [])
}