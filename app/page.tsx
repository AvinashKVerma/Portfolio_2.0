import LoadingScreen from "@/components/common/LoadingScreen";
import Terminal from "@/components/terminal/Terminal";
import AboutSection from "@/sections/home/AboutSection";
import ArchitecturePreview from "@/sections/home/ArchitecturePreview";
import ContactCTA from "@/sections/home/ContactCTA";
import EcosystemHub from "@/sections/home/EcosystemHub";
import ExperienceTimeline from "@/sections/home/ExperienceTimeline";
import Hero from "@/sections/home/Hero";
import LiveMetrics from "@/sections/home/LiveMetrics";
import TechArsenal from "@/sections/home/TechArsenal";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />

      <main>
        <Hero />
        <EcosystemHub />
        <ExperienceTimeline />
        <ArchitecturePreview />
        <LiveMetrics />
        <Terminal />
        <TechArsenal />
        <AboutSection />
        <ContactCTA />
      </main>
    </>
  );
}
