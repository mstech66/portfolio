import { useState } from "react";
import type { ResumeResponse } from "@/data/types";

interface ResumeComponentProps {
  classList?: string;
}

export default function ResumeComponent({ classList }: ResumeComponentProps) {
  const [loading, setLoading] = useState(false);
  const title = "Resume";

  const handleOpen = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/storage?object=resume", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { url } = (await response.json()) as ResumeResponse;
      if (url) {
        window.open(url, "_blank");
      }
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`download-card tile-resume ${classList ?? ""}`}
      onClick={() => void handleOpen()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") void handleOpen();
      }}
    >
      {/* Header with Title and Circle Arrow */}
      <div className="download-card-header">
        <h3 className="download-card-title">{title}</h3>
        <div className="download-arrow-btn">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>

      {/* Subtitle */}
      <p className="download-card-subtitle">
        Career History Key Achievements at a glance
      </p>

      {/* Resume Document Card Preview */}
      <div className="download-card-preview">
        <div className="resume-preview-card">
          <div className="resume-sheet">
            <div className="resume-sheet-header">
              <div className="resume-sheet-identity">
                <span className="resume-sheet-name">Manthan Mevada</span>
                <span className="resume-sheet-role">Frontend Developer</span>
              </div>
              <div className="resume-pdf-pill">
                <span className="resume-pdf-tag">
                  {loading ? "..." : "PDF"}
                </span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
            </div>

            <div className="resume-sheet-body">
              <div className="resume-line-bold" />
              <div className="resume-line-light" />
              <div className="resume-line-light" />
              <div className="resume-line-light short" />
            </div>

            <div className="resume-sheet-footer">
              <span className="resume-pill-tag">React</span>
              <span className="resume-pill-tag">Next.js</span>
              <span className="resume-pill-tag">TypeScript</span>
              <span className="resume-pill-tag">Flutter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
