import React from 'react';
// import Caret from '../components/icons/caret';

export default function Contact(props) {
  return (
    <div id='contact-me'>
      <div className="row text-center">
        <div className="col-1">
          <p className='green-text sfmono'>04.What&apos;s Next? </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-1">
          <h1 className='grey-text title-name'> Get In Touch</h1>
          <p className='grey-text home-descript text-center ma-0-auto'>Although I&apos;m not currently looking for any new opportunities, my inbox is always open.Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
          <button onClick={
            () => { window.location = 'mailto:chen.andy18@gmail.com'; }}>
            Say Hello</button>
        </div>
      </div>
    </div>
  );
}
