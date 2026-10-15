import { Dialog, Fade } from "@material-ui/core";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import ExternalArrowIcon from "../ExternalArrowIcon";
import type { FolderKey } from "./folders";
import { FOLDERS, FOLDER_BY_KEY, folderVars } from "./folders";
import { CloseIcon, DownloadIcon, GridIcon, ListIcon, MiniFolder } from "./icons";
import { useApps, useAssets, useResumeUrl, useWallpapers } from "./useDownloadsData";

type ViewMode = "grid" | "list";

interface QuickLookItem {
  name: string;
  src: string;
  action?: { href: string; label: string; kind: "download" | "external" };
}

interface FinderWindowProps {
  /** Folder to show; null keeps the window closed. */
  folder: FolderKey | null;
  onSelect: (folder: FolderKey) => void;
  onClose: () => void;
}

function countLabel(n: number) {
  return `${n} ${n === 1 ? "item" : "items"}`;
}

export default function FinderWindow({ folder, onSelect, onClose }: FinderWindowProps) {
  const [view, setView] = useState<ViewMode>("grid");
  const [preview, setPreview] = useState<QuickLookItem | null>(null);
  // Keep the last folder while the close animation runs.
  const [shown, setShown] = useState<FolderKey>(folder ?? "wallpapers");

  useEffect(() => {
    if (folder) setShown(folder);
    setPreview(null);
  }, [folder]);

  const wallpapers = useWallpapers();
  const assets = useAssets();
  const apps = useApps();
  const resume = useResumeUrl(shown === "resume" && folder !== null);

  const current = FOLDER_BY_KEY[shown];
  const hasViewToggle = shown !== "resume";

  const count = {
    wallpapers: wallpapers.items.length,
    assets: assets.items.length,
    apps: apps.items.length,
    resume: 1,
  }[shown];
  const countLoading =
    (shown === "wallpapers" && wallpapers.isLoading) || (shown === "apps" && apps.isLoading);

  const handleClose = (_event: unknown, reason?: string) => {
    // Escape closes Quick Look first, then the window.
    if (reason === "escapeKeyDown" && preview) {
      setPreview(null);
      return;
    }
    onClose();
  };

  let content: ReactNode;
  switch (shown) {
    case "wallpapers":
      content = (
        <WallpapersView
          view={view}
          state={wallpapers}
          onPreview={(item) =>
            setPreview({
              name: item.name,
              src: item.url,
              action: { href: item.url, label: "Download", kind: "download" },
            })
          }
        />
      );
      break;
    case "assets":
      content = (
        <AssetsView
          view={view}
          items={assets.items}
          onPreview={(item) =>
            item.thumbnail &&
            setPreview({
              name: item.name,
              src: item.thumbnail,
              action: { href: item.href, label: "View in Figma", kind: "external" },
            })
          }
        />
      );
      break;
    case "apps":
      content = <AppsView view={view} state={apps} />;
      break;
    case "resume":
    default:
      content = <ResumeView state={resume} />;
  }

  return (
    <Dialog
      open={folder !== null}
      onClose={handleClose}
      className="dl-dialog"
      maxWidth={false}
      TransitionComponent={Fade}
      transitionDuration={{ enter: 180, exit: 140 }}
      aria-labelledby="dl-window-title"
      PaperProps={{
        className: "dl-window",
        style: folderVars(current) as CSSProperties,
      }}
    >
      <div className="dl-grabber" aria-hidden="true" />

      <header className="dl-titlebar">
        <div className="dl-traffic">
          <button type="button" className="dl-light dl-light-close" aria-label="Close window" onClick={onClose} />
          <span className="dl-light dl-light-min" aria-hidden="true" />
          <span className="dl-light dl-light-max" aria-hidden="true" />
        </div>

        <div className="dl-title">
          <MiniFolder back={current.back} front={current.tint} size={22} />
          <h2 id="dl-window-title">{current.name}</h2>
        </div>

        {hasViewToggle && (
          <div className="dl-seg" role="group" aria-label="View as">
            <button
              type="button"
              className="dl-seg-btn"
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
            >
              <GridIcon />
            </button>
            <button
              type="button"
              className="dl-seg-btn"
              aria-label="List view"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
            >
              <ListIcon />
            </button>
          </div>
        )}

        <button type="button" className="dl-done" onClick={onClose}>
          Done
        </button>
      </header>

      <div className="dl-body">
        <nav className="dl-sidebar" aria-label="Downloads folders">
          <p className="dl-sidebar-label">Downloads</p>
          {FOLDERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className="dl-side-item"
              style={folderVars(f)}
              aria-current={f.key === shown ? "page" : undefined}
              onClick={() => {
                setPreview(null);
                onSelect(f.key);
              }}
            >
              <MiniFolder back={f.back} front={f.tint} />
              <span>{f.name}</span>
            </button>
          ))}
        </nav>

        <div className="dl-content">
          <div className="dl-scroll">{content}</div>
          <footer className="dl-status">{countLoading ? "Loading…" : countLabel(count)}</footer>

          {preview && <QuickLook item={preview} onClose={() => setPreview(null)} />}
        </div>
      </div>
    </Dialog>
  );
}

/* ---------- Shared bits ---------- */

function StateMessage({ children, onRetry }: { children: ReactNode; onRetry?: () => void }) {
  return (
    <div className="dl-message">
      <p>{children}</p>
      {onRetry && (
        <button type="button" className="dl-btn dl-btn-outline" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

function SkeletonGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="dl-grid" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="dl-item">
          <div className="dl-thumb dl-skeleton" />
          <div className="dl-skeleton dl-skeleton-line" />
        </div>
      ))}
    </div>
  );
}

function QuickLook({ item, onClose }: { item: QuickLookItem; onClose: () => void }) {
  return (
    <div className="dl-quicklook" role="dialog" aria-label={`Preview of ${item.name}`}>
      <div className="dl-quicklook-bar">
        <button type="button" className="dl-icon-btn" aria-label="Close preview" onClick={onClose} autoFocus>
          <CloseIcon />
        </button>
        <span className="dl-quicklook-name">{item.name}</span>
        {item.action && (
          <a
            className="dl-btn dl-btn-tint"
            href={item.action.href}
            target="_blank"
            rel="noreferrer"
            download={item.action.kind === "download" ? "" : undefined}
          >
            {item.action.kind === "download" && <DownloadIcon size={15} />}
            {item.action.label}
            {item.action.kind === "external" && <ExternalArrowIcon size={13} className="dl-ext-icon" />}
          </a>
        )}
      </div>
      <div className="dl-quicklook-stage">
        <img src={item.src} alt={item.name} />
      </div>
    </div>
  );
}

/* ---------- Wallpapers ---------- */

function WallpapersView({
  view,
  state,
  onPreview,
}: {
  view: ViewMode;
  state: ReturnType<typeof useWallpapers>;
  onPreview: (item: ReturnType<typeof useWallpapers>["items"][number]) => void;
}) {
  if (state.error) return <StateMessage onRetry={state.retry}>Couldn't load the wallpapers.</StateMessage>;
  if (state.isLoading) return <SkeletonGrid count={6} />;
  if (state.items.length === 0) return <StateMessage>No wallpapers yet.</StateMessage>;

  if (view === "list") {
    return (
      <div className="dl-list">
        <div className="dl-list-head">
          <span className="dl-col-name">Name</span>
          <span className="dl-col-kind">Kind</span>
          <span className="dl-col-action" />
        </div>
        {state.items.map((item) => (
          <div key={item.id} className="dl-row">
            <button type="button" className="dl-row-main" onClick={() => onPreview(item)}>
              <img className="dl-row-thumb" src={item.url} alt="" loading="lazy" />
              <span className="dl-row-name">{item.name}</span>
            </button>
            <span className="dl-col-kind">{item.kind}</span>
            <a
              className="dl-icon-btn dl-col-action"
              href={item.url}
              target="_blank"
              rel="noreferrer"
              download=""
              aria-label={`Download ${item.name}`}
            >
              <DownloadIcon />
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="dl-grid">
      {state.items.map((item) => (
        <div key={item.id} className="dl-item">
          <button type="button" className="dl-thumb" onClick={() => onPreview(item)} aria-label={`Preview ${item.name}`}>
            <img src={item.url} alt="" loading="lazy" />
          </button>
          <div className="dl-item-meta">
            <div className="dl-item-text">
              <span className="dl-item-name">{item.name}</span>
              <span className="dl-item-sub">{item.kind}</span>
            </div>
            <a
              className="dl-icon-btn"
              href={item.url}
              target="_blank"
              rel="noreferrer"
              download=""
              aria-label={`Download ${item.name}`}
            >
              <DownloadIcon />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Assets (view only, no downloads) ---------- */

function AssetsView({
  view,
  items,
  onPreview,
}: {
  view: ViewMode;
  items: ReturnType<typeof useAssets>["items"];
  onPreview: (item: ReturnType<typeof useAssets>["items"][number]) => void;
}) {
  if (view === "list") {
    return (
      <div className="dl-list">
        <div className="dl-list-head">
          <span className="dl-col-name">Name</span>
          <span className="dl-col-kind">Kind</span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="dl-row">
            <button type="button" className="dl-row-main" onClick={() => onPreview(item)}>
              {item.thumbnail ? (
                <img className="dl-row-thumb" src={item.thumbnail} alt="" loading="lazy" />
              ) : (
                <span className="dl-row-thumb dl-skeleton" aria-hidden="true" />
              )}
              <span className="dl-row-name">{item.name}</span>
            </button>
            <span className="dl-col-kind">UI design</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="dl-grid dl-grid-wide">
      {items.map((item) => (
        <div key={item.id} className="dl-item">
          {item.thumbnail ? (
            <button type="button" className="dl-thumb" onClick={() => onPreview(item)} aria-label={`Preview ${item.name}`}>
              <img src={item.thumbnail} alt="" loading="lazy" />
            </button>
          ) : (
            <div className="dl-thumb dl-skeleton" aria-hidden="true" />
          )}
          <div className="dl-item-meta">
            <div className="dl-item-text">
              <span className="dl-item-name">{item.name}</span>
              <span className="dl-item-sub">UI design</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Apps ---------- */

function AppIcon({ src, name, size }: { src?: string; name: string; size: number }) {
  if (src) {
    return <img className="dl-app-icon" src={src} alt="" width={size} height={size} />;
  }
  return (
    <span className="dl-app-icon dl-app-icon-fallback" style={{ width: size, height: size }} aria-hidden="true">
      {name.charAt(0)}
    </span>
  );
}

function AppsView({ view, state }: { view: ViewMode; state: ReturnType<typeof useApps> }) {
  if (state.error) return <StateMessage onRetry={state.retry}>Couldn't load the apps.</StateMessage>;
  if (state.isLoading) {
    return (
      <div className="dl-app-grid" aria-hidden="true">
        <div className="dl-app-tile dl-skeleton" style={{ minHeight: 190 }} />
      </div>
    );
  }
  if (state.items.length === 0) return <StateMessage>No apps to download yet.</StateMessage>;

  if (view === "list") {
    return (
      <div className="dl-list">
        <div className="dl-list-head">
          <span className="dl-col-name">Name</span>
          <span className="dl-col-kind">Kind</span>
          <span className="dl-col-get" />
        </div>
        {state.items.map((app) => (
          <div key={app.id} className="dl-row">
            <div className="dl-row-main">
              <AppIcon src={app.icon} name={app.name} size={40} />
              <span className="dl-row-text">
                <span className="dl-row-name">{app.name}</span>
                {app.description && <span className="dl-row-sub">{app.description}</span>}
              </span>
            </div>
            <span className="dl-col-kind">{app.platform}</span>
            <a
              className="dl-btn dl-btn-tint dl-btn-small dl-col-get"
              href={app.url}
              target="_blank"
              rel="noreferrer"
              download=""
              aria-label={`Download ${app.name}`}
            >
              Get
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="dl-app-grid">
      {state.items.map((app) => (
        <div key={app.id} className="dl-app-tile">
          <div className="dl-app-head">
            <AppIcon src={app.icon} name={app.name} size={64} />
            <div className="dl-app-titles">
              <h3>{app.name}</h3>
              <span>{app.platform}</span>
            </div>
          </div>
          {app.description && <p className="dl-app-desc">{app.description}</p>}
          <div className="dl-app-foot">
            <span className="dl-app-file" title={app.fileName}>
              {app.fileName}
            </span>
            <a
              className="dl-btn dl-btn-tint dl-btn-small"
              href={app.url}
              target="_blank"
              rel="noreferrer"
              download=""
              aria-label={`Download ${app.name}`}
            >
              <DownloadIcon size={15} />
              Get
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Resume ---------- */

function ResumeView({ state }: { state: ReturnType<typeof useResumeUrl> }) {
  const ready = Boolean(state.url);

  return (
    <div className="dl-resume">
      <div className="dl-paper" aria-hidden="true">
        <div>
          <div className="dl-paper-name">Manthan Mevada</div>
          <div className="dl-paper-role">Frontend Developer</div>
        </div>
        <div className="dl-paper-lines">
          <i className="is-head" style={{ width: "40%" }} />
          <i style={{ width: "95%" }} />
          <i style={{ width: "88%" }} />
          <i style={{ width: "70%" }} />
        </div>
        <div className="dl-paper-lines">
          <i className="is-head" style={{ width: "35%" }} />
          <i style={{ width: "92%" }} />
          <i style={{ width: "84%" }} />
          <i style={{ width: "90%" }} />
          <i style={{ width: "60%" }} />
        </div>
        <div className="dl-paper-tags">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Flutter</span>
        </div>
      </div>

      <div className="dl-resume-info">
        <h3>Resume</h3>
        <p>Career history and key achievements at a glance.</p>
        <span className="dl-resume-meta">PDF document</span>

        {state.error ? (
          <StateMessage onRetry={state.retry}>Couldn't get the resume link.</StateMessage>
        ) : (
          <div className="dl-resume-actions">
            <a
              className="dl-btn dl-btn-tint"
              href={state.url ?? undefined}
              target="_blank"
              rel="noreferrer"
              download=""
              aria-disabled={!ready}
              onClick={(e) => {
                if (!ready) e.preventDefault();
              }}
            >
              <DownloadIcon size={16} />
              {ready ? "Download PDF" : "Preparing…"}
            </a>
            <a
              className="dl-btn dl-btn-outline"
              href={state.url ?? undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!ready}
              onClick={(e) => {
                if (!ready) e.preventDefault();
              }}
            >
              Open in new tab
              <ExternalArrowIcon size={13} className="dl-ext-icon" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
