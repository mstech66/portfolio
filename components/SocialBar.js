import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function SocialBar() {
  return (
    <div className="social-links">
      <a
        rel="noreferrer"
        target="_blank"
        aria-label="Manthan Mevada's Github Account"
        href="https://github.com/mstech66"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a
        rel="noreferrer"
        href="https://twitter.com/Manthan_Mevada"
        aria-label="Manthan Mevada's Twitter Account"
        target="_blank"
      >
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </a>
      <a
        rel="noreferrer"
        aria-label="Manthan Mevada's LinkedIn Account"
        href="https://www.linkedin.com/in/manthanmevada/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a
        rel="noreferrer"
        aria-label="Manthan Mevada's Email"
        href="mailto:manthanmevada66@gmail.com"
        target="_blank"
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
    </div>
  );
}

export default SocialBar;
