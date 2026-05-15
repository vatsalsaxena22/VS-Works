import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  year: string;
  slug: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  year,
  slug,
  image,
}: ProjectCardProps) {
  return (
    <Link
      href={`/works/${slug}`}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/20"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        
        <Image
          src={
            image?.trim()
              ? image
              : `https://placehold.co/1200x750/0a0a0a/ffffff?text=${encodeURIComponent(title)}`
          }
          alt={title}
          fill
          unoptimized
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Floating Label */}
        <div className="absolute left-6 top-6">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-md">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 p-8">
        
        {/* Meta */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">
            {year}
          </span>

          <span className="text-sm text-zinc-600 transition group-hover:text-zinc-400">
            View →
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white transition duration-500 group-hover:translate-x-1">
            {title}
          </h3>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>

      </div>
    </Link>
  );
}