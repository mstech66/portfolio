import type { Project } from "./types";

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
    title: "Smart Projector",
    descr: "Raspberry Pi based Smart Class Solution",
    longDescr:
      "Smart Projector is an all-in-one device for smart classes. Smart Projector is able to answer any question right away with Google Assistant, it doesn’t require a keyboard/mouse so you can touch the projection to interact with the digital pen by which you can draw and doodle on the surface.",
    langUsed: ["raspberrypi", "python", "node", "js", "firebase", "css"],
    category: "IoT & Hardware",
    compatibility: "Raspberry Pi, Touch Surface, Assistant",
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
    title: "Crack Your Way",
    url: "http://cyw-srpec.herokuapp.com/",
    giturl: "https://github.com/mstech66/cyw",
    descr: "A QR Code Based Trivia Game",
    longDescr:
      "Crack Your Way is a fun trivia game with a bit complexity of QR-codes. Solve the questions and scan the QR codes to move further.",
    langUsed: ["node", "js", "css", "mongo"],
    category: "Web",
    compatibility: "Web, Mobile Safari & Chrome",
  },
  {
    title: "Matcher",
    url: "http://matcher.herokuapp.com/",
    giturl: "https://github.com/mstech66/matcher",
    descr: "Simple Combined DNA Indexing System",
    longDescr:
      "Inspired by CODIS (FBI), I wanted to try out comparing two different csv files which contains a mixture and a sample dna data for the possible suspects and trying to match the most matched possible suspect. I built the web interface in Angular 7 with a very minimal design in mind.",
    langUsed: ["angular", "node", "js", "css", "mongo"],
    category: "Web",
    compatibility: "Web, Modern Browsers, CSV Engine",
  },
  {
    title: "InstaSaidSo!",
    giturl: "https://github.com/mstech66/instasaidso",
    descr: "Quotes App inspired by Instagram",
    longDescr:
      "Inspired by Instagram's minimalistic and popular design I wanted to try it out with css but then thought about creating a quotes app which basically looks like an Instgram Clone :P Wanted to build it for desktop but electronjs didn't help me much. Ended up creating a fully functioning website with a backend quotes api with jwt authentication leveraging the data in MongoDB.",
    langUsed: ["angular", "js", "css", "mongo"],
    category: "Web",
    compatibility: "Web, Mobile Responsive, REST API",
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
    title: "Sticker Maker",
    url: "https://mstech66.github.io/stickermaker/",
    giturl: "https://github.com/mstech66/stickermaker",
    descr: "Sticker Maker App built with Flutter 💙",
    longDescr:
      "Developed a Flutter-based StickerMaker app for Android to offer users an ad-free experience. The app's user interface was meticulously designed using Figma",
    langUsed: ["flutter", "figma", "android"],
    category: "Mobile",
    compatibility: "Android, WhatsApp Stickers API",
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
