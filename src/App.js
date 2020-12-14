import React from 'react';
import SocialBar from './components/SocialBar.js';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';
import ProjectCard from './components/Card.js';

function App() {
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
      <Paper style={{ height: '100vh', borderRadius: '0px' }}>
        <div className="App">
          <div className="projects-grid">
            <ProjectCard title="Parchi" descr="Simple Personal Finance App" langUsed={['flutter', 'figma']} />
            <ProjectCard title="Smart Projector" descr="Raspberry Pi based Smart Class Solution" langUsed={['raspberrypi', 'python', 'node', 'js', 'firebase', 'css']} />
            <ProjectCard title="Crack Your Way" descr="A QR Code Based Trivia Game" langUsed={['node', 'mongo', 'js', 'css']} />
          </div>
          <SocialBar />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
