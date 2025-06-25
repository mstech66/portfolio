import React, { useState } from "react";
import { Tooltip } from "@material-ui/core";
import {
  SiFirebase,
  SiFlutter,
  SiKotlin,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiGooglegemini,
  SiGooglesheets,
  SiVercel,
} from "react-icons/si";
import {
  FaAndroid,
  FaAngular,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaRaspberryPi,
  FaReact,
  FaStripeS,
  FaWindows,
} from "react-icons/fa";

// Map each icon name to its brand color
const brandColors = {
  android: "#3DDC84",
  angular: "#DD0031",
  css: "#1572B6",
  figma: "#F24E1E",
  firebase: "#FFCA28",
  flutter: "#02569B",
  git: "#F05032",
  java: "#007396",
  js: "#F7DF1E",
  kotlin: "#7F52FF",
  mongo: "#47A248",
  node: "#339933",
  python: "#3776AB",
  react: "#61DAFB",
  raspberrypi: "#C51A4A",
  UWP: "#0078D6",
  nextjs: "#000000",
  tailwind: "#06B6D4",
  gemini: "#4285F4",
  sheets: "#1BA360",
  stripe: "#635AFF"
};

const languages = {
  android: FaAndroid,
  angular: FaAngular,
  css: FaCss3,
  figma: FaFigma,
  firebase: SiFirebase,
  flutter: SiFlutter,
  git: FaGitAlt,
  java: FaJava,
  js: FaJs,
  kotlin: SiKotlin,
  mongo: SiMongodb,
  node: FaNodeJs,
  python: FaPython,
  react: FaReact,
  raspberrypi: FaRaspberryPi,
  UWP: FaWindows,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  gemini: SiGooglegemini,
  sheets: SiGooglesheets,
  stripe: FaStripeS,
  vercel: SiVercel
};

const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function CodeLogo(props) {
  const [hovered, setHovered] = useState(false);
  const CodeIcon = languages[props.name];
  const color = hovered ? brandColors[props.name] : "#888";

  return (
    <Tooltip title={capitalize(props.name)}>
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <CodeIcon className="codeLogo" color={color} size={32} />
      </span>
    </Tooltip>
  );
}

function CodeBar(props) {
  return (
    <div className="codeBarDiv">
      {props.values.map((value) => {
        return <CodeLogo key={value} name={value} title={value} />;
      })}
    </div>
  );
}

export default CodeBar;
