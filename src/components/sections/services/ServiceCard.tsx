interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]">
      
      <div className="flex items-start justify-between">
        <span className="text-sm text-zinc-600">
          0{Math.floor(Math.random() * 9) + 1}
        </span>

        <span className="text-white/40 transition group-hover:text-white/70">
          →
        </span>
      </div>

      <h3 className="mt-10 text-3xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-6 leading-relaxed text-zinc-400">
        {description}
      </p>

    </div>
  );
}