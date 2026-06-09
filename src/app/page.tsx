import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import Destinations from "@/components/Destinations";
import Wildlife from "@/components/Wildlife";
import Zanzibar from "@/components/Zanzibar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeSection />
        <Destinations />
        <Wildlife />
        <Zanzibar />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
