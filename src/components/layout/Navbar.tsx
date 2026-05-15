"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Hire", href: "/hire" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em]"
        >
          VS Works
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}