import React from 'react';
import ProjectLayout from '../components/projects-layout';
import FoodFinder from '../../server/public/images/foodfinder.png';
import CravingCreations from '../../server/public/images/cravingcreations.png';
import CodeJournal from '../../server/public/images/codejournal.png';

export default function Projects(props) {
  const projects = [
    {
      title: 'Food Finder',
      description: "A full-stack web application for food lovers to find restaurants utilizing Yelp's REST API. Some key features include pinpoint mapping (Leaflet API) and user accounts with Argon2 password hashing / salting.",
      link: 'https://lfzfoodfinder.com/',
      image: FoodFinder,
      alternative: 'lfzfoodfinder landing page',
      technologies: 'React - Node.js - Express.js - PostgreSQL - Argon2 - Yelp API - Dokku'
    },
    {
      title: 'Craving Creations',
      description: 'A dynamic web application for food lovers to find and organize their recipes.',
      link: 'https://andychen97.github.io/craving-creations/',
      image: CravingCreations,
      alternative: 'CravingCreations landing page',
      technologies: 'HTML - CSS - JavaScript - Tasty API - Dokku'
    },
    {
      title: 'Code Journal',
      description: 'My first CRUD application to solidify my knowledge.',
      link: 'https://andychen97.github.io/code-journal/',
      image: CodeJournal,
      alternative: 'CodeJournal landing page',
      technologies: 'HTML - CSS - JavaScript'
    }
  ];
  return (
    <div id='projects'>
      <div className="row align-center head-num">
        <h3 className='grey-text header'>
          <span className='green-text sfmono numbering'>03. </span>
          Projects</h3>
        <hr />
      </div>
      <div className="row flex-wrap">
        {projects.map(({ title, description, link, image, alternative, technologies }) => {
          return ProjectLayout(title, description, link, image, alternative, technologies);
        })
      }
      </div>
    </div>
  );
}
