import React from 'react';
import ProjectLayout from '../components/projects-layout';
import FoodFinder from '../../server/public/images/foodfinder.png';
import CravingCreations from '../../server/public/images/cravingcreations.png';
import CodeJournal from '../../server/public/images/codejournal.png';

export default function Projects(props) {
  const projects = [
    {
      title: 'Food Finder',
      github: 'https://github.com/andychen97/food-finder',
      description: "A full-stack web application for food lovers to find restaurants utilizing Yelp's REST API. Some key features include pinpoint mapping (Leaflet API) and user accounts with Argon2 password hashing / salting.",
      link: 'https://lfzfoodfinder.com/',
      image: FoodFinder,
      alternative: 'lfzfoodfinder landing page',
      technologies: 'React - Node.js - Express.js - PostgreSQL - Argon2 - Yelp API - Dokku'
    },
    {
      title: 'Craving Creations',
      github: 'https://github.com/andychen97/craving-creations',
      description: 'A dynamic web application for food lovers to find and organize recipes. Through the process of creating this app, I have gained a greater level of comfort and proficiency in working with APIs, enabling me to utilize them with ease and confidence.',
      link: 'https://andychen97.github.io/craving-creations/',
      image: CravingCreations,
      alternative: 'CravingCreations landing page',
      technologies: 'HTML - CSS - JavaScript - Tasty API - Dokku'
    },
    {
      title: 'Code Journal',
      github: 'https://github.com/andychen97/code-journal',
      description: 'A CRUD application that allows users to log and view their entries. The experience of developing this app marked a significant milestone in my pursuit of a career as a software developer.',
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
        {projects.map(({ title, github, description, link, image, alternative, technologies }) => {
          return ProjectLayout(title, github, description, link, image, alternative, technologies);
        })
      }
      </div>
    </div>
  );
}
