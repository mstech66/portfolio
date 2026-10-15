import type { CSSProperties } from "react";

export type FolderKey = "wallpapers" | "assets" | "apps" | "resume";

export interface FolderDef {
  key: FolderKey;
  name: string;
  description: string;
  /** Highlight / front colour, plus the text colour that reads on it. */
  tint: string;
  onTint: string;
  /** Folder back panel (with the tab). */
  back: string;
  /** Front panel gradient, top → bottom. */
  frontTop: string;
  frontBottom: string;
  /** Debossed symbol on the folder front. */
  emboss: string;
  embossHighlight: string;
  /** Soft hover wash behind the folder. */
  glow: string;
}

export const FOLDERS: FolderDef[] = [
  {
    key: "wallpapers",
    name: "Wallpapers",
    description: "A collection of wallpapers I created",
    tint: "#E6D3B4",
    onTint: "#1A1A1A",
    back: "#D2BE9C",
    frontTop: "#F5EAD7",
    frontBottom: "#E6D3B4",
    emboss: "#C3AB86",
    embossHighlight: "rgba(255, 255, 255, 0.7)",
    glow: "rgba(210, 190, 156, 0.14)",
  },
  {
    key: "assets",
    name: "Assets",
    description: "UI designs, concepts and experiments",
    tint: "#6B707B",
    onTint: "#FFFFFF",
    back: "#454952",
    frontTop: "#6E737E",
    frontBottom: "#555963",
    emboss: "#45484F",
    embossHighlight: "rgba(255, 255, 255, 0.22)",
    glow: "rgba(140, 146, 158, 0.14)",
  },
  {
    key: "apps",
    name: "Apps",
    description: "Apps I developed as side projects",
    tint: "#909DDC",
    onTint: "#14172B",
    back: "#6E7FCE",
    frontTop: "#AEB9F0",
    frontBottom: "#8F9CDB",
    emboss: "#7180C8",
    embossHighlight: "rgba(255, 255, 255, 0.55)",
    glow: "rgba(144, 157, 220, 0.16)",
  },
  {
    key: "resume",
    name: "Resume",
    description: "Career history and key achievements",
    tint: "#6A9E5E",
    onTint: "#0F1A0D",
    back: "#4C8243",
    frontTop: "#8EC380",
    frontBottom: "#6A9E5E",
    emboss: "#53884A",
    embossHighlight: "rgba(255, 255, 255, 0.45)",
    glow: "rgba(106, 158, 94, 0.16)",
  },
];

export const FOLDER_BY_KEY: Record<FolderKey, FolderDef> = FOLDERS.reduce(
  (acc, folder) => ({ ...acc, [folder.key]: folder }),
  {} as Record<FolderKey, FolderDef>,
);

/** Exposes a folder's palette as CSS custom properties for downloads.css. */
export function folderVars(folder: FolderDef): CSSProperties {
  return {
    "--dl-tint": folder.tint,
    "--dl-on-tint": folder.onTint,
    "--dl-back": folder.back,
    "--dl-front-top": folder.frontTop,
    "--dl-front-bottom": folder.frontBottom,
    "--dl-emboss": folder.emboss,
    "--dl-emboss-hl": folder.embossHighlight,
    "--dl-glow": folder.glow,
  } as CSSProperties;
}

/** Same outline as the macOS folder: back panel with the sloped tab. */
export const FOLDER_BACK_PATH =
  "M14 0H82C91 0 95 3 100 8L107 15C111 19 114 19 121 19H246Q260 19 260 33V186Q260 200 246 200H14Q0 200 0 186V14Q0 0 14 0Z";
