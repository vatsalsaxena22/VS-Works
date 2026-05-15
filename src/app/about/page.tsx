import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import Skills from "@/components/sections/about/Skills";
import Ecosystem from "@/components/sections/about/Ecosystem";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <AboutHero />
      <AboutIntro />
      <Skills />
      <Ecosystem />
    </main>
  );
}