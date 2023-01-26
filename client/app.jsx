import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Icons from './components/side-icons';
import SideEmail from './components/side-email';
import AboutMe from './pages/about-me';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <Header />
          </div>
        </div>
        <div className="row body-layout">
          <div className="col-1">
            <div className="row home-view">
              <Home />
            </div>
            <div className="row">
              <AboutMe />
            </div>
          </div>
        </div>
        <div className="row space-between bottom-fixed show-sides">
          <Icons />
          <SideEmail />
        </div>
      </div>

    );
  }
}
