import React, { useContext } from "react";
import { DataContext } from "../context";
import "./About.css";

const About = React.forwardRef((props, ref) => {
  const context = useContext(DataContext);
  const { name, role, info, picture } = context;
  return (
    <section id="about">
      <img className="picture" src={picture} alt="profil-pic" ref={ref}/>
      <div className="about-text" ref={ref}>
        <p>{name}</p>
        <p>{role}, {info}</p>
      </div>
    </section>
  );
});

export default About;
