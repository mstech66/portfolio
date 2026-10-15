import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import type { Analytics } from "firebase/analytics";
import config from "@/data/config";

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
};

let app: FirebaseApp | undefined;

export const getFirebaseApp = (): FirebaseApp => {
  if (!app) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  }
  return app;
};

let analyticsInstance: Analytics | null = null;

export const initAnalytics = async (): Promise<Analytics | null> => {
  if (typeof window === "undefined") return null;
  if (analyticsInstance) return analyticsInstance;

  try {
    const { getAnalytics, isSupported } = await import("firebase/analytics");
    const supported = await isSupported();
    if (supported) {
      const firebaseApp = getFirebaseApp();
      analyticsInstance = getAnalytics(firebaseApp);
      return analyticsInstance;
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Firebase Analytics could not be initialized:", error);
    }
  }
  return null;
};

export const logAnalyticsEvent = async (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window === "undefined") return;

  try {
    const analytics = analyticsInstance || (await initAnalytics());
    if (analytics) {
      const { logEvent } = await import("firebase/analytics");
      logEvent(analytics, eventName, eventParams);
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Firebase Analytics failed to log event "${eventName}":`, error);
    }
  }
};
