import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectList } from '../helpers/ProjectList';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/ProjectDisplay.css';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Card from '@mui/material/Card';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <div className="projectGrid">
        <img src={project.image} />
        <div className="projectContent">
          <Card>
            <h1> {project.name}</h1>
            <div className="projectCardText">
              {project.description} <br></br>
            </div>{' '}
            <div className="projectCardTitle">Technology Stack:</div>
            <div className="projectCardText">{project.skills}</div>
            <div className="projectCardTitle">Goal:</div>
            <div className="projectCardText">{project.goal}</div>
            <div className="projectCardTitle">What I Learned</div>
            <div className="projectCardText">{project.learned}</div>
    
       
          </Card>
        </div>
        <>
          {project.link ? (
            <span>
              <ArrowCircleRightIcon
                style={{ width: '4rem' }}
                onClick={(event) => (window.location.href = `${project.link}`)}
              />
            </span>
          ) : null}
        </>
      </div>
    </div>
  );
}

export default ProjectDisplay;
