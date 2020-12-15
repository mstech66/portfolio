import { React, useRef } from 'react';
import SocialBar from './components/SocialBar.js';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Fab, Paper } from '@material-ui/core';
import ProjectCard from './components/Card.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function App() {

  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#fafafa'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100%', borderRadius: '0px' }}>
        <div className="App">
          <div className="projects-wrapper">
            <Fab color="primary" onClick={() => scroll(-200)} aria-label="fwd" style={{ position: 'absolute', transform: 'translateY(-50%)', top: '50%', left: '0', zIndex: '100' }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Fab>
            <div className="projects-grid" ref={ref}>
              <ProjectCard title="Parchi" descr="Simple Personal Finance App" langUsed={['flutter', 'figma']} />
              <ProjectCard title="Smart Projector" descr="Raspberry Pi based Smart Class Solution" langUsed={['raspberrypi', 'python', 'node', 'js', 'firebase', 'css']} />
              <ProjectCard title="Crack Your Way" descr="A QR Code Based Trivia Game" langUsed={['node', 'mongo', 'js', 'css']} />
              <ProjectCard title="Crack Your Way" descr="A QR Code Based Trivia Game" langUsed={['node', 'mongo', 'js', 'css']} />
              <ProjectCard title="Crack Your Way" descr="A QR Code Based Trivia Game" langUsed={['node', 'mongo', 'js', 'css']} />
            </div>
            <Fab color="primary" onClick={() => scroll(200)} aria-label="fwd" style={{ position: 'absolute', transform: 'translateY(-50%)', top: '50%', right: '0', zIndex: '100' }}>
              <FontAwesomeIcon icon={faArrowRight} />
            </Fab>
          </div>
          <SocialBar />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
