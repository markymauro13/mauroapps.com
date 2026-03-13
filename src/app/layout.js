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
  metadataBase: new URL("https://mauroapps.com"),
  title: {
    default: "Mauro Apps — App Studio",
    template: "%s | Mauro Apps",
  },
  description: "Premium mobile applications crafted with care. Beautiful interfaces, native performance, thoughtful details.",
  keywords: ["Mobile Apps", "App Studio", "iOS Development", "Android Development", "UI/UX Design", "Cross-Platform Apps"],
  authors: [{ name: "Mauro Apps" }],
  creator: "Mauro Apps",
  publisher: "Mauro Apps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mauro Apps — App Studio",
    description: "Premium mobile applications crafted with care. Beautiful interfaces, native performance, thoughtful details.",
    url: "https://mauroapps.com",
    siteName: "Mauro Apps",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Mauro Apps Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauro Apps — App Studio",
    description: "Premium mobile applications crafted with care. Beautiful interfaces, native performance, thoughtful details.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/logo.png",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
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
