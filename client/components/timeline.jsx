import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LFZIcon from '../components/icons/lfz-icon';

export default function Timeline() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
        className="vertical-timeline-element--learningfuze"
          contentStyle={{ background: 'rgb(24,24,24)', color: '#8892b0' }}
        contentArrowStyle={{ borderRight: '9px solid  #62f8d5' }}
        date="2022 - present"
        iconStyle={{ background: 'white', color: 'black' }}
          icon={<LFZIcon />}>
          <h3 className="vertical-timeline-element-title">Teacher&apos;s Assistant (Full Stack Web Development)</h3>
          <h4 className="vertical-timeline-element-subtitle">Irvine, California</h4>
          <p>
            • Lead TA sessions for a Full Stack Web Development course assisting instructors and students with daily assignments <br />
            • Revamped and taught existing material on algorithms emphasizing real-world applications of runtime complexity <br />
            • Explained and demonstrated beginner to intermediate methodologies such as procedural, functional, and OOP <br />
            • Guided students toward efficient solutions in HTML, CSS, JS, React, Node.js, Express.js, PostgreSQL, etc.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
