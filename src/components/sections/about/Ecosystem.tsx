import Image from "next/image";
import Container from "@/components/layout/Container";

const pillars = [
  {
    number: "01",
    title: "Explore",
    label: "Research",
    description:
      "Investigate user needs, emerging tools, and technical options to find a promising direction.",
    tags: ["Discovery", "Technical research", "Product thinking"],
  },
  {
    number: "02",
    title: "Prototype",
    label: "Experiment",
    description:
      "Make ideas tangible with interface studies and working prototypes that help teams learn sooner.",
    tags: ["Proof of concept", "UI systems", "Validation"],
  },
  {
    number: "03",
    title: "Build",
    label: "Develop",
    description:
      "Turn a validated direction into a polished, maintainable product that is ready to keep evolving.",
    tags: ["Websites", "Web apps", "Mobile products"],
  },
];

export default function Ecosystem() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="pillars-heading">
      <Container>
        <div className="mb-12 grid gap-8 sm:mb-14 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              Research &amp; development
            </p>
            <h2
              id="pillars-heading"
              className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl"
            >
              Explore. Test. Build.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              Curiosity gives us room to explore. A clear process helps us turn
              what we learn into useful digital products.
            </p>
          </div>
          <div className="relative mx-auto aspect-[2.7/1] w-full max-w-[480px] md:justify-self-end">
            <Image
              src="/visuals/rnd-flow.svg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="rounded-[1.5rem] border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.16em] text-white/70">
                  {pillar.number}
                </span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  {pillar.label}
                </span>
              </div>
              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {pillar.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
