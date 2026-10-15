import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { initAnalytics, logAnalyticsEvent } from "@/lib/firebase";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/downloads.css";

config.autoAddCss = false;

const metadata = {
  title: "Manthan",
  description: "Manthan Mevada Portfolio Website",
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

  if (typeof window !== "undefined" && !document.documentElement.dataset.theme) {
    document.documentElement.dataset.theme = "dark";
  }

  useEffect(() => {
    // Initialize Firebase Analytics on client
    initAnalytics();

    // Track SPA route changes
    const handleRouteChange = (url: string) => {
      logAnalyticsEvent("page_view", {
        page_path: url,
        page_location: window.location.origin + url,
        page_title: document.title,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>

      {/* Google tag (gtag.js) for Google / Firebase Analytics */}
      {measurementId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />
          <Script
            id="google-analytics-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      <Component {...pageProps} />
    </>
  );
}
