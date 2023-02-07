import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Icons from './components/side-icons';
import SideEmail from './components/side-email';
import AboutMe from './pages/about-me';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact-me';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <Header />
          </div>
        </div>
        <div className="body-layout">
          <div className="row">
            <div className="col-1">
              <div className="row home-view">
                <Home />
              </div>
              <div className="margin-bottom-40">
                <AboutMe />
              </div>
              <div className="margin-bottom-40">
                <Experience />
              </div>
              <div className="margin-bottom-40">
                <Projects />
              </div>
              <div className="margin-bottom-40">
                <Contact />
              </div>
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
