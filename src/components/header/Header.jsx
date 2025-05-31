import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Magnetic, showMenuBtn, SliderMenu, SliderMenu1 } from "../Animation/Magnetic";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Nav from "../../pages/nav/Nav";
import { TbMenu } from "react-icons/tb";


const Header = () => {
    showMenuBtn()
    SliderMenu()
    Magnetic()
    SliderMenu1()
    
  

  const name = "Anshu";
  const surname = "Chaurasiya";
  const code = "Code By";

  const navItems = [
    { title: "Work", link: "/work" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  

  return (
    <>
    
      <div className="lg:px-8 py-4  px-3 absolute top-0 left-0 right-0 z-50">
        <div className="  flex justify-between w-full items-center">
          {/* logo */}

          <div className="logo  Magnetic gap-2 overflow-hidden">
            <a className="flex   ml-1 overflow-hidden" href="/">
              <span>©</span>
              <div className="heading  text-black   flex gap-1 overflow-hidden relative">
                <h1 className="code">{code}</h1>
                <h1 className="name relative">{name}</h1>
                <h1 className="surname">{surname}</h1>
              </div>
            </a>
          </div>

          {/* nav items */}
          <div className=" hidden md:block lg:block   gap-2 nav-items ">
            {navItems.map((item, index) => (
              < a key={index} href={item.link} target="_blank" className="Magnetic me-4  capitalize indicator">
                {item.title}
              </a>
            ))}
          </div>

          <div className=" mr-7 text-[#1a1919] menuBtn md:hidden cursor-pointer z-10 lg:hidden block">
            <h1>Menu</h1>
          </div>
        </div>
      </div>


      <div className=" menuBtn1 z-10 Magnetic fixed right-1 top-8 p-5  ">
        <div className="ButtonContainer   scale-0 opacity-0  cursor-pointer ">
          <div className=" relative border text-white text-3xl bg-black w-16 h-16 rounded-full flex justify-center items-center">  <TbMenu /> </div>
        </div>
      </div>

      <div className=""><Nav /></div>


    </>
  );
};

export default Header;


{/* nav btn */ }
{/* <div className=" fixed z-50 right-1 top-0 p-5  ">
            <div  className="ButtonContainer   scale-0 opacity-0  cursor-pointer ">
                <div onClick={() => setisActive(!isActive)} className=" relative border bg-black w-20 h-20 rounded-full flex justify-center items-center">
                    <div  className={`burger ${isActive ?  "burgerActive" : ""}`}></div>
                </div>
        </div>
        </div>

        <div className="">{isActive  && <Nav />}</div> */}
