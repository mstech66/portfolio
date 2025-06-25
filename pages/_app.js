import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
config.autoAddCss = false;

export const metadata = {
  title: "Manthan",
  description: "Manthan Mevada Portfolio Website",
};

export default function RootLayout({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    if (!document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
