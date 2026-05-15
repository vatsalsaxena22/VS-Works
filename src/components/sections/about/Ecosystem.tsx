import Container from "@/components/layout/Container";

const ecosystem = [
  {
    title: "VS Portfolio",
    stack: ["HTML", "Custom CSS", "Vanilla JS"],
    description:
      "My personal portfolio showcasing skills, experience, and development journey.",
    status: "Live",
  },

  {
    title: "VS Projects",
    stack: ["React", "Vite", "Bootstrap 5"],
    description:
      "A curated showcase of all my personal and professional web development projects.",
    status: "Live",
  },

  {
    title: "VS Works",
    stack: ["Coming Soon"],
    description:
      "An upcoming platform focused on creative work, development experiments, and digital products.",
    status: "In Progress",
  },
];

export default function Ecosystem() {
  return (
    <section className="py-40">
      <Container>

        <div className="mb-20 max-w-4xl">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            My Ecosystem
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            My Tech
            <br />
            Trio
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            A collection of platforms and projects
            representing my work, portfolio,
            and development journey.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {ecosystem.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
            >
              
              <div className="flex items-center justify-between">
                
                <span className="text-sm text-zinc-600">
                  {item.status}
                </span>

                <span className="text-white/40 transition group-hover:text-white/70">
                  →
                </span>

              </div>

              <h3 className="mt-10 text-3xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-8 leading-relaxed text-zinc-400">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}