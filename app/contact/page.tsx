"use client";

import { FadeIn } from "@/components/fade-in";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // Create mailto link with form data
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

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-charcoal-900 leading-tight">
            Submit an Opportunity
          </h1>
          <p className="mt-6 text-charcoal-500 text-[17px] leading-relaxed">
            All inquiries are treated as confidential. We respond to every 
            submission personally within two business days.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {submitted ? (
            <div className="mt-12 p-8 bg-charcoal-50 rounded-lg border border-charcoal-100 text-center">
              <p className="text-charcoal-700 text-lg font-medium">Thank you for your inquiry.</p>
              <p className="mt-2 text-charcoal-500">We will review your submission and respond within two business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-charcoal-600 font-medium mb-1.5">Name *</label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-charcoal-200 rounded text-charcoal-900 text-[15px] outline-none focus:border-charcoal-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-charcoal-600 font-medium mb-1.5">Company</label>
                  <input
                    name="company"
                    className="w-full px-4 py-2.5 bg-white border border-charcoal-200 rounded text-charcoal-900 text-[15px] outline-none focus:border-charcoal-400 transition"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-charcoal-600 font-medium mb-1.5">Industry</label>
                  <input
                    name="industry"
                    className="w-full px-4 py-2.5 bg-white border border-charcoal-200 rounded text-charcoal-900 text-[15px] outline-none focus:border-charcoal-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-charcoal-600 font-medium mb-1.5">Revenue Range</label>
                  <select
                    name="revenue"
                    className="w-full px-4 py-2.5 bg-white border border-charcoal-200 rounded text-charcoal-900 text-[15px] outline-none focus:border-charcoal-400 transition"
                  >
                    <option value="">Select</option>
                    <option value="Under $5M">Under $5M</option>
                    <option value="$5M - $10M">$5M – $10M</option>
                    <option value="$10M - $25M">$10M – $25M</option>
                    <option value="$25M - $50M">$25M – $50M</option>
                    <option value="$50M+">$50M+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-charcoal-600 font-medium mb-1.5">Location</label>
                <input
                  name="location"
                  placeholder="City, State"
                  className="w-full px-4 py-2.5 bg-white border border-charcoal-200 rounded text-charcoal-900 text-[15px] outline-none focus:border-charcoal-400 transition placeholder:text-charcoal-300"
                />
              </div>
              <div>
                <label className="block text-sm text-charcoal-600 font-medium mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white border border-charcoal-200 rounded text-charcoal-900 text-[15px] outline-none focus:border-charcoal-400 transition resize-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-charcoal-900 text-white text-sm font-medium rounded hover:bg-charcoal-800 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 pt-12 border-t border-charcoal-100">
            <p className="text-charcoal-500 text-[15px]">
              For brokers and advisors, please email opportunities directly to:
            </p>
            <a
              href="mailto:info@absinfinite.com"
              className="mt-2 inline-block text-charcoal-900 font-medium hover:text-charcoal-600 transition"
            >
              info@absinfinite.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
