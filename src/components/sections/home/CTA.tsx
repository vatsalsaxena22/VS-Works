import Container from "@/components/layout/Container";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-40">
      <Container>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 md:p-16">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Let’s Build
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Ready to create
            something modern?
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Available for freelance projects,
            SaaS platforms, modern websites,
            and digital product collaborations.
          </p>

          <div className="mt-10">
            <Link
              href="/hire"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:opacity-90"
            >
              Start a Project
            </Link>
          </div>

        </div>

      </Container>
    </section>
  );
}