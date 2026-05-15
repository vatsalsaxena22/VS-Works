import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import Image from "next/image";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="pt-40 pb-24">
        <Container>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            {project.category}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
            {project.overview}
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            {/* Left */}
            <div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                <Image
                  src={
                    project.image?.trim()
                      ? project.image
                      : `https://placehold.co/1200x750/0a0a0a/ffffff?text=${encodeURIComponent(project.title)}`
                  }
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Right */}
            <div className="space-y-10">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Year
                </p>

                <p className="mt-4 text-lg">{project.year}</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Stack
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Live Project
                </p>

                <a
                  href={project.href}
                  target="_blank"
                  className="mt-4 inline-block text-lg text-white/80 transition hover:text-white"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
