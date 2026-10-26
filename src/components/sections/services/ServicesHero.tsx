import Image from "next/image";
import Container from "@/components/layout/Container";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(255,255,255,0.06),transparent_42%),radial-gradient(ellipse_at_20%_10%,rgba(255,255,255,0.045),transparent_42%)]" />
      <Container>
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_0.55fr] lg:gap-12">
          <div className="max-w-4xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              Services &amp; solutions
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7.2vw,6rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">
              Digital products, from first thought to launch.
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              VSW Research &amp; Development works across websites, web and mobile
              applications, e-commerce, and early-stage product experiments. We
              adapt the approach to the problem in front of us.
            </p>
          </div>
          <div className="relative mx-auto aspect-[19/14] w-full max-w-[440px] lg:max-w-none">
            <Image
              src="/visuals/product-systems.svg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
