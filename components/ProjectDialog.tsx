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
  open,
  title,
  url,
}: ProjectDialogProps) {
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
      <div className="shared-modal-container">
        {/* Close Button at Top Right */}
        <button
          type="button"
          className="shared-modal-close-btn"
          onClick={handleClose}
          aria-label="Close dialog"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title */}
        <h2 id="project-dialog-title" className="shared-modal-title">{title}</h2>

        {/* Subtitle */}
        {descr && <div className="shared-modal-subtitle">{descr}</div>}

        {/* Description Body */}
        <p className="shared-modal-descr">{longDescr || descr}</p>

        {/* Bottom Row (Identical to Card) */}
        <div className="shared-footer-row">
          <TechCapsule values={langUsed} />

          <div className="shared-actions">
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
