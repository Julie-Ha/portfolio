import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
