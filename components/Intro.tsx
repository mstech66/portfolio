import React, { useEffect, useState, useRef } from "react";
import SocialBar from "./SocialBar";
import { TextFade } from "./core/TextFade";
import MacMenuBar from "./MacMenuBar";

interface StickerData {
  id: string;
  name: string;
  src: string;
  alt: string;
  rot: string;
  zIndex: number;
  style: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    width: string;
  };
}

const STICKERS: StickerData[] = [
  // Left side - scattered naturally across the lid
  {
    id: "reactLogo",
    name: "React.js",
    src: "/assets/images/react.png",
    alt: "React.js Logo",
    rot: "-16deg",
    zIndex: 3,
    style: { top: "6%", left: "4%", width: "17%" },
  },
  {
    id: "gitLogo",
    name: "Git & GitHub",
    src: "/assets/images/git.png",
    alt: "GitHub Logo",
    rot: "16deg",
    zIndex: 2,
    style: { top: "14%", left: "24%", width: "12%" },
  },
  {
    id: "htmlLogo",
    name: "HTML5",
    src: "/assets/images/html.png",
    alt: "HTML5 Logo",
    rot: "12deg",
    zIndex: 2,
    style: { top: "34%", left: "3%", width: "13%" },
  },
  {
    id: "cssLogo",
    name: "CSS3",
    src: "/assets/images/css.png",
    alt: "CSS3 Logo",
    rot: "-10deg",
    zIndex: 4,
    style: { top: "47%", left: "14%", width: "13%" },
  },
  {
    id: "jsLogo",
    name: "JavaScript",
    src: "/assets/images/js.png",
    alt: "JavaScript Logo",
    rot: "-20deg",
    zIndex: 3,
    style: { bottom: "6%", left: "5%", width: "13%" },
  },
  {
    id: "tsLogo",
    name: "TypeScript",
    src: "/assets/images/ts.png",
    alt: "TypeScript Logo",
    rot: "12deg",
    zIndex: 2,
    style: { bottom: "12%", left: "18%", width: "13%" },
  },

  // Right side - scattered naturally across the lid
  {
    id: "sassLogo",
    name: "Sass",
    src: "/assets/images/sass.png",
    alt: "Sass Logo",
    rot: "-18deg",
    zIndex: 3,
    style: { top: "5%", right: "5%", width: "16%" },
  },
  {
    id: "nodeLogo",
    name: "Node.js",
    src: "/assets/images/node.png",
    alt: "Node.js Logo",
    rot: "20deg",
    zIndex: 2,
    style: { top: "13%", right: "23%", width: "13%" },
  },
  {
    id: "epamLogo",
    name: "EPAM Systems",
    src: "/assets/images/epam1.png",
    alt: "EPAM Systems Logo",
    rot: "-6deg",
    zIndex: 4,
    style: { top: "37%", right: "12%", width: "22%" },
  },
  {
    id: "figmaLogo",
    name: "Figma",
    src: "/assets/images/figma.png",
    alt: "Figma Logo",
    rot: "15deg",
    zIndex: 2,
    style: { top: "47%", right: "3%", width: "12%" },
  },
  {
    id: "awsLogo",
    name: "Amazon Web Services",
    src: "/assets/images/AWS.png",
    alt: "AWS Logo",
    rot: "-10deg",
    zIndex: 3,
    style: { bottom: "8%", right: "30%", width: "15%" },
  },
  {
    id: "flutterLogo",
    name: "Flutter",
    src: "/assets/images/flutter.png",
    alt: "Flutter Logo",
    rot: "16deg",
    zIndex: 3,
    style: { bottom: "7%", right: "5%", width: "16%" },
  },
];

export default function Intro() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    return document.documentElement.getAttribute("data-theme") !== "light";
  });

  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const macRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsDarkMode(
      document.documentElement.getAttribute("data-theme") !== "light",
    );
  }, []);

  const handleDarkToggle = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!macRef.current) return;
    const rect = macRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 5;
    const rotateY = (x / (rect.width / 2)) * 5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div className="main-content">
      <MacMenuBar
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleDarkToggle}
      />
      <TextFade direction="up">
        <h2 className="name">Hi, I'm Manthan!</h2>
      </TextFade>
      <TextFade direction="down" className="intro-fade-desc">
        <h3 className="description">
          Software Engineer building products across Development, Testing, and AI
        </h3>
      </TextFade>

      <div
        className="mac-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={macRef}
          className="mac-div"
          style={{
            backgroundImage: 'url("/assets/images/mac2.png")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            transform: `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg)`,
          }}
        >
          {STICKERS.map((sticker) => (
            <img
              key={sticker.id}
              src={sticker.src}
              id={sticker.id}
              alt={sticker.alt}
              className="laptop-sticker"
              style={
                {
                  top: sticker.style.top,
                  bottom: sticker.style.bottom,
                  left: sticker.style.left,
                  right: sticker.style.right,
                  width: sticker.style.width,
                  zIndex: sticker.zIndex,
                  "--rot": sticker.rot,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div className="text-center z-10 flex flex-col items-center gap-2 mb-4">
        <span className="text-lg md:text-xl font-medium tracking-wide" style={{ color: "var(--text-color)" }}>
          Connect with me
        </span>
        <SocialBar />
      </div>
    </div>
  );
}

