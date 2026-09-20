import React from "react";
import ProjectCard from "./cards/ProjectCard";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section className="projects-wrapper" id="projects">
      <div className="shared-projects-container">
        <div className="shared-projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
