import { React, Component } from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import SkillsContainer from "./components/SkillsContainer.js";
import Footer from "./components/Footer.js";
import Intro from "./components/Intro";
import Downloadables from "./components/Downloadables";
import Projects from "./components/Projects";

class App extends Component {
  constructor(props) {
    super(props);

    this.theme = createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          main: "#fafafa",
        },
        secondary: {
          main: "#e0e0e0",
        },
      },
    });

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    this.setState({
      open: false,
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
            <Intro />
            <Downloadables />
            <SkillsContainer />
            <Projects />
            <Footer />
          </div>
        </Paper>
      </ThemeProvider>
    );
  }
}

export default App;
