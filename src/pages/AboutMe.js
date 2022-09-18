import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/AboutMe.css';

import resume from '../assets/resume.pdf';
import Button from '@mui/material/Button';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { testimonials } from '../helpers/Testimonials';
import about from '../assets/about-me.png';

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <motion.div className="about-container">
      <img src={about} alt="me" className="about-container about-image"></img>

      <div className="aboutMe">
        {/* <h1 className="mt-5 mb-2 text-center fw-bold fs-2">Testimonies</h1> */}
        <div className="testList">
          <Swiper
            className="container testimonials_container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {testimonials.map(
              ({ image, name, link, recommendation }, index) => (
                <SwiperSlide key={index} className="testimonial">
                  <div className="descriptionTitle">
                    <img src={image} alt="Peer one" />
                    <h2>{name}</h2>
                    <a href={link} target="_blank" rel="noreferrer">
                      <LinkedInIcon color="disabled" />
                    </a>
                  </div>
                  <p>{recommendation}</p>
                  <br></br>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        {/* <div>
            
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
          </div> */}
        <Button
          variant="contained"
          href={resume}
          download
          style={{ color: '#ffffff', backgroundColor: '#6C9CD5' }}
        >
          Download Resume
        </Button>
      </div>
      <div className="pt-3"></div>
    </motion.div>
  );
}
