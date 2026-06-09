"use client";

import { marqueeHighlights, testimonials } from "@/data/content";

interface MarqueeProps {
  items: { id: string; text: string }[];
  direction?: "left" | "right";
  speed?: "slow" | "normal";
  variant?: "gold" | "dark" | "ocean";
}

function MarqueeTrack({
  items,
  direction = "left",
  variant = "gold",
}: MarqueeProps) {
  const doubled = [...items, ...items];

  const variantStyles = {
    gold: "bg-safari-earth text-safari-gold-light border-safari-gold/20",
    dark: "bg-safari-charcoal text-white/90 border-white/10",
    ocean: "bg-safari-ocean text-white border-white/20",
  };

  return (
    <div
      className={`overflow-hidden border-y py-4 ${variantStyles[variant]}`}
      aria-hidden
    >
      <div
        className={`flex w-max gap-8 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item.id}-${index}`}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap px-4 text-sm font-medium tracking-wide md:text-base"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const testimonialItems = testimonials.map((t) => ({
    id: t.id,
    text: `"${t.quote}" — ${t.author}, ${t.country}`,
  }));

  return (
    <section id="marquee" className="relative">
      <MarqueeTrack items={marqueeHighlights} direction="left" variant="gold" />

      <div className="section-pattern bg-safari-cream py-3">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-safari-savanna">
          Why travelers choose Tanzania
        </p>
      </div>

      <MarqueeTrack
        items={marqueeHighlights.slice().reverse()}
        direction="right"
        variant="dark"
      />

      <div className="bg-safari-savanna/10 py-3">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-safari-ocean">
          Voices from around the world
        </p>
      </div>

      <MarqueeTrack items={testimonialItems} direction="left" variant="ocean" />
    </section>
  );
}
