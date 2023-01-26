import React from 'react';
import Selfie from '../../server/public/selfie.jpg';
import Caret from '../components/icons/caret';

export default function AboutMe(props) {
  return (
    <div id='about-me'>
      <div className="row align-center head-num">
        <h3 className='grey-text header'>
          <span className='green-text sfmono numbering'>01. </span>
          About Me</h3>
        <hr />
      </div>
      <div className="row flex-wrap grey-text about-descript">
        <div className='col-4-10 order-1 justify-center'>
          <div className="row justify-center">
            <img src={Selfie} alt='A selfie.' className='selfie' />
          </div>
        </div>
        <div className="col-6-10 order-2">
          <div className="row">
            <p>
              Hey! I am a software developer with a background in Information Systems and Web Development.
              I graduated from San Jose State University in the Spring of 2020 during the onset of the
              pandemic. Despite the challenging job market, I utilized this time to expand my knowledge
              by self-educating in finance and options trading. It was quite a profitable experience.
              However, as the world began to reopen, I wanted to refresh my skills in Python and mySQL
              and discovered a passion for web development through an online JavaScript course.
              <br />
              <br />
              I subsequently enrolled in an accelerated, in-person full-stack web development program in
              Irvine, California where I acquired comprehensive skills in HTML, CSS, JavaScript, Node.js,
              Express.js, PostgreSQL, React, and data structures and algorithms. Having completed the
              program, I am currently working as a TA and continue to improve my skills through daily
              leetcoding. I am now seeking new opportunities to apply my skills in the web development
              industry.
              <br />
              <br />
              Here are some technologies that I have been working with recently:
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <ul className='sfmono grey-text skills'>
          <li><Caret /> JavaScript (ES5 / ES6)</li>
          <li><Caret /> TypeScript</li>
          <li><Caret /> HTML</li>
          <li><Caret /> CSS</li>
          <li><Caret /> React</li>
          <li><Caret /> Node.js</li>
          <li><Caret /> Express.js</li>
          <li><Caret /> PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
}
