"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Globe } from "lucide-react";
import { destinations } from "@/data/content";

const categoryColors = {
  safari: "bg-safari-savanna text-white",
  heritage: "bg-amber-800 text-white",
  coastal: "bg-safari-ocean text-white",
};

export default function Destinations() {
  const [active, setActive] = useState(destinations[0].id);
  const selected = destinations.find((d) => d.id === active)!;

  return (
    <section id="destinations" className="section-pattern py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-safari-gold">
            Iconic Destinations
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-safari-earth md:text-5xl lg:text-6xl">
            Explore Tanzania&apos;s Wonders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-safari-charcoal/70">
            From the cradle of humanity to the roof of the savanna — discover
            UNESCO sites, wildlife kingdoms, and island paradises.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {destinations.map((dest) => (
            <button
              key={dest.id}
              type="button"
              onClick={() => setActive(dest.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                active === dest.id
                  ? "bg-safari-earth text-safari-gold-light shadow-lg"
                  : "bg-white text-safari-charcoal/70 hover:bg-safari-gold/10"
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid items-center gap-10 lg:grid-cols-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span
                className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${categoryColors[selected.category]}`}
              >
                {selected.category}
              </span>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-white/70">{selected.region}</p>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                  {selected.name}
                </h3>
              </div>
            </div>

            <div>
              <p className="text-lg font-medium text-safari-gold">{selected.tagline}</p>
              <p className="mt-4 text-base leading-relaxed text-safari-charcoal/80">
                {selected.description}
              </p>

              <ul className="mt-6 space-y-3">
                {selected.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-safari-gold" />
                    <span className="text-safari-charcoal/80">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <MapPin className="h-4 w-4 text-safari-gold" />
                  <span className="text-sm font-medium">{selected.coordinates}</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <Calendar className="h-4 w-4 text-safari-gold" />
                  <span className="text-sm font-medium">Best: {selected.bestTime}</span>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-safari-earth px-6 py-3 font-semibold text-safari-gold-light transition hover:bg-safari-charcoal"
              >
                Plan Visit to {selected.name.split(" ")[0]}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest, i) => (
            <motion.article
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(dest.id)}
              className="card-hover group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 25vw"
                  quality={100}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 text-xs text-safari-charcoal/50">
                  <Globe className="h-3 w-3" />
                  {dest.region}
                </div>
                <h4 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold">
                  {dest.name}
                </h4>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
