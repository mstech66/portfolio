import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJava,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiJquery,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiFlutter,
} from "react-icons/si";

function SkillsContainer() {
  const Skills = () => {
    return (
      <>
        <FaHtml5 />
        <FaCss3Alt />
        <FaSass />
        <SiBootstrap />
        <SiJquery />
        <SiJavascript />
        <SiTypescript />
        <LiaNode />
        <FaReact />
        <SiNextdotjs />
        <SiExpress />
        <FaJava />
        <FaAws />
        <SiFirebase />
        <SiFigma />
        <FaGitAlt />
        <SiMongodb />
        <SiMysql />
        <SiFlutter />
      </>
    );
  };
  return (
    <div className="details-flex">
      <div className="skills-container">
        <div className="section-label">
          <span className="section-title skills-title">Skills</span>
        </div>
        <div className="skills-overflow">
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default SkillsContainer;
