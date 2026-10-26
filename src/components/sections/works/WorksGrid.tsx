"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import ProjectCard from "../home/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", ...new Set(projects.map((project) => project.category))];

export default function WorksGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="pb-24 sm:pb-32" aria-label="Project portfolio">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    active
                      ? "border-white/50 bg-white text-[#070707]"
                      : "border-white/[0.1] bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-zinc-600" aria-live="polite">
            {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div className="grid auto-rows-fr gap-5 lg:grid-cols-2 lg:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
