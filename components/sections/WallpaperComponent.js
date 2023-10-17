import { React, Component, useState } from "react";
import FullScreenDialog from "../FullScreenDialog.js";
import useSWR from "swr";

function WallpaperComponent(props) {
  const [open, setOpen] = useState(false);
  const title = "Wallpapers";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const child = () => {
    const { data, error } = useSWR(
      "/api/storage?object=wallpaper",
      fetcher
    );
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    console.log(data.wallpapers);

    return data.wallpapers.map((e, i) => {
      return (
        <a
          href={e["imgUrl"]}
          key={e["imgName"]}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={e["imgUrl"]}
            alt={e["imgName"]}
            key={e["imgName"]}
            className="wallpaper"
          />
        </a>
      );
    });
  };

  const mainContent = () => {
    return <div className="wallpaperGrid">{child()}</div>;
  };

  return (
    <>
      <div className={props.classList} onClick={() => handleOpen()}>
        {title}
      </div>
      <FullScreenDialog
        title={title}
        titleColor="#ad5fe6"
        childComponent={mainContent()}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default WallpaperComponent;
