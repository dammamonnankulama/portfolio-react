import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utilities/themes';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';



const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`

background: linear-gradient
(
  38.73deg,
rgba(204, 0, 187, 0.15) 0%,
rgba(201, 32, 184, 0) 50%
),
 linear-gradient(141.27deg, 
 rgba(0, 70, 209, 0) 50%,
 rgba(0, 70, 209, 0.15) 100%
 );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;


function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />

            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </Wrapper>
          <Education />
          <Wrapper>
          <Contact />
          </Wrapper>
          <Footer />
          
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
