import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[70svh] items-center bg-transparent py-32 text-foreground">
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            404 · Page not found
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.06em] text-white sm:text-7xl">
            We couldn’t find this page.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
            The page may have moved, or the address may be incomplete. You can
            return to the studio homepage or browse the selected work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#080808] transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <ArrowLeft className="size-4" />
              Back home
            </Link>
            <Link
              href="/works"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              View selected work
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
