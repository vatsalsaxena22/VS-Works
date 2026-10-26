import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import Process from "@/components/sections/services/Process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web applications, mobile products, e-commerce, and product research from VSW Research & Development.",
};

export default function ServicesPage() {
  return (
    <main id="main" className="bg-transparent text-foreground">
      <ServicesHero />
      <ServicesGrid />
      <Process />
    </main>
  );
}
