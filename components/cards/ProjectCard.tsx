import React, { useState } from "react";
import ProjectDialog from "../ProjectDialog";
import TechCapsule from "../TechCapsule";
import ExternalArrowIcon from "../ExternalArrowIcon";
import type { Project } from "@/data/types";

export default function ProjectCard(project: Project) {
  const [open, setOpen] = useState(false);
  const categoryClass = project.category
    ? project.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    : "general";
  const projectClass = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const handleLaunchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.url) {
      window.open(project.url, "_blank");
    } else if (project.giturl) {
      window.open(project.giturl, "_blank");
    } else {
      setOpen(true);
    }
  };

  const handleViewCodeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.giturl) {
      window.open(project.giturl, "_blank");
    } else if (project.url) {
      window.open(project.url, "_blank");
    } else {
      window.open("https://github.com/mstech66", "_blank");
    }
  };

  return (
    <>
      <div
        className={`shared-project-card project-card-${categoryClass} project-${projectClass}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div className="shared-card-hero">
          <div className="shared-card-heading">
            {projectClass === "parchi" ? (
              <img
                className="shared-card-app-icon"
                src="/assets/previews/app_parchi.png"
                alt=""
              />
            ) : (
              <span className="shared-card-app-icon" aria-hidden="true">
                {project.title.charAt(0)}
              </span>
            )}
            <h3 className="shared-card-title">{project.title}</h3>
          </div>
          {project.descr && (
            <p className="shared-card-subtitle">{project.descr}</p>
          )}
          <div className="shared-actions">
            <button
              type="button"
              className="shared-launch-btn"
              onClick={handleLaunchClick}
            >
              Launch
            </button>
            <button
              type="button"
              className="shared-code-link"
              onClick={handleViewCodeClick}
            >
              View Code
              <ExternalArrowIcon />
            </button>
          </div>
        </div>

        <div className="shared-footer-row">
          <div className="shared-card-compatibility">
            <span>Compatibility</span>
            <strong>{project.compatibility || project.category || "Personal project"}</strong>
          </div>
          <TechCapsule values={project.langUsed} maxIcons={3} />
        </div>
      </div>

      {open && (
        <ProjectDialog
          open={open}
          handleClose={() => setOpen(false)}
          {...project}
        />
      )}
    </>
  );
}
