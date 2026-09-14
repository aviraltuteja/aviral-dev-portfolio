"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/portfolio-data";

const links = [
  { label: "About", href: "/about" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];

/** Shared chrome for every redesigned page. */
export default function Masthead(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="theme-paper sticky top-0 z-50 border-b-2 border-sage bg-paper/90 font-body backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[92rem] items-center justify-between px-6 md:h-20 md:px-12">
        <Link
          href="/"
          className="font-display text-2xl leading-none tracking-tight text-sage md:text-3xl">
          AT
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const isCurrent = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`text-xs uppercase tracking-[0.18em] transition-colors hover:text-terracotta ${
                  isCurrent
                    ? "text-terracotta underline decoration-terracotta/50 underline-offset-[6px]"
                    : "text-sage"
                }`}>
                {link.label}
              </Link>
            );
          })}
          {profile.available && (
            <span className="flex items-center gap-2 border-l border-sage/20 pl-6 text-xs uppercase tracking-[0.18em] text-sage/70">
              <span className="size-2 rounded-full bg-success" />
              Available
            </span>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="text-xs uppercase tracking-[0.18em] text-sage md:hidden">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t-2 border-sage bg-paper md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-sage/20 px-6 py-4 font-display text-2xl text-sage">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
