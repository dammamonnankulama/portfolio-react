import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../../components/Cards/ProjectCard'
import { projects } from '../../data/constants'
const Projects = ({ openModal, setOpenModal }) => {
const [toggle, setToggle] = useState('all');
  
    return (
      <Container id="projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
          </Desc>
          <ToggleButtonGroup>
            {['all', 'web app', 'android app', 'desktop app'].map((category) => (
              <React.Fragment key={category}>
                <ToggleButton
                  active={toggle === category}
                  value={category}
                  onClick={() => setToggle(category)}
                >
                  {category.toUpperCase().replace('_', ' ')}
                </ToggleButton>
                <Divider />
              </React.Fragment>
            ))}
          </ToggleButtonGroup>
          <CardContainer>
            {projects
              .filter((project) => toggle === 'all' || project.category === toggle)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  setOpenModal={setOpenModal}
                />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    );
  };
  

export default Projects