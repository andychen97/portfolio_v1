import React from 'react';
import FoodFinder from '../../server/public/images/foodfinder.png';

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
          <figure className='project-effect'>
            <img src={FoodFinder} alt="" className="projects-image" />
          </figure>
        </div>
      </div>
    </div>
  );
}
