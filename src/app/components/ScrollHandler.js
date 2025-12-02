// components/ScrollHandler.js
"use client"; // This component uses client-side hooks and browser APIs

import { usePathname } from "next/navigation"; // To detect route changes
import { useEffect } from "react";

export default function ScrollHandler() {
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    // window.location.hash provides the current hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Wait a tick for the page to potentially render fully before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    } else {
      // If no hash, scroll to top on navigation (optional, common behavior)
      // window.scrollTo({ top: 0, behavior: 'smooth' }); // Uncomment if you want this
    }
  }, [pathname]); // Re-run this effect when the pathname changes (i.e., navigation)

  return null; // This component doesn't render anything
}
