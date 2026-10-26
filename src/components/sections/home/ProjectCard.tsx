import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  year: string;
  slug: string;
  image: string;
  imageAlt: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  year,
  slug,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <Link
      href={`/works/${slug}`}
      aria-label={`View the ${title} case study`}
      className="group block h-full overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#0a0a0a] transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-[#0c0c0c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#101010]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          unoptimized
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-200 backdrop-blur-md">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4 text-xs text-zinc-500">
          <span>{year}</span>
          <span className="inline-flex items-center gap-2 transition-colors group-hover:text-white">
            View case study
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <div className="mt-5">
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
