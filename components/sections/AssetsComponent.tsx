import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import data from "../../data/config";
import AssetsCard from "../cards/AssetsCard";
import FullScreenDialog from "../FullScreenDialog";

interface AssetsComponentProps {
  classList?: string;
}

interface FigmaFile {
  name: string;
  thumbnail_url: string;
}

interface FigmaFilesResponse {
  files?: FigmaFile[];
}

const figmaFiles: Record<string, string> = {
  Parchi:
    "https://www.figma.com/file/srCLxCzmnVITGMU2kkd7Wq/Parchi?type=design&t=B1CWDUrS6Fo61kNI-6",
  "Sticker Maker":
    "https://www.figma.com/file/2fpJ6aoN0QDQo17hJ95Wqk/Sticker-Maker-App?type=design&t=B1CWDUrS6Fo61kNI-6",
};

export default function AssetsComponent({ classList }: AssetsComponentProps) {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<FigmaFile[]>([]);
  const title = "Assets";

  useEffect(() => {
    async function loadFiles() {
      try {
        const response = await fetch(
          "https://api.figma.com/v1/projects/109899386/files",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-FIGMA-TOKEN": data.figmaToken ?? "",
            },
          },
        );
        const payload = (await response.json()) as FigmaFilesResponse;
        const validFiles = (payload.files ?? []).filter(
          (file) => Boolean(figmaFiles[file.name]),
        );
        setFiles(validFiles);
      } catch {
        setFiles([]);
      }
    }

    void loadFiles();
  }, []);

  const displayedFiles = useMemo(() => {
    return files.filter((file) => Boolean(figmaFiles[file.name]));
  }, [files]);

  const mainContent = useMemo<ReactNode>(() => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "32px",
          margin: "32px",
          flexWrap: "wrap",
        }}
      >
        {displayedFiles.map((file) => {
          const href = figmaFiles[file.name];
          if (!href) {
            return null;
          }

          return (
            <a href={href} key={file.name} target="_blank" rel="noreferrer">
              <AssetsCard name={file.name} image={file.thumbnail_url} />
            </a>
          );
        })}
      </div>
    );
  }, [displayedFiles]);

  return (
    <>
      <div
        className={`download-card tile-assets ${classList ?? ""}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(true);
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
          UI Designs, Concepts and Experiments
        </p>

        {/* Live Figma Frame Covers Preview */}
        <div className="download-card-preview">
          <div className="figma-covers-container">
            {displayedFiles.length > 0 ? (
              displayedFiles.slice(0, 2).map((file) => (
                <div key={file.name} className="figma-cover-card">
                  <img
                    src={file.thumbnail_url}
                    alt={`${file.name} Figma frame`}
                    className="figma-cover-img"
                  />
                  <div className="figma-card-tag">
                    <span>❖</span> {file.name}
                  </div>
                </div>
              ))
            ) : (
              // Fallback cards while loading Figma frames
              <>
                <div className="figma-cover-card figma-skeleton">
                  <div className="figma-card-tag">
                    <span>❖</span> Parchi
                  </div>
                </div>
                <div className="figma-cover-card figma-skeleton">
                  <div className="figma-card-tag">
                    <span>❖</span> Sticker Maker
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <FullScreenDialog
        title={title}
        titleColor="#272B28"
        childComponent={mainContent}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
}
