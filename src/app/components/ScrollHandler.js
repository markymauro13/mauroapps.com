"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NAVBAR_OFFSET = 80;

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 0);
      }
    }
  }, [pathname]);

  return null;
}
