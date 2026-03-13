import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-charcoal-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-serif text-charcoal-900 font-semibold">ABS Infinite Capital</div>
            <div className="mt-1 text-xs text-charcoal-400">
              Acquiring and operating small businesses.
            </div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-charcoal-400">
            <Link href="/criteria" className="hover:text-charcoal-700 transition">Investment Criteria</Link>
            <Link href="/approach" className="hover:text-charcoal-700 transition">Our Approach</Link>
            <Link href="/selling" className="hover:text-charcoal-700 transition">Selling Your Business</Link>
            <Link href="/contact" className="hover:text-charcoal-700 transition">Contact</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-charcoal-50 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-charcoal-300">
          <span>© {new Date().getFullYear()} ABS Infinite Capital. All rights reserved.</span>
          <a href="mailto:info@absinfinite.com" className="hover:text-charcoal-500 transition">
            info@absinfinite.com
          </a>
        </div>
      </div>
    </footer>
  );
}
