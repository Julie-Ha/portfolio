import React, { useContext } from "react";
import { DataContext } from "../context";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = React.forwardRef((props, ref) => {
  const context = useContext(DataContext);
  const { projects } = context;

  return (
    <section className="projects" id="projects">
        <h1>Projets personnels</h1>
        <div className="cards-container">
          <div className="cards-wrapper">
            <ul className="cards-items" ref={ref}>
              {projects.map((item, index) => {
                return <ProjectCard project={item} key={index}  />;
              })}
            </ul>
          </div>
        </div>
    </section>
  );
})

export default Projects;
