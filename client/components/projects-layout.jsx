import React from 'react';

export default function ProjectLayout(link, image, alternative, technologies) {
  return (
    <div className="col-3">
      <figure className='project-effect pointer'>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={alternative} className="projects-image" />
        </a>
      </figure>
    </div>
  );
}
