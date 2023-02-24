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
          <p className='grey-text home-descript text-center ma-0-auto'>
            I&apos;m currently looking for any new opportunities related to Software Development, so please
            feel free to send me a message. My inbox is always open and I&apos;ll try my best to get back to you!</p>
          <button className='say-hello' onClick={
            () => { window.location = 'mailto:chen.andy18@gmail.com'; }}>
            Say Hello</button>
        </div>
      </div>
    </div>
  );
}
