import React from "react";
import { Tooltip } from "@material-ui/core";
import {
  SiFirebase,
  SiFlutter,
  SiKotlin,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiGooglesheets,
  SiVercel,
} from "react-icons/si";
import {
  FaAndroid,
  FaAngular,
  FaCss3,
  FaGitAlt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaRaspberryPi,
  FaReact,
  FaStripeS,
  FaWindows,
} from "react-icons/fa";
import type { Technology } from "@/data/types";

function SparkleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="sparkleGradPill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="35%" stopColor="#8b5cf6" />
          <stop offset="70%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
        fill="url(#sparkleGradPill)"
      />
    </svg>
  );
}

function FigmaColorIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

const brandColors: Record<Technology, string> = {
  android: "#3DDC84",
  angular: "#DD0031",
  css: "#1572B6",
  figma: "#F24E1E",
  firebase: "#FFCA28",
  flutter: "#02569B",
  git: "#F05032",
  java: "#007396",
  js: "#F7DF1E",
  kotlin: "#7F52FF",
  mongo: "#47A248",
  node: "#339933",
  python: "#3776AB",
  react: "#61DAFB",
  raspberrypi: "#C51A4A",
  UWP: "#0078D6",
  nextjs: "var(--tech-monochrome, #ffffff)",
  tailwind: "#06B6D4",
  gemini: "#4285F4",
  sheets: "#1BA360",
  stripe: "#635AFF",
  vercel: "var(--tech-monochrome, #ffffff)",
};

const languages: Record<Technology, any> = {
  android: FaAndroid,
  angular: FaAngular,
  css: FaCss3,
  figma: FigmaColorIcon,
  firebase: SiFirebase,
  flutter: SiFlutter,
  git: FaGitAlt,
  java: FaJava,
  js: FaJs,
  kotlin: SiKotlin,
  mongo: SiMongodb,
  node: FaNodeJs,
  python: FaPython,
  react: FaReact,
  raspberrypi: FaRaspberryPi,
  UWP: FaWindows,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  gemini: SparkleIcon,
  sheets: SiGooglesheets,
  stripe: FaStripeS,
  vercel: SiVercel,
};

function capitalize(value: Technology) {
  return value === "UWP" ? value : value.charAt(0).toUpperCase() + value.slice(1);
}

interface TechCapsuleProps {
  values: Technology[];
  maxIcons?: number;
}

export default function TechCapsule({ values, maxIcons }: TechCapsuleProps) {
  if (!values || values.length === 0) return null;

  const displayValues =
    maxIcons && values.length > maxIcons ? values.slice(0, maxIcons) : values;
  const remainingCount =
    maxIcons && values.length > maxIcons ? values.length - maxIcons : 0;
  const remainingNames =
    remainingCount > 0
      ? values.slice(maxIcons).map(capitalize).join(", ")
      : "";

  return (
    <div className="shared-tech-capsule">
      {displayValues.map((tech) => {
        const IconComp = languages[tech];
        if (!IconComp) return null;
        const color = brandColors[tech] || "#111827";

        return (
          <Tooltip key={tech} title={capitalize(tech)} placement="top">
            <span className="shared-tech-icon">
              {tech === "figma" || tech === "gemini" ? (
                <IconComp size={23} />
              ) : (
                <IconComp size={23} color={color} />
              )}
            </span>
          </Tooltip>
        );
      })}

      {remainingCount > 0 && (
        <Tooltip title={`Also used: ${remainingNames}`} placement="top">
          <span className="shared-tech-more-badge">+{remainingCount}</span>
        </Tooltip>
      )}
    </div>
  );
}
