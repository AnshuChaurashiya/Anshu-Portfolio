import   { useEffect } from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Footer from './components/footer/Footer'
import Lenis from '@studio-freight/lenis';
import Work from './components/Project/Work'
import { Scroll } from './components/Animation/ScrollAnim'

const App = () => {

  Scroll()

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, 
      lerp: 0.1,
      direction: 'vertical', 
    });

    // Animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    
    <>
    <Header />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/about' element={ <About />} />
      <Route path='/work' element={ <Work />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App