"use client";

import Link from "next/link";
import { navLinks } from "@/data/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-4">
        <div className="glass flex items-center justify-between px-6 py-3">
          <span className="font-mono text-sm tracking-widest">
            <span className="glow-text">amogh</span>@cloud
          </span>

          <nav className="flex gap-6 text-sm text-[var(--text-muted)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
