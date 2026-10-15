import type { ReactNode } from "react";
import type { FolderDef } from "./folders";
import { FOLDER_BACK_PATH, folderVars } from "./folders";
import { FolderSymbol } from "./icons";

interface FolderTileProps {
  folder: FolderDef;
  /** What peeks out of the folder (and slides up on hover). */
  contents: ReactNode;
  onOpen: () => void;
}

export default function FolderTile({ folder, contents, onOpen }: FolderTileProps) {
  return (
    <button
      type="button"
      className="dl-folder"
      style={folderVars(folder)}
      onClick={onOpen}
      aria-haspopup="dialog"
    >
      <span className="dl-folder-art" aria-hidden="true">
        <svg className="dl-folder-back" viewBox="0 0 260 200" preserveAspectRatio="none">
          <path d={FOLDER_BACK_PATH} />
        </svg>
        <span className="dl-folder-contents">{contents}</span>
        <span className="dl-folder-front">
          <FolderSymbol folder={folder.key} />
        </span>
      </span>
      <span className="dl-folder-label">
        <span className="dl-folder-name">{folder.name}</span>
        <span className="dl-folder-desc">{folder.description}</span>
      </span>
    </button>
  );
}
