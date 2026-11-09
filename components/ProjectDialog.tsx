import React from "react";
import { Dialog } from "@material-ui/core";
import type { Project } from "@/data/types";
import TechCapsule from "./TechCapsule";
import ExternalArrowIcon from "./ExternalArrowIcon";

interface ProjectDialogProps extends Project {
  handleClose: () => void;
  open: boolean;
}

export default function ProjectDialog({
  giturl,
  handleClose,
  langUsed,
  longDescr,
  descr,
  category,
  open,
  title,
  url,
}: ProjectDialogProps) {
  const projectClass = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const handleLaunch = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank");
    } else if (giturl) {
      window.open(giturl, "_blank");
    }
  };

  const handleViewCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (giturl) {
      window.open(giturl, "_blank");
    } else if (url) {
      window.open(url, "_blank");
    } else {
      window.open("https://github.com/mstech66", "_blank");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="shared-modal-dialog"
      aria-labelledby="project-dialog-title"
      disableScrollLock
    >
      <div className={`shared-modal-container project-${projectClass}`}>
        <div className="shared-modal-header">
          <div className="shared-modal-controls" role="group" aria-label="Window controls">
            <button
              type="button"
              className="shared-modal-light shared-modal-light-close"
              onClick={handleClose}
              aria-label="Close dialog"
              title="Close"
            />
            <span className="shared-modal-light shared-modal-light-minimize" aria-hidden="true" />
            <span className="shared-modal-light shared-modal-light-maximize" aria-hidden="true" />
          </div>
          <div className="shared-modal-heading">
            {category && <span className="shared-modal-category">{category}</span>}
            <h2 id="project-dialog-title" className="shared-modal-title">{title}</h2>
            {descr && <p className="shared-modal-subtitle">{descr}</p>}
          </div>
        </div>

        <div className="shared-modal-body">
          <p className="shared-modal-descr">{longDescr || descr}</p>
        </div>

        <div className="shared-modal-footer">
          <TechCapsule values={langUsed} />

          <div className="shared-actions shared-modal-actions">
            <button
              type="button"
              className="shared-launch-btn"
              onClick={handleLaunch}
            >
              Launch
            </button>
            <button
              type="button"
              className="shared-code-link"
              onClick={handleViewCode}
            >
              View Code
              <ExternalArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
