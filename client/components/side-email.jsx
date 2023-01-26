import React from 'react';

export default function SideEmail() {
  return (
    <div className='row content'>
      <div className="col-1">
        <p className='side-email' onClick={
          () => { window.location = 'mailto:chen.andy18@gmail.com'; }}>
          chen.andy18@gmail.com
        </p>
        <div className='line margin-40' />
      </div>
    </div>
  );
}
