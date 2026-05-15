import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

      <Container>
        <div className="relative z-10 max-w-5xl">
          <FadeIn>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Full Stack Developer • SaaS • UI Systems
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Building modern digital experiences for the future of the web.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              VS Works is the digital presence of Vatsal Saxena — showcasing
              scalable products, premium interfaces, WordPress solutions, and
              modern full-stack applications.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90">
                View Works
              </button>

              <button className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium transition hover:bg-white/5">
                Hire Me
              </button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
