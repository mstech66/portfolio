import React, { useState } from "react";
import ProjectDialog from "../ProjectDialog";
import TechCapsule from "../TechCapsule";
import ExternalArrowIcon from "../ExternalArrowIcon";
import type { Project } from "@/data/types";

export default function ProjectCard(project: Project) {
  const [open, setOpen] = useState(false);

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
        className="shared-project-card"
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
        <div className="shared-card-content">
          <h3 className="shared-card-title">{project.title}</h3>
          {project.descr && (
            <p className="shared-card-subtitle">{project.descr}</p>
          )}
        </div>

        <div className="shared-footer-row">
          <TechCapsule values={project.langUsed} maxIcons={3} />

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
