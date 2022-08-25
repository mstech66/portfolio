import ProjectCard from "./cards/ProjectCard";
import { projects } from "../data/data.js";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects">
        <div className="card title-card">
          <span>Projects</span>
        </div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            url={project.url}
            giturl={project.giturl}
            descr={project.descr}
            longDescr={project.longDescr}
            langUsed={project.langUsed}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
