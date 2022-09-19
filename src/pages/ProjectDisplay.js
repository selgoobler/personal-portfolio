import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectList } from '../helpers/ProjectList';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/ProjectDisplay.css';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Goals() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <>
      <div className="projectCardTitle">Goals</div>
      <div className="projectCardText">{project.goal}</div>
      <div className="projectCardTitle">What I Learned</div>
      <div className="projectCardText">{project.learned}</div>
    </>
  );
}

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const [showGoals, setShowGoals] = useState(false);



  return (
    <motion.div

      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="project"
    >
      <div className="projectGrid">
        <img src={project.image} />
        <div className="projectContent">
          <Card>
            <h1> {project.name}</h1>
            <br></br>
            <div className="projectCardText">{project.description}</div>
            <div className="projectCardText">
              <strong style = {{color: '#8493A5'}}>Tech Stack</strong>
              <br></br>
              {project.skills}
            </div>
            <div className="projectGrid">
              <ExpandMoreIcon onClick={() => setShowGoals(!showGoals)} />
              {showGoals && <Goals>show/hide typography</Goals>}
            </div>
          </Card>
        </div>
        <br></br>
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
    </motion.div>
  );
}

export default ProjectDisplay;
