export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-bold text-xs">
              A
            </div>
            <span className="text-white/40 text-sm font-medium tracking-wide uppercase">
              ABS Infinite Solutions
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <span>Tampa Bay, Florida</span>
            <span>•</span>
            <a href="mailto:Ayman@absinfinite.com" className="hover:text-gold-400 transition">
              Ayman@absinfinite.com
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/20">
          © {new Date().getFullYear()} ABS Infinite Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
