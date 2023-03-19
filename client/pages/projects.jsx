import React from 'react';
import ProjectLayout from '../components/projects-layout';
import FoodFinder from '../../server/public/images/foodfinder.png';
import CravingCreations from '../../server/public/images/cravingcreations.png';
import CodeJournal from '../../server/public/images/codejournal.png';

export default function Projects(props) {
  const projects = [
    {
      link: 'https://lfzfoodfinder.com/',
      image: FoodFinder,
      alternative: 'lfzfoodfinder landing page',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      link: 'https://andychen97.github.io/craving-creations/',
      image: CravingCreations,
      alternative: 'CravingCreations landing page',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      link: 'https://andychen97.github.io/code-journal/',
      image: CodeJournal,
      alternative: 'CodeJournal landing page',
      technologies: ['HTML', 'CSS', 'JavaScript']
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
        {projects.map(({ link, image, alternative }) => {
          return ProjectLayout(link, image, alternative);
        })
      }
      </div>
    </div>
  );
}
