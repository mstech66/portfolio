import { LinearProgress } from "@material-ui/core";
import { useState } from "react";
import useSWR from "swr";
import type { WallpaperResponse } from "@/data/types";
import FullScreenDialog from "../FullScreenDialog";

interface WallpaperComponentProps {
  classList?: string;
}

const fetcher = async (url: string): Promise<WallpaperResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch wallpapers: ${response.status}`);
  }
  return response.json() as Promise<WallpaperResponse>;
};

export default function WallpaperComponent({
  classList,
}: WallpaperComponentProps) {
  const [open, setOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const title = "Wallpapers";
  const { data, error, mutate } = useSWR<WallpaperResponse>(
    "/api/storage?object=wallpaper",
    fetcher,
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const wallpapers = data?.wallpapers ?? [];

  const renderWallpapers = () => {
    if (error) {
      return (
        <div style={{ textAlign: "center", padding: "40px 16px", width: "100%" }}>
          <p style={{ color: "#ef4444", marginBottom: "12px", fontSize: "1rem" }}>
            Failed to load wallpapers
          </p>
          <button
            type="button"
            onClick={() => void mutate()}
            style={{
              padding: "8px 18px",
              background: "#2c2c2e",
              color: "#ffffff",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Retry
          </button>
        </div>
      );
    }

    if (!data) {
      return (
        <div style={{ width: "100%", padding: "40px" }}>
          <LinearProgress />
        </div>
      );
    }

    if (wallpapers.length === 0) {
      return (
        <div style={{ textAlign: "center", padding: "40px", width: "100%", color: "#9ca3af" }}>
          <p>No wallpapers found</p>
        </div>
      );
    }

    return wallpapers.map((wallpaper) => (
      <a
        href={wallpaper.imgUrl}
        key={wallpaper.imgName}
        target="_blank"
        rel="noreferrer"
        title={wallpaper.imgName}
      >
        <img
          src={wallpaper.imgUrl}
          alt={wallpaper.imgName}
          className="wallpaper"
          loading="lazy"
        />
      </a>
    ));
  };

  const mainContent = <div className="wallpaperGrid">{renderWallpapers()}</div>;

  return (
    <>
      <div
        className={`download-card tile-wallpaper ${classList ?? ""}`}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleOpen();
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
          Collection of wallpapers that I created
        </p>

        {/* Wallpaper Collage Preview: Shimmer Skeleton while loading, dynamic wallpapers when ready */}
        <div className="download-card-preview" style={{ position: "relative" }}>
          {/* Skeleton Shimmer displayed until image loads */}
          {(!wallpapers.length || !imgLoaded) && (
            <div className="wallpaper-collage-grid">
              <div className="wp-left wp-skeleton-block" />
              <div className="wp-right">
                <div className="wp-skeleton-block wp-skeleton-dunes" />
                <div className="wp-right-bottom">
                  <div className="wp-skeleton-block wp-skeleton-car" />
                  <div className="wp-skeleton-block wp-skeleton-abstract" />
                </div>
              </div>
            </div>
          )}

          {/* Actual Wallpapers loaded from Firebase Storage */}
          {wallpapers.length > 0 && (
            <div
              className="wallpaper-collage-grid"
              style={{
                position: !imgLoaded ? "absolute" : "relative",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: imgLoaded ? 1 : 0,
                transition: "opacity 300ms ease",
                pointerEvents: imgLoaded ? "auto" : "none",
              }}
            >
              <div className="wp-left">
                <img
                  src={wallpapers[0].imgUrl}
                  alt=""
                  className="wp-img-spiderman"
                  onLoad={() => setImgLoaded(true)}
                />
              </div>
              <div className="wp-right">
                <img
                  src={wallpapers[1]?.imgUrl ?? wallpapers[0].imgUrl}
                  alt=""
                  className="wp-img-dunes"
                />
                <div className="wp-right-bottom">
                  <img
                    src={wallpapers[2]?.imgUrl ?? wallpapers[0].imgUrl}
                    alt=""
                    className="wp-img-car"
                  />
                  <img
                    src={
                      wallpapers[3]?.imgUrl ??
                      wallpapers[1]?.imgUrl ??
                      wallpapers[0].imgUrl
                    }
                    alt=""
                    className="wp-img-abstract"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <FullScreenDialog
        title={title}
        titleColor="#1C1C1E"
        childComponent={mainContent}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

