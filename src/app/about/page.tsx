import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import Skills from "@/components/sections/about/Skills";
import Ecosystem from "@/components/sections/about/Ecosystem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the studio",
  description:
    "Meet VSW Research & Development: an independent digital studio exploring technology and building useful software products.",
};

export default function AboutPage() {
  return (
    <main id="main" className="bg-transparent text-foreground">
      <AboutHero />
      <AboutIntro />
      <Skills />
      <Ecosystem />
    </main>
  );
}
