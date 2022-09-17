import React from 'react';
import { useParams } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import { motion } from 'framer-motion';

import '../styles/ProjectDisplay.css';
import { ProjectList } from '../helpers/ProjectList';

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
        <>
          {/* {project.link ? (
            <>
              <b>Link:</b> 
            </>
          ) : null} */}
        </>
        <b>Technology Stack:</b> {project.skills}
        <br></br>      <br></br>
        <b>Goal:</b> {project.goal}
        <br></br>      <br></br>
        <b>What I Learned:</b> {project.learned}
      </p>
      <GitHubIcon
        onClick={(event) =>
          (window.location.href = 'https://github.com/selgoobler')
        }
      />
    </div>
  );
}

export default ProjectDisplay;
