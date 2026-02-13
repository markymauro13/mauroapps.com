"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToElement } from "../utils/scroll";

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        setTimeout(() => {
          scrollToElement(elementId);
        }, 0);
      }
    };

    handleHashScroll();

    // Set --app-height for mobile browsers
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    // Initialize
    setAppHeight();

    // Only update on width changes (orientation change) to avoid toolbar jump
    let lastWidth = window.innerWidth;
    const handleResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        setAppHeight();
      }
    };

    window.addEventListener('resize', handleResize);
    // Also listen for orientation change specifically
    window.addEventListener('orientationchange', setAppHeight);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', setAppHeight);
    };
  }, [pathname]);

  return null;
}
