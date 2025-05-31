import React from 'react'
import  Btn  from '../../pages/SkillBtn/Btn';
import { FaArrowDownLong } from "react-icons/fa6";
import { AboutAnimation } from '../../components/Animation/AboutAnim';
import { Link } from 'react-router';



const About = () => {
  AboutAnimation()
  const name = "creating some unique in the digital world"
  const about = "Hi, I'm Anshu Chaurasiya, a passionate and dedicated Web Developer and Web Designer. I have experience in building dynamic, responsive, and user-friendly web applications."
  const about2 = " Hi, I'm Anshu Chaurasiya, a final-year Computer Science student at JVM Mehta Degree College, Airoli. With a strong academic foundation and expertise in HTML, CSS, and JavaScript, I am passionate about crafting creative and efficient web development solutions. Known for being a quick learner with a positive attitude, I embrace challenges and strive to contribute to innovative projects. Outside of coding, I enjoy cricket and music to stay refreshed and inspired."
  return (
    <>
      <div className="w-full  lg:px-32 px-3 py-10 font-[main]">
        <h1 className='Aheading relative top-10 lg:text-8xl text-4xl  capitalize items-end text-start py-20 '>{name}</h1>

        <div className=" About-ball w-full  top-8 h-[1px] bg-slate-400 relative flex justify-end  items-center">
          <button className=' w-32 h-32 mr-11  rounded-full '>
            <svg width="150px" height="150px">
              <path id='curve' fill='white' d='M 16 80 A 55 55 0 1 1 19 90'></path>
              <text className='text '>
                <textPath href='#curve' className='text uppercase w-full text-center'> - Download Resume - Download Resume </textPath>
              </text>
            </svg>
            <a className='absolute top-0 mr-5 text-2xl' href="/"><FaArrowDownLong />   </a>
          </button>
        </div>


        <div className=" mt-24">
          <p className=' text-base about-text relative top-10'>{about}</p>
        </div>
        


        <div className="  flex gap-10 flex-col-reverse lg:flex-row mt-10">
          {/* left */}
          <div className=" lg:w-[70%]">
            <p className=' abs lg:about-box opacity-0 scale-0'>{about2}</p>
            <div className=" bg-[#E9EAEB] abs lg:about-box opacity-0 scale-0 py-2 mt-3 w-full rounded-2xl overflow-hidden">
                    <h1 className= ' text-center text-xl font-semibold'>Frontend</h1>
                    <div className=" flex w-full  flex-wrap items-center gap-1 justify-evenly p-3">
                        <Btn src="https://cdn-icons-png.flaticon.com/512/174/174854.png " name="html" />
                        <Btn src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" name="Bootstrap" />
                        <Btn src="   https://cdn-icons-png.flaticon.com/512/732/732190.png " name="Css" />
                        <Btn src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" name="JavaScript" />
                        <Btn src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" name="React" />
                        <Btn src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEX////G6fxsyvk/v/g4vfhhyPmz4vuK1PoAtfckufgvu/hTxPn6/f+h2/tGwPjS7v255fxMwviT1/qn3vsZjXhWAAAAbElEQVR4AeWOCQqAMAwEq11r06b3//9qAwiI0QfowHINC2N+yLJabE53uycgUGTtF11CmDqLLVdZ57iJhSt9V+4cCQB5a1RGJgr9FrrW866GbmpoGylISlNC3RxnsbY+hLbX0GSJIKE6zOajHN4ZA8/fNs9XAAAAAElFTkSuQmCC" name="Tailwind css" />
                    </div>
              </div>

              <div className=" bg-[#E9EAEB] abs lg:about-box opacity-0 scale-0 py-2 mt-3 rounded-2xl overflow-hidden">
                    <h1 className= ' text-center text-xl font-semibold'>Backend</h1>
                    <div className=" flex w-full  flex-wrap items-center gap-1 justify-evenly p-3">
                        <Btn src="https://i.imgur.com/8fqx0Gq.png" name="Express" />
                        <Btn src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" name="Mongodb" />
                        <Btn src="https://e7.pngegg.com/pngimages/416/280/png-clipart-node-js-express-js-javascript-redis-mean-node-js-angle-text.png" name="Node" />
                        <Btn src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" name="Firebase" />
                       
                    </div>
                </div>


                <div className=" bg-[#E9EAEB] abs lg:about-box opacity-0 scale-0 py-2 mt-3 rounded-2xl overflow-hidden">
                    <h1 className= ' text-center text-xl font-semibold'>Others</h1>
                    <div className=" flex w-full  flex-wrap items-center gap-1 justify-evenly p-3">
                        <Btn src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" name="Vs Code" />
                        <Btn src="https://images.seeklogo.com/logo-png/27/1/netlify-logo-png_seeklogo-273744.png" name="Netlify" />
                        <Btn src="https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png" name="Figma" />
                        <Btn src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" name="Github" />
                       
                    </div>
                 </div>
          </div>

          {/* right */}
          <div className="">
            <img className='w-full' src="https://i.imgur.com/rUl57qC.jpeg" alt="hii" />
            {/* <img className='w-full' src="/src/assets/anshu.png" alt="" /> */}
          </div>
        </div>


        <div className=" ">
          <h1 className=' font-semibold text-2xl mt-10'>Training & Certifications</h1>
          <div className=" lg:flex gap-5">

            <div className=" TC-box  opacity-0 border mb-2 hover:scale-105 transition-all duration-300 border-dashed bg-[#E9EAEB] p-10 text-center rounded-2xl">
              <h1 className=' p-2'>Web Development</h1>
              <p className=' p-3 mb-4 '>Successfully completed a course from freeCodeCamp, mastering responsive web design principles and modern web layout techniques.</p>
              <a target='_blank' className=' bg-black hover:bg-blue-800 transition-all duration-500 px-5 text-white p-2 rounded-full '  href={"/"}>View </a>
            </div>
          
            <div className=" TC-box  opacity-0 border mb-2 hover:scale-105 transition-all duration-300 border-dashed bg-[#E9EAEB] p-10 text-center rounded-2xl">
              <h1 className=' p-2'>Web Development</h1>
              <p className=' p-3 mb-4 '>Successfully completed a course from freeCodeCamp, mastering responsive web design principles and modern web layout techniques.</p>
              <a target='_blank' className=' bg-black hover:bg-blue-800 transition-all duration-500 px-5 text-white p-2 rounded-full '  href={"/"}>View </a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About