import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Description.css';
import '../styles/Home.css';


import CheckIcon from '@mui/icons-material/Check';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { testimonials } from '../helpers/Testimonials';

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <motion.div>
      <span>
          I am a curious person with a passion for growth, as exemplified by my
          healthcare career and educational accomplishments. I know that when I
          want to achieve something, it is attainable through hard work and
          dedication. An example is my iOS application created with React Native
          and Expo Go for my weekend stackathon project during the Grace Hopper
          program. Those are two new technologies I learned in a small span of
          time, shortly after completing an intense sprint of an e-commerce
          project.
        </span>
      
      <div className="description">
        <h1 className="mt-5 text-center fw-bold fs-2">Testimonies</h1>
        <div className="testList">
          <div>
            {testimonials.map((testimony) => (
              <div>
                <Card className="testCard">
                  <Typography>
                    <span className="descriptionTitle">
                      <img alt="peer" src={testimony.image}></img>
                      {testimony.name}

                      <LinkedInIcon
                        className="mt-1 ms-2"
                        onClick={(event) =>
                          (window.location.href = `${testimony.link}`)
                        }
                      />
                    </span>
                    <br></br>
                    <div className="testText"> {testimony.recommendation}</div>
                  </Typography>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
