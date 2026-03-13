"use client";

import { FadeIn } from "@/components/fade-in";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    const name = data.get("name") as string;
    const company = data.get("company") as string;
    const industry = data.get("industry") as string;
    const revenue = data.get("revenue") as string;
    const location = data.get("location") as string;
    const message = data.get("message") as string;

    const subject = `Business Inquiry — ${company || name}`;
    const body = `Name: ${name}\nCompany: ${company}\nIndustry: ${industry}\nRevenue Range: ${revenue}\nLocation: ${location}\n\n${message}`;

    window.location.href = `mailto:info@absinfinite.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  const inputClass = "w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded text-white text-[15px] outline-none focus:border-gold-400/40 transition placeholder:text-white/20";

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight">
            Submit an Opportunity
          </h1>
          <p className="mt-6 text-white/45 text-[17px] leading-relaxed">
            All inquiries are treated as confidential. We respond to every 
            submission personally within two business days.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {submitted ? (
            <div className="mt-12 p-8 rounded-xl border border-gold-400/10 bg-gold-400/[0.03] text-center">
              <p className="text-white text-lg font-medium">Thank you for your inquiry.</p>
              <p className="mt-2 text-white/45">We will review your submission and respond within two business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Name *</label>
                  <input name="name" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Company</label>
                  <input name="company" className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Industry</label>
                  <input name="industry" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Revenue Range</label>
                  <select name="revenue" className={inputClass}>
                    <option value="" className="bg-navy-900">Select</option>
                    <option value="Under $5M" className="bg-navy-900">Under $5M</option>
                    <option value="$5M - $10M" className="bg-navy-900">$5M – $10M</option>
                    <option value="$10M - $25M" className="bg-navy-900">$10M – $25M</option>
                    <option value="$25M - $50M" className="bg-navy-900">$25M – $50M</option>
                    <option value="$50M+" className="bg-navy-900">$50M+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/50 font-medium mb-1.5">Location</label>
                <input name="location" placeholder="City, State" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm text-white/50 font-medium mb-1.5">Message</label>
                <textarea name="message" rows={4} className={`${inputClass} resize-none`} />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-7 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 text-sm font-semibold rounded hover:opacity-90 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 pt-12 border-t border-white/5">
            <p className="text-white/40 text-[15px]">
              For brokers and advisors, please email opportunities directly to:
            </p>
            <a
              href="mailto:info@absinfinite.com"
              className="mt-2 inline-block text-gold-400 font-medium hover:text-gold-500 transition"
            >
              info@absinfinite.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
