import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Work", href: "/works" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/hire" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-background">
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="grid gap-12 border-b border-white/8 pb-14 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <Link
              href="/"
              className="group inline-flex flex-col items-start gap-1.5"
            >
              <Image
                src="/imgs/logo.png"
                alt="Logo"
                width={200}
                height={60}
                priority
                className=""
              />

              <span className="mt-0 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                Research &amp; Development
              </span>
            </Link>

            <h2 className="mt-8 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Let’s build something useful for what comes next.
            </h2>
            <Link
              href="/hire"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Talk through an idea
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://github.com/vatsalsaxena22"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                GitHub
              </a>
              <a
                href="mailto:hello@vsworks.dev"
                className="text-sm text-zinc-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VSW Research &amp; Development.</p>
          <p>Independent digital product studio · Built by Vatsal Saxena</p>
        </div>
      </div>
    </footer>
  );
}
