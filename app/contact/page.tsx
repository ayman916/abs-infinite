"use client";

import { FadeIn } from "@/components/fade-in";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/ayman@absinfinite.com", {
        method: "POST",
        body: data,
      });
      setSubmitted(true);
    } catch {
      // Fallback to regular form submit
      form.submit();
    }
    setSending(false);
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
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/ayman@absinfinite.com"
              method="POST"
              className="mt-12 space-y-6"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New Business Inquiry — ABS Infinite" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Name *</label>
                  <input name="Name" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Company</label>
                  <input name="Company" className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Industry</label>
                  <input name="Industry" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Revenue Range</label>
                  <select name="Revenue Range" className={inputClass}>
                    <option value="" className="bg-navy-900">Select</option>
                    <option value="Under $5M" className="bg-navy-900">Under $5M</option>
                    <option value="$5M - $10M" className="bg-navy-900">$5M – $10M</option>
                    <option value="$10M - $25M" className="bg-navy-900">$10M – $25M</option>
                    <option value="$25M - $50M" className="bg-navy-900">$25M – $50M</option>
                    <option value="$50M+" className="bg-navy-900">$50M+</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Location</label>
                  <input name="Location" placeholder="City, State" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 font-medium mb-1.5">Email</label>
                  <input name="Email" type="email" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/50 font-medium mb-1.5">Message</label>
                <textarea name="Message" rows={4} className={`${inputClass} resize-none`} />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={sending}
                  className="px-7 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 text-sm font-semibold rounded hover:opacity-90 transition disabled:opacity-50"
                >
                  {sending ? "Submitting..." : "Submit"}
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
              href="mailto:ayman@absinfinite.com"
              className="mt-2 inline-block text-gold-400 font-medium hover:text-gold-500 transition"
            >
              ayman@absinfinite.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
