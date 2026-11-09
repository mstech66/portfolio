import type { PortfolioData, Project } from "./types";

export const projects: Project[] = [
  {
    title: "Parchi",
    descr: "A Personal Finance App to Track Your Spends",
    longDescr:
      "I designed and developed a personal finance app using Flutter and Figma, initially as a learning exercise. Positive feedback from peers motivated further enhancement, leading to deeper exploration of Flutter's state management and animation capabilities. This experience solidified my preference for Flutter in creating engaging mobile experiences",
    langUsed: ["flutter", "figma"],
    giturl: "https://github.com/mstech66",
    category: "Mobile",
    compatibility: "Android, iOS, Figma",
  },
  {
    title: "Notify",
    giturl: "https://github.com/mstech66/notify-android",
    descr: "Digital Noticeboard in palm of your hands",
    longDescr:
      "Notify is an app which simplifies every day Noticeboards by digitizing them. It uses Firebase’s Topic Messaging Feature to sort notices to only for those to whom they are useful. Notify also includes a Dashboard for Administrator to easily send notices to students.",
    langUsed: ["android", "kotlin", "firebase", "node", "js", "css"],
    category: "Mobile",
    compatibility: "Android, FCM Cloud, Web Dashboard",
  },
  {
    title: "Breathe",
    giturl: "https://github.com/mstech66/breathe",
    descr: "Simple Breathing Reminders App",
    longDescr:
      "Explored various desktop frameworks with JavaScript (Electron and React Native for Windows) before developing a functional UWP application for Windows. Incorporated custom breathing animations, demonstrating practical application development and UI design skills.",
    langUsed: ["UWP", "css"],
    category: "AI & Tools",
    compatibility: "Windows 10, Windows 11 (UWP)",
  },
  {
    title: "Notes App",
    url: "https://notes-mstech66.vercel.app/",
    giturl: "https://github.com/mstech66/notes",
    descr: "Notes App made with React",
    longDescr:
      "A simple notes application made with Material UI and inspired by Pinterest and Google Keep's masonry layout",
    langUsed: ["react", "js", "css", "vercel"],
    category: "Web",
    compatibility: "Web, Vercel, Responsive Layout",
  },
  {
    title: "AI Powered Todo App",
    giturl: "https://github.com/mstech66/todo",
    descr: "Not your normal todo app",
    longDescr:
      "Todo list app with AI built in to help you do better tasks. It's built in NextJS with Gemini 2.5 Flash API. Deploying soon",
    langUsed: ["nextjs", "react", "js", "tailwind", "gemini"],
    category: "AI & Tools",
    compatibility: "Web, Next.js, Gemini AI 2.5",
  },
  {
    title: "Restro App",
    url: "https://restro-form.vercel.app/",
    descr: "Lunch ordering website for St. Joseph's",
    longDescr:
      "As part of my freelancing, I developed a website in NextJS which lets students place lunch orders safely. It uses Stripe for processing payments in Canada and as requested it uses Google Sheets API to store the information",
    langUsed: ["nextjs", "react", "js", "tailwind", "sheets", "stripe", "vercel"],
    category: "Web",
    compatibility: "Web, Mobile Checkout, Stripe, Sheets",
  }
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
