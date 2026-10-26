import Container from "@/components/layout/Container";

export default function WorksHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(255,255,255,0.055),transparent_42%),radial-gradient(ellipse_at_20%_10%,rgba(255,255,255,0.04),transparent_42%)]" />
      <Container>
        <div className="relative z-10 max-w-4xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            Selected work
          </p>
          <h1 className="mt-6 text-[clamp(3rem,7.2vw,6rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">
            Thoughtful ideas, built into digital experiences.
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            A selection of websites, interfaces, and products. Each project
            starts with a different challenge and a chance to make something
            more useful.
          </p>
        </div>
      </Container>
    </section>
  );
}
