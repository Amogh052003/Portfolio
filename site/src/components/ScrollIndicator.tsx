"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";

export default function ScrollIndicator() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handler = () => {
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActive(link.href);
        }
      }
    };

    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
      {navLinks.map((link) => (
        <span
          key={link.href}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            active === link.href
              ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)] scale-125"
              : "bg-slate-600"
          }`}
        />
      ))}
    </div>
  );
}
