import React from 'react';

export default function ProjectLayout(title, description, link, image, alternative, technologies) {
  return (
    <div className="col-2">
      <figure className='project-layout pointer'>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={alternative} className="projects-image" />
        </a>
        <h3 className='white-text project-name text-center'>{title}</h3>
        <h4 className='grey-text project-descript'>{description}</h4>
        <p className='grey-text technology'>{technologies}</p>
      </figure>
    </div>
  );
}
