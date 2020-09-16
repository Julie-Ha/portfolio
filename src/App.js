import React, { useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Drawings from "./components/Drawings";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    revealRefs.current.push(el);
  };

  useEffect(() => {
    console.log(revealRefs);
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          scale: 0,
        },
        {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "start bottom",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <About ref={addToRefs} />
      <Projects ref={addToRefs} />
      <Skills ref={addToRefs} />
      {/* <Drawings ref={addToRefs} /> */}
      <Footer />
    </div>
  );
}

export default App;
