import { useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ChevronUp } from "lucide-react";
import { portfolio } from "@/data/data";
import Terminal from "./Terminal";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  { ...portfolio.links.github, icon: faGithub },
  { ...portfolio.links.linkedin, icon: faLinkedin },
  { ...portfolio.links.x, icon: faXTwitter },
];

const MAX_SCALE = 1.6; // magnification of the hovered icon only
const HIT_PAD = 6; // how far outside an icon (px) the pointer still counts as hovering it
const STIFFNESS = 380;
const SUBSTEP = 1 / 120;

/**
 * Dock magnification driven entirely by transforms.
 *
 * - Every icon keeps its fixed layout slot, so nothing reflows while animating.
 * - The hovered icon scales; neighbours are pushed aside with translateX,
 *   computed from the live spring values so the dock stays centred.
 * - The dock background is a pseudo-element that widens via --dock-extra.
 * - Slot positions are measured once (on enter / resize), and because slots
 *   never move, hover detection has no feedback loop and can't flicker.
 */
function useDockMagnification() {
  const dockRef = useRef<HTMLElement>(null);
  const pointerX = useRef<number | null>(null);
  const springs = useRef<{ scale: number; velocity: number }[]>([]);
  const raf = useRef<number | null>(null);
  const lastTime = useRef(0);
  const items = useRef<HTMLElement[]>([]);
  const slots = useRef<{ left: number; right: number }[]>([]);
  const slotSize = useRef(50);
  const divider = useRef<HTMLElement | null>(null);
  const itemsBeforeDivider = useRef(0);

  const measure = useCallback(() => {
    const dock = dockRef.current;
    if (!dock) return;

    items.current = Array.from(
      dock.querySelectorAll<HTMLElement>(".site-footer__dock-item"),
    );
    // The slot (parent) is never transformed, so its rect is the true resting position.
    slots.current = items.current.map((el) => {
      const r = (el.parentElement as HTMLElement).getBoundingClientRect();
      return { left: r.left, right: r.right };
    });
    // The divider isn't an icon, but it must travel with the icons around it.
    divider.current = dock.querySelector<HTMLElement>(".site-footer__dock-divider");
    const dividerEl = divider.current;
    itemsBeforeDivider.current = dividerEl
      ? items.current.filter(
          (el) => dividerEl.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_PRECEDING,
        ).length
      : 0;
    if (slots.current[0]) {
      slotSize.current = slots.current[0].right - slots.current[0].left;
    }
  }, []);

  const tick = useCallback((now: number) => {
    const dock = dockRef.current;
    const els = items.current;
    if (!dock || els.length === 0) {
      raf.current = null;
      return;
    }

    const dt = Math.min(0.032, (now - lastTime.current) / 1000);
    lastTime.current = now;

    // Which icon is hovered? Nearest slot to the pointer, within HIT_PAD.
    const x = pointerX.current;
    let hovered: number | null = null;
    if (x !== null) {
      let best = Infinity;
      slots.current.forEach((r, i) => {
        const d = x < r.left ? r.left - x : x > r.right ? x - r.right : 0;
        if (d < best) {
          best = d;
          hovered = i;
        }
      });
      if (best > HIT_PAD) hovered = null;
    }

    // Spring step
    let moving = false;
    els.forEach((_, i) => {
      const s = (springs.current[i] ??= { scale: 1, velocity: 0 });

      const target = i === hovered ? MAX_SCALE : 1;
      const response = i === 0 ? 1.7 : 1;
      const stiffness = STIFFNESS * response;
      const damping = 2 * Math.sqrt(stiffness); // critically damped: smooth, no wobble
      let remaining = dt;

      while (remaining > 0) {
        const step = Math.min(remaining, SUBSTEP);
        const force = -stiffness * (s.scale - target) - damping * s.velocity;
        s.velocity += force * step;
        s.scale += s.velocity * step;
        remaining -= step;
      }

      if (Math.abs(s.scale - target) > 0.0005 || Math.abs(s.velocity) > 0.005) {
        moving = true;
      } else {
        s.scale = target;
        s.velocity = 0;
      }
    });

    // Extra width each icon gains, and the total the dock gains
    const size = slotSize.current;
    const extras = els.map((_, i) => (springs.current[i].scale - 1) * size);
    const total = extras.reduce((sum, e) => sum + e, 0);

    // Write phase: transforms only, no layout reads or layout-affecting writes
    let before = 0;
    els.forEach((el, i) => {
      const tx = -total / 2 + before + extras[i] / 2;
      before += extras[i];
      el.style.setProperty("--dock-scale", springs.current[i].scale.toFixed(4));
      el.style.setProperty("--dock-tx", `${tx.toFixed(3)}px`);
    });
    dock.style.setProperty("--dock-extra", `${total.toFixed(3)}px`);

    // Divider sits after the first N icons, so it shifts by everything that grew before it
    if (divider.current) {
      let growthBefore = 0;
      for (let i = 0; i < itemsBeforeDivider.current; i++) growthBefore += extras[i];
      divider.current.style.setProperty(
        "--dock-tx",
        `${(-total / 2 + growthBefore).toFixed(3)}px`,
      );
    }

    raf.current = moving ? requestAnimationFrame(tick) : null;
  }, []);

  const start = useCallback(() => {
    if (raf.current === null) {
      lastTime.current = performance.now();
      raf.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  const onMouseEnter = () => {
    measure();
  };

  const onMouseMove = (event: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (items.current.length === 0) measure();
    pointerX.current = event.clientX;
    start();
  };

  const onMouseLeave = () => {
    pointerX.current = null; // springs relax back to scale 1
    start();
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [measure]);

  return { dockRef, onMouseEnter, onMouseMove, onMouseLeave };
}

export default function Footer() {
  const dock = useDockMagnification();

  return (
    <footer id="footer" className="site-footer" aria-label="Site footer">
      <div className="site-footer__frame">
        <div className="site-footer__titlebar" aria-label="Terminal window">
          <div className="site-footer__window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="site-footer__terminal-title">
            <FontAwesomeIcon icon={faFolder as IconProp} aria-hidden="true" />
            <span>{portfolio.name.toLowerCase().replace(/\s+/g, "-")} - portfolio - zsh</span>
          </div>
        </div>

        <Terminal />

        <div className="site-footer__bottom">
          <nav
            ref={dock.dockRef}
            className="site-footer__dock"
            aria-label="Quick links"
            onMouseEnter={dock.onMouseEnter}
            onMouseMove={dock.onMouseMove}
            onMouseLeave={dock.onMouseLeave}
          >
            <div className="site-footer__dock-wrapper">
              <div className="site-footer__dock-app">
                <a
                  className="site-footer__dock-item site-footer__mail"
                  href={portfolio.links.email.href}
                  aria-label={`Email ${portfolio.name}`}
                  title="Email"
                >
                  <img src="/assets/images/mail-icon.png" alt="" />
                </a>
              </div>

              <span className="site-footer__dock-socials">
                {socialLinks.map(({ label, href, icon }) => (
                  <div key={label} className="site-footer__dock-app">
                    <a
                      className={`site-footer__dock-item site-footer__${label.toLowerCase()}`}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${portfolio.name} on ${label}`}
                      title={label}
                    >
                      <FontAwesomeIcon icon={icon as IconProp} aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </span>

              <span className="site-footer__dock-divider" aria-hidden="true" />

              <div className="site-footer__dock-app">
                <a
                  className="site-footer__dock-item site-footer__back-to-top"
                  href="#top"
                  aria-label="Back to top"
                  title="Back to top"
                  onClick={(event) => {
                    event.preventDefault();
                    const prefersReducedMotion = window.matchMedia(
                      "(prefers-reduced-motion: reduce)",
                    ).matches;
                    window.scrollTo({
                      top: 0,
                      behavior: prefersReducedMotion ? "auto" : "smooth",
                    });
                  }}
                >
                  <ChevronUp strokeWidth={3.5} aria-hidden="true" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </footer>
  );
}
