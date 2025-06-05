import React, { useEffect } from 'react';
import { Magnetic } from '../Animation/Magnetic';


const MiniAbout = () => {
  Magnetic();

  const abouttext = "Hi, I'm Anshu Chaurasiya, a passionate and creative Frontend Developer specializing in crafting modern, responsive, and interactive web interfaces using HTML, CSS, JavaScript, and React.";
  const abouttext2 = "With a strong eye for design and a love for clean code, I bridge the gap between UI/UX and functionality—bringing ideas to life through engaging and accessible web experiences.";
  
  return (
    <>
      <div className="relative px-5 flex-col md:flex-row flex justify-center py-10 gap-10">
        <div className="md:w-[40%]">
          <p className="aText opacity-0 font-[main] text-2xl md:text-2xl w-full">
            {abouttext}
          </p>
        </div>
        <div className="md:w-[20%] flex flex-col md:items-center items-end gap-11">
          <p className="aText opacity-0">{abouttext2}</p>
          <button className="ball Magnetic scale-0 w-32 h-32 bg-blue-500 rounded-full text-white">
            <a target='_blank' href={'/about'}>About</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default MiniAbout;
