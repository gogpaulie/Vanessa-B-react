import React, { useEffect, useState } from 'react';
import LazyHero from 'react-lazy-hero';
import Navbar2 from '../components/Navbar2';
import Projects3 from '../components/Projects3';
import About from '../components/About';
import Contact from '../components/Contact';
import NavbarMobileDrawer from '../components/NavbarMobileDrawer';

const HomeScreen = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  function handleScroll() {
    if (window.scrollY > 300) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }

  function handleResize() {
    if (window.innerWidth <= 990) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }

  function handleOpen() {
    setOpenNav(!openNav);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  });
  return (
    <div className='App' id='home'>
      <NavbarMobileDrawer open={openNav} handleOpen={handleOpen} />
      <Navbar2
        scrollActive={scrollActive}
        isMobileView={isMobileView}
        handleOpen={handleOpen}
        open={openNav}
      />

      <LazyHero
        className='hero'
        isCentered={true}
        color='#000'
        opacity={0.5}
        minHeight='100vh'
        imageSrc='https://images.unsplash.com/photo-1531967802777-e0f8fc276609?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        parallaxOffset={100}
        style={{
          color: 'white',
        }}
      >
        <h1>Ms Vanessa B</h1>
        <p>Graphic Design</p>
      </LazyHero>
      <Projects3 />
      <About />
      <Contact />
      <footer className='footer'>
        &copy; Polihronakis Design {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default HomeScreen;
