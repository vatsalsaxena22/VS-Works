import Container from "@/components/layout/Container";

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "WordPress",
  "WooCommerce",
];

export default function TechStack() {
  return (
    <section className="relative border-y border-white/10 py-40">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />

      <Container>

        <div className="mb-20 max-w-3xl">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Stack
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Technologies
            <br />
            & Systems
          </h2>

        </div>

        <div className="flex flex-wrap gap-4">
          {stack.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}