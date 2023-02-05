import React from 'react';
import FoodFinder from '../../server/public/images/foodfinder.png';
import CravingCreations from '../../server/public/images/cravingcreations.png';
import CodeJournal from '../../server/public/images/codejournal.png';

export default function Projects(props) {
  return (
    <div id='projects'>
      <div className="row align-center head-num">
        <h3 className='grey-text header'>
          <span className='green-text sfmono numbering'>03. </span>
          Projects</h3>
        <hr />
      </div>
      <div className="row flex-wrap">
        <div className="col-3">
          <figure className='project-effect pointer'>
            <a href='https://lfzfoodfinder.com/' target="_blank" rel="noreferrer">
              <img src={FoodFinder} alt="" className="projects-image" />
            </a>
          </figure>
        </div>
        <div className="col-3">
          <figure className='project-effect pointer'>
            <a href='https://andychen97.github.io/craving-creations/' target="_blank" rel="noreferrer">
              <img src={CravingCreations} alt="" className="projects-image" />
            </a>
          </figure>
        </div>
        <div className="col-3">
          <figure className='project-effect pointer'>
            <a href='https://andychen97.github.io/code-journal/' target="_blank" rel="noreferrer">
              <img src={CodeJournal} alt="" className="projects-image" />
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
}
