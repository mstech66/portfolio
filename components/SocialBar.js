import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function SocialBar() {
  return (
    <div className="social-links">
      <a rel="noreferrer" target="_blank" href="https://github.com/mstech66">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a
        rel="noreferrer"
        href="https://twitter.com/Manthan_Mevada"
        target="_blank"
      >
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </a>
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/manthanmevada/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
    </div>
  );
}

export default SocialBar;
