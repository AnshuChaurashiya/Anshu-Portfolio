import React, { useEffect, useState } from 'react';
import { Magnetic } from '../Animation/Magnetic';
import { Scroll } from '../Animation/ScrollAnim';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  Magnetic();
  Scroll();

  const texts = [
    "Creative Web Developer",
    "Creative Web Designer",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const textTimer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(textTimer);
    };
  }, []);

  const name = "Anshu Chaurasiya";
  const role = "Web Developer";
  const roleAlt = "Web Designer";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full relative font-[main] min-h-screen text-gray-900 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f0f0 50%, #e8d9f4 50%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-[#7e35b9] opacity-10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute right-0 w-[400px] h-[400px] rounded-full bg-purple-400 opacity-10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row md:items-center justify-center gap-12 md:gap-0 min-h-screen py-20"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2  lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-4xl  md:justify-start  justify-center font-semibold lg:text-5xl flex gap-2 text-[#7e35b9] md:mb-4"
            >
            <span className=' text-black'>  Hi, I'm </span>   {name.split(" ")[0]}
            </motion.p>
            <div className="space-y-2 ml-2 md:ml-0">
              <motion.h1
                variants={itemVariants}
                className="text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7e35b9] to-purple-600"
              >
                
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="text-6xl text-center md:text-start  lg:text-7xl font-bold tracking-tight"
              >
                {name.split(" ")[1]}
              </motion.h1>
            </div>
            <motion.div variants={itemVariants} className="md:mt-8 mt-2 ">
              <p className="text-2xl lg:text-3xl mb-2 bg-purple-600  m-auto md:m-0 w-fit p-3 rounded-full text-white">A Creative</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl text-center md:text-start lg:text-5xl mt-3 font-semibold text-[#7e35b9]"
                >
                  {texts[currentText]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2  lg:mt-0"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute z-30 inset-0 bg-[#7e35b9] rounded-full blur-3xl opacity-20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.img
                className="w-full max-w-md mx-auto rounded-full border-4 border-white shadow-2xl"
                src="https://raw.githubusercontent.com/Ade-mir/harris-johnsen-2/refs/heads/main/src/assets/Design%20uten%20navn.png"
                alt="Hero Visual"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className=" absolute md:bottom-12 bottom-5 right-12 flex flex-col  z-30 items-end md:gap-6"
      >
        <motion.a
          whileHover={{ scale: 1.1, x: -10 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/anshu-chaurashiya-074664287"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-xl cursor-pointer z-30 uppercase tracking-[3px] text-gray-700 hover:text-[#7e35b9] transition-all duration-300"
        >
          LinkedIn
          <motion.span className="ml-2 rotate-45 text-3xl" animate={{ rotate: [45, 90, 45] }} transition={{ duration: 2, repeat: Infinity }}>
            <IoIosArrowRoundUp />
          </motion.span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1, x: -10 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/AnshuChaurashiya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-xl uppercase tracking-[3px] text-gray-700 hover:text-[#7e35b9] transition-all duration-300"
        >
          GitHub
          <motion.span
            className="ml-2 rotate-45 text-3xl"
            animate={{ rotate: [45, 90, 45] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <IoIosArrowRoundUp />
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
