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
          <h3 className="vertical-timeline-element-title">Teacher&apos;s Assistant (Full Stack Web Development)</h3>
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
            Went back to school to learn full stack web dev.
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
            • Actively managed and grew a small portfolio with a 11% monthly average ROI over a period of 24 months <br />
            • Traded derivatives and underlying securities based on technical and fundamental analysis of price movement <br />
            • Performed Technical and Quantitative analysis to interpret chart patterns to pinpoint entry/exit for profitability <br />
            • Analyze current market trends using information technology and market psychology to capitalize on movement within stocks, options, and index market
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
            after getting my AA
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
            While in college, I had
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
            I didnt really know what I was doing. still discovering different majors
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
