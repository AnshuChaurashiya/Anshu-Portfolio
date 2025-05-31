import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Scroll = () => {
  useEffect(() => {
    const animations = [];

    // Text Animation
    animations.push(
      gsap.fromTo('.aText',
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '.aText',
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            // markers:true
          },
        }
      )
    );

    // Ball Animation
    animations.push(
      gsap.fromTo('.ball',
        { scale: 0.5 },
        {
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ball',
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            // markers:true 
          },
        }
      )
    );

    // About Animation
    animations.push(
      gsap.fromTo('.aboutAnim',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.aboutAnim',
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      )
    );

    // Box1 Animation
    animations.push(
      gsap.fromTo('.box1',
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '.box1',
            start: 'top 70%',
            end: 'top 50%',
            scrub: true,
          },
        }
      )
    );

    // Project Section Text
    animations.push(
      gsap.fromTo('.projextText',
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '.projextText',
            start: 'top 60%',
            end: 'top 20%',
            scrub: true,
          },
        }
      )
    );

    // Project Boxes
    animations.push(
      gsap.fromTo('.ProjectBoxs',
        { opacity: 0, scale: 0.8, z: 0 },
        {
          opacity: 1,
          scale: 1,
          z: -10,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.ProjectBoxs',
            start: 'top 60%',
            end: '50% 30%',
            scrub: true,
          },
        }
      )
    );

    // Final Ball Animation
    animations.push(
      gsap.fromTo('.f-ball',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1.2,
          scrollTrigger: {
            trigger: '.f-ball',
            start: 'top 90%',
            end: 'top 20%',
            scrub: true,
          },
        }
      )
    );

    // Final Top Animation
    animations.push(
      gsap.fromTo('.f-top',
        { opacity: 0, top: '100px' },
        {
          opacity: 1,
          top: 0,
          scrollTrigger: {
            trigger: '.f-top',
            start: 'top 90%',
            end: 'top 20%',
            scrub: true,
            delay: 1,
          },
        }
      )
    );

    return () => {
      // Cleanup
      animations.forEach(anim => anim.scrollTrigger?.kill());
    };
  }, []);

  return null;
};
