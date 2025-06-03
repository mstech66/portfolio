import { React, Component } from "react";
import Intro from "@/components/Intro";
import Downloadables from "@/components/Downloadables";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SkillsContainer from "@/components/SkillsContainer";
import { Paper, ThemeProvider, createTheme } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);

    this.theme = createTheme({
      palette: {
        type: "dark",
        primary: {
          main: "#fafafa",
        },
        secondary: {
          main: "#e0e0e0",
        },
      },
      typography: {
        allVariants: {
          color: "#fafafa",
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
            backgroundColor: "var(--bg-color)",
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
