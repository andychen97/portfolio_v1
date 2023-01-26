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
            <h1 className='grey-text home-name'>I am a software developer.</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <p className='grey-text home-descript'>
            I am a software engineer with a backgrouynd in Information Systems and
            web development. I graduated from San Jose State with a degree in
            Management Information systems and learned how to code through
            LearningFuze.
          </p>
        </div>
      </div>
    </div>
  );
}
