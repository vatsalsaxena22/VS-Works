import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { process } from "@/data/process";

export default function ProcessPreview() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="process-heading">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              How we work
            </p>
            <h2
              id="process-heading"
              className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl"
            >
              Make the hard part clear.
            </h2>
          </div>
          <Link
            href="/services#process"
            className="group inline-flex shrink-0 items-center gap-2 text-sm text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Our process
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0b0b] p-5 sm:p-6"
            >
              <p className="text-xs font-medium tracking-[0.16em] text-white/70">
                {step.number}
              </p>
              <h3 className="mt-8 text-xl font-medium tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
