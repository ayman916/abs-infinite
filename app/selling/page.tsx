import { FadeIn } from "@/components/fade-in";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selling Your Business — ABS Infinite Capital",
  description: "Considering selling your business? ABS Infinite Capital offers confidential discussions, fair evaluations, flexible transaction structures, and smooth transitions.",
};

export default function Selling() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
            Considering Selling
            <br />
            Your Business?
          </h1>
          <p className="mt-8 text-white/45 text-[17px] leading-relaxed">
            For many owners, selling a business represents decades of work and dedication. 
            We approach every transaction with respect for the legacy owners have built 
            and a genuine interest in continuing what they started.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16">
            <h2 className="font-serif text-xl font-semibold text-white">
              What Owners Can Expect
            </h2>
            <ul className="mt-6 space-y-4 text-white/55 text-[17px]">
              {[
                {
                  title: "Confidential discussions",
                  desc: "We understand the sensitivity involved. All conversations are treated with complete discretion.",
                },
                {
                  title: "Efficient evaluation process",
                  desc: "We respect your time. Our process is structured to provide clear answers quickly.",
                },
                {
                  title: "Flexible transaction structures",
                  desc: "We work with owners to find terms that reflect both the value of the business and the needs of the seller.",
                },
                {
                  title: "Smooth transition planning",
                  desc: "We collaborate with owners to create a transition plan that works for employees, customers, and the business.",
                },
              ].map((item, i) => (
                <li key={i} className="pb-4 border-b border-white/5 last:border-0">
                  <div className="font-medium text-white/80">{item.title}</div>
                  <p className="mt-1 text-white/40">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16">
            <h2 className="font-serif text-xl font-semibold text-white">
              Typical Process
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { step: "01", title: "Initial conversation", desc: "A confidential discussion about your business, your goals, and whether there may be a mutual fit." },
                { step: "02", title: "Preliminary evaluation", desc: "We review high-level financials and operating information to determine alignment with our criteria." },
                { step: "03", title: "Letter of intent", desc: "If both parties wish to proceed, we present clear terms in a letter of intent." },
                { step: "04", title: "Due diligence", desc: "A thorough but respectful review of the business, conducted with minimal disruption to operations." },
                { step: "05", title: "Closing", desc: "We work with legal and financial advisors to execute the transaction and begin the transition." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-sm text-gold-400/30 font-mono font-medium w-8 shrink-0 pt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-medium text-white/80">{item.title}</div>
                    <p className="mt-1 text-white/40 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-block px-7 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 text-sm font-semibold rounded hover:opacity-90 transition"
            >
              Start a Confidential Conversation
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
