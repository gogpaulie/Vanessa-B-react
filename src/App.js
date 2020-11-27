import React from 'react';
import './App.css';
import '../src/index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Projects from './components/Projects';
// import Projects2 from './components/Projects2';
import Projects3 from './components/Projects3';
// import Projects2 from './components/Projects2';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      {/* <TextField style={{ color: 'white' }} variant='filled' label='Name' /> */}
      {/* <CheckboxExample /> */}
      {/* <Projects2 /> */}
      <Projects3 />
    </div>
  );
}

export default App;
