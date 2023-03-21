import React from 'react';
import GitHubIcon from '../components/icons/github';
import ExternalLink from '../components/icons/external-link';

export default function ProjectLayout(title, github, description, link, image, alternative, technologies) {
  return (
    <div className="col-2">
      <figure className='project-layout'>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={alternative} className="projects-image pointer" />
        </a>
        <div className="row">
          <h3 className='white-text project-name'>{title}</h3>
          <div className='left-auto'>
            <a href={link} target="_blank" rel="noreferrer"><ExternalLink /></a>
            <a href={github} target="_blank" rel="noreferrer"><GitHubIcon /></a>
          </div>
        </div>
        <div className="row">
          <h4 className='grey-text project-descript'>{description}</h4>
          <p className='grey-text technology'>{technologies}</p>
        </div>
      </figure>
    </div>
  );
}
