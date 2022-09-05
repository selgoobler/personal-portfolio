import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import carouselbg from '../images/carousel.png';
import carouselHome from '../images/carousel-home.png';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container style={{ backgroundColor: '#00000' }}>
        <Row>
          <Col></Col>
          <Col>
            <Carousel fade className='mt-5'>
              <Carousel.Item>
                <img
                  className=''
                  src={carouselHome}
                  alt='First slide'
                  style={{ height: '32rem', width: '45rem' }}
                />
                <Carousel.Caption>
                  <strong>
                    <h3 className='fw-bolder'>Welcome!</h3>
                  </strong>

                  <p>
                    Hi, my name is Selina Ng! <br></br>I am a software engineer
                    that is a recent graduate of the Grace Hopper Program at
                    Fullstack Academy.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=''
                  src={carouselbg}
                  alt='Second slide'
                  style={{ height: '32rem', width: '45rem' }}
                />

                <Carousel.Caption>
                  <strong>
                    <h3 className='fw-bolder'>About Me</h3>
                  </strong>

                  <p>
                    An enthusiastic and ambitious individual with a passion for
                    learning.
                  </p>
                  <strong>
                    <h5 className='fw-bolder'>My Background</h5>
                  </strong>
                  <p>
                    I am a registered nurse with a degree in nursing
                    informatics, aspiring to become a software engineer! Working
                    in healthcare exposed me to healthcare technology and
                    innovations that piqued my interest in technology and
                    software. I decided to further my interest and I am a recent
                    graduate from the Grace Hopper Program at Fullstack Academy.
                    I am excited to develop skills that will be used to create
                    large, impactful technology!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=''
                  src={carouselbg}
                  alt='Third slide'
                  style={{ height: '32rem', width: '45rem' }}
                />

                <Carousel.Caption>
                  <strong>
                    <h3 className='fw-bolder'> Skills</h3>
                  </strong>
                  <br></br>

                  <p>
                    <strong>
                      <h6 className='fw-bolder'>Proficient:</h6>
                    </strong>
                    JavaScript, React, React-Redux, React Bootstrap, HTML, CSS,
                    Node.js, Sequelize ORM, Firebase, Firestore, PostgreSQL,
                    Netlify, and Express <br></br> <br></br>
                    <strong>
                      <h6 className='fw-bolder'>Knowledgeable:</h6>
                    </strong>Stripe, Chai,
                    Jasmine, Mocha, Heroku, Expo, and React Native
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=''
                  src={carouselbg}
                  alt='Fourth slide'
                  style={{ height: '32rem', width: '45rem' }}
                />

                <Carousel.Caption>
                  <strong>
                    <h3>Experience</h3>
                  </strong>

                  <p>Experience here.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=''
                  src={carouselbg}
                  alt='Fourth slide'
                  style={{ height: '32rem', width: '45rem' }}
                />

                <Carousel.Caption>
                  <strong>
                    <h3>Experience</h3>
                  </strong>

                  <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header style={{ color: '#7D2084' }}>
                        Nurse Care Manager at Integra Managed Care
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                      <Accordion.Header>
                        Staff Registered Nurse at NYU Langone Hospital
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                      <Accordion.Header>
                        Student Nurse Extern at NYU Langone Hospital
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                      <Accordion.Header>
                        Research Associate at NYU Langone Hospital
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='4'>
                      <Accordion.Header>
                        Community Outreach at ACLU
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </motion.div>
  );
}
