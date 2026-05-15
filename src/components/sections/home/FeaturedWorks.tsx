import Container from "@/components/layout/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import FadeIn from "@/components/animations/FadeIn";

export default function FeaturedWorks() {
  return (
    <section className="py-32">
      <Container>
        <FadeIn>
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Featured Projects
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
