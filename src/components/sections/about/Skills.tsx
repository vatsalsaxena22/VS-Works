import Container from "@/components/layout/Container";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "W3.css",
  "W3.js",
  "Git",
  "GitHub",
  "Hostinger",
  "Google Sites",
  "Blogger",
  "WordPress",
  "Bootstrap 5",
  "Tailwind CSS",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export default function Skills() {
  return (
    <section className="relative border-y border-white/10 py-40">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />

      <Container>

        <div className="mb-20 max-w-3xl">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Skills & Technologies
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Technical
            <br />
            Stack
          </h2>

        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              {skill}
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}