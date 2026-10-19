import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";

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
  verification: {
    google: "V5NWQRkOc7PRE7hYGHoovy5zn0a3EgdYIIixG39Z9VA",
  },
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
        <Header />

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