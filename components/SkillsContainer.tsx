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

const skillIcons: React.ElementType[] = [
  FaHtml5 as React.ElementType,
  FaCss3Alt as React.ElementType,
  FaSass as React.ElementType,
  SiBootstrap as React.ElementType,
  SiJquery as React.ElementType,
  SiJavascript as React.ElementType,
  SiTypescript as React.ElementType,
  LiaNode as React.ElementType,
  FaReact as React.ElementType,
  SiNextdotjs as React.ElementType,
  SiExpress as React.ElementType,
  FaJava as React.ElementType,
  FaAws as React.ElementType,
  SiFirebase as React.ElementType,
  SiFigma as React.ElementType,
  FaGitAlt as React.ElementType,
  SiMongodb as React.ElementType,
  SiMysql as React.ElementType,
  SiFlutter as React.ElementType,
];

function Skills() {
  return (
    <>
      {skillIcons.map((Icon, index) => (
        <Icon key={index} />
      ))}
    </>
  );
}

export default function SkillsContainer() {
  return (
    <div className="details-flex">
      <div className="skills-container">
        {/* Authentic Red Jeans Cloth Tab */}
        <div className="section-label jeans-red-tab" title="Skills">
          <span className="section-title skills-title jeans-tab-text">Skills</span>
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
