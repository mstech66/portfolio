import firebase from "firebase/app";
import "firebase/storage";
import config from "../../data/config.js";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const storage = firebase.storage().ref();

function getFileUrl(fileRef) {
  return fileRef
    .getDownloadURL()
    .then(function (url) {
      return url;
    })
    .catch(function (err) {
      return err;
    });
}

async function getResumeUrl(res) {
  const url = await storage
    .child("Resume/CV.pdf")
    .getDownloadURL()
    .then((url) => {
      return url;
    })
    .catch((error) => {
      console.log(error);
    });
  res.status(200).json({ url: url });
}

async function getWallpapers(res) {
  let storageRef = storage.child("Wallpapers");
  const temp = [];
  await storageRef.listAll().then(async (result) => {
    for (const item of result.items) {
      const imgUrl = await getFileUrl(item);
      const imgName = item.name;
      const img = {
        imgName,
        imgUrl,
      };
      temp.push(img);
    }
  });
  res.status(200).json({ wallpapers: temp });
}

async function getApps(res) {
  const storageRef = storage.child("Apps");
  const temp = [];
  await storageRef.listAll().then(async (result) => {
    for (const item of result.items) {
      const fileUrl = await getFileUrl(item);
      const fileName = item.name;
      const file = {
        fileName,
        fileUrl,
      };
      temp.push(file);
    }
  });
  res.status(200).json({ apps: temp });
}

async function handler(req, res) {
  const { object } = req.query;
  switch (object) {
    case "resume":
      getResumeUrl(res);
      break;
    case "wallpaper":
      getWallpapers(res);
      break;
    case "apps":
      getApps(res);
      break;
  }
}

export default handler;
