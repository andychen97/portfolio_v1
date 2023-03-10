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
              <div className="section-view">
                <AboutMe />
              </div>
              <div className="section-view">
                <Experience />
              </div>
              <div className="section-view">
                <Projects />
              </div>
              <div className="section-view">
                <Contact />
              </div>
              <div className="row space-around">
                <p className='grey-text footer'>
                  Designed & Built by Andy Chen with React.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row bottom-fixed show-sides">
          <Icons />
        </div>
        <div className="row bottom-fixed-right show-sides">
          <SideEmail />
        </div>
      </div>

    );
  }
}
