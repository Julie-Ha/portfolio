import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-scroll";
import computerImg from '../images/computer.png';

import { TweenMax, Power3 } from 'gsap';

function Header() {
  const [nav, setNav] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let logoComputer = useRef(null);

  useEffect(() => {
    TweenMax.to(
      logoComputer,
      .9,
      {
        opacity: 1,
        scale:1,
        ease: Power3.easeOut
      }
    )
  }, [])

  const changeBackground = () => {
    if (window.scrollY >= 160) {
      setNav(true);
    } else {
      setNav(false);
    }
    if (window.scrollY >= 350) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header id="home">
      <nav className={nav ? "nav-wrap active" : "nav-wrap"}>
        <div
          className={button ? "menu-icon light" : "menu-icon dark"}
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMobileMenu}
            >
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMobileMenu}
            >
              A propos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMobileMenu}
            >
              Projets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMobileMenu}
            >
              Compétences
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="drawings"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMobileMenu}
            >
              Dessins
            </Link>
          </li> */}
        </ul>
      </nav>

      <div className="banner">
        <img src={computerImg} alt="computer" className="computer-img" ref={el => {logoComputer = el}}/>
        {/* <div className="banner-text">
          <h1>Bienvenue</h1>
          <h3>
            Je suis {name}, {role}
          </h3>
          <ul className="banner-networks">
            {networks.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
