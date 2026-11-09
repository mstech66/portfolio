import type { PortfolioData, Project } from "./types";

export const projects: Project[] = [
  {
    title: "Parchi",
    cardColor: "#efc72e",
    cardTextColor: "#15202b",
    descr: "A Personal Finance App to Track Your Spends",
    longDescr:
      "I designed and built a personal finance app with Flutter and Figma as a learning project. Encouraged by positive feedback from peers, I continued refining it while exploring Flutter's state management and animation capabilities. The experience strengthened my passion for using Flutter to create engaging mobile experiences.",
    langUsed: ["flutter", "figma"],
    giturl: "https://github.com/mstech66",
    categories: ["Mobile"],
    compatibility: "Android, iOS, Figma",
  },
  {
    title: "Notify",
    cardColor: "#c9ddf5",
    cardTextColor: "#15202b",
    giturl: "https://github.com/mstech66/notify-android",
    descr: "Digital Noticeboard in palm of your hands",
    longDescr:
      "Notify is an app that digitizes everyday noticeboards, making it easier to share updates with the right audience. It uses Firebase Cloud Messaging topic-based notifications to deliver notices only to relevant recipients and includes an admin dashboard for sending announcements to students.",
    langUsed: ["android", "kotlin", "firebase", "node", "js", "css"],
    categories: ["Mobile"],
    compatibility: "Android, FCM Cloud, Web Dashboard",
  },
  {
    title: "Breathe",
    cardColor: "#cce8df",
    cardTextColor: "#15202b",
    giturl: "https://github.com/mstech66/breathe",
    url: "https://apps.microsoft.com/detail/9P9LLQVRHLDJ?hl=en-us&gl=IN&ocid=pdpshare",
    descr: "Simple Breathing Reminders App",
    longDescr:
      "A calm work–rest rhythm for people who work from home. Focus sessions, real breaks, and a one-minute guided breath whenever you need it.",
    langUsed: ["js", "rust", "css"],
    categories: ["AI & Tools", "Desktop"],
    compatibility: "Windows, macOS",
  },
  {
    title: "Restro App",
    cardColor: "#f3d0c3",
    cardTextColor: "#15202b",
    url: "https://restro-form.vercel.app/",
    descr: "Lunch ordering website for St. Joseph's",
    longDescr:
      "As a freelance project, I built a Next.js website that lets students place lunch orders securely. It uses Stripe for payments in Canada, and, as requested, stores order information in Google Sheets.",
    langUsed: ["nextjs", "react", "js", "tailwind", "sheets", "stripe", "vercel"],
    categories: ["Web"],
    compatibility: "Web, Mobile Checkout, Stripe, Sheets",
  },
  {
    title: "mori.",
    cardColor: "#14221c",
    cardTextColor: "#e2f4ef",
    giturl: "https://github.com/mstech66/todo",
    descr: "A home for your thoughts",
    longDescr:
      "mori. is a simple, minimalistic and personal memory workspace where you can jot down your thoughts and ideas with a built in agent that helps you organize your thoughts and ideas. It is built with Next.js, React, Tailwind CSS.",
    langUsed: ["nextjs", "react", "js", "tailwind", "gemini"],
    categories: ["AI & Tools", "Web"],
    compatibility: "Web, Next.js, Gemini",
  },
];

export const portfolio: PortfolioData = {
  name: "Manthan Mevada",
  role: "React-focused frontend and full stack developer",
  intro:
    "React-focused frontend and full stack developer building polished web experiences with React, Next.js and TypeScript. My toolkit also includes Node.js, Express and databases.",
  bio: [
    "Software engineer with a love for building things that look good and work well. <3",
    "I work across software engineering and design, mostly with React, Next.js, TypeScript, JavaScript and Flutter.",
    "Lately I've been exploring AI-powered development, automation, developer tooling, and ways to make engineering smarter and more fun.",
    "I build things in my free time too: some useful, some experimental, some completely unnecessary. All of them are fun. :D",
    "I love books, video games, design, chai, and turning random ideas into projects.",
  ],
  resumeUrl: "/resume.pdf",
  siteUrl: "https://manthanmevada.vercel.app",
  links: {
    email: {
      label: "Email",
      href: "mailto:manthanmevada@outlook.com",
      display: "manthanmevada@outlook.com",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/mstech66",
      display: "github.com/mstech66",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manthanmevada/",
      display: "linkedin.com/in/manthanmevada",
    },
    x: {
      label: "X",
      href: "https://twitter.com/Manthan_Mevada",
      display: "twitter.com/Manthan_Mevada",
    },
  },
  skills: [
    { category: "Frontend", items: "React, Next.js, TypeScript, JavaScript, HTML/CSS, Sass" },
    { category: "Backend", items: "Node.js, Express" },
    { category: "Data / Cloud", items: "MongoDB, MySQL, Firebase, AWS" },
    { category: "Quality", items: "Katalon Studio, Java, Selenium, Playwright" },
    { category: "Design", items: "UI/UX, Figma, visual design, illustration" },
  ],
  experience: {
    title: "Software Engineer - EPAM",
    location: "Remote",
    duration: "About 7 years in software engineering",
    summary: [
      "Collaborated with cross-functional teams to support software delivery",
      "Worked from product requirements toward reliable, release-ready outcomes",
      "Contributed to maintainable workflows and continuous improvement",
      "Building frontend projects with React, Next.js and TypeScript",
    ],
  },
};
