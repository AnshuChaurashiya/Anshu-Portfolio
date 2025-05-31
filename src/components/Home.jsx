 import Lenis from '@studio-freight/lenis';
import HomePage from '../components/Home/HomePage';
// import Landing from '../pages/landing/Landing';
import MiniAbout from '../components/about/MiniAbout';
import SkillPage1 from '../components/skill/SkillPage1';
import Project from '../components/Project/Project';
import { Scroll } from './Animation/ScrollAnim';
import { Background } from './Animation/Background';


const Home = () => {
  Scroll()
   Background() 

  return (
    <>
      {/* <Landing /> */}
      <div   className=" max-w-[1600px] m-auto w-full ">
      <HomePage />
      <MiniAbout />
      <SkillPage1 />
      <Project />

      </div>
    </>
  );
};

export default Home;
