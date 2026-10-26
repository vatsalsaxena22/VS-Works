import Container from "@/components/layout/Container";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML & CSS",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PHP",
  "WordPress",
  "WooCommerce",
  "Bootstrap",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] py-24 sm:py-32" aria-labelledby="skills-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_50%,rgba(255,255,255,0.035),transparent_46%)]" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              Technologies
            </p>
            <h2
              id="skills-heading"
              className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl"
            >
              The tools behind the work.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              A practical full-stack toolkit for building, integrating, and
              maintaining digital products.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2.5 text-sm text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
