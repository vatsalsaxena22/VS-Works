import Link from "next/link";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/vatsalsaxena22",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    name: "Email",
    href: "mailto:hello@vsworks.dev",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-10">
        
        {/* Top */}
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              VS Works
            </p>

            <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Building modern
              <br />
              digital experiences.
            </h2>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          
          <p>
            © 2026 VS Works. All rights reserved.
          </p>

          <p>
            Designed & developed by Vatsal Saxena.
          </p>

        </div>

      </div>
    </footer>
  );
}