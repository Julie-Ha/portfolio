import React, { useContext } from "react";
import { DataContext } from "../context";
import "./About.css";

function About() {
  const context = useContext(DataContext);
  const { name, role, info, picture } = context;
  return (
    <section id="about">
      <img className="picture" src={picture} alt="profil-pic" />
      <div className="about-text">
        <p>{name}</p>
        <p>{role}, {info}</p>
      </div>
    </section>
  );
}

export default About;
