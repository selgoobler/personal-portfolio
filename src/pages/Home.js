import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import me from '../styles/selina.png';
import resume from '../assets/resume.pdf';
import { techSkills, testimonials } from '../helpers/ProjectList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Home() {
  const navigate = useNavigate();
  const techSkillsSplit = techSkills.slice(Math.floor(techSkills.length / 2));
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
          <img
            src={me}
            alt="selfie"
            style={{ maxHeight: '20rem', marginTop: '5rem' }}
          ></img>
          <div className="prompt">
            <p>
              A full stack developer with a passion for learning and creating.
            </p>
            <LinkedInIcon
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
            />
          </div>
          <div className="action">
            <Button
              variant="contained"
              href={resume}
              download
              style={{ color: '#ffffff', backgroundColor: '#6C9CD5' }}
              className="mt-3"
            >
              Download Resume
            </Button>
          </div>
        </div>
        <div className="skills">
          <h1 className="mt-3 fw-bold fs-2">Technical Skills</h1>
          <div className="list">
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: '2rem' }}
              >
                <Grid container item spacing={2}></Grid>
                <Grid item xs={4}>
                  <Card
                    sx={{
                      maxWidth: 275,
                      minHeight: 250,
                      boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        className="mb-3 text-center fw-bold"
                        style={{ fontFamily: 'revert', color: '#3C5E87' }}
                      >
                        Proficient
                      </Typography>
                      <Typography
                        variant="body2"
                        // className="mb-1 mx-2"
                        style={{ fontFamily: 'revert', color: '#3C5E87' }}
                      >
                        {/* {techSkills.map((skill) => (
                          <>
                           <p>{skill}</p>
                      
                          </>
                        ))} */}
                        NodeJS, Javascript, React, Redux, Express, Git, Github,
                        HTML5, CSS, Sequelize, PostgreSQL, Cloud Firestore
                        NoSQL, Firebase, React Bootstrap, Netlify, Faker, Framer
                        Motion
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => navigate('/projects')}
                        size="small"
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card
                    sx={{
                      maxWidth: 275,
                      height: 250,
                      boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        className="mb-3  text-center fw-bold"
                        style={{ fontFamily: 'revert', color: '#3C5E87' }}
                      >
                        Knowledgable
                      </Typography>
                      <Typography
                        variant="body2"
                        className="mb-3 mx-2"
                        style={{ fontFamily: 'revert', color: '#3C5E87' }}
                      >
                        React Native, Jasmine, Mocha, Chai, Stripe, Material UI,
                        Expo Go, Heroku
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => navigate('/projects')}
                        size="small"
                        className="mt-5"
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </div>
          <div>
            <h1 className="mt-5 text-center fw-bold fs-2">Testimonials</h1>
          </div>
          <div className="list">
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: '2rem' }}
              >
                <Grid container item spacing={2}></Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      width: 400,
                      height: 300,
                      boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        className="mb-3 text-center fw-bold fs-5"
                        style={{ fontFamily: 'revert', color: '#3C5E87' }}
                      >
                        Donna Sayos      <LinkedInIcon
                          onClick={(event) =>
                            (window.location.href =
                              'https://www.linkedin.com/in/dsayos/')
                          }
                        />
                      </Typography>
                      <Typography
                        variant="body2"
                        // className="mb-1 mx-2"
                        style={{ fontFamily: 'revert', color: '#3C5E87' }}
                      >
                        {/* TODO: array skills and testimonials */}
                        {/* {techSkills.map((skill) => (
                          <>
                           <p>{skill}</p>
                      
                          </>
                        ))} */}
                        Selina is an amazing person. She is hardworking,
                        passionate at everything that she does, and is a team
                        player. I enjoyed working with her with our Ecommerce
                        website project and would love to work with her again in
                        the future. We even stayed up multiple nights together
                        to work on our project. Ohh the memories.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      width: 400,
                      height: 300,
                      boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        className="mb-3  text-center fw-bold fs-5"
                        style={{ fontFamily: 'revert', color: '#3C5E87' }}
                      >
                        Amy Morrisett{' '}
                        <LinkedInIcon
                          onClick={(event) =>
                            (window.location.href =
                              'https://www.linkedin.com/in/amy-morrisett/')
                          }
                        />
                   
                      </Typography>
                      <Typography
                        variant="body2"
                        className="mb-5 mx-2"
                        style={{ fontFamily: 'revert', color: '#3C5E87' }}
                      >
                        Selina was one of my teammates for our Grace Hopper
                        Program capstone project. I found myself continually
                        impressed by her incredible drive and curiosity; she was
                        always willing to put in extra work to learn new
                        technologies (like Firebase) and was never deterred by
                        roadblocks we encountered. Selina's excellent
                        communication skills, top-notch work ethic, and
                        inquisitive nature would make any team very lucky to
                        work alongside her.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
