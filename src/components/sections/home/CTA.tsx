import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b0b0b] p-7 sm:p-10 md:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.035),transparent_55%)]" />
          <div className="relative grid items-center gap-3 md:grid-cols-[1fr_0.72fr] md:gap-8">
            <div className="relative z-10 max-w-4xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
                Bring us a question
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Have an idea worth exploring?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                Tell us what you’re trying to make. We’ll help shape the next
                step, from early research through a considered digital product.
              </p>
              <Link
                href="/hire"
                className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080808] transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Start a project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="relative mx-auto aspect-[1.72/1] w-full max-w-[460px] md:aspect-[1.2/1] md:max-w-none">
              <Image
                src="/visuals/home-ribbon.svg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
