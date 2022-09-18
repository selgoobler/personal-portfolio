import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

import ContactMailIcon from '@mui/icons-material/ContactMail';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import me from '../assets/selina.png';
import resume from '../assets/resume.pdf';

import Popup from '../components/Popup';

function Home() {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);

  const handleContact = () => {
    setPopUp(!popUp);
  };

  return (
    <motion.div
      className="main-container"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="home">
        <div className="about">
          <h2>Hi, I'm Selina!</h2>

          <img src={me} alt="selfie"></img>
          <div className="prompt">
            <p>
              A full stack developer with a passion for learning and creating.
            </p>
            {/* <LinkedInIcon
              onClick={(event) =>
                (window.location.href =
                  'https://www.linkedin.com/in/sselinang/')
              }
            />
            <a href="mailto:sselinang@gmail.com">
              <EmailIcon />
            </a>

            <GithubIcon
              onClick={(event) =>
                (window.location.href = 'https://github.com/selgoobler')
              }
            /> */}
          </div>
          <div className="action">
            <ContactMailIcon onClick={handleContact} sx={{ fontSize: 50 }} />
            <Popup trigger={popUp} setTrigger={setPopUp}></Popup>
          </div>
        </div>
        <div className="skills">Welcome to my portfolio page!</div>
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
        <br></br>
        <Button
          variant="contained"
          href={resume}
          download
          style={{ color: '#ffffff', backgroundColor: '#6C9CD5' }}
          // className="mt-3"
        >
          Resume
        </Button>
      </div>
    </motion.div>
  );
}

export default Home;
