"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/criteria", label: "Investment Criteria" },
  { href: "/approach", label: "Our Approach" },
  { href: "/selling", label: "Selling Your Business" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-serif font-bold text-sm">
            A
          </span>
          <span className="text-white font-serif text-lg font-semibold tracking-tight">
            ABS Infinite
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-[13px]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition ${
                pathname === l.href
                  ? "text-gold-400 font-medium"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/50">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l10 10M6 16L16 6" /> : <path d="M4 7h14M4 12h14M4 17h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-navy-900 px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/50 hover:text-gold-400 text-sm"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
