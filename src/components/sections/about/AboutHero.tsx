import Container from "@/components/layout/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_50%)]" />

      <Container>
        <div className="relative z-10 max-w-5xl">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            About Me
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Full-Stack
            <br />
            Web Developer
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Passionate about building modern, scalable,
            and visually engaging digital experiences
            with clean UI/UX and efficient development practices.
          </p>

        </div>
      </Container>
    </section>
  );
}