import "../styles/globals.css";

export const metadata = {
  title: "Manthan",
  description: "Manthan Mevada Portfolio Website",
};

export default function RootLayout({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
