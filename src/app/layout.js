// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";
import "../index.css";
import "./globals.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollHandler from "./components/ScrollHandler";

export const metadata = {
  title: "Mauro Apps — App Studio",
  description: "Premium mobile applications crafted with care. Beautiful interfaces, native performance, thoughtful details.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-visual",
};

// Inter as fallback - closest Google Font to SF Pro
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `
          }}
        />
      </head>
      <body>
        <ScrollHandler />
        <Navbar />
        <main id="mainContainer">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
