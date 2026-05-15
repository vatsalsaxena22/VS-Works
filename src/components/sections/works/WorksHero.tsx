import Container from "@/components/layout/Container";

export default function WorksHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_50%)]" />

      <Container>
        <div className="relative z-10 max-w-4xl">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Portfolio & Case Studies
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Selected
            <br />
            Works
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            A curated collection of professional websites,
            scalable SaaS platforms, UI systems,
            and modern digital experiences.
          </p>

        </div>
      </Container>
    </section>
  );
}