import React, { useContext, useState } from "react";
import { DataContext } from "../context";
import "./Header.css";

function Header() {
  const context = useContext(DataContext);
  const { name, role, networks } = context;
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 160) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header id="home">
      <nav className={nav ? 'nav-wrap active' : 'nav-wrap'}>
        <ul id="nav" className="nav">
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#about">A propos</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#drawings">Dessins</a>
          </li>
        </ul>
      </nav>

      <div className="banner">
        <div className="banner-text">
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
        </div>
      </div>
    </header>
  );
}

export default Header;
