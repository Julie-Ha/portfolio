import React from 'react';

function ProjectCard({project}) {
  return (
    <>
      <li className='cards-item'>
        <a className='cards-item-link' href={project.link} target="_blank" rel="noopener noreferrer">
          <figure className='cards-item-pic-wrap' data-category={project.name}>
            <img
              className='cards-item-img'
              alt={project.name}
              src={project.image}
            />
          </figure>
          <div className='cards-item-info'>
            <h5 className='cards-item-text'>{project.description}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default ProjectCard;