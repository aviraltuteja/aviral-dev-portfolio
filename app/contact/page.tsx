import React from "react";
import Link from "next/link";
import Channels from "@/components/contact/channels";
import { profile } from "@/lib/portfolio-data";

/**
 * Redesigned contact page (REDESIGN.md §6): deliberately the calmest page on
 * the site. No experimental moment, no smooth-scroll wrapper, no motion —
 * just the channels, set generously.
 *
 * The pre-redesign composition is preserved at /contact/v1.
 */
export default function ContactPage(): React.ReactElement {
  return (
    <main className="theme-paper flex min-h-[calc(100vh-4rem)] w-full flex-col bg-paper font-body text-sage md:min-h-[calc(100vh-5rem)]">
      <div className="mx-auto w-full max-w-[92rem] flex-1 px-6 pb-16 pt-12 md:px-12 md:pb-20 md:pt-20">
        <div className="flex items-center justify-between gap-4 border-y border-sage/20 py-3 text-[0.625rem] uppercase tracking-[0.18em] text-sage/70 md:text-xs">
          <span>Contact</span>
          <span className="hidden md:inline">{profile.location}</span>
        </div>

        <div className="grid gap-14 pt-16 md:grid-cols-12 md:pt-24">
          <div className="md:col-span-5">
            {profile.available && (
              <p className="flex items-center gap-2.5 font-body text-xs uppercase tracking-[0.18em] text-sage/70">
                <span className="size-2 rounded-full bg-success" />
                Available for hire
              </p>
            )}

            <h1 className="mt-6 font-display text-[2.75rem] leading-[0.98] tracking-tight text-sage md:text-[4rem]">
              Open to
              <br />
              software roles.
            </h1>

            <p className="mt-8 max-w-[46ch] font-body text-base leading-relaxed text-sage/85">
              Email is the fastest way to reach me. I&rsquo;m most useful on a
              small team where I can own a feature end to end, so if that sounds
              like the role, say what you&rsquo;re building and I&rsquo;ll reply
              properly.
            </p>
          </div>

          <div className="md:col-span-7">
            <Channels />
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[92rem] flex-wrap items-center justify-between gap-4 border-t border-sage/20 px-6 py-6 font-body text-[0.625rem] uppercase tracking-[0.18em] text-sage/50 md:px-12 md:text-xs">
        <span>
          {profile.name} — {profile.location}
        </span>
        <Link
          href="/contact/v1"
          className="transition-colors hover:text-terracotta">
          Previous edition ↗
        </Link>
      </div>
    </main>
  );
}
