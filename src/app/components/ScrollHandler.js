"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          const isMobile = window.matchMedia("(max-width: 991px)").matches;
          const offset = isMobile ? 100 : 80;

          const y = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 0);
      }
    }
  }, [pathname]);

  return null;
}
