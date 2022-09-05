import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col
              className='text-center fw-bolder my-5'
              style={{ color: '#E4E4E5', letterSpacing: '3px' }}
            >
Selina
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
