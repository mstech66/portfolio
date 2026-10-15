import type { FolderKey } from "./folders";
import { FOLDER_BACK_PATH } from "./folders";

interface IconProps {
  size?: number;
  className?: string;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function DownloadIcon({ size = 16, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth={2.3} aria-hidden="true" {...stroke}>
      <path d="M12 4v12" />
      <path d="m6 10 6 6 6-6" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function CloseIcon({ size = 16, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth={2.3} aria-hidden="true" {...stroke}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function GridIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true" {...stroke}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function ListIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true" {...stroke}>
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </svg>
  );
}

/** Debossed symbol on each folder front, like the arrow on the macOS Downloads folder. */
export function FolderSymbol({ folder }: { folder: FolderKey }) {
  const common = {
    className: "dl-folder-symbol",
    viewBox: "0 0 24 24",
    strokeWidth: 1.6,
    "aria-hidden": true,
    ...stroke,
  };

  switch (folder) {
    case "wallpapers":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-4.5-4.5L6 21" />
        </svg>
      );
    case "assets":
      return (
        <svg {...common}>
          <path d="M12 19 19 12l3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "apps":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" />
        </svg>
      );
    case "resume":
    default:
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8" />
          <path d="M8 17h5" />
        </svg>
      );
  }
}

/** Small two-tone folder used in the window title bar and sidebar. */
export function MiniFolder({ back, front, size = 20 }: { back: string; front: string; size?: number }) {
  return (
    <svg width={size} height={(size * 200) / 260} viewBox="0 0 260 200" aria-hidden="true" style={{ flex: "none" }}>
      <path d={FOLDER_BACK_PATH} fill={back} />
      <rect x="0" y="44" width="260" height="156" rx="14" fill={front} />
    </svg>
  );
}
