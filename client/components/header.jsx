import React from 'react';
import ResumeButton from './resume-button';
import Menu from './icons/menu';
import MenuModal from './menu-modal';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      modal: true
    };
    this.menu = this.menu.bind(this);
  }

  menu(event) {

    this.setState({
      menu: !this.state.menu,
      modal: !this.state.modal
    });
  }

  render() {
    const showMenu = this.state.menu;
    return (
      <div>
        <div className='row align-center space-between'>
          <h2 className='green-text align-center'>A</h2>
          <div className='show-sides align-center'>
            <a href='#about-me' className='options grey-text'> <span className='green-text'>01.</span> About Me</a>
            <a className='options grey-text'> <span className='green-text'>02.</span> Experience</a>
            <a className='options grey-text'> <span className='green-text'>03.</span> Work</a>
            <a className='options grey-text'> <span className='green-text'>04.</span> Contact</a>
            <ResumeButton />
          </div>
          <div className="menu-sub" onClick={this.menu}>
            <Menu />
          </div>
        </div>
        <MenuModal showMenu={showMenu}/>
      </div>
    );
  }
}
