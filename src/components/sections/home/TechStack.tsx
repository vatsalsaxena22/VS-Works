import Container from "@/components/layout/Container";

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "PHP",
  "WordPress",
  "WooCommerce",
  "JavaScript",
  "Git",
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] py-24 sm:py-32" aria-labelledby="technology-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,rgba(255,255,255,0.04),transparent_45%)]" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              Tools for the work
            </p>
            <h2
              id="technology-heading"
              className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl"
            >
              A flexible technology stack.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              The right tools depend on the problem. We choose technologies to
              fit the product, the team, and the next stage of growth.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {stack.map((item, index) => (
              <span
                key={item}
                className={`rounded-full border px-4 py-2.5 text-sm transition hover:border-white/30 hover:text-white ${
                  index < 4
                    ? "border-white/15 bg-white/[0.06] text-zinc-200"
                    : "border-white/[0.09] bg-white/[0.025] text-zinc-400"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
