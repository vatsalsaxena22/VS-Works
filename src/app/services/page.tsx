import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import Process from "@/components/sections/services/Process";

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <ServicesHero />
      <ServicesGrid />
      <Process />
    </main>
  );
}