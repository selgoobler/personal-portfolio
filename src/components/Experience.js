import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
//center and add experience

import Popup from './Popup';


function Experience() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [timedPopUp, setTimedPopUp] = useState(false);

  useEffect (()=> {
    setTimeout(() => {
        setTimedPopUp(true)
    }, 3000)
  }, [])



  return (
    <div>
      <Container>
        <Row className='mt-5'>
          <Col xs={2}>
       
          </Col>
          <Col>
            <Card>
              <Card.Text>
                <CardHeader className='fs-3 text-center'>Experience</CardHeader>
                <Card.Body>
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
                  </Accordion>
                </Card.Body>
              </Card.Text>
            </Card>
          </Col>
          <Col xs={2}>
          <h2>Button Pop Up</h2>
            <Button variant ='light' onClick={() => setButtonPopUp(true)}>Button</Button>
            <Popup trigger={buttonPopUp} setTrigger ={setButtonPopUp}>
              <h3>My popup</h3>
            </Popup>
            <Popup trigger={timedPopUp} setTrigger ={setTimedPopUp}>
              <h3>My timed popup</h3>
            </Popup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
