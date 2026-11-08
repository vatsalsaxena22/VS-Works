"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Work", href: "/works" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !sidebarRef.current) return;

      const focusable = sidebarRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#080c12]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="VSW Research and Development home"
          className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          onClick={closeMenu}
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

      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          menuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          ref={sidebarRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
          className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(88vw,24rem)] flex-col border-l border-white/15 !bg-black px-6 pb-8 pt-5 shadow-2xl shadow-black/60 transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
              Navigation
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close menu"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/35 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-1 flex-col py-7">
            {[{ name: "Home", href: "/" }, ...navItems].map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className={`flex items-center justify-between border-b border-white/10 py-5 text-2xl font-medium tracking-tight transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white ${
                    active ? "text-white" : "text-zinc-400"
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-xs tracking-[0.16em] text-zinc-600">
                    0{index + 1}
                  </span>
                </Link>
              );
            })}
          </nav>

          <Link
            href="/hire"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="group inline-flex min-h-12 items-center justify-between rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </aside>
      </div>
    </header>
  );
}
