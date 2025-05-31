import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure you're using `react-router-dom`
import { AiOutlineClose } from "react-icons/ai";
import gsap from 'gsap';

const Nav = () => {
  const navigate = useNavigate(); // For programmatic navigation
  const tl = useRef(null); // Use a ref for the GSAP timeline
  const menuRef = useRef(null);
  const closeBtnRef = useRef(null);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Work", path: "/work" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const social = [
    { title: "Instagram", path: "/" },
    { title: "Twitter", path: "/" },
    { title: "LinkedIn", path: "/" },
  ];

  const name = "Navigation";

  // Function to handle menu close and navigation
  const handleLinkClick = (path) => {
    if (tl.current) {
      tl.current.reverse().then(() => {
        navigate(path); // Navigate after the animation finishes
      });
    } else {
      navigate(path); // Fallback in case animation isn't initialized
    }
  };

  useEffect(() => {
    const menu = menuRef.current;
    const closeBtn = closeBtnRef.current;

    // Initialize GSAP timeline
    tl.current = gsap.timeline({ paused: true })
      .to(menu, { right: 0, duration: 0.5, ease: "cubic-bezier(0.76, 0, 0.24, 1)" })
      .to(".line", { width: "100%" }, "<")
      .to(closeBtn, { scale: 1, delay: 0.3 }, "<")
      .to(".title", { x: 10, stagger: 0.2, opacity: 1 }, "<");

    // Event listeners for menu open/close
    const openBtn = document.querySelector(".menuBtn1");
    openBtn?.addEventListener("click", () => tl.current.play());
    closeBtn?.addEventListener("click", () => tl.current.reverse());

    return () => {
      openBtn?.removeEventListener("click", () => tl.current.play());
      closeBtn?.removeEventListener("click", () => tl.current.reverse());
    };
  }, []);

  return (
    <>
      <div
        ref={menuRef}
        className="menu w-full lg:w-[32%] md:w-[50%] bg-[#1a1919] text-white px-5 z-50 fixed -right-[100%] py-28 top-0 h-screen"
      >
        <div
          ref={closeBtnRef}
          className="ClosemenuBtn scale-0 cursor-pointer absolute right-1 top-10 p-5"
        >
          <div className="relative text-white text-3xl bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center">
            <AiOutlineClose />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <span className="text-gray-500 uppercase">{name}</span>
          <span className="line w-0 bg-gray-500 h-[1px] flex justify-center my-4"></span>
        </div>

        <div className="flex flex-col relative">
          {navItems.map((item, index) => (
            <button
              className="title opacity-0 text-5xl mb-2 text-white w-full text-left"
              key={index}
              onClick={() => handleLinkClick(item.path)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="fixed bottom-5">
          <label className="text-gray-500 uppercase">Social</label>
          <div className="flex gap-14 mt-2">
            {social.map((item, index) => (
              <Link className="title opacity-0" to={item.path} key={index}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
