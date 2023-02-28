import React from 'react';

export default function Summary(props) {
  return (
    <div>
      <div className='row'>
        <div className="col-1">
          <div className="row home-title">
            <h5 className='green-text home-hi'>Hi, my name is</h5>
          </div>
          <div className="row home-title">
            <h1 className='white-text home-name'>Andy Chen.</h1>
          </div>
          <div className="row home-title">
            <h1 className='grey-text title-name'>I am a software developer.</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <p className='grey-text home-descript'>
            I am a software developer with a background in Information Systems and
            Web Development. I graduated from&nbsp;
            <a href='https://sjsu.edu/' target='_blank' rel="noreferrer" className='links green-text'>
              San Jose State University
            </a>&nbsp;with a degree in Management Information systems and learned how to code through&nbsp;
            <a href='https://learningfuze.com/full-immersion' target='_blank' rel="noreferrer" className='links green-text'>
              LearningFuze
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
