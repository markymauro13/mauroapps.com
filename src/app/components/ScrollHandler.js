"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToElement } from "../utils/scroll";

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1);
      setTimeout(() => {
        scrollToElement(elementId);
      }, 0);
    }
  }, [pathname]);

  return null;
}
