import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { styled } from "@mui/system";

const StyledLinkDiv = styled("div")({
  margin: "24px 0px 8px 0px",
  justifySelf: "center",
  "& a": {
    textDecoration: "none !important",
    paddingRight: "12px",
    color: "#eeeeee",
  },
  "& a:nth-last-child(1)": {
    padding: "0px !important",
  },
  "& a:hover": {
    color: "#ffffff",
  },
});

function SocialBar() {
  return (
    <StyledLinkDiv>
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
    </StyledLinkDiv>
  );
}

export default SocialBar;
