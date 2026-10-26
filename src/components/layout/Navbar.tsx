"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useRef, useState } from "react";

const navItems = [
  { name: "Work", href: "/works" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#080c12]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="VSW Research and Development home"
          className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/imgs/logo.png"
            alt="VSW Research and Development Logo"
            width={120}
            height={60}
            priority
            className="object-cover"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                  active ? "text-white" : "text-zinc-400"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-white" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/hire"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/4 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start a project
            <ArrowUpRight className="size-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/25 md:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setMenuOpen(false);
            menuButtonRef.current?.focus();
          }
        }}
        className={`overflow-hidden border-t border-white/8 bg-[#080c12] transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
          {[{ name: "Home", href: "/" }, ...navItems, { name: "Contact", href: "/hire" }].map(
            (item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3 py-3 text-sm transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-white ${
                    active ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {item.name}
                </Link>
              );
            },
          )}
        </div>
      </nav>
    </header>
  );
}
