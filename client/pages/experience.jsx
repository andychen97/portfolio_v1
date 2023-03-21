import React from 'react';
import Timeline from '../components/timeline';

export default function Experience(props) {
  return (
    <div id='experience'>
      <div className="row align-center head-num">
        <h3 className='white-text header'>
          <span className='green-text sfmono numbering'>02. </span>
          Experience</h3>
        <hr />
      </div>
      <div className="row">
        <div className="col-1">
          <Timeline />
        </div>
      </div>
    </div>
  );
}
