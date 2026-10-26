import HireHero from "@/components/sections/hire/HireHero";
import ContactMethods from "@/components/sections/hire/ContactMethods";
import ContactForm from "@/components/sections/hire/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell VSW Research & Development about your website, app, or digital product idea.",
};

export default function HirePage() {
  return (
    <main id="main" className="bg-transparent text-foreground">
      <HireHero />
      <ContactMethods />
      <ContactForm />
    </main>
  );
}
