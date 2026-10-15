import useSWR from "swr";
import config from "@/data/config";
import type {
  AppFile,
  AppsResponse,
  ResumeResponse,
  WallpaperResponse,
} from "@/data/types";

async function getJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

/* ---------- Wallpapers ---------- */

export interface WallpaperItem {
  id: string;
  name: string;
  kind: string;
  url: string;
}

function prettifyFileName(fileName: string): string {
  const base = fileName.replace(/\.[^.]+$/, "");
  const spaced = base.replace(/[-_]+/g, " ").trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function imageKind(fileName: string): string {
  const ext = fileName.split(".").pop()?.toUpperCase();
  return ext && ext !== fileName.toUpperCase() ? `${ext} image` : "Image";
}

export function useWallpapers() {
  const { data, error, mutate } = useSWR<WallpaperResponse>(
    "/api/storage?object=wallpaper",
    (url: string) => getJson<WallpaperResponse>(url),
  );

  const items: WallpaperItem[] = (data?.wallpapers ?? []).map((wallpaper) => ({
    id: wallpaper.imgName,
    name: prettifyFileName(wallpaper.imgName),
    kind: imageKind(wallpaper.imgName),
    url: wallpaper.imgUrl,
  }));

  return {
    items,
    isLoading: !data && !error,
    error: Boolean(error),
    retry: () => void mutate(),
  };
}

/* ---------- Assets (Figma) ---------- */

export interface AssetItem {
  id: string;
  name: string;
  href: string;
  /** Live frame thumbnail from the Figma API; undefined until it loads. */
  thumbnail?: string;
}

interface FigmaFile {
  name: string;
  thumbnail_url: string;
}

interface FigmaFilesResponse {
  files?: FigmaFile[];
}

/** Only these Figma files are shown, in this order. */
const FIGMA_ASSETS = [
  {
    name: "Parchi",
    href: "https://www.figma.com/file/srCLxCzmnVITGMU2kkd7Wq/Parchi?type=design&t=B1CWDUrS6Fo61kNI-6",
  },
  {
    name: "Sticker Maker",
    href: "https://www.figma.com/file/2fpJ6aoN0QDQo17hJ95Wqk/Sticker-Maker-App?type=design&t=B1CWDUrS6Fo61kNI-6",
  },
];

export function useAssets() {
  const token = config.figmaToken;
  const { data, error } = useSWR<FigmaFilesResponse>(
    token ? "https://api.figma.com/v1/projects/109899386/files" : null,
    (url: string) =>
      getJson<FigmaFilesResponse>(url, {
        headers: { "X-FIGMA-TOKEN": token ?? "" },
      }),
    { revalidateOnFocus: false },
  );

  const items: AssetItem[] = FIGMA_ASSETS.map((asset) => {
    const live = data?.files?.find((file) => file.name === asset.name);
    return {
      id: asset.name,
      name: asset.name,
      href: asset.href,
      thumbnail: live?.thumbnail_url || undefined,
    };
  });

  return { items, isLoading: Boolean(token) && !data && !error };
}

/* ---------- Apps ---------- */

export interface AppItem {
  id: string;
  name: string;
  description: string;
  platform: string;
  icon?: string;
  fileName: string;
  url: string;
}

/** Friendly details for known apps, matched against the uploaded file name. */
const APP_DETAILS: Record<
  string,
  Pick<AppItem, "name" | "description" | "platform" | "icon">
> = {
  stickermaker: {
    name: "Sticker Maker",
    description: "Make your own WhatsApp stickers, ad-free.",
    platform: "Android · Flutter",
    icon: "/assets/previews/app_stickermaker.png",
  },
  parchi: {
    name: "Parchi",
    description: "A personal finance app to track your spends.",
    platform: "Android · Flutter",
    icon: "/assets/previews/app_parchi.png",
  },
};

function toAppItem(file: AppFile): AppItem {
  const normalized = file.fileName.toLowerCase().replace(/[^a-z0-9]/g, "");
  const key = Object.keys(APP_DETAILS).find((k) => normalized.includes(k));
  const isApk = /\.apk$/i.test(file.fileName);
  const details = key
    ? APP_DETAILS[key]
    : {
        name: prettifyFileName(file.fileName),
        description: "",
        platform: isApk ? "Android" : "App",
      };

  return {
    id: file.fileName,
    fileName: file.fileName,
    url: file.fileUrl,
    ...details,
  };
}

export function useApps() {
  const { data, error, mutate } = useSWR<AppsResponse>(
    "/api/storage?object=apps",
    (url: string) => getJson<AppsResponse>(url),
    { revalidateOnFocus: false },
  );

  return {
    items: (data?.apps ?? []).map(toAppItem),
    isLoading: !data && !error,
    error: Boolean(error),
    retry: () => void mutate(),
  };
}

/* ---------- Resume ---------- */

/** Fetched only once the Resume folder is opened. */
export function useResumeUrl(enabled: boolean) {
  const { data, error, mutate } = useSWR<ResumeResponse>(
    enabled ? "/api/storage?object=resume" : null,
    (url: string) => getJson<ResumeResponse>(url),
    { revalidateOnFocus: false },
  );

  return {
    url: data?.url,
    isLoading: enabled && !data && !error,
    error: Boolean(error),
    retry: () => void mutate(),
  };
}
