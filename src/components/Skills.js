import React, { useContext } from "react";
import { DataContext } from "../context";
import "./Skills.css";

const Skills = React.forwardRef((props, ref) => {
  const context = useContext(DataContext);
  const { cssSkills, jsSkills, backendSkills } = context;

  return (
    <section id="skills" className="skills">
      <h1>Compétences</h1>

      <div className="skills-container" ref={ref}>
        <h3 className="h3-frontend">Front-end</h3>

        <div className="css">
          <ul>
            {cssSkills.map((item, index) => {
              return (
                <li key={index}>
                  {item.icon} <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="js">
          <ul>
            {jsSkills.map((item, index) => {
              return (
                <li key={index}>
                  {item.icon} <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <h3 className="h3-backend">Back-end</h3>
        <ul className="backend">
          {backendSkills.map((item, index) => {
            return (
              <li key={index}>
                {item.icon} <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
});

export default Skills;
