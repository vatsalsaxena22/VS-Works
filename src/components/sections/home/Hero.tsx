import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Cpu,
  FlaskConical,
} from "lucide-react";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";

const disciplines = [
  {
    number: "01",
    label: "Research",
    description: "Explore possibilities",
    icon: FlaskConical,
  },
  {
    number: "02",
    label: "Engineer",
    description: "Build with precision",
    icon: Cpu,
  },
  {
    number: "03",
    label: "Deliver",
    description: "Ship real solutions",
    icon: Blocks,
  },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-[#080a0d] pb-20 pt-32 sm:pt-36">
      {/* Premium technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.075) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.075) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          }}
        />

        {/* Ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.055),transparent_60%)]" />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080a0d]/20 to-transparent" />

        {/* Technical corner details */}
        <div className="absolute left-6 top-28 size-2 border-l border-t border-white/30 sm:left-10 lg:left-16" />
        <div className="absolute right-6 top-28 size-2 border-r border-t border-white/30 sm:right-10 lg:right-16" />
      </div>

      <Container>
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Main content */}
          <div className="relative z-10 max-w-3xl">
            <FadeIn>
              <p className="mb-7 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.26em] text-zinc-400 sm:text-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/40" />
                  <span className="relative size-2 rounded-full bg-emerald-400" />
                </span>
                VSW / Research &amp; Development
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-[clamp(3.5rem,7.5vw,6.8rem)] font-medium leading-[0.91] tracking-[-0.075em] text-white">
                Researching
                <br />
                what&apos;s next.
                <br />
                <span className="text-zinc-500">
                  Building it now.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-8 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                We explore emerging technologies and turn ambitious
                ideas into thoughtful digital products. From websites
                and web applications to mobile experiences.
                <span className="text-zinc-200">
                  {" "}Designed with intent. Engineered to scale.
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/works"
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080808] transition duration-300 hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Explore our work
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <Link
                  href="/hire"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/15 bg-white/[0.025] px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur-sm transition duration-300 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Start a conversation
                  <ArrowUpRight className="size-4 text-zinc-500" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                <span>Web</span>
                <span className="text-zinc-700">/</span>
                <span>Software</span>
                <span className="text-zinc-700">/</span>
                <span>Mobile</span>
                <span className="text-zinc-700">/</span>
                <span>Product R&amp;D</span>
              </div>
            </FadeIn>
          </div>

          {/* R&D process panel */}
          <FadeIn
            delay={0.18}
            className="relative mx-auto w-full max-w-[490px] lg:mx-0 lg:ml-auto"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-10 rounded-[3rem] bg-white/[0.035] blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[#0b0e12]/90 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-7">
              {/* Panel grid texture */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative">
                {/* Panel header */}
                <div className="flex items-start justify-between border-b border-white/[0.10] pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                        Our approach
                      </p>
                    </div>

                    <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
                      From question to product
                    </h2>
                  </div>

                  <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium tracking-wider text-zinc-300">
                    VSW / 01
                  </span>
                </div>

                {/* Process grid */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {disciplines.map(({ number, label, description, icon: Icon }, index) => (
                    <div
                      key={number}
                      className={`group relative min-h-[150px] overflow-hidden rounded-2xl border p-4 transition duration-300 hover:border-white/25 sm:p-5 ${
                        index === 2
                          ? "border-white/20 bg-white/[0.07]"
                          : "border-white/[0.09] bg-[#11151b]/80 hover:bg-white/[0.05]"
                      } ${index === 2 ? "col-span-2 min-h-0" : ""}`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 transition group-hover:bg-white/[0.08]">
                          <Icon className="size-[18px]" strokeWidth={1.6} />
                        </span>

                        <span className="text-[10px] tracking-widest text-zinc-600">
                          {number}
                        </span>
                      </div>

                      <div className={`mt-6 ${index === 2 ? "mt-4" : ""}`}>
                        <h3 className="text-base font-medium text-white">
                          {label}
                        </h3>
                        <p className="mt-1 text-xs text-zinc-500">
                          {description}
                        </p>
                      </div>

                      {index === 2 && (
                        <div className="absolute bottom-5 right-5 flex size-8 items-center justify-center rounded-full border border-white/10 text-zinc-300">
                          <ArrowUpRight className="size-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.10] pt-5">
                  <div>
                    <p className="text-xs font-medium text-zinc-300">
                      Curiosity, made tangible.
                    </p>
                    <p className="mt-1 text-[10px] tracking-wide text-zinc-600">
                      THINK · BUILD · REFINE
                    </p>
                  </div>

                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/works"
              className="group mt-5 inline-flex items-center gap-2 px-2 text-xs text-zinc-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-white"
            >
              Discover selected work
              <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
