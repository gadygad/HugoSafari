"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { heroStats, siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516426122076-c23e76319801?w=1920&q=80')",
        }}
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-safari-gold/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm text-white/90"
        >
          <MapPin className="h-4 w-4 text-safari-gold-light" />
          <span>East Africa&apos;s Premier Destination</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-[family-name:var(--font-display)] text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {siteConfig.tagline}
          <span className="mt-2 block text-gradient-gold animate-shimmer">
            Tanzania Awaits You
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/75 md:text-xl"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#destinations"
            className="animate-pulse-glow rounded-full bg-safari-gold px-8 py-4 text-base font-bold text-safari-earth transition hover:bg-safari-gold-light"
          >
            Explore Destinations
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:border-safari-gold hover:text-safari-gold-light"
          >
            Plan Your Journey
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {heroStats.map((stat, i) => (
            <div key={stat.label} className="glass rounded-2xl p-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                className="font-[family-name:var(--font-display)] text-2xl font-bold text-safari-gold-light md:text-3xl"
              >
                {stat.value}
              </motion.div>
              <div className="mt-1 text-xs text-white/60 md:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 transition hover:text-safari-gold-light"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.a>
    </section>
  );
}
