import { FadeIn } from "@/components/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Criteria — ABS Infinite Capital",
  description: "ABS Infinite Capital acquires established small businesses with $1M–$5M EBITDA, recurring revenue, and strong operating teams across the United States.",
};

export default function Criteria() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
            Investment Criteria
          </h1>
          <p className="mt-6 text-white/45 text-[17px] leading-relaxed">
            We have a clearly defined acquisition thesis. This allows us to evaluate 
            opportunities efficiently and provide sellers with quick, definitive answers.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16">
            <h2 className="font-serif text-xl font-semibold text-white">What We Look For</h2>
            <div className="mt-8 space-y-8">
              {[
                { label: "Revenue", value: "$5M – $50M" },
                { label: "EBITDA", value: "$1M – $5M" },
                { label: "Location", value: "United States" },
                { label: "Business Model", values: ["Recurring or repeat customers", "Essential services", "Stable demand"] },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 pb-8 border-b border-white/5 last:border-0">
                  <div className="text-sm text-gold-400/60 font-medium uppercase tracking-wider w-32 shrink-0">
                    {item.label}
                  </div>
                  <div className="text-white/60 text-[17px]">
                    {"value" in item ? (
                      item.value
                    ) : (
                      <ul className="space-y-1">
                        {item.values?.map((v) => (
                          <li key={v} className="flex items-start gap-3">
                            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/40 shrink-0" />
                            {v}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16">
            <h2 className="font-serif text-xl font-semibold text-white">Industries of Interest</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Home Services", "Automotive Services", "Specialty Manufacturing", "Industrial Services", "B2B Services", "Specialty Distribution"].map((ind) => (
                <span key={ind} className="px-3 py-1.5 text-sm text-white/50 bg-white/[0.03] border border-white/5 rounded">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16">
            <h2 className="font-serif text-xl font-semibold text-white">Industries We Avoid</h2>
            <ul className="mt-4 space-y-2 text-white/45 text-[17px]">
              {["Restaurants", "Fad-based businesses", "Speculative technology", "Highly cyclical industries"].map((ind) => (
                <li key={ind} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-16 p-8 rounded-xl border border-gold-400/10 bg-gold-400/[0.03]">
            <p className="text-white/55 text-[17px] leading-relaxed">
              Don&apos;t fit every criterion? Reach out anyway. We evaluate every opportunity 
              on its merits and are happy to have a confidential conversation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
