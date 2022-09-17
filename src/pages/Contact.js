import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';



 const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_ht6k6wj',
        'template_4pz8hjk',
        formRef.current,
        'aHY_HjDwtq_qNNxgt'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container className = 'contact-container'>
      <Row>
        <Col></Col>
        <Col>
          <Card className=' my-5' style = {{backgroundColor:'#5A82B3', color: '#ffffff'}}>
            <Card.Text>
              <CardHeader className='text-center fw-bolder'>
                Contact Me
              </CardHeader>{' '}
              <Card.Text className='m-3'>
                <div className='container contact__container'>
                  {/* <div className='contact__options'>
                  <article className='contact__option'>
                    <MdOutlineEmail className="contact__option-icon" />
                    <h4>Email</h4>
                    <h5>sselinang@gmail.com</h5>
                    <a href='mailto:sselinang@gmail.com'>Send a message</a>
                  </article>
                </div> */}
                  <form ref={formRef} onSubmit={handleSubmit} className='my-2'>
                    <input
                      type='text'
                      placeholder='Name'
                      name='user_name'
                      required
                      className='mb-2 w-100'
                    />
                    <br></br>
                    <input
                      type='text'
                      placeholder='Email'
                      name='user_email'
                      className='mb-2 w-100'
                      required
                    />
                    <br></br>
                    <textarea
                      placeholder='Leave a message'
                      rows='5'
                      name='message'
                      className='mb-2 w-100'
                      required
                    ></textarea>
                    <div className='mt-2 text-center'>
                      <Button type='submit' variant ='light' className='btn btn-primary'>
                        Send Message
                      </Button>
                    </div>

                    <div className='mt-2 text-center'>
                      {message && <span>Thank you for your message!</span>}
                    </div>
                  </form>
                </div>
              </Card.Text>
            </Card.Text>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </motion.div>
  );
};

export default Contact
