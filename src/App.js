import React, { useEffect, useState } from 'react';
import './App.css';
import '../src/index.css';
import LazyHero from 'react-lazy-hero';

import Navbar from './components/Navbar';
// import HeroGrid from './components/HeroGrid';
// import Projects from './components/Projects';
// import Projects2 from './components/Projects2';
import Projects3 from './components/Projects3';
// import Projects2 from './components/Projects2';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [scrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    if (window.scrollY > 300) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <div className='App' id='home'>
      <Navbar scrollActive={scrollActive} />
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
        <h1>Vanessa Brasfield</h1>
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
}

export default App;
