"use client";

import Link from "next/link";
import { navLinks } from "@/data/content";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <span className="font-mono text-sm tracking-widest text-white">
          <span className="text-cyan-400">amogh</span>@cloud
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[var(--text-muted)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hint (no hamburger needed) */}
        <span className="md:hidden text-xs text-[var(--text-muted)]">
          Scroll ↓
        </span>
      </nav>
    </header>
  );
}
