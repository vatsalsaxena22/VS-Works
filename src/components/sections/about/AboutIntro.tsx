import Container from "@/components/layout/Container";

const principles = [
  {
    title: "Start with the problem",
    description:
      "Understand the people, constraints, and real need before choosing a feature or a framework.",
  },
  {
    title: "Build with intent",
    description:
      "Shape clear interfaces and dependable systems that make everyday work easier.",
  },
  {
    title: "Leave room to grow",
    description:
      "Make deliberate technical choices so a useful first release can evolve without unnecessary complexity.",
  },
];

export default function AboutIntro() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              The studio
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
              Research-minded. Product-focused. Built with care.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-zinc-400">
              <p>
                VSW is led by developer Vatsal Saxena and brings product
                thinking together with hands-on full-stack development. The
                studio works across websites, web applications, and mobile
                product experiences.
              </p>
              <p>
                Every project starts with the question behind the brief. From
                there, research, design, and engineering work together to make
                a clear idea useful in the real world.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/[0.09] bg-[#0b0b0b] p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500">
              Working principles
            </p>
            <div className="mt-7 divide-y divide-white/[0.08]">
              {principles.map((principle, index) => (
                <div key={principle.title} className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] tracking-[0.14em] text-white/70">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-medium text-white">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="mt-2 pl-8 text-sm leading-6 text-zinc-500">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
