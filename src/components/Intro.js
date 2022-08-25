import SocialBar from "./SocialBar";
import bitmoji from "../images/bitmoji.png";

const Intro = () => {
  return (
    <div className="flex-grid">
      <div className="bitmoji">
        <img src={bitmoji} id="space_ship" alt="Bitmoji" />
      </div>
      <div className="short-bio">
        <h2 className="name">Manthan Mevada</h2>
        <h3 className="bio">
          Hello World, I am Manthan and I build things that makes <i>almost</i>{" "}
          sense.<br></br> I am enthusiastic about front-end frameworks and UI/UX
          to Bots and AI <br></br> Apart from tech, I love to play video games,
          read books and draw.
          <br></br> And, yeah I work at epam as an engineer.
        </h3>
        <div className="social-links">
          <SocialBar />
        </div>
      </div>
    </div>
  );
};

export default Intro;
