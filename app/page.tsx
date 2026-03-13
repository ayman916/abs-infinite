import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal-900 leading-[1.15] tracking-tight">
              We acquire and operate
              <br />
              small businesses.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 text-lg md:text-xl text-charcoal-500 leading-relaxed max-w-2xl">
              ABS Infinite Capital partners with business owners seeking a thoughtful 
              transition of their companies. We invest in durable businesses with strong 
              teams, loyal customers, and long-term growth potential.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-charcoal-900 text-white text-sm font-medium rounded hover:bg-charcoal-800 transition"
              >
                Submit an Opportunity
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-20 border-t border-charcoal-100">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal-900">
              What We Do
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-charcoal-500 text-[17px] leading-relaxed">
              ABS Infinite Capital acquires established small businesses across the United States. 
              We focus on companies with strong operating histories, recurring customers, and 
              defensible market positions.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-charcoal-500 text-[17px] leading-relaxed">
              Unlike traditional private equity firms, we are long-term owners who prioritize 
              operational continuity and sustainable growth. We do not acquire businesses to 
              restructure and resell them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── INVESTMENT FOCUS ─── */}
      <section className="py-20 border-t border-charcoal-100 bg-charcoal-50/50">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal-900">
              Investment Focus
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-charcoal-500 text-[17px] leading-relaxed">
              We typically acquire businesses with:
            </p>
            <ul className="mt-4 space-y-2 text-charcoal-600 text-[17px]">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-charcoal-300 shrink-0" />
                $1M – $5M EBITDA
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-charcoal-300 shrink-0" />
                Recurring or essential revenue
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-charcoal-300 shrink-0" />
                Strong local market presence
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-charcoal-300 shrink-0" />
                Experienced operating teams
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-charcoal-300 shrink-0" />
                Owners seeking retirement or transition
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 text-charcoal-500 text-[17px] leading-relaxed">
              Preferred industries:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Home Services", "Automotive Services", "Specialty Distribution", "Essential B2B Services", "Industrial Services"].map((ind) => (
                <span key={ind} className="px-3 py-1.5 text-sm text-charcoal-600 bg-white border border-charcoal-100 rounded">
                  {ind}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-20 border-t border-charcoal-100">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal-900">
              Our Philosophy
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-10">
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
              <FadeIn key={i} delay={i * 0.1}>
                <div>
                  <h3 className="text-charcoal-900 font-medium text-lg">{item.title}</h3>
                  <p className="mt-2 text-charcoal-500 text-[17px] leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK WITH US ─── */}
      <section className="py-20 border-t border-charcoal-100 bg-charcoal-50/50">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal-900">
              Work With Us
            </h2>
            <p className="mt-6 text-charcoal-500 text-[17px] leading-relaxed">
              We welcome conversations with:
            </p>
            <ul className="mt-4 space-y-2 text-charcoal-600 text-[17px]">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-charcoal-300 shrink-0" />
                Business owners considering a transition
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-charcoal-300 shrink-0" />
                Brokers and intermediaries
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-charcoal-300 shrink-0" />
                Advisors representing sellers
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-charcoal-900 text-white text-sm font-medium rounded hover:bg-charcoal-800 transition"
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
