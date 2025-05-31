import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    const social = [
        { title: "Instagram", path: "/" },
        { title: "Twitter", path: "/" },
        { title: "LinkedIn", path: "https://www.linkedin.com/in/anshu-chaurashiya-074664287" },
        { title: "Github ", path: "https://github.com/AnshuChaurashiya" },
    ];
    return (
        <>
            <div className="w-full   bg-black h-screen lg:h-auto text-white font-[main] flex flex-col   overflow-hidden ">
                {/* top */}
                <div className=" w-[80%] m-auto">

                    <div className="f-top py-20 overflow-hidden relative top-10   ">
                        <span className=' flex items-center '>
                            <img className='w-16 lg:w-20' src="https://raw.githubusercontent.com/Ade-mir/harris-johnsen-2/refs/heads/main/src/assets/Design%20uten%20navn.png" alt="" />
                            <h1 className=' md:text-6xl text-[10vw]  lg:text-8xl'> Let’s work</h1>
                        </span>
                        <h1 className='  text-[10vw] md:text-6xl lg:text-8xl'>together</h1>
                    </div>

                        {/* FOOTRE ball */}
                    <div className="w-full f-top h-[1px] bg-slate-400 flex justify-end relative top-14   items-center">
                        <button className='Magnetic f-ball scale-0 w-32 h-32 mr-11 bg-blue-800 rounded-full text-white'>
                            <a target='_blank' href={"/about"}>Get to touch</a></button>
                    </div>


                    <div className=" f-top relative top-20  flex gap-1 lg:gap-10 py-10 justify-center mt-10 flex-wrap">
                        <button className=' md:px-28 px-[25vw]  text-[5vw] md:text-base  py-5 hover:bg-blue-800 border border-slate-400 hover:border-black transition-all duration-200 rounded-full ' onClick={() => window.location.href = 'mailto:n64561740@gmail.com'}> Get the mail </button>
                        <button className=' md:px-28 px-[25vw]  text-[5vw] md:text-base py-5 hover:bg-blue-800 border border-slate-400 hover:border-black transition-all duration-200 rounded-full ' > 0987654321 </button>
                    </div>
                </div>

                {/* bottom */}
                <div className=" p-10   lg:flex justify-between gap-6 w-full">
                    <div className=" flex flex-col">
                        <label className='text-gray-500 uppercase'>Socials</label>
                        <div className=" flex gap-2 justify-evenly ">
                            {social.map((item, index) => (
                                <a className='text-[4vw] lg:text-base' target='_blank' href={item.path} key={index}>{item.title}</a>
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