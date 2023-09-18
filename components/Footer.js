import SocialBar from "./SocialBar";

const Footer = () => {
  return (
    <>
      <div
        style={{
          margin: "64px",
          display: "grid",
          placeContent: "center",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "1.5rem" }}>Manthan Mevada</span>
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
