import { useState } from "react";
import FinderWindow from "./downloads/FinderWindow";
import FolderTile from "./downloads/FolderTile";
import type { FolderKey } from "./downloads/folders";
import { FOLDER_BY_KEY } from "./downloads/folders";
import { useAssets, useWallpapers } from "./downloads/useDownloadsData";

export default function Downloadables() {
  const [openFolder, setOpenFolder] = useState<FolderKey | null>(null);
  const wallpapers = useWallpapers();
  const [wallA, wallB] = wallpapers.items;
  const [assetA, assetB] = useAssets().items;

  return (
    <section className="downloads-wrapper" aria-label="Downloads">
      <div className="downloads dl-folders" id="downloads">
        <FolderTile
          folder={FOLDER_BY_KEY.wallpapers}
          onOpen={() => setOpenFolder("wallpapers")}
          contents={
            <>
              <span className="dl-peek-card dl-peek-left">
                {wallA ? <img src={wallA.url} alt="" loading="lazy" /> : <span className="dl-peek-blank" />}
              </span>
              <span className="dl-peek-card dl-peek-right">
                {wallB || wallA ? (
                  <img src={(wallB ?? wallA).url} alt="" loading="lazy" />
                ) : (
                  <span className="dl-peek-blank" />
                )}
              </span>
            </>
          }
        />

        <FolderTile
          folder={FOLDER_BY_KEY.assets}
          onOpen={() => setOpenFolder("assets")}
          contents={
            <>
              <span className="dl-peek-card dl-peek-left">
                {assetA?.thumbnail ? <img src={assetA.thumbnail} alt="" loading="lazy" /> : <span className="dl-peek-blank" />}
              </span>
              <span className="dl-peek-card dl-peek-right">
                {assetB?.thumbnail ? <img src={assetB.thumbnail} alt="" loading="lazy" /> : <span className="dl-peek-blank" />}
              </span>
            </>
          }
        />

        <FolderTile
          folder={FOLDER_BY_KEY.apps}
          onOpen={() => setOpenFolder("apps")}
          contents={
            <>
              <img className="dl-peek-icon dl-peek-left" src="/assets/previews/app_stickermaker.png" alt="" />
              <img className="dl-peek-icon dl-peek-right" src="/assets/previews/app_parchi.png" alt="" />
            </>
          }
        />

        <FolderTile
          folder={FOLDER_BY_KEY.resume}
          onOpen={() => setOpenFolder("resume")}
          contents={
            <span className="dl-peek-paper">
              <span className="dl-peek-paper-name">Manthan Mevada</span>
              <span className="dl-peek-paper-role">Frontend Developer</span>
              <i style={{ width: "62%" }} />
              <i style={{ width: "92%" }} />
              <i style={{ width: "80%" }} />
            </span>
          }
        />
      </div>

      <FinderWindow
        folder={openFolder}
        onSelect={setOpenFolder}
        onClose={() => setOpenFolder(null)}
      />
    </section>
  );
}
