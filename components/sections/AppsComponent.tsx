import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { AppFile, AppsResponse } from "@/data/types";
import AppCard from "../cards/AppCard";
import FullScreenDialog from "../FullScreenDialog";

interface AppsComponentProps {
  classList?: string;
}

export default function AppsComponent({ classList }: AppsComponentProps) {
  const [open, setOpen] = useState(false);
  const [apps, setApps] = useState<AppFile[]>([]);
  const title = "Apps";

  useEffect(() => {
    async function loadApps() {
      try {
        const response = await fetch("/api/storage?object=apps", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { apps: files } = (await response.json()) as AppsResponse;
        setApps(files ?? []);
      } catch {
        setApps([]);
      }
    }

    void loadApps();
  }, []);

  const child = () =>
    apps.map((app) => (
      <AppCard title={app.fileName} url={app.fileUrl} key={app.fileName} />
    ));

  const mainContent = useMemo<ReactNode>(() => {
    if (apps.length === 0) {
      return (
        <div className="wipDiv">
          <p id="wip">No Apps as of now</p>
        </div>
      );
    }

    return <div className="appsGrid">{child()}</div>;
  }, [apps]);

  return (
    <>
      <div
        className={`download-card tile-apps ${classList ?? ""}`}
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
          Apps I developed in side projects
        </p>

        {/* Clean, borderless App Icons preview without labels */}
        <div className="download-card-preview">
          <div className="apps-preview-row">
            <div className="app-icon-squircle">
              <img
                src="/assets/previews/app_stickermaker.png"
                alt="Sticker Maker"
                className="app-icon-img"
              />
            </div>
            <div className="app-icon-squircle">
              <img
                src="/assets/previews/app_parchi.png"
                alt="Parchi"
                className="app-icon-img"
              />
            </div>
          </div>
        </div>
      </div>

      <FullScreenDialog
        title={title}
        titleColor="#1C1C1E"
        childComponent={mainContent}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
}
