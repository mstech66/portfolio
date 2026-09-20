export type Technology =
  | "android"
  | "angular"
  | "css"
  | "figma"
  | "firebase"
  | "flutter"
  | "gemini"
  | "git"
  | "java"
  | "js"
  | "kotlin"
  | "mongo"
  | "nextjs"
  | "node"
  | "python"
  | "raspberrypi"
  | "react"
  | "sheets"
  | "stripe"
  | "tailwind"
  | "UWP"
  | "vercel";

export type ProjectCategory = "All" | "Web" | "Mobile" | "AI & Tools" | "IoT & Hardware";

export interface Project {
  title: string;
  descr: string;
  longDescr: string;
  langUsed: Technology[];
  url?: string;
  giturl?: string;
  category?: ProjectCategory;
  compatibility?: string;
}

export interface AppFile {
  fileName: string;
  fileUrl: string;
}

export interface Wallpaper {
  imgName: string;
  imgUrl: string;
}

export interface ResumeResponse {
  url?: string;
}

export interface AppsResponse {
  apps: AppFile[];
}

export interface WallpaperResponse {
  wallpapers: Wallpaper[];
}

export interface FirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  figmaToken?: string;
}
