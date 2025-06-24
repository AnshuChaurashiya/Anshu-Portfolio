import Btn from '../SkillBtn/Btn'
import { Scroll } from '../Animation/ScrollAnim'
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const profileImg = 'https://i.imgur.com/rUl57qC.jpeg'; // Replace with your image

const SkillPage1 = () => {
    Scroll();
    // Refs for cards
    const leftCard = useRef(null);
    const eduCard = useRef(null);
    const techCard = useRef(null);
    const skillSetCard = useRef(null);
    const interestCard = useRef(null);

    useEffect(() => {
        const cards = [leftCard, eduCard, techCard, skillSetCard, interestCard];
        cards.forEach((ref, i) => {
            if (ref.current) {
                gsap.fromTo(ref.current,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 0.5,
                        ease: 'power3.out',
                        
                        scrollTrigger: {
                            trigger: ref.current,
                            start:"20% 94%",
                            end:"1% 60%",
                            toggleActions: 'play none none none',
                            scrub: true,
                            // markers: true,
                        },
                    }
                );
            }
        });
    }, []);

  return (
        <div className="w-full min-h-screen flex items-center relative justify-center z-0  overflow-hidden bg-white py-10 px-7">
            {/* Animated SVG Blobs for background */}
            <svg className="absolute left-[-10%] top-[-10%] w-[400px] h-[400px] opacity-20 z-0 animate-pulse" viewBox="0 0 400 400" fill="none"><ellipse cx="200" cy="200" rx="200" ry="200" fill="url(#paint0_radial)"/><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse"><stop stopColor="#a18fff"/><stop offset="1" stopColor="#3a1c71" stopOpacity="0"/></radialGradient></defs></svg>
            <svg className="absolute right-[-10%] bottom-[-10%] w-[350px] h-[350px] opacity-10 z-0 animate-pulse" viewBox="0 0 400 400" fill="none"><ellipse cx="200" cy="200" rx="200" ry="200" fill="url(#paint1_radial)"/><defs><radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse"><stop stopColor="#ffb6b9"/><stop offset="1" stopColor="#2d2250" stopOpacity="0"/></radialGradient></defs></svg>

            <div className="relative z-10 w-full max-w-6xl  flex flex-col md:flex-row gap-8 items-stretch">
                {/* LEFT SECTION */}

                <div ref={leftCard} className="flex-1 flex flex-col justify-between bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-blue-100 min-w-[300px] max-w-full mx-auto md:mx-0 hover:scale-105 transition-all duration-300">
                    {/* Profile */}
                    <a href="/about" target='_blank'
                    className=" absolute top-2 text-base right-8 text-blue-600 hover:text-purple-500 transition-colors duration-300 ">About More</a>

                    <div className="flex flex-col items-center gap-4">

                        <div className="relative w-60 h-60 rounded-full transition-all duration-500">
                            <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full border-4 border-white/60" />
                            <span className="absolute -inset-1 rounded-full border-2 border-blue-300 animate-pulse"></span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Anshu Chaurasiya</h2>
                        <span className="text-blue-700 text-sm font-semibold bg-blue-100/60 px-4 py-1.5 rounded-full hover:bg-blue-200/80 transition-colors duration-300">Full Stack Developer</span>
                    </div>
                    {/* About */}
                    <div className=" text-center">
                        <p className="text-gray-700 mt-2 text-sm leading-relaxed">Passionate about building beautiful, functional products and learning new things every day. I love UI/UX and modern web tech.</p>
                    </div>
                    {/* Social Links */}
                    <div className=" flex justify-center gap-6">
                        <a href="https://www.linkedin.com/in/anshu-chaurasiya-074664287" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-purple-500 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/AnshuChaurashiya" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-purple-500 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                    </div>

                {/* RIGHT SECTION */}
                <div className="flex-[2] flex flex-col gap-6 justify-between">
                    {/* Top Row: Education & Skills */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Education */}
                        <div ref={eduCard} className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-200 shadow-lg min-w-[180px]">
                            <div className="text-sm uppercase text-blue-600 font-semibold ">Education</div>
                            <div className="flex  items-center gap-2 justify-between w-full">
                                <div className="text-sm text-gray-800 font-bold"> SSC</div>
                                <div className="text-xs text-blue-400">2019</div>
                            </div>
                            <br />
                            <div className="flex  items-center gap-2 justify-between w-full">
                                <div className="text-sm text-gray-800 font-bold">HSC</div>
                                <div className="text-xs text-blue-400">2021</div>
                            </div>
                            <br />
                            <div className="flex  items-center gap-2 justify-between w-full">
                                <div className="text-sm text-gray-800 font-bold">B.Sc - Computer Science</div>
                                <div className="text-xs text-blue-400">2025</div>
                            </div>
                            <br />
                            <div className="">
                                <hr />
                                <h1 className='  text-blue-600 font-semibold mt-3 text-sm uppercase '>Soft Skills </h1>
                                <div className="flex flex-wrap gap-2 mt-2 text-base sm:text-sm text-gray-700">
                                    <span className="bg-blue-100/60 px-2 py-1 rounded-full">Teamwork</span>
                                    <span className="bg-blue-100/60 px-2 py-1 rounded-full">Communication</span>
                                    <span className="bg-blue-100/60 px-2 py-1 rounded-full">Critical Thinking</span>
                                    <span className="bg-blue-100/60 px-2 py-1 rounded-full">Time Management</span>
                                </div>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div ref={techCard} className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-200 shadow-lg min-w-[180px]">
                            <div className="  text-purple-600 font-semibold mb-1 text-sm uppercase">Technical Skills</div>
                            {/* Frontend Section */}
                            <div className="mt-2">
                                <div className="text-sm text-blue-500  mb-1">Frontend</div>
                                <div className="flex flex-wrap m-auto gap-2">
                                    <Btn src="https://cdn-icons-png.flaticon.com/512/174/174854.png" name="HTML" />
                                    <Btn src="https://cdn-icons-png.flaticon.com/512/732/732190.png" name="CSS" />
                                    <Btn src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" name="JavaScript" />
                                    <Btn src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" name="React.js" />
                                </div>
                            </div>
                            {/* Backend Section */}
                            <div className="mt-4">
                                <div className="text-sm text-teal-600  mb-1">Backend (MERN)</div>
                                <div className="flex flex-wrap gap-2">
                                    <Btn src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" name="MongoDB" />
                                    <Btn src="https://icon.icepanel.io/Technology/png-shadow-512/Express.png" name="Express" />
                                    <Btn src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" name="Firebase" />
                                    <Btn src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" name="Node" />
                                </div>
                            </div>
                            <div className="  text-purple-600   mb-1 mt-3 text-sm "> Other Skills</div>
                            <div className="flex flex-wrap gap-2 mt-2 text-sm m-auto text-gray-700">
                                <Btn src="https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png" name="figma" />
                                <Btn src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" name="Github" />
                                <Btn src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" name="Motion" />
                                <Btn src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" name="Gsap" />
                            </div>
                        </div>

                        
                    </div>

                    
                    {/* Bottom Row: Soft Skills, Skill Set, Interests, Languages */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Skill Set */}
                            <div ref={skillSetCard} className="flex-1  relative bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-300 shadow-lg min-w-[180px]">
                                <div className="  text-purple-600 md:absolute text-md "> Total Projects  </div>
                                <div className="  w-full h-full flex items-center font-semibold  justify-center font-bold text-gray-800 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 md:text-[5vw] text-[14vw]">  10+  </div>
                                
                                <div className=" flex justify-between px-5 md:absolute bottom-8 gap-10 ">
                                <p>Major Projects: <span className="font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-xl" >6</span></p>
                                <p>Live Projects: <span className="font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-xl" >4</span></p>
                                </div>
                            </div>


                        
                        {/* Interests & Languages */}
                        <div ref={interestCard} className="flex bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-200 shadow-lg min-w-[180px] flex-wrap  md:flex-col gap-4">
                            <div>
                                <div className="   text-purple-600   text-md mb-1">Interests</div>
                                <div className="flex gap-2 sm:text-sm py-2 sm:py-0 text-sm text-gray-700">
                                    <span className="bg-purple-600/30 px-4 py-3 text-black   rounded-full">UI/UX</span>
                                    <span className="bg-blue-600/30 px-4 py-3 text-black rounded-full"> Technology</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-purple-600   text-md mb-1  ">Languages</div>
                                <div className="flex gap-2 sm:text-sm py-2 sm:py-0 text-sm text-gray-700">
                                    <span className="bg-blue-600/30 px-4 py-3 text-black rounded-full">English</span>
                                    <span className="bg-purple-600/30 px-4 py-3 text-black rounded-full">Hindi</span>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillPage1;
