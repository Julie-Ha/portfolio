import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <>
      <div
        className="cards-item-link"
        href={project.link ? project.link : "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure className="cards-item-pic-wrap" data-category={project.name}>
          <img
            className="cards-item-img"
            alt={project.name}
            src={project.image}
          />
        </figure>
        <div className="cards-item-info">
          <h5 className="cards-item-text">{project.description}</h5>
          <div className="project-links">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaLink />
              </a>
            ) : (
              ""
            )}
            <a href={project.source} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
