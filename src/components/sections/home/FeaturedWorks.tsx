import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedWorks() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="featured-work-heading">
      <Container>
        <FadeIn>
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
                Selected work
              </p>
              <h2
                id="featured-work-heading"
                className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl"
              >
                Ideas, made real.
              </h2>
            </div>
            <Link
              href="/works"
              className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Browse all work
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid auto-rows-fr gap-5 lg:grid-cols-2 lg:gap-6">
          {projects.slice(0, 2).map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1} className="h-full">
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
