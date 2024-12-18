import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import { Container, Wrapper, Image, Title, Date, Tags, Tag, Desc, ButtonGroup, Button } from './ProjectDetailsStyles'


const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal open={openModal?.state} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              cursor: 'pointer',
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project?.date}</Date>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          <ButtonGroup>
            <Button dull href={project?.github} target="_blank" rel="noopener noreferrer">
              View Code
            </Button>

          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails