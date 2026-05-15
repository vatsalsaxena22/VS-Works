import WorksHero from "@/components/sections/works/WorksHero";
import WorksGrid from "@/components/sections/works/WorksGrid";

export default function WorksPage() {
  return (
    <main className="bg-background text-foreground">
      <WorksHero />
      <WorksGrid />
    </main>
  );
}