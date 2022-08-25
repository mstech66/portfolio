import WallpaperComponent from "./sections/WallpaperComponent";
import AssetsComponent from "./sections/AssetsComponent";
import AppsComponent from "./sections/AppsComponent";
import ResumeComponent from "./sections/ResumeComponent";

const Downloadables = () => {
  return (
    <section className="downloads flex gap12">
      <WallpaperComponent classList="card downloads-card tile-wallpaper" />
      <AssetsComponent classList="card downloads-card tile-assets" />
      <AppsComponent classList="card downloads-card tile-apps" />
      <ResumeComponent classList="card downloads-card tile-resume" />
    </section>
  );
};

export default Downloadables;
