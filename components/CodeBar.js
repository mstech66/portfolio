import React from "react";
import { Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiFirebase, SiFlutter, SiKotlin, SiMongodb } from "react-icons/si";
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
  FaWindows,
} from "react-icons/fa";

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
};

const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function CodeLogo(props) {
  const CodeIcon = languages[props.name];

  return (
    <Tooltip title={capitalize(props.title)} placement="top">
      <div>
        <CodeIcon className="codeLogo" />
      </div>
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
