import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { AiFillHeart, AiFillSetting } from "react-icons/ai";
import "./Header.css";
import { Link } from "react-scroll";
import computerImg from "../images/computer.png";

import { gsap, Power3, Linear } from "gsap";

function Header() {
  const [nav, setNav] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let computerIllustration = useRef(null);
  let icon1 = useRef(null);
  let icon2 = useRef(null);
  let icon3 = useRef(null);

  useEffect(() => {
    let tl = new gsap.timeline();

    tl.to(computerIllustration, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: Power3.easeOut,
    });

    tl.to(icon1, {
      scale: 1,
      opacity: 1,
      ease: Power3.easeOut,
    });
    gsap.fromTo(
      icon1,
      {
        y: 10,
      },
      {
        y: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
      }
    );

    tl.to(icon2, {
      scale: 1,
      opacity: 1,
      ease: Power3.easeOut,
    });
    gsap.to(icon2, {
      rotation: "360",
      duration: 3,
      ease: Linear.easeNone,
      repeat: -1,
    });

    tl.to(icon3, {
      opacity: 1,
      ease: Power3.easeOut,
    });
    gsap.fromTo(
      icon3,
      {
        scale: 0.9,
      },
      {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

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
        </ul>
      </nav>

      <div className="banner">
        <img
          src={computerImg}
          alt="computer"
          className="computer-img"
          ref={(el) => (computerIllustration = el)}
        />
        <div className="icon1" ref={(el) => (icon1 = el)}>
          <VscCode />
        </div>
        <div className="icon2" ref={(el) => (icon2 = el)}>
          <AiFillSetting />
        </div>
        <div className="icon3" ref={(el) => (icon3 = el)}>
          <AiFillHeart />
        </div>
      </div>
    </header>
  );
}

export default Header;
