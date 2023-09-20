import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "Manthan",
  description: "Manthan Mevada Portfolio Website",
};

export default function RootLayout({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
