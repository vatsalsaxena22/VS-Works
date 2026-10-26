import WorksHero from "@/components/sections/works/WorksHero";
import WorksGrid from "@/components/sections/works/WorksGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Explore selected websites, web products, and interface work from VSW Research & Development.",
};

export default function WorksPage() {
  return (
    <main id="main" className="bg-transparent text-foreground">
      <WorksHero />
      <WorksGrid />
    </main>
  );
}
