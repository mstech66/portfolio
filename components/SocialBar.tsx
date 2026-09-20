import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialBar() {
  return (
    <div className="social-links">
      <a
        rel="noreferrer"
        target="_blank"
        aria-label="Manthan Mevada's Github Account"
        href="https://github.com/mstech66"
      >
        <FontAwesomeIcon icon={faGithub as IconProp} size="lg" />
      </a>
      <a
        rel="noreferrer"
        href="https://twitter.com/Manthan_Mevada"
        aria-label="Manthan Mevada's Twitter Account"
        target="_blank"
      >
        <FontAwesomeIcon icon={faXTwitter as IconProp} size="lg" />
      </a>
      <a
        rel="noreferrer"
        aria-label="Manthan Mevada's LinkedIn Account"
        href="https://www.linkedin.com/in/manthanmevada/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin as IconProp} size="lg" />
      </a>
      <a
        rel="noreferrer"
        aria-label="Manthan Mevada's Email"
        href="mailto:manthanmevada@outlook.com"
        target="_blank"
      >
        <FontAwesomeIcon icon={faEnvelope as IconProp} size="lg" />
      </a>
    </div>
  );
}
