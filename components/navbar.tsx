"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-bold text-sm">
            A
          </div>
          <span className="text-white font-semibold tracking-wide text-sm uppercase">
            ABS Infinite
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/#about" className="text-white/60 hover:text-gold-400 transition">About</Link>
          <Link href="/#criteria" className="text-white/60 hover:text-gold-400 transition">Acquisitions</Link>
          <Link href="/#contact" className="text-white/60 hover:text-gold-400 transition">Contact</Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/60">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-navy-900/95 backdrop-blur-xl px-6 py-4 space-y-3">
          <Link href="/#about" onClick={() => setOpen(false)} className="block text-white/60 hover:text-gold-400 transition text-sm">About</Link>
          <Link href="/#criteria" onClick={() => setOpen(false)} className="block text-white/60 hover:text-gold-400 transition text-sm">Acquisitions</Link>
          <Link href="/#contact" onClick={() => setOpen(false)} className="block text-white/60 hover:text-gold-400 transition text-sm">Contact</Link>
        </div>
      )}
    </nav>
  );
}
