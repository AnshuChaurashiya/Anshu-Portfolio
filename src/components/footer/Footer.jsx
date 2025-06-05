import React from 'react'
import { Link } from 'react-router'
import { Magnetic } from '../Animation/Magnetic';


const Footer = () => {
    Magnetic()
    const social = [
         { title: "LinkedIn", path: "https://www.linkedin.com/in/anshu-chaurashiya-074664287" },
        { title: "Github ", path: "https://github.com/AnshuChaurashiya" },
    ];
    return (
        <>
            <div className="w-full f-top    bg-black lg:h-auto text-white font-[main] flex flex-col rounded-tl-[50px] rounded-tr-[50px]    overflow-hidden ">
                {/* top */}
                <div className=" md:w-[80%] m-auto">

                    <div className="f-top md:py-20 overflow-hidden flex items-center justify-between relative top-10   ">
                        <div className="">

                        <span className=' flex items-center '>
                            <img className='w-16 lg:w-20' src="https://raw.githubusercontent.com/Ade-mir/harris-johnsen-2/refs/heads/main/src/assets/Design%20uten%20navn.png" alt="" />
                            <h1 className=' md:text-6xl text-[10vw]  lg:text-8xl'> Let’s work</h1>
                            <br />
                        </span>
                        <h1 className='  text-[10vw] md:text-6xl lg:text-8xl'>together</h1>
                        </div>

                        <div className=" f-top relative top-20 Magnetic flex gap-1 lg:gap-10 py-10 justify-center mt-10 flex-wrap">
                        <button className='  h-32 w-32 rounded-full bg-blue-800 ' onClick={() => window.location.href = 'mailto:n64561740@gmail.com'}> Get the mail </button>
                     </div>

                    </div>

                 

                   
                </div>

                {/* bottom */}
                <div className=" p-10   lg:flex justify-between gap-6 w-full">
                    <div className=" ">
                        <label className='text-gray-500 uppercase'>Socials :</label>
                        <div className=" flex gap-2 justify-evenly ">
                            {social.map((item, index) => (
                                <a className='text-[4vw] uppercase lg:text-base rounded-full bg-blue-800 p-4 px-5' target='_blank' href={item.path} key={index}>{item.title}</a>
                            ))}

                        </div>
                    </div>


                    <div className=" mt-10 lg:mt-0 flex lg:justify-normal gap-6  justify-between px-3">
                        <div className="">
                            <label className='text-gray-500 uppercase' htmlFor="">Location</label>
                            <h1 className=' text-white text-[4vw] lg:text-base'>India</h1>
                        </div>
                        <div className="">
                            <label className='text-gray-500 uppercase' htmlFor="">Version</label>
                            <h1 className=' text-white text-[4vw] lg:text-base'>2024 © Edition</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer