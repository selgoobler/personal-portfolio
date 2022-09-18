import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';

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
    // animate={{ x: 100 }}
    // transition={{
    //   delay: 0.5,
    //   x: { duration: 1 },
    //   default: { ease: "linear" }
    // }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <div className="contact">
        <Box sx={{ flexGrow: 1,  }}>
          <Grid
            container
            spacing={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
      
          >
            <Card
              sx={{ width: 345 }}
            >
              <CardHeader
                className="text-center"
                title=" Let's Connect!"
                style={{
                  backgroundColor: '#5A82B3',
                  color: '#ffffff',
                  opacity: '0.5',
                }}
              ></CardHeader>
              <CardContent>
               
                <Typography variant="body2" color="text.secondary">
                  <div className="container contact__container">
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Name"
                        name="user_name"
                        required
                        className="mb-2 w-100"
                      />
                      <br></br>
                      <input
                        type="email"
                        placeholder="Email"
                        name="user_email"
                        className="mb-2 w-100"
                        required
                      />
                      <br></br>
                      <textarea
                        placeholder="Your message"
                        rows="5"
                        name="message"
                        className="mb-2 w-100"
                        required
                      ></textarea>
                      <div className=" text-center">
                        <Button
                          type="submit"
                          variant="light"
                          className="btn btn-primary"
                        >
                          <SendIcon />
                        </Button>
                      </div>

                      <div className="mt-2 text-center">
                        {message && (
                          <span>
                            Thank you for your message, I will respond as soon
                            as possible!
                          </span>
                        )}
                      </div>
                    </form>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </div>
    </motion.div>
  );
};

export default Contact;
