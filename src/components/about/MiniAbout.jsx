import React, { useEffect } from 'react';
import { Magnetic } from '../Animation/Magnetic';


const MiniAbout = () => {
  Magnetic();

  const abouttext = "Hi, I'm Anshu Chaurasiya, a passionate and dedicated MERN Stack Web Developer. I have experience in building dynamic, responsive, and user-friendly web applications.";
  const abouttext2 =
    'The combination of my passion for design, code & interaction positions me in a unique place in the web design world.';
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
