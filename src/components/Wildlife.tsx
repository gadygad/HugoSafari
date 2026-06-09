"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, TreePine } from "lucide-react";
import { wildlife } from "@/data/content";

export default function Wildlife() {
  return (
    <section id="wildlife" className="relative overflow-hidden bg-safari-earth py-24">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549366021-9f761d040615?w=1920&q=80')",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-safari-gold-light">
            Wildlife Kingdom
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Meet Tanzania&apos;s Icons
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Lions, zebras, hyenas, elephants, and more — Tanzania hosts the
            greatest concentration of wildlife on the planet.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wildlife.map((animal, i) => (
            <motion.article
              key={animal.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-hover group overflow-hidden rounded-2xl glass"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={animal.image}
                  alt={animal.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-earth via-safari-earth/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs italic text-white/50">{animal.scientificName}</p>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                    {animal.name}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-safari-gold-light">
                  <TreePine className="h-4 w-4" />
                  {animal.habitat}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {animal.description}
                </p>
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-white/5 p-3">
                  <Shield className="mt-0.5 h-4 w-4 shrink-0 text-safari-gold" />
                  <span className="text-xs text-white/60">{animal.conservation}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
