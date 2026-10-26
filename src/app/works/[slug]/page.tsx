import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/works/${project.slug}` },
    openGraph: {
      type: "website",
      title: `${project.title} | VSW Research & Development`,
      description: project.description,
      url: `/works/${project.slug}`,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main id="main" className="bg-transparent text-foreground">
      <section className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(255,255,255,0.05),transparent_42%)]" />
        <Container>
          <Link
            href="/works"
            className="group relative inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Back to selected work
          </Link>

          <div className="relative mt-12 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                {project.category}
              </span>
              <span className="text-xs text-zinc-600">{project.year}</span>
            </div>
            <h1 className="mt-5 text-[clamp(3rem,7.2vw,6rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              {project.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#0b0b0b] sm:rounded-[2rem]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              unoptimized
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:gap-20">
            <div className="max-w-3xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/80">
                Project overview
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                The brief, in focus.
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-400">
                {project.overview}
              </p>
            </div>

            <aside className="space-y-8 rounded-[1.5rem] border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">Discipline</p>
                <p className="mt-3 text-sm font-medium text-white">{project.category}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">Technology</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.09] px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#080808] transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Visit live project
                <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </aside>
          </div>

          <div className="mt-16 border-t border-white/[0.08] pt-8">
            <Link
              href="/hire"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Have a similar challenge? Let’s talk.
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
