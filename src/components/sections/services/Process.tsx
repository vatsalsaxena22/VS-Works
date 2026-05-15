import Container from "@/components/layout/Container";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section className="relative py-40">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />

      <Container>

        {/* Heading */}
        <div className="mb-20 max-w-3xl">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Workflow
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Process &
            <br />
            Approach
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            A structured workflow focused on clarity,
            scalability, and premium digital experiences.
          </p>

        </div>

        {/* Process Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {process.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
            >
              
              <p className="text-sm text-zinc-600">
                {step.number}
              </p>

              <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                {step.title}
              </h3>

              <p className="mt-6 leading-relaxed text-zinc-400">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}