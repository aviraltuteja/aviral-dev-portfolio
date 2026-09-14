"use client";

import { useState } from "react";
import Link from "next/link";
import { profile, socials } from "@/lib/portfolio-data";

/** Shared closing block. `previousHref` points at the pre-redesign edition of
 *  whichever page is rendering it. */
export default function Footer({
  previousHref = "/v1",
  heading = (
    <>
      Let&rsquo;s build
      <br />
      something.
    </>
  ),
}: {
  previousHref?: string;
  heading?: React.ReactNode;
}): React.ReactElement {
  const [copied, setCopied] = useState(false);

  // Inline confirmation rather than a toast — `react-hot-toast` has no
  // <Toaster /> mounted anywhere in the app.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="bg-sage px-6 py-16 text-paper md:px-12 md:py-24">
      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            {profile.available && (
              <p className="flex items-center gap-2.5 font-body text-xs uppercase tracking-[0.18em] text-apricot">
                <span className="size-2 rounded-full bg-success" />
                Available for hire
              </p>
            )}

            <h2 className="mt-6 font-display text-4xl leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
              {heading}
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={copyEmail}
                className="cursor-pointer border-2 border-paper bg-paper px-6 py-3 font-body text-xs uppercase tracking-[0.18em] text-sage transition-colors hover:border-apricot hover:bg-apricot">
                {copied ? "Copied ✓" : profile.email}
              </button>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-paper/40 px-6 py-3 font-body text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:border-apricot hover:text-apricot">
                Résumé
              </a>
            </div>
          </div>

          <nav className="md:col-span-5 md:justify-self-end">
            <p className="font-body text-xs uppercase tracking-[0.18em] text-apricot">
              Elsewhere
            </p>
            <ul className="mt-6 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl tracking-tight text-paper/80 transition-colors hover:text-apricot md:text-3xl">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-paper/20 pt-6 font-body text-[0.625rem] uppercase tracking-[0.18em] text-paper/50 md:text-xs">
          <span>
            {profile.name} — {profile.location}
          </span>
          <Link
            href={previousHref}
            className="transition-colors hover:text-apricot">
            Previous edition ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
