import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">
                Actively Acquiring
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] tracking-tight">
              We acquire and operate
              <br />
              <span className="text-gold-400">small businesses.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 text-lg md:text-xl text-white/45 leading-relaxed max-w-2xl">
              ABS Infinite Capital partners with business owners seeking a thoughtful 
              transition of their companies. We invest in durable businesses with strong 
              teams, loyal customers, and long-term growth potential.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 text-sm font-semibold rounded hover:opacity-90 transition"
              >
                Submit an Opportunity
              </Link>
              <Link
                href="/criteria"
                className="px-7 py-3 border border-white/10 text-white/60 text-sm font-medium rounded hover:border-gold-400/30 hover:text-white transition"
              >
                Our Criteria
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white">
              What We Do
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-white/45 text-[17px] leading-relaxed">
              ABS Infinite Capital acquires established small businesses across the United States. 
              We focus on companies with strong operating histories, recurring customers, and 
              defensible market positions.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-white/45 text-[17px] leading-relaxed">
              Unlike traditional private equity firms, we are long-term owners who prioritize 
              operational continuity and sustainable growth. We do not acquire businesses to 
              restructure and resell them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── INVESTMENT FOCUS ─── */}
      <section className="py-20 border-t border-white/5 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white">
              Investment Focus
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-white/45 text-[17px] leading-relaxed">
              We typically acquire businesses with:
            </p>
            <ul className="mt-4 space-y-2 text-white/55 text-[17px]">
              {["$1M – $5M EBITDA", "Recurring or essential revenue", "Strong local market presence", "Experienced operating teams", "Owners seeking retirement or transition", "United States, with a focus on the Tampa Bay, Florida region"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 text-white/45 text-[17px] leading-relaxed">
              Preferred industries:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Home Services", "Automotive Services", "Specialty Distribution", "Essential B2B Services", "Industrial Services"].map((ind) => (
                <span key={ind} className="px-3 py-1.5 text-sm text-white/50 bg-white/[0.03] border border-white/5 rounded">
                  {ind}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white">
              Our Philosophy
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-8">
            {[
              {
                title: "Long-term ownership",
                body: "We acquire businesses with the intention of owning and operating them indefinitely. We are not focused on exit timelines or financial engineering.",
              },
              {
                title: "Operational focus",
                body: "We prioritize businesses where strong operations and customer relationships drive long-term value. We invest in people, systems, and infrastructure.",
              },
              {
                title: "Respect for legacy",
                body: "We work closely with owners to ensure smooth transitions for employees and customers. The businesses we acquire were built by people who care — we honor that.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-gold-400/10 transition">
                  <h3 className="text-white font-medium text-lg">{item.title}</h3>
                  <p className="mt-2 text-white/40 text-[17px] leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELIABLE CLOSING ─── */}
      <section className="py-20 border-t border-white/5 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white">
              Reliable Closing Process
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-white/45 text-[17px] leading-relaxed">
              We understand the importance of certainty when selling a business. ABS Infinite 
              is focused on executing transactions efficiently and professionally. Our process 
              is designed to minimize disruption to the business while providing sellers with 
              a clear and predictable path to closing.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-white/45 text-[17px] leading-relaxed">
              We work closely with owners, brokers, and advisors to complete transactions 
              with speed, transparency, and respect for confidentiality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── WORK WITH US ─── */}
      <section className="py-20 border-t border-white/5 bg-navy-800/40">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white">
              Work With Us
            </h2>
            <p className="mt-6 text-white/45 text-[17px] leading-relaxed">
              We welcome conversations with:
            </p>
            <ul className="mt-4 space-y-2 text-white/55 text-[17px]">
              {["Business owners considering a transition", "Brokers and intermediaries", "Advisors representing sellers"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block px-7 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 text-sm font-semibold rounded hover:opacity-90 transition"
              >
                Start a Conversation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
