import { Paper, ThemeProvider, createTheme } from "@material-ui/core";
import Downloadables from "@/components/Downloadables";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SkillsContainer from "@/components/SkillsContainer";

const theme = createTheme({
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

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        style={{
          height: "100%",
          borderRadius: "0px",
          backgroundColor: "var(--bg-color)",
          boxShadow: "unset",
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
