import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { portfolio, projects } from "@/data/data";
import type { Project } from "@/data/types";

/* -------------------------------------------------------------------------- */
/*  Content: edit this section to make the terminal yours                     */
/* -------------------------------------------------------------------------- */

const THEMES = ["default", "matrix", "amber", "dracula", "light"] as const;
type ThemeName = (typeof THEMES)[number];

const projectSlug = (project: Project) =>
  project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const projectHref = (project: Project) => project.url || project.giturl;
const socialLinks = Object.values(portfolio.links);

/* -------------------------------------------------------------------------- */
/*  Output blocks                                                             */
/* -------------------------------------------------------------------------- */

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    className="t-link"
    href={href}
    target={href.startsWith("mailto:") ? undefined : "_blank"}
    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
  >
    {children}
  </a>
);
const Dim = ({ children }: { children: ReactNode }) => <span className="t-dim">{children}</span>;
const Err = ({ children }: { children: ReactNode }) => <span className="t-err">{children}</span>;
const Head = ({ children }: { children: ReactNode }) => <div className="t-head">{children}</div>;

function AboutOut() {
  return (
    <div className="t-block">
      <Head>{portfolio.name}</Head>
      <div>{portfolio.intro}</div>
      <div>{portfolio.experience.duration}</div>
      <div>Off-screen: {portfolio.bio[portfolio.bio.length - 1]}</div>
      <Dim>Try: skills · projects · experience · contact</Dim>
    </div>
  );
}

function BioOut() {
  return (
    <div className="t-block">
      {portfolio.bio.map((paragraph) => <div key={paragraph}>{paragraph}</div>)}
      <Dim>All things material &lt;3</Dim>
    </div>
  );
}

function SkillsOut() {
  return (
    <div className="t-grid">
      {portfolio.skills.map(({ category, items }) => (
        <div key={category} className="t-row">
          <span className="t-key">{category}</span>
          <span>{items}</span>
        </div>
      ))}
    </div>
  );
}

function ExperienceOut() {
  return (
    <div className="t-block">
      <Head>{portfolio.experience.title}</Head>
      <Dim>{portfolio.experience.location} | {portfolio.experience.duration}</Dim>
      {portfolio.experience.summary.map((item) => <div key={item}>{item}</div>)}
    </div>
  );
}

function ContactOut() {
  return (
    <div className="t-grid">
      {socialLinks.map(({ label, href, display }) => (
        <div className="t-row" key={label}>
          <span className="t-key">{label.toLowerCase()}</span>
          <A href={href}>{display}</A>
        </div>
      ))}
    </div>
  );
}

function ProjectOut({ p }: { p: Project }) {
  const href = projectHref(p);
  return (
    <div className="t-block">
      <Head>{p.title}</Head>
      <div>{p.descr}</div>
      <div>{p.longDescr}</div>
      <Dim>{p.langUsed.join(", ")}</Dim>
      {href && (
        <div>
          <A href={href}>{href}</A>
        </div>
      )}
    </div>
  );
}

function ProjectsOut() {
  return (
    <div className="t-block">
      <div className="t-grid">
        {projects.map((project) => (
          <div key={project.title} className="t-row">
            <span className="t-key">{projectSlug(project)}</span>
            <span>{project.descr}</span>
          </div>
        ))}
      </div>
      <Dim>
        Run <code>projects &lt;name&gt;</code> for details, e.g. <code>projects breathe</code>
      </Dim>
    </div>
  );
}

const HELP_ROWS: [string, string][] = [
  ["help", "show this list"],
  ["banner", "show the welcome screen again"],
  ["about", "who I am"],
  ["skills", "what I work with"],
  ["projects [name]", "things I've built"],
  ["experience", "where I've worked"],
  ["contact", "how to reach me"],
  ["social", "my links"],
  ["resume", "open my resume"],
  ["whoami", "one-line intro"],
  ["uname -a", "show this machine's unofficial system info"],
  ["cat bio.txt", "read the human behind the handle"],
  ["cat /etc/issue", "show the welcome banner"],
  ["cat /etc/profile", "read the social handles"],
  ["ls · cd · cat", "browse around like a filesystem"],
  ["open <target>", "open a link (github, linkedin, ...)"],
  ["neofetch", "system info, portfolio edition"],
  ["theme [name]", "change the colours"],
  ["history", "commands you've run"],
  ["clear", "clear the screen (Ctrl+L)"],
  ["exit", "close the terminal"],
];

function HelpOut() {
  return (
    <div className="t-block">
      <div className="t-grid">
        {HELP_ROWS.map(([cmd, desc]) => (
          <div key={cmd} className="t-row">
            <span className="t-cmd">{cmd}</span>
            <span>{desc}</span>
          </div>
        ))}
      </div>
      <Dim>Tip: Tab autocompletes, ↑ / ↓ browse your history.</Dim>
    </div>
  );
}

const BANNER_ART = [
  "                        _   _                 ",
  "  _ __ ___   __ _ _ __ | |_| |__   __ _ _ __  ",
  "  | '_ ` _ \\ / _` | '_ \\| __| '_ \\ / _` | '_ \\",
  "  | | | | | | (_| | | | | |_| | | | (_| | | | |",
  "  |_| |_| |_|\\__,_|_| |_|\\__|_| |_|\\__,_|_| |_|",
].join("\n");

function IssueOut() {
  return (
    <div className="t-block">
      <pre className="t-art t-banner-art" role="img" aria-label="Manthan ASCII logo">
        {BANNER_ART}
      </pre>
      <div>NaHumn / {portfolio.name.toLowerCase().replace(/\s+/g, "-")}</div>
      <Dim>{portfolio.role}</Dim>
    </div>
  );
}

function ProfileOut() {
  return (
    <div className="t-block">
      {socialLinks.map(({ label, display }) => (
        <div key={label}>{label.toUpperCase()}={display}</div>
      ))}
    </div>
  );
}

function BannerOut() {
  const tips: [string, string][] = [
    ["help", "list every command"],
    ["cat bio.txt", "meet me beyond the code"],
    ["about · skills · projects", "get to know me and my work"],
    ["ls · cd · cat", "browse around like a filesystem"],
    ["Tab", "autocomplete commands and files"],
    ["↑ / ↓", "scroll through your history"],
    ["Ctrl+L", "clear the screen"],
  ];
  return (
    <div className="t-block t-banner">
      <pre className="t-art t-banner-art" role="img" aria-label="Manthan">
        {BANNER_ART}
      </pre>
      <div>Hi, I&apos;m {portfolio.name}, a {portfolio.role}.</div>
      <Dim>{portfolio.intro}</Dim>
      <Dim> Explore my work and experience:</Dim>
      <div className="t-grid">
        {tips.map(([k, v]) => (
          <div key={k} className="t-row">
            <span className="t-cmd">{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>
      <Dim>
        Psst: try <code>neofetch</code> or <code>theme matrix</code>. Run <code>banner</code> to see
        this again.
      </Dim>
    </div>
  );
}

const NEOFETCH_ART = String.raw`  __  __ __  __
 |  \/  |  \/  |
 | |\/| | |\/| |
 |_|  |_|_|  |_|`;

function NeofetchOut() {
  const uptime = Math.max(1, Math.round(performance.now() / 1000));
  const rows: [string, string][] = [
    ["Name", portfolio.name],
    ["Role", portfolio.role],
    ["Focus", portfolio.skills.map(({ category }) => category).join(", ")],
    ["Stack", portfolio.skills.slice(0, 2).map(({ items }) => items).join(", ")],
    ["Shell", "zsh (portfolio edition)"],
    ["Uptime", `${uptime}s (this session)`],
  ];
  return (
    <div className="t-neofetch">
      <pre className="t-art">{NEOFETCH_ART}</pre>
      <div className="t-info">
        <div className="t-head">guest@manthan</div>
        <Dim>──────────────</Dim>
        {rows.map(([k, v]) => (
          <div key={k}>
            <span className="t-key">{k}</span>: {v}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Fake filesystem                                                           */
/* -------------------------------------------------------------------------- */

type FsFile = { type: "file"; render: () => ReactNode };
type FsDir = { type: "dir"; children: Record<string, FsNode> };
type FsNode = FsFile | FsDir;

const file = (render: () => ReactNode): FsFile => ({ type: "file", render });

const FS: FsDir = {
  type: "dir",
  children: {
    "about.txt": file(() => <AboutOut />),
    "bio.txt": file(() => <BioOut />),
    "skills.txt": file(() => <SkillsOut />),
    "experience.txt": file(() => <ExperienceOut />),
    "contact.txt": file(() => <ContactOut />),
    etc: {
      type: "dir",
      children: {
        issue: file(() => <IssueOut />),
        profile: file(() => <ProfileOut />),
      },
    },
    "resume.pdf": file(() => (
      <Dim>
        Binary file. Run <code>resume</code> to open it.
      </Dim>
    )),
    projects: {
      type: "dir",
      children: Object.fromEntries(
        projects.map((project) => [
          `${projectSlug(project)}.md`,
          file(() => <ProjectOut p={project} />),
        ]),
      ),
    },
  },
};

const has = (obj: object, key: string) => Object.prototype.hasOwnProperty.call(obj, key);

function getNode(parts: string[]): FsNode | null {
  let node: FsNode = FS;
  for (const part of parts) {
    if (node.type !== "dir" || !has(node.children, part)) return null;
    node = node.children[part];
  }
  return node;
}

function resolvePath(base: string[], target: string): string[] {
  let t = target;
  let parts: string[];
  if (t === "~" || t.startsWith("~/")) {
    parts = [];
    t = t.slice(1);
  } else if (t.startsWith("/")) {
    parts = [];
  } else {
    parts = [...base];
  }
  for (const seg of t.split("/")) {
    if (!seg || seg === ".") continue;
    if (seg === "..") parts.pop();
    else parts.push(seg);
  }
  return parts;
}

const OPEN_TARGETS: Record<string, string> = {
  github: portfolio.links.github.href,
  linkedin: portfolio.links.linkedin.href,
  x: portfolio.links.x.href,
  twitter: portfolio.links.x.href,
  email: portfolio.links.email.href,
  resume: portfolio.resumeUrl,
  site: portfolio.siteUrl,
  ...Object.fromEntries(
    projects.flatMap((project) => {
      const href = projectHref(project);
      return href ? [[projectSlug(project), href] as const] : [];
    }),
  ),
};

const COMMAND_NAMES = [
  "help",
  "banner",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
  "social",
  "resume",
  "whoami",
  "uname",
  "ls",
  "cd",
  "cat",
  "pwd",
  "echo",
  "date",
  "open",
  "neofetch",
  "theme",
  "history",
  "clear",
  "exit",
  "sudo",
];

function commonPrefix(items: string[]): string {
  let prefix = items[0] ?? "";
  for (const item of items) {
    while (!item.startsWith(prefix)) prefix = prefix.slice(0, -1);
  }
  return prefix;
}

/* -------------------------------------------------------------------------- */
/*  Terminal component                                                        */
/* -------------------------------------------------------------------------- */

type LineInput =
  | { type: "cmd"; cwd: string; text: string }
  | { type: "out"; node: ReactNode };
type Line = LineInput & { id: number };

function openUrl(url: string) {
  if (url.startsWith("mailto:")) window.location.href = url;
  else window.open(url, "_blank", "noopener,noreferrer");
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [cwd, setCwd] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState<ThemeName>("default");
  const [open, setOpen] = useState(true);

  const history = useRef<string[]>([]);
  const historyIndex = useRef<number | null>(null);
  const draft = useRef("");
  const lastListedCompletion = useRef<string | null>(null);
  const nextId = useRef(0);
  const welcomed = useRef(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const promptPath = cwd.length ? `~/${cwd.join("/")}` : "~";

  const push = (...items: LineInput[]) =>
    setLines((prev) => [...prev, ...items.map((item) => ({ ...item, id: nextId.current++ }) as Line)]);

  // Welcome message (client-only so the timestamp can't cause a hydration mismatch)
  useEffect(() => {
    if (welcomed.current) return;
    welcomed.current = true;
    const d = new Date();
    const stamp = `${d.toDateString().slice(0, 10)} ${d.toTimeString().slice(0, 8)}`;
    push(
      { type: "out", node: <Dim>Last login: {stamp} on ttys001</Dim> },
      { type: "out", node: <BannerOut /> },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the newest output in view (scrolls the terminal only, never the page)
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, open]);

  const run = (raw: string) => {
    const input = raw.trim();
    push({ type: "cmd", cwd: promptPath, text: raw });
    if (!input) return;

    if (history.current[history.current.length - 1] !== input) history.current.push(input);
    historyIndex.current = null;

    const [cmd, ...args] = input.split(/\s+/);
    const rest = input.slice(cmd.length).trim();
    const out = (node: ReactNode) => push({ type: "out", node });

    switch (cmd) {
      case "help":
        out(<HelpOut />);
        break;
      case "banner":
        out(<BannerOut />);
        break;
      case "about":
        out(<AboutOut />);
        break;
      case "skills":
        out(<SkillsOut />);
        break;
      case "experience":
        out(<ExperienceOut />);
        break;
      case "contact":
        out(<ContactOut />);
        break;
      case "social":
        out(<ContactOut />);
        break;
      case "projects": {
        if (!args[0]) {
          out(<ProjectsOut />);
          break;
        }
        const p = projects.find((project) => projectSlug(project) === args[0].toLowerCase());
        out(
          p ? (
            <ProjectOut p={p} />
          ) : (
            <Err>projects: no project named &quot;{args[0]}&quot;. Run projects to list them.</Err>
          ),
        );
        break;
      }
      case "resume":
        out(<Dim>Opening resume…</Dim>);
        openUrl(portfolio.resumeUrl);
        break;
      case "whoami":
        out(
          <div className="t-block">
            <div>
              <span className="t-head">{portfolio.name}</span> - {portfolio.role}
            </div>
            <Dim>{portfolio.skills.slice(0, 2).map(({ items }) => items).join(", ")}</Dim>
          </div>,
        );
        break;
      case "pwd":
        out(`/Users/guest${cwd.length ? `/${cwd.join("/")}` : ""}`);
        break;
      case "echo":
        out(rest);
        break;
      case "date":
        out(new Date().toString());
        break;
      case "uname":
        out(
          args.includes("-a")
            ? "NaHumn manthan-mevada #1 SMP Thu Jun 30 07:05:35 UTC ???? x86_64 HE"
            : "NaHumn manthan-mevada",
        );
        break;
      case "ls": {
        const target = args.filter((a) => !a.startsWith("-"))[0] ?? ".";
        const node = getNode(resolvePath(cwd, target));
        if (!node) {
          out(<Err>ls: {target}: No such file or directory</Err>);
        } else if (node.type === "file") {
          out(target);
        } else {
          const entries = Object.entries(node.children).sort(([a], [b]) => a.localeCompare(b));
          out(
            <div className="t-ls">
              {entries.map(([name, n]) => (
                <span key={name} className={n.type === "dir" ? "t-path" : undefined}>
                  {name}
                  {n.type === "dir" ? "/" : ""}
                </span>
              ))}
            </div>,
          );
        }
        break;
      }
      case "cd": {
        const target = args[0] ?? "~";
        const parts = resolvePath(cwd, target);
        const node = getNode(parts);
        if (!node) out(<Err>cd: no such file or directory: {target}</Err>);
        else if (node.type !== "dir") out(<Err>cd: not a directory: {target}</Err>);
        else setCwd(parts);
        break;
      }
      case "cat": {
        if (!args[0]) {
          out(<Err>cat: missing file. Try cat about.txt</Err>);
          break;
        }
        const node = getNode(resolvePath(cwd, args[0]));
        if (!node) out(<Err>cat: {args[0]}: No such file or directory</Err>);
        else if (node.type === "dir") out(<Err>cat: {args[0]}: Is a directory</Err>);
        else out(node.render());
        break;
      }
      case "open": {
        const key = args[0]?.toLowerCase();
        if (!key) {
          out(
            <Dim>
              Usage: open &lt;target&gt;. Targets: {Object.keys(OPEN_TARGETS).join(", ")}
            </Dim>,
          );
        } else if (!has(OPEN_TARGETS, key)) {
          out(<Err>open: unknown target &quot;{args[0]}&quot;</Err>);
        } else {
          out(<Dim>Opening {key}…</Dim>);
          openUrl(OPEN_TARGETS[key]);
        }
        break;
      }
      case "neofetch":
        out(<NeofetchOut />);
        break;
      case "theme": {
        const name = args[0]?.toLowerCase();
        if (!name) {
          out(
            <Dim>
              Current: {theme}. Available: {THEMES.join(", ")}. Usage: theme &lt;name&gt;
            </Dim>,
          );
        } else if ((THEMES as readonly string[]).includes(name)) {
          setTheme(name as ThemeName);
          out(<Dim>Theme set to {name}.</Dim>);
        } else {
          out(<Err>theme: unknown theme &quot;{args[0]}&quot;. Try: {THEMES.join(", ")}</Err>);
        }
        break;
      }
      case "history":
        out(
          <div>
            {history.current.map((h, i) => (
              <div key={`${i}-${h}`}>
                <Dim>{String(i + 1).padStart(3, " ")}</Dim>  {h}
              </div>
            ))}
          </div>,
        );
        break;
      case "clear":
        setLines([]);
        break;
      case "exit":
        window.close();
        if (!window.closed) {
          out(<Dim>Your browser may block this tab from closing. You can close it manually.</Dim>);
        }
        break;
      case "sudo":
        if (args[0] === "hire-me") {
          out(
            <div className="t-block">
              <div>Permission granted. 🎉</div>
              <div>
                Drafting offer letter… just kidding, but do say hi:{" "}
                <A href={portfolio.links.email.href}>{portfolio.links.email.display}</A>
              </div>
            </div>,
          );
        } else {
          out(<Err>guest is not in the sudoers file. This incident will be reported.</Err>);
        }
        break;
      case "rm":
        out(<Err>rm: permission denied. Nice try though.</Err>);
        break;
      default:
        out(
          <Err>
            zsh: command not found: {cmd}. Type <code>help</code> to see available commands.
          </Err>,
        );
    }
  };

  const complete = () => {
    const endsWithSpace = /\s$/.test(value);
    const tokens = value.trimStart().split(/\s+/);
    const current = endsWithSpace ? "" : (tokens[tokens.length - 1] ?? "");
    const isCommand = tokens.length === 1 && !endsWithSpace;
    let candidates: string[] = [];

    if (isCommand) {
      candidates = COMMAND_NAMES.filter((c) => c.startsWith(current));
    } else {
      const cmd = tokens[0];
      if (["ls", "cd", "cat"].includes(cmd)) {
        const slash = current.lastIndexOf("/");
        const dirPart = slash >= 0 ? current.slice(0, slash + 1) : "";
        const namePart = current.slice(slash + 1);
        const dir = getNode(resolvePath(cwd, dirPart || "."));
        if (dir?.type === "dir") {
          candidates = Object.entries(dir.children)
            .filter(([name, n]) => name.startsWith(namePart) && (cmd !== "cd" || n.type === "dir"))
            .map(([name, n]) => dirPart + name + (n.type === "dir" ? "/" : ""));
        }
      } else if (cmd === "theme") {
        candidates = THEMES.filter((t) => t.startsWith(current));
      } else if (cmd === "open") {
        candidates = Object.keys(OPEN_TARGETS).filter((t) => t.startsWith(current));
      } else if (cmd === "projects") {
        candidates = projects
          .map(projectSlug)
          .filter((slug) => slug.startsWith(current));
      }
    }

    if (!candidates.length) return;
    const base = value.slice(0, value.length - current.length);

    if (candidates.length === 1) {
      const c = candidates[0];
      setValue(base + c + (c.endsWith("/") ? "" : " "));
      return;
    }
    const prefix = commonPrefix(candidates);
    if (prefix.length > current.length) {
      setValue(base + prefix);
    } else {
      const listingKey = `${value}\u0000${candidates.join("\u0000")}`;
      if (lastListedCompletion.current === listingKey) return;
      lastListedCompletion.current = listingKey;
      push(
        { type: "cmd", cwd: promptPath, text: value },
        { type: "out", node: <div className="t-ls">{candidates.map((c) => <span key={c}>{c}</span>)}</div> },
      );
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key, ctrlKey } = event;

    if (key === "Enter") {
      event.preventDefault();
      run(value);
      setValue("");
    } else if (key === "Tab") {
      event.preventDefault();
      if (event.repeat) return;
      complete();
    } else if (key === "ArrowUp") {
      event.preventDefault();
      if (!history.current.length) return;
      if (historyIndex.current === null) {
        draft.current = value;
        historyIndex.current = history.current.length - 1;
      } else if (historyIndex.current > 0) {
        historyIndex.current -= 1;
      }
      setValue(history.current[historyIndex.current]);
    } else if (key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex.current === null) return;
      if (historyIndex.current < history.current.length - 1) {
        historyIndex.current += 1;
        setValue(history.current[historyIndex.current]);
      } else {
        historyIndex.current = null;
        setValue(draft.current);
      }
    } else if (ctrlKey && key.toLowerCase() === "l") {
      event.preventDefault();
      setLines([]);
    } else if (ctrlKey && key.toLowerCase() === "c") {
      event.preventDefault();
      push({ type: "cmd", cwd: promptPath, text: `${value}^C` });
      setValue("");
      historyIndex.current = null;
    } else if (ctrlKey && key.toLowerCase() === "u") {
      event.preventDefault();
      setValue("");
    }
  };

  const focusInput = () => {
    if (window.getSelection()?.toString()) return; // don't steal focus while selecting text
    inputRef.current?.focus({ preventScroll: true });
  };

  const prompt = (path: string) => (
    <span className="t-prompt">
      <span className="t-user">guest@manthan</span> <span className="t-path">{path}</span>{" "}
      <span className="t-sym">%</span>
    </span>
  );

  if (!open) {
    return (
      <div className="site-terminal" data-theme={theme}>
        <button type="button" className="t-reopen" onClick={() => setOpen(true)}>
          Terminal closed. Click to reopen.
        </button>
      </div>
    );
  }

  return (
    <div className="site-terminal" data-theme={theme}>
      <div
        ref={bodyRef}
        className="site-terminal__body"
        role="log"
        aria-live="polite"
        aria-label="Interactive terminal"
        onClick={focusInput}
      >
        {lines.map((line) =>
          line.type === "cmd" ? (
            <div key={line.id} className="t-line">
              {prompt(line.cwd)} {line.text}
            </div>
          ) : (
            <div key={line.id} className="t-line t-out">
              {line.node}
            </div>
          ),
        )}

        <label className="t-line t-inputrow">
          {prompt(promptPath)}
          <input
            ref={inputRef}
            className="t-input"
            value={value}
            onChange={(e) => {
              lastListedCompletion.current = null;
              setValue(e.target.value);
            }}
            onKeyDown={onKeyDown}
            aria-label="Terminal command input"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="go"
          />
        </label>
      </div>

    </div>
  );
}


