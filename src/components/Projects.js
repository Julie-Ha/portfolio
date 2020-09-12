import React, { useContext } from "react";
import { DataContext } from "../context";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const context = useContext(DataContext);
  const { projects } = context;

  return (
    <section className="projects" id="projects">
        <h1>Quelques projets personnels</h1>
        <div className="cards-container">
          <div className="cards-wrapper">
            <ul className="cards-items">
              {projects.map((item, index) => {
                return <ProjectCard project={item} key={index} />;
              })}
            </ul>
          </div>
        </div>
    </section>
  );
}

export default Projects;
