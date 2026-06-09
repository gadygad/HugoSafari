import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HugoSafari | Discover Tanzania — Safari, Heritage & Paradise",
  description:
    "Experience Tanzania's world-renowned safaris, ancient Olduvai Gorge, Ngorongoro Crater, Serengeti migration, and Zanzibar's Forodhani. Plan your unforgettable African adventure with HugoSafari.",
  keywords: [
    "Tanzania safari",
    "Serengeti",
    "Ngorongoro",
    "Olduvai Gorge",
    "Zanzibar",
    "Forodhani",
    "HugoSafari",
    "African wildlife",
    "Great Migration",
  ],
  openGraph: {
    title: "HugoSafari — Tanzania Awaits",
    description: "From Serengeti lions to Zanzibar sunsets — your adventure begins here.",
    type: "website",
    locale: "en_US",
    siteName: "HugoSafari",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
