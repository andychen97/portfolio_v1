import React from 'react';
import ResumeButton from './resume-button';
import ExitIcon from './icons/exit';

export default class MenuModal extends React.Component {

  render() {
    const menuShow = this.props.showMenu.menuIcon ? 'hide-menu' : 'drop-menu';
    const exitMenu = this.props.showMenu.modal ? 'drop-menu' : 'hide-menu';
    return (
      <div className={`row align-center modal ${menuShow} ${exitMenu}`}>
        <div className="modal-content">
          <div className={`row flex-end ${exitMenu}`} onClick={this.props.menuFunc}>
            <ExitIcon/>
          </div>
          <ul>
            <li>
              <a href='#about-me' className='options grey-text'> <span className='green-text'>01.</span> About Me</a>
            </li>
            <li>
              <a className='options grey-text'> <span className='green-text'>02.</span> Experience</a>
            </li>
            <li>
              <a className='options grey-text'> <span className='green-text'>03.</span> Work</a>
            </li>
            <li>
              <a className='options grey-text'> <span className='green-text'>04.</span> Contact</a>
            </li>
            <li>
              <ResumeButton />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
