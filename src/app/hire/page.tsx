import HireHero from "@/components/sections/hire/HireHero";
import ContactMethods from "@/components/sections/hire/ContactMethods";
import ContactForm from "@/components/sections/hire/ContactForm";

export default function HirePage() {
  return (
    <main className="bg-background text-foreground">
      <HireHero />
      <ContactMethods />
      <ContactForm />
    </main>
  );
}