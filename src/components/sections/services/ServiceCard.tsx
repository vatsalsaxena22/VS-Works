import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] border border-white/[0.08] bg-[#0a0f15] p-6 transition duration-300 hover:border-white/20 hover:bg-[#101820] sm:p-7">
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-[0.16em] text-white/70">
          {number}
        </span>
        <ArrowUpRight className="size-4 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
      </div>
      <h3 className="mt-10 text-xl font-medium leading-snug tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
        {description}
      </p>
      <Link
        href="/hire#project-form"
        className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-medium text-zinc-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Discuss this service
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
