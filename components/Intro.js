import SocialBar from "./SocialBar";
import bitmoji from "../public/assets/images/bitmoji.png";
import mac from "../public/assets/images/macpro1.png";
import epamlogo from "../public/assets/images/epam.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Intro = () => {
  return (
    <div className="main-content">
      <h2 className="name">Manthan Mevada</h2>
      <div className="flex-grid">
        <div
          className="mac-div"
          style={{
            background: 'url("/assets/images/macair.png")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            userSelect: "none",
            maxHeight: "800px",
          }}
        >
          <img
            src="/assets/images/epam1.png"
            id="epamLogo"
            className="absolute right-[3%] top-[14%] w-[15%] transition-all duration-200 rotate-45"
          />
          <img
            src="/assets/images/node.png"
            id="nodeLogo"
            className="absolute right-[20%] top-[15%] w-[15%] transition-all duration-200"
          />
          <img
            src="/assets/images/react.png"
            id="reactLogo"
            className="absolute left-[5%] top-[15%] w-[15%] transition-all duration-200"
          />
          <img
            src="/assets/images/js.png"
            id="jsLogo"
            className="absolute bottom-[10%] left-[5%] w-[10%] transition-all duration-200"
          />
          <img
            src="/assets/images/ts.png"
            id="tsLogo"
            className="absolute left-[18%] bottom-[10%] w-[10%] transition-all duration-200"
          />
          <img
            src="/assets/images/html.png"
            id="htmlLogo"
            className="absolute left-[5%] top-[40%] w-[10%] transition-all duration-200"
          />
          <img
            src="/assets/images/css.png"
            id="cssLogo"
            className="absolute left-[10%] top-[40%] w-[10%] transition-all duration-200"
          />
          <img
            src="/assets/images/flutter.png"
            id="flutterLogo"
            className="absolute right-[5%] bottom-[10%] w-[15%] transition-all duration-200"
          />
          <img
            src="/assets/images/sass.png"
            id="sassLogo"
            className="absolute left-[22%] top-[45%] w-[13%] transition-all duration-200 -rotate-[15deg]"
          />
          <img
            src="/assets/images/git.png"
            id="gitLogo"
            className="absolute left-[35%] top-[20%] w-[10%] transition-all duration-200"
          />
          <img
            src="/assets/images/figma.png"
            id="figmaLogo"
            className="absolute right-[5%] top-[42%] w-[12%] transition-all duration-200"
          />
          <img
            src="/assets/images/aws.png"
            id="awsLogo"
            className="absolute right-[20%] bottom-[20%] w-[12%] transition-all duration-200"
          />
        </div>
        {/* <div className="short-bio">
          
          <h3 className="bio">
            Hello World, I am Manthan and I build things that makes{" "}
            <i>almost</i> sense.<br></br> I am enthusiastic about front-end
            frameworks and UI/UX to Bots and AI <br></br> Apart from tech, I
            love to play video games, read books and draw.
            <br></br> And, yeah I work at epam as an engineer.
          </h3>
          <SocialBar />
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
