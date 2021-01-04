import { React, Component } from 'react';
import SocialBar from './components/SocialBar.js';
import bitmoji from './images/bitmoji.png';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';
import ProjectCard from './components/Card.js';
import SkillsGrid from './components/SkillsGrid.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.theme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          main: '#fafafa'
        }
      },
    });
  }

  render() {
    return <ThemeProvider theme={this.theme}>
      <Paper style={{ height: '100%', borderRadius: '0px', backgroundColor: '#1f2023' }}>
        <div className="App">
          <div className="flex-grid">
            <div className="bitmoji"><img src={bitmoji} id="space_ship" alt="Bitmoji" /></div>
            <div class="short-bio">
              <h2 class="name">Manthan Mevada</h2>
              <h3 class="bio">Hello World, I am Manthan and I build things that makes <i>almost</i> sense.<br></br> I am
                enthusiastic about front-end frameworks and UI/UX to Bots and AI <br></br> Apart from tech, I love to play
                video games,
                read books and draw.<br></br> And,
                  yeah I work at epam as an engineer.
            </h3>
              <div class="social-links">
                <SocialBar />
              </div>
            </div>
          </div>
          <div className="projects-wrapper">
            <span className="project-title">Projects</span>
            <div className="projects-grid" ref={this.ref}>
              <ProjectCard title="Parchi" descr="Simple Personal Finance App" langUsed={['flutter', 'figma']} />
              <ProjectCard title="Smart Projector" descr="Raspberry Pi based Smart Class Solution" langUsed={['raspberrypi', 'python', 'node', 'js', 'firebase', 'css']} />
              <ProjectCard title="Notify" url="https://github.com/mstech66/notify-android" descr="Digital Noticeboard in palm of your hands" langUsed={['android', 'kotlin', 'firebase', 'node', 'js', 'css']} />
              <ProjectCard title="Crack Your Way" url="https://github.com/mstech66/cyw" descr="A QR Code Based Trivia Game" langUsed={['node', 'mongo', 'js', 'css']} />
              <ProjectCard title="Matcher" url="https://github.com/mstech66/matcher" descr="Sample Combined DNA Indexing App" langUsed={['angular', 'node', 'mongo', 'js', 'css']} />
              <ProjectCard title="InstaSaidSo!" url="https://github.com/mstech66/instasaidso" descr="Quotes App for Obsessive Instagrammers" langUsed={['angular', 'mongo', 'js', 'css']} />
              <ProjectCard title="Google Server Sign-in" url="https://github.com/mstech66/google-server-signin" descr="Serverside Google Sign-In Guide" langUsed={['node', 'js']} />
              <ProjectCard title="Breathe" url="https://github.com/mstech66/breathe" descr="Simple Breathe Reminder App" langUsed={['c#', 'UWP', 'css']} />
            </div>
          </div>
          <div className="details-flex">
            <section className="skills-container">
              <SkillsGrid />
            </section>
            <section className="downloads-grid">
              <div className="downloads-title">
                Downloads
              </div>
              <div className="card downloads-card tile-ultrawide">
                Wallpapers
            </div>
              <div className="card downloads-card tile-wide">
                Assets
            </div>
              <div className="card downloads-card tile-vertical">
                Apps
            </div>
            </section>
          </div>
          <div style={{ margin: '12px', display: 'grid', placeContent: 'center', textAlign: 'center' }}>
            <span style={{ fontSize: '1.5rem'}}>Manthan Mevada</span>
            <SocialBar />
          </div>
        </div>
      </Paper>
    </ThemeProvider>;
  }
}

export default App;
