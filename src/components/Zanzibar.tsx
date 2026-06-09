"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Waves, Utensils, Anchor } from "lucide-react";
import { zanzibarExperiences } from "@/data/content";

const activityIcons = {
  "Night market & street food": Utensils,
  "Boat jumping & swimming": Waves,
  "Sunset sailing": Anchor,
};

export default function Zanzibar() {
  return (
    <section id="zanzibar" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-safari-ocean/10 via-safari-cream to-safari-gold/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-safari-ocean">
              Spice Island
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-safari-earth md:text-5xl">
              Zanzibar & Forodhani
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-safari-charcoal/70">
              Where ancient Swahili culture meets the Indian Ocean. Stone Town&apos;s
              winding alleys lead to Forodhani Gardens — where locals and travelers
              gather nightly for Zanzibari pizza, grilled seafood, and the electric
              energy of island life.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-safari-charcoal/70">
              Beyond the night market, leap from traditional dhow boats into
              turquoise waters at Nungwi and Kendwa. Feel the freedom of the
              island — where people jump, laugh, and celebrate life against a
              backdrop of endless blue.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "1,500+", label: "Years of history" },
                { value: "25km", label: "White sand beaches" },
                { value: "30°C", label: "Average water temp" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white p-4 text-center shadow-sm"
                >
                  <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-safari-ocean">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-safari-charcoal/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
                alt="Zanzibar coastline with dhow boats"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 overflow-hidden rounded-2xl shadow-xl md:-left-10"
            >
              <div className="relative h-40 w-56">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
                  alt="People jumping into Zanzibar waters"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <p className="bg-safari-ocean px-3 py-2 text-center text-xs font-semibold text-white">
                Jump into Paradise
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div id="experiences" className="mt-20 grid gap-8 md:grid-cols-3">
          {zanzibarExperiences.map((exp, i) => {
            const Icon = activityIcons[exp.activity as keyof typeof activityIcons] ?? Waves;
            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="card-hover overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-safari-ocean/20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-safari-ocean">
                    <Icon className="h-4 w-4" />
                    {exp.activity}
                  </div>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm text-safari-charcoal/50">{exp.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-safari-charcoal/70">
                    {exp.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
