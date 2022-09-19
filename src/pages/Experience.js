import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import gh from '../assets/gh-cert.png';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <div style={{ color: '#3C5E87' }}>
            <div className="text-center">
              <h4 className="vertical-timeline-element-title">
                <b>Grace Hopper Program</b>
              </h4>
              <h6 className="vertical-timeline-element-title">
                <p className="mt-1 ">Fullstack Academy, New York, NY</p>
              </h6>
            </div>
            <br></br>

            <ul className="list">
            <div className="text-center">
                <b>Certificate of Completion</b>
              </div>
              <div className="d-flex justify-content-center mb-3">
                <img src={gh} alt="gh-cert" style={{ height: '15rem' }}></img>
              </div>
         
              <li className="item">
                A 17-week immersive software engineering program for women and
                non-binary students, based in New York City, centered on
                full-stack JavaScript development
              </li>
              <li>
                <b>Technology Stack:</b>
                <br></br>
                Node.js, Express, Sequelize ORM for PostgreSQL databases, React
                and Redux, React Native, Firebase, Firestore, Bootstrap, React
                Bootstrap, HTML, CSS, and CS fundamentals.
              </li>
              <li>
                <b> Developer tools used:</b> <br></br>
                Git, Postman, Postico, Visual Studio Code, Chrome Dev Tools,
                Jasmine, Mocha, Chai, Netlify, and Heroku.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <div style={{ color: '#3C5E87' }}>
            <div className="text-center">
              <h4 className="vertical-timeline-element-title">
                <b>Registered Nurse Care Manager</b>
              </h4>
              <h6 className="vertical-timeline-element-title">
                <p className="mt-1 ">Integra Managed Care, New York, NY</p>
              </h6>
            </div>
            <br></br>
            <ul>
              <li>
                Performed an average of 7 patient assessments daily remotely and
                followed up appropriately
              </li>
              <li>Managed a caseload of 130 patients monthly</li>
              <li>
                Educated patients on disease prevention and management,
                medication regimen, and plan of care
              </li>
              <li>
                Coordinated care and services for patients to provide
                individualized plans of care to improve quality of life
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <div style={{ color: '#3C5E87' }}>
            <div className="text-center">
              <h4 className="vertical-timeline-element-title">
                <b> Western Governors University</b>
              </h4>
              <h6 className="vertical-timeline-element-title">
                <p className="mt-1 ">
                  Masters of Science Degree in Nursing Informatics
                </p>
              </h6>
            </div>
            <br></br>

            <h6 className="vertical-timeline-element-subtitle">
              <ul>
                <li>
                  Nursing Informatics combines nursing, data management,
                  analyzation, and communication, to create and maintain data
                  that empowers healthcare facilities to continually improve and
                  provide quality health care
                </li>
                <li>
                  Program was fully remote with monthly contact with mentors
                </li>
                <li>
                  With mentor approval, I was able to accelerate my degree
                </li>
              </ul>
            </h6>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2021"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <div style={{ color: '#3C5E87' }}>
            <div className="text-center">
              <h4 className="vertical-timeline-element-title">
                <b>Registered Nurse</b>
              </h4>
              <h6 className="vertical-timeline-element-title">
                <p className="mt-1 ">
                  NYU Langone Orthopedic Hospital, New York, NY
                </p>
              </h6>
            </div>
            <br></br>
            <ul>
              <li>
                Worked on an orthopedic/COVID medical surgical unit with an
                average of 5 patients daily
              </li>
              <li>
                Educated patients/family about plan of care, safe practices,
                medications, and healthy lifestyles
              </li>
              <li>
                Collaborated with patients, their family, physicians, patient
                care technicians, pharmacists, and physical and occupational
                therapists to provide quality patient care
              </li>
              <li>
                Served as a charge nurse who was responsible for managing a 36
                bed unit, including patients and staff
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2016"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <div style={{ color: '#3C5E87' }}>
            <div className="text-center">
              <h4 className="vertical-timeline-element-title">
                <b> Hunter-Bellevue School of Nursing</b>
              </h4>
              <h6 className="vertical-timeline-element-title">
                <p className="mt-1 ">Bachelors of Science in Nursing</p>
              </h6>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
