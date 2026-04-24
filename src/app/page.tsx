import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProvinceSection } from "@/components/sections/ProvinceSection";
import { LifeAndMissionSection } from "@/components/sections/LifeAndMissionSection";
import { ReflectionsSection } from "@/components/sections/ReflectionsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProvinceSection />
        <LifeAndMissionSection />
        <ReflectionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
