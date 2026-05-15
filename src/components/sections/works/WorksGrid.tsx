"use client";

import { useState } from "react";

import Container from "@/components/layout/Container";
import ProjectCard from "../home/ProjectCard";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "WordPress",
  "Frontend",
  "Full Stack",
  "SaaS",
];

export default function WorksGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="pb-32">
      <Container>

        {/* Filters */}
        <div className="mb-16 flex flex-wrap gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
                  active
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}