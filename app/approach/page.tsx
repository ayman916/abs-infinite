import { FadeIn } from "@/components/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach — ABS Infinite Capital",
  description: "ABS Infinite Capital takes a long-term, operator-focused approach to acquiring and running small businesses. We prioritize continuity, flexibility, and respect for legacy.",
};

export default function Approach() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
            Our Approach
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16">
            <h2 className="font-serif text-xl font-semibold text-white">
              A Different Type of Buyer
            </h2>
            <p className="mt-4 text-white/45 text-[17px] leading-relaxed">
              ABS Infinite Capital is not a traditional private equity firm. We acquire 
              businesses with the intention of operating them long term rather than 
              reselling them. We are not driven by fund timelines, exit multiples, or 
              financial engineering.
            </p>
            <p className="mt-4 text-white/45 text-[17px] leading-relaxed">
              Our interest is simple: find well-run businesses, preserve what works, 
              and invest in sustainable growth. We measure success in years, not quarters.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16">
            <h2 className="font-serif text-xl font-semibold text-white">
              Flexible Transactions
            </h2>
            <p className="mt-4 text-white/45 text-[17px] leading-relaxed">
              We structure transactions that work for both parties. Every business 
              and every owner&apos;s situation is different, and we approach each 
              conversation with that understanding.
            </p>
            <p className="mt-6 text-white/45 text-[17px]">Options may include:</p>
            <ul className="mt-3 space-y-2 text-white/55 text-[17px]">
              {[
                "Full acquisitions",
                "Partial liquidity events",
                "Seller financing",
                "Transition periods with continued owner involvement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16">
            <h2 className="font-serif text-xl font-semibold text-white">
              Commitment to Continuity
            </h2>
            <p className="mt-4 text-white/45 text-[17px] leading-relaxed">
              The businesses we acquire were built by people who invested years of work 
              into their teams, their customers, and their communities. We take that 
              seriously.
            </p>
            <p className="mt-6 text-white/45 text-[17px]">We prioritize:</p>
            <ul className="mt-3 space-y-2 text-white/55 text-[17px]">
              {[
                "Employee retention and stability",
                "Operational continuity during and after transition",
                "Preserving customer relationships and service quality",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
