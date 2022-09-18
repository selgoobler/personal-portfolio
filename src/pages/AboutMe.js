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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img src={about} alt="me" className="about-container about-image"></img>
      </motion.div>

      <div className="aboutMe">
        <div className="testList">
          <div className="testCard">
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
                    <div className="testTitle">
                      <img src={image} alt="Peer one" />
                      <h3>{name}</h3>
                      <a href={link} target="_blank" rel="noreferrer">
                        <LinkedInIcon
                          color="primary"
                          style={{ marginLeft: '1rem' }}
                          sx={{ fontSize: 50 }}
                        />
                      </a>
                    </div>
                    <p className='testText'>{recommendation}</p>
                    <br></br>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>

        <Button
          variant="contained"
          href={resume}
          download
          style={{ color: '#ffffff', backgroundColor: '#6C9CD5' }}
        >
          Download Resume
        </Button>
      </div>
    </motion.div>
  );
}
