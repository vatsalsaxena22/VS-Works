import Container from "@/components/layout/Container";

export default function AboutIntro() {
  return (
    <section className="pb-40">
      <Container>

        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Vatsal Saxena
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              I’m Vatsal Saxena
              <br />
              Full-Stack Developer
            </h2>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400">
              I&apos;m a passionate full-stack developer focused
              on building modern, responsive, and high-performance
              web applications. I enjoy transforming ideas into
              elegant, scalable digital experiences using clean
              frontend architecture and efficient backend solutions.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Focus
            </p>

            <div className="mt-10 space-y-8">
              
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Modern Frontend
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-400">
                  Building responsive and visually refined
                  interfaces with modern frontend technologies.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Scalable Systems
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-400">
                  Developing scalable applications and
                  structured digital experiences.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Clean UI/UX
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-400">
                  Creating premium monochrome interfaces
                  focused on clarity, rhythm, and usability.
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}