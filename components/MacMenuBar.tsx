import React, { useState, useEffect, useRef } from "react";
import {
  FaApple,
  FaWifi,
  FaSearch,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { BsSliders } from "react-icons/bs";

const AppleIcon = FaApple as React.ElementType;
const WifiIcon = FaWifi as React.ElementType;
const SearchIcon = FaSearch as React.ElementType;
const SunIcon = FaSun as React.ElementType;
const MoonIcon = FaMoon as React.ElementType;
const SlidersIcon = BsSliders as React.ElementType;

interface MacMenuBarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function MacMenuBar({
  isDarkMode,
  onToggleDarkMode,
}: MacMenuBarProps) {
  const [currentTime, setCurrentTime] = useState("");
  const [appleMenuOpen, setAppleMenuOpen] = useState(false);
  const [controlCenterOpen, setControlCenterOpen] = useState(false);

  const appleMenuRef = useRef<HTMLDivElement>(null);
  const controlCenterRef = useRef<HTMLDivElement>(null);

  // Update live clock every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dayStr = now.toLocaleDateString("en-US", { weekday: "short" });
      const monthStr = now.toLocaleDateString("en-US", { month: "short" });
      const dateNum = now.getDate();
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(`${dayStr} ${monthStr} ${dateNum}  ${timeStr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        appleMenuRef.current &&
        !appleMenuRef.current.contains(target)
      ) {
        setAppleMenuOpen(false);
      }
      if (
        controlCenterRef.current &&
        !controlCenterRef.current.contains(target)
      ) {
        setControlCenterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="mac-menubar fixed top-0 left-0 right-0 w-full h-[28px] select-none z-[100] flex items-center justify-between px-3 text-[13px] font-medium tracking-tight transition-colors duration-200"
      style={{
        backgroundColor: isDarkMode
          ? "rgba(30, 32, 38, 0.78)"
          : "rgba(246, 246, 248, 0.82)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: isDarkMode
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(0, 0, 0, 0.08)",
        color: isDarkMode ? "#f2f2f5" : "#1d1d1f",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Left Menu Section */}
      <div className="flex items-center gap-1">
        {/* Apple Icon with Dropdown */}
        <div className="relative" ref={appleMenuRef}>
          <button
            type="button"
            className={`flex items-center justify-center px-2 py-0.5 rounded-[4px] transition-colors ${appleMenuOpen
              ? isDarkMode
                ? "bg-white/20"
                : "bg-black/10"
              : isDarkMode
                ? "hover:bg-white/10"
                : "hover:bg-black/5"
              }`}
            onClick={() => {
              setAppleMenuOpen((prev) => !prev);
              setControlCenterOpen(false);
            }}
            title="Apple Menu"
          >
            <AppleIcon size={15} />
          </button>

          {appleMenuOpen && (
            <div
              className="fixed left-2 sm:absolute sm:left-0 top-[32px] sm:top-[26px] min-w-[220px] max-w-[calc(100vw-16px)] rounded-lg p-1.5 shadow-2xl animate-in fade-in zoom-in-95 duration-100 z-50"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(34, 36, 42, 0.92)"
                  : "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(30px) saturate(200%)",
                WebkitBackdropFilter: "blur(30px) saturate(200%)",
                border: isDarkMode
                  ? "1px solid rgba(255, 255, 255, 0.12)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",
              }}
            >
              <button
                type="button"
                className="w-full text-left px-2.5 py-1 rounded-[5px] flex items-center justify-between text-[13px] hover:bg-[#0062e3] hover:text-white transition-colors"
                onClick={() => {
                  setAppleMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <span>About Manthan Mevada</span>
              </button>
              <div
                className="my-1 h-[1px]"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.08)",
                }}
              />
              <button
                type="button"
                className="w-full text-left px-2.5 py-1 rounded-[5px] flex items-center justify-between text-[13px] hover:bg-[#0062e3] hover:text-white transition-colors"
                onClick={() => {
                  onToggleDarkMode();
                  setAppleMenuOpen(false);
                }}
              >
                <span>Appearance: {isDarkMode ? "Dark Mode" : "Light Mode"}</span>
              </button>
              <button
                type="button"
                className="w-full text-left px-2.5 py-1 rounded-[5px] flex items-center justify-between text-[13px] hover:bg-[#0062e3] hover:text-white transition-colors"
                onClick={() => {
                  scrollTo(".skills-container");
                  setAppleMenuOpen(false);
                }}
              >
                <span>Tech Stack & Skills</span>
              </button>
              <button
                type="button"
                className="w-full text-left px-2.5 py-1 rounded-[5px] flex items-center justify-between text-[13px] hover:bg-[#0062e3] hover:text-white transition-colors"
                onClick={() => {
                  scrollTo(".projects-wrapper");
                  setAppleMenuOpen(false);
                }}
              >
                <span>Featured Projects</span>
              </button>
              <div
                className="my-1 h-[1px]"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.08)",
                }}
              />
              <a
                href="https://github.com/mstech66"
                target="_blank"
                rel="noreferrer"
                className="w-full text-left px-2.5 py-1 rounded-[5px] flex items-center justify-between text-[13px] hover:bg-[#0062e3] hover:text-white transition-colors"
                onClick={() => setAppleMenuOpen(false)}
              >
                <span>GitHub Profile</span>
                <span className="text-[11px] opacity-60">↗</span>
              </a>
              <a
                href="https://linkedin.com/in/manthanmevada"
                target="_blank"
                rel="noreferrer"
                className="w-full text-left px-2.5 py-1 rounded-[5px] flex items-center justify-between text-[13px] hover:bg-[#0062e3] hover:text-white transition-colors"
                onClick={() => setAppleMenuOpen(false)}
              >
                <span>LinkedIn Profile</span>
                <span className="text-[11px] opacity-60">↗</span>
              </a>
              <div
                className="my-1 h-[1px]"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.08)",
                }}
              />
              <button
                type="button"
                className="w-full text-left px-2.5 py-1 rounded-[5px] flex items-center justify-between text-[13px] hover:bg-[#0062e3] hover:text-white transition-colors"
                onClick={() => {
                  window.location.reload();
                }}
              >
                <span>Restart Session...</span>
              </button>
            </div>
          )}
        </div>

        {/* App Title (Bold) */}
        <span className="font-bold px-2 py-0.5 rounded-[4px] cursor-default">
          Portfolio
        </span>

        {/* macOS Menu Nav Items (Smooth responsive navigation) */}
        <div className="mac-nav-links">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mac-menu-item"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollTo(".downloads")}
            className="mac-menu-item"
          >
            Downloads
          </button>
          <button
            type="button"
            onClick={() => scrollTo(".skills-container")}
            className="mac-menu-item"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => scrollTo(".projects-wrapper")}
            className="mac-menu-item"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollTo("footer")}
            className="mac-menu-item"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Right Status / Control Center Section */}
      <div className="flex items-center gap-1.5">
        {/* Developer Badge */}
        <span className="mac-user-badge text-[12px] opacity-75 font-normal mr-1">
          Manthan Mevada
        </span>

        <div className="mac-status-extra">
          {/* Battery Section (Pixel-perfect macOS battery) */}
          <div
            className="flex items-center gap-1.5 px-1 py-0.5 rounded-[4px] cursor-default leading-none"
            title="Battery: 100% (Power Adapter Connected)"
          >
            <svg
              width="20"
              height="10"
              viewBox="0 0 22 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              style={{ display: "block" }}
            >
              {/* Outer battery casing */}
              <rect
                x="0.75"
                y="0.75"
                width="18"
                height="9.5"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="1.2"
                opacity="0.85"
              />
              {/* Terminal knob */}
              <path
                d="M20 3.8C20.6 3.8 21 4.2 21 4.8V6.2C21 6.8 20.6 7.2 20 7.2V3.8Z"
                fill="currentColor"
                opacity="0.85"
              />
              {/* Battery level fill */}
              <rect
                x="2.5"
                y="2.5"
                width="14.5"
                height="6"
                rx="1.2"
                fill="currentColor"
              />
            </svg>
            <span
              className="text-[11px] font-medium leading-none tracking-tight select-none"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              100%
            </span>
          </div>

          {/* Wi-Fi Icon */}
          <div
            className="flex items-center px-1.5 py-0.5 rounded-[4px] cursor-default"
            title="Wi-Fi: Connected"
          >
            <WifiIcon size={13} />
          </div>

          {/* Spotlight Search Icon */}
          <div
            className="flex items-center px-1.5 py-0.5 rounded-[4px] cursor-pointer"
            title="Spotlight Search"
            onClick={() => scrollTo(".projects-wrapper")}
          >
            <SearchIcon size={11} />
          </div>
        </div>

        {/* Theme Toggle Button (macOS style status icon) */}
        <button
          type="button"
          onClick={onToggleDarkMode}
          className="mac-menu-item flex items-center"
          title={`Switch to ${isDarkMode ? "Light" : "Dark"} Mode`}
        >
          {isDarkMode ? (
            <SunIcon size={13} className="text-amber-400" />
          ) : (
            <MoonIcon size={13} className="text-indigo-600" />
          )}
        </button>

        {/* Control Center Toggle */}
        <div className="relative" ref={controlCenterRef}>
          <button
            type="button"
            className={`flex items-center px-1.5 py-0.5 rounded-[4px] transition-colors ${controlCenterOpen
              ? isDarkMode
                ? "bg-white/20"
                : "bg-black/10"
              : isDarkMode
                ? "hover:bg-white/10"
                : "hover:bg-black/5"
              }`}
            onClick={() => {
              setControlCenterOpen((prev) => !prev);
              setAppleMenuOpen(false);
            }}
            title="Control Center"
          >
            <SlidersIcon size={13} />
          </button>

          {controlCenterOpen && (
            <div
              className="fixed right-2 sm:right-3 top-[32px] w-[280px] max-w-[calc(100vw-16px)] rounded-2xl p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-100 z-50 flex flex-col gap-2.5"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(34, 36, 42, 0.94)"
                  : "rgba(255, 255, 255, 0.94)",
                backdropFilter: "blur(30px) saturate(200%)",
                WebkitBackdropFilter: "blur(30px) saturate(200%)",
                border: isDarkMode
                  ? "1px solid rgba(255, 255, 255, 0.12)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",
              }}
            >
              <div className="flex items-center justify-between pb-1 border-b border-black/10 dark:border-white/10">
                <span className="font-semibold text-[13px]">Control Center</span>
              </div>

              {/* Theme Switcher Tile */}
              <div
                onClick={onToggleDarkMode}
                className="flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all hover:scale-[1.01]"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white">
                    {isDarkMode ? <MoonIcon size={14} /> : <SunIcon size={14} />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold">Theme Mode</span>
                    <span className="text-[11px] opacity-70">
                      {isDarkMode ? "Dark Theme" : "Light Theme"}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-medium text-blue-500">
                  {isDarkMode ? "Dark" : "Light"}
                </span>
              </div>

              {/* Quick Links Tile */}
              <div
                className="p-2.5 rounded-xl flex flex-col gap-1.5"
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.05)",
                }}
              >
                <span className="text-[11px] font-semibold opacity-70">
                  Quick Navigation
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      scrollTo(".skills-container");
                      setControlCenterOpen(false);
                    }}
                    className="px-2 py-1.5 text-[11px] rounded-lg bg-black/5 dark:bg-white/10 hover:bg-[#0062e3] hover:text-white transition-colors text-center"
                  >
                    Skills
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      scrollTo(".projects-wrapper");
                      setControlCenterOpen(false);
                    }}
                    className="px-2 py-1.5 text-[11px] rounded-lg bg-black/5 dark:bg-white/10 hover:bg-[#0062e3] hover:text-white transition-colors text-center"
                  >
                    Projects
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      scrollTo(".downloads");
                      setControlCenterOpen(false);
                    }}
                    className="px-2 py-1.5 text-[11px] rounded-lg bg-black/5 dark:bg-white/10 hover:bg-[#0062e3] hover:text-white transition-colors text-center"
                  >
                    Downloads
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      scrollTo("footer");
                      setControlCenterOpen(false);
                    }}
                    className="px-2 py-1.5 text-[11px] rounded-lg bg-black/5 dark:bg-white/10 hover:bg-[#0062e3] hover:text-white transition-colors text-center"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Live Clock Display */}
        <span
          className="text-[12px] font-medium tracking-tight px-1 py-0.5 rounded-[4px] hover:bg-black/5 dark:hover:bg-white/10 cursor-default whitespace-nowrap"
          title="Current System Time"
        >
          {currentTime || "Sat Sep 19  1:45 PM"}
        </span>
      </div>
    </header>
  );
}
