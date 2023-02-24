import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LFZIcon from '../components/icons/lfz-icon';
import SkylineLogo from '../components/icons/skyline-logo';
import SJSULogo from '../components/icons/sjsu-logo';
import StocksLogo from '../components/icons/stocks-logo';
import ThirdStreetLogo from '../components/icons/third-street-logo';

export default function Timeline() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(30,37,48)', color: '#D0D1D2' }}
          contentArrowStyle={{ borderRight: '9px solid  rgb(30,37,48)' }}
          date="August 2022 &#8211; Present"
          iconStyle={{ background: 'white', color: 'black' }}
          icon={<LFZIcon />}>
          <h3 className="vertical-timeline-element-title">Web Dev Teacher&apos;s Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">LearningFuze</h4>
          <h4 className="vertical-timeline-element-subtitle">Irvine, California</h4>
          <p>
            • Lead TA sessions for a Full Stack Web Development course assisting instructors and students with daily assignments <br />
            • Revamped and taught existing material on algorithms emphasizing real-world applications of runtime complexity <br />
            • Explained and demonstrated beginner to intermediate methodologies such as procedural, functional, and OOP <br />
            • Guided students toward efficient solutions in HTML, CSS, JS, React, Node.js, Express.js, PostgreSQL, etc.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(30,37,48)', color: '#D0D1D2' }}
          contentArrowStyle={{ borderRight: '9px solid  rgb(30,37,48)' }}
          date="April 2022 &#8211; August 2022"
          iconStyle={{ background: 'white', color: 'black' }}
          icon={<LFZIcon />}>
          <h3 className="vertical-timeline-element-title">Full Stack Web Development Student</h3>
          <h4 className="vertical-timeline-element-subtitle">LearningFuze</h4>
          <h4 className="vertical-timeline-element-subtitle">Irvine, California</h4>
          <p>
            I went back to school to learn full-stack web development where I gained a completely new set of skills in HTML, CSS, JavaScript,
            Node.js, Express.js, PostgreSQL, and React.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(30,37,48)', color: '#D0D1D2' }}
          contentArrowStyle={{ borderRight: '9px solid  rgb(30,37,48)' }}
          date="January 2020 &#8211; January 2022"
          iconStyle={{ background: 'white', color: 'black' }}
          icon={<StocksLogo />}>
          <h3 className="vertical-timeline-element-title">Options Trader (Personal Financial Portfolio) </h3>
          <h4 className="vertical-timeline-element-subtitle">Self-employed</h4>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, California</h4>
          <p>
            • Actively managed and grew a portfolio with a 11% monthly average ROI over 24 months<br />
            • Traded derivatives and underlying securities based on technical and fundamental analysis<br />
            • Performed Technical and Quantitative analysis to interpret chart patterns to pinpoint entry/exit for profitability <br />
            • Analyze current market trends using information technology and market psychology to capitalize on movement within stocks, options, and index market
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(30,37,48)', color: '#D0D1D2' }}
          contentArrowStyle={{ borderRight: '9px solid  rgb(30,37,48)' }}
          date="January 2020 &#8211; May 2020"
          iconStyle={{ background: 'white', color: 'black' }}
          icon={<ThirdStreetLogo />}>
          <h3 className="vertical-timeline-element-title">Web Developer (Contracted Academic Project)  </h3>
          <h4 className="vertical-timeline-element-subtitle">Third Street Community Center</h4>
          <h4 className="vertical-timeline-element-subtitle">San Jose, California</h4>
          <p>
            • Successfully led the redesign of the Third Street Community Center&apos;s website using HTML, CSS, and JavaScript<br />
            • Improved the user experience by seamlessly integrating YouTube videos and photos into the website design<br />
            • Improved the organization and clarity of various pages through the removal of unnecessary text<br />
            • Facilitated online donations through the implementation of a donation page with PayPal integration
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(30,37,48)', color: '#D0D1D2' }}
          contentArrowStyle={{ borderRight: '9px solid  rgb(30,37,48)' }}
          date="August 2018 &#8211; May 2020"
          iconStyle={{ background: 'white', color: 'black' }}
          icon={<SJSULogo />}>
          <h3 className="vertical-timeline-element-title">Student at San Jose State University </h3>
          <h4 className="vertical-timeline-element-subtitle">BS - Business : Management Information Systems</h4>
          <h4 className="vertical-timeline-element-subtitle">San Jose, California</h4>
          <p>
            Here at San Jose State, I began taking courses in Management Information Systems where I learned how to
            apply technology to address business challenges and where I touched my first piece of code using Python and MySQL.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(30,37,48)', color: '#D0D1D2' }}
          contentArrowStyle={{ borderRight: '9px solid  rgb(30,37,48)' }}
          date="August 2014 &#8211; May 2018"
          iconStyle={{ background: 'white', color: 'black' }}
          icon={<SkylineLogo />}>
          <h3 className="vertical-timeline-element-title">Student at Skyline College </h3>
          <h4 className="vertical-timeline-element-subtitle">AA - Business Administration</h4>
          <h4 className="vertical-timeline-element-subtitle">San Bruno, California</h4>
          <p>
            As like many students, I attended a community college in search of my true career passion.
            I tried out many different majors before deciding on a business degree.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
