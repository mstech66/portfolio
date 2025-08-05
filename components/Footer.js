import SocialBar from "./SocialBar";
import wave1Img from "../public/assets/images/01.png";
import wave2Img from "../public/assets/images/02.png";

const Footer = () => {
  return (
    <>
      <style jsx>
        {`
          .waves {
            position: relative;
            margin-top: 250px;
          }

          .waveOne {
            background-image: url(${wave1Img.src});
            background-repeat: repeat-x;
            position: absolute;
            bottom: 0;
            width: 4592px;
            height: 180px;
            animation: waveOne 5s cubic-bezier(0.35, 0.45, 0.65, 0.25) infinite;
            -webkit-transform: translate3d(0, 0, 0);
            /*For HW Acceleration*/
            transform: translate3d(0, 0, 0);
          }

          .waveTwo {
            background-image: url(${wave2Img.src});
            background-repeat: repeat-x;
            animation: waveTwo 5s cubic-bezier(0.24, 0.67, 0.5, 0.46) infinite;
            transform: translate3d(0, 0, 0);
          }

          @keyframes waveTwo {
            0% {
              margin-left: -2396px;
            }
            100% {
              margin-left: -100px;
            }
          }

          @keyframes waveOne {
            0% {
              margin-left: -100px;
            }
            100% {
              margin-left: -2396px;
            }
          }
        `}
      </style>
      <div
        style={{
          margin: "64px",
          display: "grid",
          placeContent: "center",
          textAlign: "center",
        }}
      >
        <span className="footer-name">Manthan Mevada</span>
        <SocialBar />
      </div>
      <div className="waves">
        <div className="waveOne"></div>
        <div className="waveOne waveTwo"></div>
      </div>
    </>
  );
};

export default Footer;
