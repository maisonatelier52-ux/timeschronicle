import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import HeaderServer from "./components/header/HeaderServer";
import HeaderClient from "./components/header/HeaderClient";

/* Merriweather (Body / Articles) */
const merriweather = localFont({
  src: [
    {
      path: "../public/fonts/merriweather/Merriweather-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/merriweather/Merriweather-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/merriweather/Merriweather-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Times Chronicle",
  description: "Independent global news from Times Chronicle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${merriweather.variable}
          antialiased
        `}
      >
        <HeaderServer />
        <HeaderClient />

        {/* Offset for fixed header */}
        <main
          className="
            pt-[80px]
            md:pt-[56px]
          "
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}