import React, { useContext } from "react";
import { DataContext } from "../context";
import "./Skills.css";

function Skills() {
  const context = useContext(DataContext);
  const { cssSkills, jsSkills, backendSkills } = context;

  return (
    <section id="skills" className="skills">
      <h1>Compétences</h1>

      <div className="skills-container">
        <div className="frontend-container">
          <h3>Front-end</h3>

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
        </div>

        <div className="backend-container">
          <h3>Back-end</h3>
          <ul>
            {backendSkills.map((item, index) => {
              return (
                <li key={index}>
                  {item.icon} <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
