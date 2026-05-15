import Hero from "@/components/sections/home/Hero";
import FeaturedWorks from "@/components/sections/home/FeaturedWorks";

import ServicesPreview from "@/components/sections/home/ServicesPreview";
import ProcessPreview from "@/components/sections/home/ProcessPreview";
import TechStack from "@/components/sections/home/TechStack";
import CTA from "@/components/sections/home/CTA";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <FeaturedWorks />
      <ServicesPreview />
      <ProcessPreview />
      <TechStack />
      <CTA />
    </main>
  );
}