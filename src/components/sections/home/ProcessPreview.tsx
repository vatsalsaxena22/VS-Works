import Container from "@/components/layout/Container";

const process = [
  "Discovery",
  "Strategy",
  "Development",
  "Launch",
];

export default function ProcessPreview() {
  return (
    <section className="py-40">
      <Container>

        <div className="mb-20">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Workflow
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Process &
            <br />
            Approach
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
            >
              <p className="text-sm text-zinc-600">
                0{index + 1}
              </p>

              <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}