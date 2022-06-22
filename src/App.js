import { React, Component } from "react";
import SocialBar from "./components/SocialBar.js";
import bitmoji from "./images/bitmoji.png";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import ProjectCard from "./components/cards/ProjectCard.js";
import SkillsGrid from "./components/SkillsGrid.js";
import WallpaperComponent from "./components/sections/WallpaperComponent.js";
import AppsComponent from "./components/sections/AppsComponent.js";
import AssetsComponent from "./components/sections/AssetsComponent.js";
import ResumeComponent from "./components/sections/ResumeComponent.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.setState({
      open: false,
    });

    this.theme = createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          main: "#fafafa",
        },
      },
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <Paper
          style={{
            height: "100%",
            borderRadius: "0px",
            backgroundColor: "#1f2023",
          }}
        >
          <div className="App">
            <div className="flex-grid">
              <div className="bitmoji">
                <img src={bitmoji} id="space_ship" alt="Bitmoji" />
              </div>
              <div class="short-bio">
                <h2 class="name">Manthan Mevada</h2>
                <h3 class="bio">
                  Hello World, I am Manthan and I build things that makes{" "}
                  <i>almost</i> sense.<br></br> I am enthusiastic about
                  front-end frameworks and UI/UX to Bots and AI <br></br> Apart
                  from tech, I love to play video games, read books and draw.
                  <br></br> And, yeah I work at epam as an engineer.
                </h3>
                <div class="social-links">
                  <SocialBar />
                </div>
              </div>
            </div>
            <div className="projects-wrapper">
              <span className="project-title">Projects</span>
              <div className="projects-grid" ref={this.ref}>
                <ProjectCard
                  title="Parchi"
                  descr="Simple Personal Finance App"
                  longDescr="While learning Flutter, I was building up a Personal Finance App for fun which ended up being liked by my friends
                so I decided to design and develop it even better way. So, I designed the mockups in Figma and ended up creating the app
                with Flutter. I learnt about State Management and Animations in Flutter along the way and creating an app in Flutter felt
                so better than in Android. I haven't finished the app fully but will get it done soon :)"
                  langUsed={["flutter", "figma"]}
                />
                <ProjectCard
                  title="Smart Projector"
                  descr="Raspberry Pi based Smart Class Solution"
                  longDescr="Smart Projector is an all-in-one device for smart classes. Smart Projector is able to answer any question right away with Google Assistant, it doesn’t require a keyboard/mouse so you can touch the projection to interact with the digital pen by which you can draw and doodle on the surface."
                  langUsed={[
                    "raspberrypi",
                    "python",
                    "node",
                    "js",
                    "firebase",
                    "css",
                  ]}
                />

                <ProjectCard
                  title="Notify"
                  giturl="https://github.com/mstech66/notify-android"
                  descr="Digital Noticeboard in palm of your hands"
                  longDescr="Notify is an app which simplifies every day Noticeboards by digitizing them. It uses Firebase’s Topic Messaging
                Feature to sort notices to only for those to whom they are useful. Notify also includes a Dashboard for
                Administrator to easily send notices to students."
                  langUsed={[
                    "android",
                    "kotlin",
                    "firebase",
                    "node",
                    "js",
                    "css",
                  ]}
                />

                <ProjectCard
                  title="Crack Your Way"
                  url="http://cyw-srpec.herokuapp.com/"
                  giturl="https://github.com/mstech66/cyw"
                  descr="A QR Code Based Trivia Game"
                  longDescr="Crack Your Way is a fun trivia game with a bit complexity of QR-codes. Solve the questions and scan the QR codes to move further."
                  langUsed={["node", "mongo", "js", "css"]}
                />

                <ProjectCard
                  title="Matcher"
                  url="http://matcher.herokuapp.com/"
                  giturl="https://github.com/mstech66/matcher"
                  descr="Sample Combined DNA Indexing App"
                  longDescr="Inspired by Codis, I wanted to try out comparing two different csv files
                 which contains a mixture and a sample dna data for the possible suspects and trying to match the most matched
                  possible suspect. I built the web interface in Angular 7 with a very minimal design in mind. Without the correct input,
                  you won't be able to try it but you can check my live site hosted on heroku: http://matcher.herokuapp.com/"
                  langUsed={["angular", "node", "mongo", "js", "css"]}
                />

                <ProjectCard
                  title="InstaSaidSo!"
                  giturl="https://github.com/mstech66/instasaidso"
                  descr="Quotes App for Obsessive Instagrammers"
                  longDescr="Inspired by Instagram's minimalistic and popular design I wanted to try it out with css but then thought about
                 creating a quotes app which basically looks like an Instgram Clone :P Wanted to build it for desktop but electronjs didn't help me much.
                 Ended up creating a fully functioning website with a backend quotes api with jwt authentication leveraging the data in MongoDB."
                  langUsed={["angular", "mongo", "js", "css"]}
                />

                <ProjectCard
                  title="Google Server Sign-in"
                  giturl="https://github.com/mstech66/google-server-signin"
                  descr="Serverside Google Sign-In Guide"
                  longDescr="This is just a simple demo project where I implemented Google's Sign-In from Server-Side Application with Express and Node.
                 Thought it can be a guide to someone :)"
                  langUsed={["node", "js"]}
                />

                <ProjectCard
                  title="Breathe"
                  giturl="https://github.com/mstech66/breathe"
                  descr="Simple Breathe Reminder App"
                  longDescr="As a JavaScript enthusiastic, I wanted to build a simple desktop app which will remind you to breathe
                 from time to time. Why? cause I wanted to see if it's possible or not 😁
                 After trying, ElectronJs, React Native for Windows and Flutter.
                 I ended up trying C# and built a UWP App for Windows. Never doing it again!
                 In the process, get to learn some animations and with the help of CSS Tricks I created a subtle nice breathe animation in CSS 😋"
                  langUsed={["c#", "UWP", "css"]}
                />

                <ProjectCard
                  title="Sticker Maker"
                  url="https://mstech66.github.io/stickermaker/"
                  giturl="https://github.com/mstech66/stickermaker"
                  descr="Sticker Maker App built with Flutter 💙"
                  longDescr="I got tired of all the ads with the WhatsApp Sticker Apps 😛 So decided to make my own :)
                Designed the StickerMaker app with Figma 🧡 and Built with Flutter 💙 Just for Android 💚"
                  langUsed={["flutter", "figma", "android"]}
                />

                <ProjectCard
                  title="Portfolio"
                  url="https://mstech66.github.io/"
                  giturl="https://github.com/mstech66/stickermaker"
                  descr="Simple & Minimal Portfolio Website built with React ⚛️"
                  longDescr="Built a very simple and portfolio website with React and hosted it with Github Pages 🖤"
                  langUsed={["js", "react", "css", "node"]}
                />
              </div>
            </div>
            <div className="details-flex">
              <section className="skills-container">
                <SkillsGrid />
              </section>
              <section className="downloads-grid">
                <div className="downloads-title">Downloads</div>
                <WallpaperComponent classList="card downloads-card tile-ultrawide" />
                <AssetsComponent classList="card downloads-card tile-wide" />
                <AppsComponent classList="card downloads-card tile-vertical" />
                <ResumeComponent classList="card downloads-card tile-standard resume" />
              </section>
            </div>
            <div
              style={{
                margin: "12px",
                display: "grid",
                placeContent: "center",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>Manthan Mevada</span>
              <SocialBar />
            </div>
            <div class="waves">
              <div class="waveOne"></div>
              <div class="waveOne waveTwo"></div>
            </div>
          </div>
        </Paper>
      </ThemeProvider>
    );
  }
}

export default App;
