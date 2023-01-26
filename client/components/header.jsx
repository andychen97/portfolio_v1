import React from 'react';
import ResumeButton from './resume-button';

export default class Header extends React.Component {
  render() {
    return (
      <div className='row align-center space-between'>
        <h2 className='green-text'>A</h2>
        <div className=''>
          <a href='#about-me' className='options grey-text'> <span className='green-text'>01.</span> About Me</a>
          <a className='options grey-text'> <span className='green-text'>02.</span> Experience</a>
          <a className='options grey-text'> <span className='green-text'>03.</span> Work</a>
          <a className='options grey-text'> <span className='green-text'>04.</span> Contact</a>
          <ResumeButton />
        </div>
      </div>
    );
  }
}
