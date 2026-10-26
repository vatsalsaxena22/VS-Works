import Container from "@/components/layout/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(ellipse_at_20%_10%,rgba(255,255,255,0.045),transparent_42%)]" />
      <Container>
        <div className="relative z-10 max-w-5xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            About VSW
          </p>
          <h1 className="mt-6 text-[clamp(3rem,7.2vw,6rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">
            Curiosity is our starting point.
            <span className="text-zinc-500"> Useful products are the goal.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            VSW Research &amp; Development is an independent digital studio
            exploring technology, product ideas, and better ways to solve real
            problems through software.
          </p>
        </div>
      </Container>
    </section>
  );
}
