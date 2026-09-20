import type { NextApiRequest, NextApiResponse } from "next";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import config from "../../data/config";
import type { AppFile, Wallpaper } from "../../data/types";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const storage = firebase.storage().ref();

async function getFileUrl(fileRef: firebase.storage.Reference): Promise<string> {
  return fileRef.getDownloadURL();
}

async function getResumeUrl(res: NextApiResponse) {
  try {
    const url = await storage.child("Resume/CV.pdf").getDownloadURL();
    res.status(200).json({ url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ url: undefined });
  }
}

async function getWallpapers(res: NextApiResponse) {
  try {
    const result = await storage.child("Wallpapers").listAll();
    const wallpapers: Wallpaper[] = await Promise.all(
      result.items.map(async (item) => ({
        imgName: item.name,
        imgUrl: await getFileUrl(item),
      }))
    );
    res.status(200).json({ wallpapers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ wallpapers: [] });
  }
}

async function getApps(res: NextApiResponse) {
  try {
    const result = await storage.child("Apps").listAll();
    const apps: AppFile[] = await Promise.all(
      result.items.map(async (item) => ({
        fileName: item.name,
        fileUrl: await getFileUrl(item),
      }))
    );
    res.status(200).json({ apps });
  } catch (error) {
    console.error(error);
    res.status(500).json({ apps: [] });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const object = Array.isArray(req.query.object)
    ? req.query.object[0]
    : req.query.object;

  switch (object) {
    case "resume":
      await getResumeUrl(res);
      break;
    case "wallpaper":
      await getWallpapers(res);
      break;
    case "apps":
      await getApps(res);
      break;
    default:
      res.status(400).json({ error: "Unknown storage object" });
  }
}
