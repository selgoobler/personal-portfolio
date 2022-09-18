import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import '../styles/Description.css';

import ContactMailIcon from '@mui/icons-material/ContactMail';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import CheckIcon from '@mui/icons-material/Check';

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
import { techSkills, familiarSkills } from '../helpers/ProjectList';
import { testimonials } from '../helpers/Testimonials';

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
        <motion.div
          className="skills"
          // animate={{ x: 100 }}
          // transition={{
          //   delay: 0.5,
          //   x: { duration: 1 },
          //   default: { ease: 'linear' },
          // }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          <div className="list">
            <h1 className="mt-5 text-center fw-bold fs-2">Technical Skills</h1>
            <div className="description">
              <div className="descriptionGrid">
                <div className="descriptionList">
                  <h6>Languages/Frameworks</h6>
                  <br></br>

                  <div className="proficient">
                    {techSkills.map((skill) => (
                      <div>
                        <CheckIcon />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="descriptionList">
                  <h6>Tools</h6>
                  <br></br>
                  <div className="familiar">
                    {familiarSkills.map((skill) => (
                      <div>
                        <CheckIcon />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            href={resume}
            download
            style={{ color: '#ffffff', backgroundColor: '#6C9CD5' }}
          >
            Resume
          </Button>
        </motion.div>
        <br></br>
      </div>
    </motion.div>
  );
}

export default Home;
