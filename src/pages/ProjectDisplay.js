import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectList } from '../helpers/ProjectList';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const url = project.link;
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p className="my-4" style={{ fontSize: '1rem' }}>
        <b className="my-2">Description:</b> {project.description} <br></br>
        <br></br>
 
        <b>Goal:</b> {project.goal}
        <br></br> <br></br>
        <b>What I Learned:</b> {project.learned}
        <br></br> <br></br>
        <b>Technology Stack:</b> {project.skills}
 
      </p>
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
  );
}

export default ProjectDisplay;
