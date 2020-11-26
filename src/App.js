import React from 'react';
import './App.css';
import '../src/index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Projects id='projects' />
      {/* <TextField style={{ color: 'white' }} variant='filled' label='Name' /> */}
      {/* <CheckboxExample /> */}
    </div>
  );
}

export default App;
