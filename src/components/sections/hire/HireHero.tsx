import Container from "@/components/layout/Container";

export default function HireHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_50%)]" />

      <Container>
        <div className="relative z-10 max-w-5xl">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Hire & Collaboration
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Let’s build
            <br />
            something modern.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Available for freelance projects,
            startup collaborations, SaaS platforms,
            and modern web experiences.
          </p>

        </div>
      </Container>
    </section>
  );
}