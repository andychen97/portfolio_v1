import React from 'react';
import GitHubIcon from './icons/github';
import LinkedinIcon from './icons/linkedin';
import InstagramIcon from './icons/instagram';

export default function Icons() {
  return (
    <div className="row">
      <div className="col-10 content">
        <ul>
          <li className='icon-margins'>
            <a href='https://github.com/andychen97'
              target='_blank'
              rel="noreferrer">
              <GitHubIcon />
            </a>
          </li>
          <li className='icon-margins'>
            <a href='https://www.linkedin.com/in/andy-chen907/'
              target='_blank'
              rel="noreferrer">
              <LinkedinIcon />
            </a>
          </li>
          <li className='icon-margins'>
            <a href='https://www.instagram.com/andyy_chenn/'
              target='_blank'
              rel="noreferrer">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <div className='line' />
          </li>
        </ul>
      </div>
    </div>
  );
}
