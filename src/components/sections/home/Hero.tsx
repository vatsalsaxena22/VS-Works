import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Blocks, Cpu, FlaskConical } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";

const disciplines = [
  { number: "01", label: "Research", icon: FlaskConical },
  { number: "02", label: "Engineer", icon: Cpu },
  { number: "03", label: "Deliver", icon: Blocks },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pb-20 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_42%,rgba(255,255,255,0.07),transparent_35%),radial-gradient(ellipse_at_20%_20%,rgba(255,255,255,0.055),transparent_35%)]" />

      <Container>
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="relative z-10 max-w-3xl">
            <FadeIn>
              <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400 sm:text-xs">
                <span className="size-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.75)]" />
                VSW · Research &amp; Development
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-[clamp(3.25rem,8vw,6.7rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-white">
                Researching
                <br />
                what’s next.
                <br />
                <span className="text-zinc-500">Building it now.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                We explore web technologies and turn ambitious ideas into
                thoughtful websites, web applications, and mobile products.
                Practical engineering, considered design, built to grow.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/works"
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080808] transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Explore our work
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/hire"
                  className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Start a conversation
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-zinc-600 sm:text-sm">
                Web · Software · Mobile · Product R&amp;D
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.18} className="relative mx-auto w-full max-w-[490px] lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-white/[0.07] blur-3xl" />
            <div className="pointer-events-none absolute -right-9 -top-16 z-20 size-36 opacity-90 sm:-right-12 sm:-top-20 sm:size-48">
              <Image
                src="/visuals/research-orbit.svg"
                alt=""
                fill
                sizes="(max-width: 640px) 144px, 192px"
                className="object-contain"
              />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0c]/85 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">The VSW method</p>
                  <p className="mt-2 text-sm font-medium text-white">From question to product</p>
                </div>
                <span className="rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white">
                  R&amp;D / 01
                </span>
              </div>

              <div className="relative mt-7 space-y-3">
                <div className="absolute bottom-8 left-[22px] top-8 w-px bg-gradient-to-b from-white/50 via-white/20 to-transparent" />
                {disciplines.map(({ number, label, icon: Icon }, index) => (
                  <div
                    key={number}
                    className={`relative flex items-center gap-4 rounded-2xl border p-4 ${
                      index === 1
                        ? "border-white/20 bg-white/[0.07]"
                        : "border-white/[0.07] bg-white/[0.02]"
                    }`}
                  >
                    <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#111111] text-white">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{number}</p>
                      <p className="mt-1 text-base font-medium text-zinc-100">{label}</p>
                    </div>
                    <span className="text-xs text-zinc-600">0{index + 1}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3">
                <span className="text-xs text-zinc-500">Curiosity, made tangible.</span>
                <span className="size-2 rounded-full bg-white" />
              </div>
            </div>
            <Link
              href="/works"
              className="group mt-5 inline-flex items-center gap-2 px-2 text-xs text-zinc-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-white"
            >
              See all selected work
              <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
