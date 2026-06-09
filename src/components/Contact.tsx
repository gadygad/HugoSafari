"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/content";

const safariPackages = [
  "Classic Northern Circuit (7 days)",
  "Great Migration Special (10 days)",
  "Safari + Zanzibar Combo (12 days)",
  "Luxury Honeymoon Safari (8 days)",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-safari-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-safari-gold-light">
              Start Your Adventure
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-white md:text-5xl">
              Plan Your HugoSafari
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Tell us your dream itinerary. Our expert guides craft bespoke
              safaris from Serengeti dawn game drives to Zanzibar sunset dhow
              cruises — tailored for travelers worldwide.
            </p>

            <ul className="mt-8 space-y-4">
              {safariPackages.map((pkg) => (
                <li key={pkg} className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="h-5 w-5 shrink-0 text-safari-gold" />
                  {pkg}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-white/70 transition hover:text-safari-gold-light"
              >
                <Mail className="h-5 w-5 text-safari-gold" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white/70 transition hover:text-safari-gold-light"
              >
                <Phone className="h-5 w-5 text-safari-gold" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-safari-gold" />
                {siteConfig.location}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-2xl"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-16 w-16 text-safari-savanna" />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">
                  Asante Sana!
                </h3>
                <p className="mt-2 text-safari-charcoal/70">
                  Your safari inquiry has been received. We&apos;ll contact you within
                  24 hours to begin planning your Tanzania adventure.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-safari-earth">
                  Request a Custom Itinerary
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-safari-charcoal/10 bg-safari-cream px-4 py-3 text-sm outline-none transition focus:border-safari-gold focus:ring-2 focus:ring-safari-gold/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-safari-charcoal/10 bg-safari-cream px-4 py-3 text-sm outline-none transition focus:border-safari-gold focus:ring-2 focus:ring-safari-gold/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="mb-1.5 block text-sm font-medium">
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    className="w-full rounded-xl border border-safari-charcoal/10 bg-safari-cream px-4 py-3 text-sm outline-none transition focus:border-safari-gold focus:ring-2 focus:ring-safari-gold/20"
                    placeholder="Where are you traveling from?"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="mb-1.5 block text-sm font-medium">
                    Primary Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full rounded-xl border border-safari-charcoal/10 bg-safari-cream px-4 py-3 text-sm outline-none transition focus:border-safari-gold focus:ring-2 focus:ring-safari-gold/20"
                  >
                    <option value="">Select destination</option>
                    <option value="serengeti">Serengeti Safari</option>
                    <option value="ngorongoro">Ngorongoro Crater</option>
                    <option value="olduvai">Olduvai Gorge Heritage</option>
                    <option value="zanzibar">Zanzibar & Forodhani</option>
                    <option value="combo">Full Tanzania Combo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-safari-charcoal/10 bg-safari-cream px-4 py-3 text-sm outline-none transition focus:border-safari-gold focus:ring-2 focus:ring-safari-gold/20"
                    placeholder="Tell us about your dream safari — dates, group size, special interests..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-safari-gold py-4 font-bold text-safari-earth transition hover:bg-safari-gold-light"
                >
                  <Send className="h-4 w-4" />
                  Send Safari Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
