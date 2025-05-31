
import  { LandingPage } from '../../components/Animation/Magnetic'
import { motion, AnimatePresence } from 'framer-motion';

const Landing = () => {
   LandingPage()
  return (
    <>
         <div className="loader z-50 w-full relative h-screen bg-gradient-to-br from-white to-gray-100 text-black flex justify-center items-center fixed top-0 left-0">
        <div className="relative w-full ">
          <div className="anim text-black flex gap-4 whitespace-nowrap overflow-hidden">
         
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className=" flex w-full h-screen items-center justify-center text-center "
          >
            <h1 className="text-6xl mt-10 uppercase font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7e35b9] to-purple-600 px-8 py-4">
            Welcome to my world
            </h1>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Landing;
