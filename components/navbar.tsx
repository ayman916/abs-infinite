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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-charcoal-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-charcoal-900 font-serif text-lg font-semibold tracking-tight">
          ABS Infinite
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-[13px]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition ${
                pathname === l.href
                  ? "text-charcoal-900 font-medium"
                  : "text-charcoal-400 hover:text-charcoal-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-charcoal-500">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l10 10M6 16L16 6" /> : <path d="M4 7h14M4 12h14M4 17h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-charcoal-100 bg-white px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-charcoal-500 hover:text-charcoal-900 text-sm"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
