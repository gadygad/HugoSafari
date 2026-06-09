import { Compass } from "lucide-react";
import { navLinks, siteConfig } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-safari-earth py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-safari-gold/20">
              <Compass className="h-4 w-4 text-safari-gold-light" />
            </div>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
              {siteConfig.name}
            </span>
          </div>

          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/50 transition hover:text-safari-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            © {year} {siteConfig.name} — Utalii Project. Celebrating Tanzania&apos;s
            wildlife, heritage, and coastlines for travelers worldwide.
          </p>
          <p className="mt-2 text-xs text-white/30">
            Olduvai Gorge · Ngorongoro · Serengeti · Zanzibar · Forodhani
          </p>
        </div>
      </div>
    </footer>
  );
}
