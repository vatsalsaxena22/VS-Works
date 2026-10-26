import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="relative border-y border-white/[0.08] py-24 sm:py-32" aria-labelledby="services-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.04),transparent_45%)]" />
      <Container>
        <FadeIn>
          <div className="relative mb-10 grid items-center gap-2 sm:mb-14 lg:grid-cols-[1fr_0.72fr] lg:gap-8">
            <div className="relative z-10 max-w-3xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
                What we do
              </p>
              <h2
                id="services-heading"
                className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl"
              >
                Technology with a purpose.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                From a first experiment to a production-ready product, VSW helps
                ideas move forward with clear thinking and careful engineering.
              </p>
              <Link
                href="/services"
                className="group mt-6 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore all capabilities
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="relative mx-auto aspect-[1.42/1] w-full max-w-[430px] lg:justify-self-end">
              <Image
                src="/visuals/home-prism.svg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 430px"
                className="object-contain"
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service, index) => (
            <Link
              key={service.title}
              href="/services#offerings"
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.16em] text-zinc-600">
                  0{index + 1}
                </span>
                <ArrowUpRight className="size-4 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
              <h3 className="mt-9 text-lg font-medium leading-snug text-zinc-100">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
