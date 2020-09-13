import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Drawings from './components/Drawings';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Drawings />
      <Footer />
    </div>
  );
}

export default App;
