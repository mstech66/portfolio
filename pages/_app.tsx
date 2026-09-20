import Head from "next/head";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/fonts.css";
import "../styles/globals.css";

config.autoAddCss = false;

const metadata = {
  title: "Manthan",
  description: "Manthan Mevada Portfolio Website",
};

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined" && !document.documentElement.dataset.theme) {
    document.documentElement.dataset.theme = "dark";
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
