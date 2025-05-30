// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS globally
import { Poppins } from "next/font/google";
import { Container } from "react-bootstrap";
import "./globals.css"; // Import global styles

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollHandler from "./components/ScrollHandler";

// Optional: Define metadata for your application
export const metadata = {
  title: "MauroApps.com - Innovative Mobile SaaS Solutions",
  description: "Converted from CRA",
};

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ScrollHandler /> {/* Handles hash scrolling globally */}
        <Container fluid id="mainContainer" className="px-0">
          <Navbar />
          {children}
        </Container>{" "}
        {/* Page content will be injected here */}
        <Footer />
      </body>
    </html>
  );
}
