import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-serif text-white font-semibold">ABS Infinite Capital</div>
            <div className="mt-1 text-xs text-white/30">
              Acquiring and operating small businesses.
            </div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-white/30">
            <Link href="/criteria" className="hover:text-gold-400 transition">Investment Criteria</Link>
            <Link href="/approach" className="hover:text-gold-400 transition">Our Approach</Link>
            <Link href="/selling" className="hover:text-gold-400 transition">Selling Your Business</Link>
            <Link href="/contact" className="hover:text-gold-400 transition">Contact</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-[13px] text-white/30 italic">
          Confidential conversations welcome. Brokers and advisors may submit opportunities directly.
        </div>
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/20">
          <span>© {new Date().getFullYear()} ABS Infinite Capital. All rights reserved.</span>
          <a href="mailto:ayman@absinfinite.com" className="hover:text-gold-400 transition">
            ayman@absinfinite.com
          </a>
        </div>
      </div>
    </footer>
  );
}
