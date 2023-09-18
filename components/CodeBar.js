import React from "react";
import react from "../public/assets/images/logo/react.png";
import android from "../public/assets/images/logo/android.png";
import angular from "../public/assets/images/logo/angular.png";
import css from "../public/assets/images/logo/css3.png";
import figma from "../public/assets/images/logo/figma2.png";
import firebase from "../public/assets/images/logo/firebase2.png";
import flutter from "../public/assets/images/logo/flutter2.png";
import git from "../public/assets/images/logo/bash.png";
import js from "../public/assets/images/logo/js.png";
import java from "../public/assets/images/logo/java2.png";
import kotlin from "../public/assets/images/logo/kotlin2.png";
import mongo from "../public/assets/images/logo/mongodb.png";
import node from "../public/assets/images/logo/nodejs.png";
import pi from "../public/assets/images/logo/pi.png";
import python from "../public/assets/images/logo/python.png";
import uwp from "../public/assets/images/logo/uwp.png";
import cs from "../public/assets/images/logo/cs.png";
import { Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const languages = {
  android: android,
  angular: angular,
  css: css,
  "c#": cs,
  figma: figma,
  firebase: firebase,
  flutter: flutter,
  git: git,
  java: java,
  js: js,
  kotlin: kotlin,
  mongo: mongo,
  node: node,
  python: python,
  react: react,
  raspberrypi: pi,
  UWP: uwp,
};

const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const StyledCodeLogo = styled(Image)({
  display: "inline-block",
  marginRight: "12px",
  width: "auto",
  height: "24px",
});

function CodeLogo(props) {
  return (
    <Tooltip title={capitalize(props.title)} placement="top">
      <StyledCodeLogo src={props.name} alt={capitalize(props.title)} />
    </Tooltip>
  );
}

function CodeBar(props) {
  return (
    <div style={{ margin: "24px 0px 0px 0px" }}>
      {props.values.map((value) => {
        return <CodeLogo key={value} name={languages[value]} title={value} />;
      })}
    </div>
  );
}

export default CodeBar;
