import { FadeIn } from "@/components/fade-in";

const criteria = [
  {
    label: "Industry",
    value: "Service-Based Businesses",
    detail: "HVAC, plumbing, electrical, landscaping, property management, and adjacent trades",
  },
  {
    label: "EBITDA",
    value: "$500K+",
    detail: "Established cash flow with room for operational improvement",
  },
  {
    label: "Geography",
    value: "Florida — Tampa Bay Focus",
    detail: "Pinellas, Hillsborough, Pasco, Manatee, and Sarasota counties",
  },
  {
    label: "Maturity",
    value: "5+ Years Operating",
    detail: "Proven business models with established customer bases and recurring revenue",
  },
];

const values = [
  {
    title: "Operator-First",
    description: "We don't flip businesses. We buy them, run them, and make them better. Every acquisition is a long-term commitment.",
  },
  {
    title: "Founder-Friendly",
    description: "We respect what you built. Our process is confidential, fair, and designed to protect your employees, customers, and legacy.",
  },
  {
    title: "Decisive",
    description: "No drawn-out timelines. We evaluate quickly, present clear offers, and close with certainty. SBA-ready with established lender relationships.",
  },
  {
    title: "Hands-On",
    description: "We operate what we own. Our team steps in post-close with systems, support, and capital to grow what's already working.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,169,110,0.04),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold-400/3 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">
                Actively Acquiring
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
              We Acquire & Operate
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">
                Service Businesses
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              ABS Infinite Solutions acquires established, profitable service businesses 
              in Florida&apos;s Tampa Bay region. Long-term ownership. Operator mentality.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-semibold text-sm rounded-lg hover:opacity-90 transition tracking-wide"
              >
                Start a Conversation
              </a>
              <a
                href="#criteria"
                className="px-8 py-3.5 border border-white/10 text-white/70 font-medium text-sm rounded-lg hover:border-gold-400/30 hover:text-white transition tracking-wide"
              >
                Our Criteria
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-gold-400/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="border-y border-white/5 bg-navy-800/50">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "$500K+", label: "Minimum EBITDA" },
            { stat: "Tampa Bay", label: "Primary Market" },
            { stat: "5+ Years", label: "Business Maturity" },
            { stat: "Long-Term", label: "Hold Period" },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-serif font-bold text-gold-400">{item.stat}</div>
                <div className="mt-1 text-xs text-white/35 tracking-widest uppercase">{item.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">About Us</span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
                Built by an operator,{" "}
                <span className="text-white/40">not a fund manager.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-8 text-white/50 text-lg leading-relaxed">
                ABS Infinite Solutions is a private acquisition firm focused on buying and 
                operating established service businesses in Florida. We&apos;re not passive investors 
                or financial engineers — we&apos;re operators who run the businesses we acquire.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-white/50 text-lg leading-relaxed">
                Our approach is simple: find great businesses with strong fundamentals, 
                acquire them at fair valuations, and invest in the people, systems, and 
                infrastructure needed to scale. We bring operational expertise, capital, 
                and a long-term commitment to every deal.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-white/50 text-lg leading-relaxed">
                If you&apos;re a business owner thinking about your next chapter — whether 
                that&apos;s retirement, a new venture, or simply stepping back — we&apos;d like to talk. 
                No pressure, no timelines, fully confidential.
              </p>
            </FadeIn>
          </div>

          {/* Values */}
          <div className="mt-20 grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold-400/10 transition group">
                  <h3 className="text-white font-semibold text-lg group-hover:text-gold-400 transition">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-white/40 leading-relaxed">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACQUISITION CRITERIA ─── */}
      <section id="criteria" className="py-24 md:py-32 bg-navy-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Acquisition Criteria</span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-white">
                What We Look For
              </h2>
              <p className="mt-6 text-white/40 text-lg">
                We have a clear acquisition thesis. If your business fits these criteria, 
                we move fast and close with certainty.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {criteria.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden group hover:border-gold-400/10 transition">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-400/10 transition" />
                  <div className="relative">
                    <div className="text-xs text-gold-400/60 tracking-widest uppercase font-medium">{c.label}</div>
                    <div className="mt-2 text-2xl font-serif font-bold text-white">{c.value}</div>
                    <p className="mt-3 text-white/40 leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 p-8 rounded-2xl border border-gold-400/10 bg-gold-400/[0.03] text-center">
              <p className="text-white/60 text-lg">
                Don&apos;t check every box? <span className="text-white/80">Reach out anyway.</span>{" "}
                Great businesses come in many forms, and we evaluate every opportunity on its merits.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Our Process</span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-white">
                Simple. Confidential. Certain.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Conversation",
                desc: "A confidential discussion about your business, your goals, and whether there's a mutual fit.",
              },
              {
                step: "02",
                title: "Evaluation",
                desc: "We review financials, operations, and market position. No surprises — we tell you exactly what we see.",
              },
              {
                step: "03",
                title: "Offer & Terms",
                desc: "A clear, fair offer with straightforward terms. No negotiation games. We respect your time.",
              },
              {
                step: "04",
                title: "Close & Transition",
                desc: "We handle the details — SBA, legal, transition planning. You choose your level of involvement post-close.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative">
                  <div className="text-5xl font-serif font-bold text-gold-400/10">{item.step}</div>
                  <h3 className="mt-2 text-white font-semibold">{item.title}</h3>
                  <p className="mt-2 text-white/35 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 md:py-32 bg-navy-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Get in Touch</span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-white">
                Let&apos;s Talk
              </h2>
              <p className="mt-6 text-white/40 text-lg leading-relaxed">
                Whether you&apos;re ready to sell, exploring your options, or just curious 
                what your business is worth — every conversation is fully confidential.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-12 p-10 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-white/30 tracking-widest uppercase mb-2">Email</div>
                    <a
                      href="mailto:Ayman@absinfinite.com"
                      className="text-xl md:text-2xl font-serif text-gold-400 hover:text-gold-500 transition"
                    >
                      Ayman@absinfinite.com
                    </a>
                  </div>

                  <div className="border-t border-white/5 pt-6">
                    <div className="text-xs text-white/30 tracking-widest uppercase mb-2">Location</div>
                    <p className="text-white/60">Tampa Bay, Florida</p>
                  </div>

                  <div className="border-t border-white/5 pt-6">
                    <div className="text-xs text-white/30 tracking-widest uppercase mb-2">Response Time</div>
                    <p className="text-white/60">Within 24 hours. Personally.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8">
                <a
                  href="mailto:Ayman@absinfinite.com?subject=Business%20Inquiry"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-semibold text-sm rounded-lg hover:opacity-90 transition tracking-wide"
                >
                  Start a Confidential Conversation
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
