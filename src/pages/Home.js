import React, { useState } from 'react';
import { motion } from 'framer-motion';

import '../styles/Home.css';
import '../styles/Description.css';
import me from '../assets/selina.png';
import Popup from '../components/Popup';
import { languages, tools } from '../helpers/ProjectList';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import CheckIcon from '@mui/icons-material/Check';

function Home() {
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
          <motion.div animate={{ rotate: 360 }}>
            <img src={me} alt="selfie"></img>
          </motion.div>

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

            <div className="action">
              <ContactMailIcon onClick={handleContact} sx={{ fontSize: 50 }} />
              <Popup trigger={popUp} setTrigger={setPopUp}></Popup>
            </div>
          </div>
        </div>
        <motion.div
          className="skills"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="list">
            <div className="description">
              <h1 className="">Technical Skills</h1>
              <div className="descriptionGrid">
                <div className="descriptionList">
                  <h6>Languages/Frameworks</h6>
                  <div className="proficient">
                    {languages.map((skill) => (
                      <div>
                        <CheckIcon />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="descriptionList">
                  <h6>Tools</h6>
                  <div className="proficient">
                    {tools.map((skill) => (
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
          <br></br>
        </motion.div>
      </div>
      
    </motion.div>
  );
}

export default Home;
