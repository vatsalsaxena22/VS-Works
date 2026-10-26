import Image from "next/image";
import Container from "@/components/layout/Container";

export default function HireHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(255,255,255,0.06),transparent_42%),radial-gradient(ellipse_at_20%_10%,rgba(255,255,255,0.04),transparent_42%)]" />
      <Container>
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_280px]">
          <div className="max-w-5xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              Start a project
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7.2vw,6rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">
              Let’s make something useful.
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              Share the idea, the challenge, or the workflow you want to improve.
              VSW Research &amp; Development works with you to define a practical
              next step.
            </p>
          </div>
          <div className="relative hidden aspect-square w-full lg:block">
            <Image
              src="/visuals/research-orbit.svg"
              alt=""
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
