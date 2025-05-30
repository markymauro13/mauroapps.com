// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS globally
import "./globals.css"; // Import global styles
import { Poppins } from "next/font/google";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollHandler from "./components/ScrollHandler";

// Optional: Define metadata for your application
export const metadata = {
  title: "My Next.js Application",
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
        <Navbar />
        <main>{children}</main> {/* Page content will be injected here */}
        <Footer />
      </body>
    </html>
  );
}
