import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-28 border-y border-white/[0.08] py-24 sm:py-32" aria-labelledby="process-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.035),transparent_48%)]" />
      <Container>
        <div className="relative mb-12 grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end sm:mb-14">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              The process
            </p>
            <h2 id="process-title" className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              A clear path, with room to learn.
            </h2>
          </div>
          <p className="text-base leading-7 text-zinc-400">
            The steps stay transparent and collaborative. Each phase creates
            enough clarity to make the next decision with confidence.
          </p>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-white/[0.08] bg-[#090909]/80 p-5 sm:p-6"
            >
              <p className="text-xs tracking-[0.16em] text-white/70">
                {step.number}
              </p>
              <h3 className="mt-8 text-xl font-medium tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/hire"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Talk through a project
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Container>
    </section>
  );
}
