import { IconButton } from "@material-ui/core";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Intro = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleDarkToggle = () => {
    setIsDarkMode((prevDarkModeState) => !prevDarkModeState);
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <div className="main-content">
      <IconButton
        className="!m-4 !absolute !right-0 !top-0"
        onClick={handleDarkToggle}
      >
        {isDarkMode ? (
          <FaSun color="var(--text-color)" />
        ) : (
          <FaMoon color="var(--text-color)" />
        )}
      </IconButton>
      <h2 className="name">Manthan Mevada</h2>
      <h3 className="description">
        Enthusiastic about UI/UX and Front End Development
      </h3>
      <div
        className="mac-div"
        style={{
          background: 'url("/assets/images/mac1.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          userSelect: "none",
          maxHeight: "800px",
          position: "relative",
          height: "800px",
          width: "1000px",
        }}
      >
        <img
          src="/assets/images/epam1.png"
          id="epamLogo"
          alt="EPAM Systems Logo"
          className="absolute right-[3%] top-[14%] w-[15%] transition-all duration-200 rotate-45"
        />
        <img
          src="/assets/images/node.png"
          id="nodeLogo"
          alt="Node.JS Logo"
          className="absolute right-[20%] top-[15%] w-[15%] transition-all duration-200"
        />
        <img
          src="/assets/images/react.png"
          id="reactLogo"
          alt="React.js Logo"
          className="absolute left-[5%] top-[15%] w-[15%] transition-all duration-200"
        />
        <img
          src="/assets/images/js.png"
          id="jsLogo"
          alt="JavaScript Logo"
          className="absolute bottom-[10%] left-[5%] w-[10%] transition-all duration-200"
        />
        <img
          src="/assets/images/ts.png"
          id="tsLogo"
          alt="TypeScript Logo"
          className="absolute left-[18%] bottom-[10%] w-[10%] transition-all duration-200"
        />
        <img
          src="/assets/images/html.png"
          id="htmlLogo"
          alt="HTML Logo"
          className="absolute left-[5%] top-[40%] w-[10%] transition-all duration-200"
        />
        <img
          src="/assets/images/css.png"
          id="cssLogo"
          alt="CSS Logo"
          className="absolute left-[10%] top-[40%] w-[10%] transition-all duration-200"
        />
        <img
          src="/assets/images/flutter.png"
          id="flutterLogo"
          alt="Flutter Logo"
          className="absolute right-[5%] bottom-[10%] w-[15%] transition-all duration-200"
        />
        <img
          src="/assets/images/sass.png"
          id="sassLogo"
          alt="Sass Logo"
          className="absolute left-[22%] top-[45%] w-[13%] transition-all duration-200 -rotate-[15deg]"
        />
        <img
          src="/assets/images/git.png"
          id="gitLogo"
          alt="Github Logo"
          className="absolute left-[35%] top-[20%] w-[10%] transition-all duration-200"
        />
        <img
          src="/assets/images/figma.png"
          id="figmaLogo"
          alt="Figma Logo"
          className="absolute right-[5%] top-[42%] w-[12%] transition-all duration-200"
        />
        <img
          src="/assets/images/AWS.png"
          id="awsLogo"
          alt="AWS Logo"
          className="absolute right-[20%] bottom-[20%] w-[12%] transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default Intro;
