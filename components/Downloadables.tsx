import AppsComponent from "./sections/AppsComponent";
import AssetsComponent from "./sections/AssetsComponent";
import ResumeComponent from "./sections/ResumeComponent";
import WallpaperComponent from "./sections/WallpaperComponent";

export default function Downloadables() {
  return (
    <section className="downloads-wrapper">
      <div className="downloads" id="downloads">
        <WallpaperComponent />
        <AssetsComponent />
        <AppsComponent />
        <ResumeComponent />
      </div>
    </section>
  );
}
