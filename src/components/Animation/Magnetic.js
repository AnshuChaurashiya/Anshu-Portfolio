import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline(ScrollTrigger)


export const Magnetic = () => {
  useEffect(() => {
    const magneticElements = document.querySelectorAll('.Magnetic');

    magneticElements.forEach((item) => {
      const hoverEffect = (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(item, {
          x: x * 0.3, // Adjust sensitivity
          y: y * 0.3,
          duration: 0.3,
        });
      };

      const resetEffect = () => {
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.3,
        });
      };

      item.addEventListener('mousemove', hoverEffect);
      item.addEventListener('mouseleave', resetEffect);

      // Cleanup event listeners
      return () => {
        item.removeEventListener('mousemove', hoverEffect);
        item.removeEventListener('mouseleave', resetEffect);
      };
    });
  }, []);

  return null;
};



export const showMenuBtn = () => {
 useEffect(() => {
    // const tl = gsap.timeline();
    gsap.to(".ButtonContainer", {
      scrollTrigger: {
        trigger: ".ButtonContainer",
        scroller: "body",
        start: "100% 1%",
        end: "bottom 15%",
        scrub: 1,
        // markers: true,
      },
      scale: 1,
      opacity:1,
      duration:0.7,
    });
    
  }, [])

}


export const SliderMenu = () => {
  useEffect(() => {
    const open = document.querySelector(".menuBtn")
    const Close = document.querySelector(".ClosemenuBtn")
    
    // const menu = document.querySelector(".menu")
      tl.to(".menu", { right: 0, duration:0.4,stagger:2, ease:"cubic-bezier(0.76, 0, 0.24, 1)",},"<")
        .to(".line", { width:"100%" },"<")
        .to(".ClosemenuBtn", { scale:1,delay:1,},"<")
        .to(".title", { x:10, stagger:0.2, opacity:1 },"<")
        tl.pause()

  open.addEventListener("click", function(){
    tl.play()
  })

  Close.addEventListener("click", function(){
    tl.reverse()
  })
    
    
  }, [])
}

export const SliderMenu1 = () => {
  useEffect(() => {
    const open = document.querySelector(".menuBtn1")
    const Close = document.querySelector(".ClosemenuBtn")
    
    // const menu = document.querySelector(".menu")
      tl.to(".menu", { right: 0, duration:0.5, stagger:2, ease: "cubic-bezier(0.76, 0, 0.24, 1)",},"<")
        .to(".line",{ width: "100%" },"<")
        .to(".ClosemenuBtn", { scale:1,delay:1,},"<")
        .to(".title", { x:10,  stagger:0.2, opacity:1 },"<")
        tl.pause()

  open.addEventListener("click", function(){
    tl.play()
  })

  Close.addEventListener("click", function(){
    tl.reverse()
  })
    
    
  }, [])
}



export const LandingPage = () => {
   useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const t2 = gsap.timeline()
      
      
      gsap.to(".anim",{
          x:" -100%",
          repeat: -1,
          duration:60,
      }),
  
      t2.to(".loder", {
          top: "-120%", 
          ease:"cubic-bezier(0.76, 0, 0.24, 1)",
          delay:3,
        },
     
  
  );
    }, []); 
  
}