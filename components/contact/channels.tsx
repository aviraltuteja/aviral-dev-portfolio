"use client";

import { useState } from "react";
import { profile, socials } from "@/lib/portfolio-data";

const rows = [
  ...socials.map((s) => ({ label: s.label, value: s.href, href: s.href })),
  { label: "Résumé", value: "Google Drive", href: profile.resume },
];

/** Strip the protocol so the rows read as text rather than as URLs. */
const display = (href: string) => href.replace(/^https?:\/\//, "");

export default function Channels(): React.ReactElement {
  const [copied, setCopied] = useState(false);

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
    <ul className="border-b border-sage/20">
      <li className="border-t border-sage/20">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-6">
          <span className="w-full font-body text-xs uppercase tracking-[0.18em] text-terracotta md:w-[9rem]">
            Email
          </span>

          <a
            href={`mailto:${profile.email}`}
            className="flex-1 font-display text-2xl tracking-tight text-sage transition-colors hover:text-terracotta md:text-3xl">
            {profile.email}
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="shrink-0 cursor-pointer border-2 border-sage px-4 py-2 font-body text-xs uppercase tracking-[0.18em] transition-colors hover:bg-apricot">
            {copied ? (
              <span className="text-success">Copied ✓</span>
            ) : (
              <span className="text-sage">Copy</span>
            )}
          </button>
        </div>
      </li>

      {rows.map((row) => (
        <li key={row.label} className="border-t border-sage/20">
          <a
            href={row.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-wrap items-center gap-x-8 gap-y-2 px-2 py-6 transition-colors hover:bg-apricot/40">
            <span className="w-full font-body text-xs uppercase tracking-[0.18em] text-terracotta md:w-[9rem]">
              {row.label}
            </span>
            <span className="flex-1 font-display text-2xl tracking-tight text-sage md:text-3xl">
              {row.label === "Résumé" ? row.value : display(row.value)}
            </span>
            <span aria-hidden className="shrink-0 text-terracotta">
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
