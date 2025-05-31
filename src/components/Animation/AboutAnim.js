import { useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
export const AboutAnimation = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); 
        const tl4 = gsap.timeline(ScrollTrigger)
        tl4.to(".Aheading",{
          scrollTrigger:{
            trigger:".Aheading",
            // markers:true,
            start:"top 15%",
            end:"top 0%",
            scrub:1
          },
          top:0,
          duration: 1,
          delay:0.7
        })
        tl4.to(".About-ball",{
          scrollTrigger:{
            trigger:".Aheading",
            // markers:true,
            start:"top 15%",
            end:"top 0%",
            scrub:true
          },
          top:0,
          duration: 1,
          delay:0.7
        })
        tl4.to(".about-text",{
          scrollTrigger:{
            trigger:".about-text",
            // markers:true,
            start:"top 80%",
            end:"top 0%",
            scrub:true
          },
          top:0,
          duration: 1,
          delay:0.7
        })
        
        
        tl4.to(".about-box",{
          scrollTrigger:{
            trigger:".about-box",
            // markers:true,
            start:"top 80%",
            end:"top 0%",
            scrub:true
          },
         opacity:1,
         scale:1,
         stagger:1,
          duration: 1,
          delay:0.7
        })
        
        tl4.to(".abs",{
          scrollTrigger:{
            trigger:".abs",
            //  markers:true,
            start:"top 30%",
            end:"top 0%",
            scrub:true
          },
         opacity:1,
         scale:1,
         stagger:1,
          duration: 1,
          delay:0.7
        })
        
        tl4.to(".TC-box",{
          scrollTrigger:{
            trigger:".TC-box",
            // markers:true,
            start: 'top 70%',
            end: 'top 50%',
            scrub:true
          },
         opacity:1,
        //  scale:1,
        //  stagger:1,
          duration: 1,
          delay:0.7
        })
        
        
    }, [])
    
}