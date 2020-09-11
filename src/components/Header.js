import React, { useContext } from "react";
import { DataContext } from "../context";
import "./Header.css";

function Header() {
  const context = useContext(DataContext);
  const { name, role, networks } = context;

  return (
    <header id="home">
      <nav className="nav-wrap">
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
