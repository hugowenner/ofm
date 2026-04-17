import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SpiritualitySection } from "@/components/sections/SpiritualitySection";
import { PresenceSection } from "@/components/sections/PresenceSection";
import { VocationsSection } from "@/components/sections/VocationsSection";
import { ReflectionsSection } from "@/components/sections/ReflectionsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SpiritualitySection />
        <PresenceSection />
        <VocationsSection />
        <ReflectionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
