"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { milestones, type Milestone } from "@/lib/portfolio-data";

/**
 * The journey page's experimental moment (REDESIGN.md §6): a single rule that
 * draws itself as you scroll. The fill is a scaleY transform on a full-height
 * element, which avoids the measure-and-resize-listener the original needed.
 */
export default function Timeline(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.85"],
  });

  // Group consecutive milestones by year so each year is announced once.
  const years = milestones.reduce<{ year: number; items: Milestone[] }[]>(
    (acc, item) => {
      const last = acc[acc.length - 1];
      if (last && last.year === item.year) {
        last.items.push(item);
      } else {
        acc.push({ year: item.year, items: [item] });
      }
      return acc;
    },
    []
  );

  return (
    <section className="bg-paper px-6 pb-16 md:px-12 md:pb-24">
      <div ref={ref} className="relative mx-auto max-w-[92rem]">
        {/* The rule: static track with a scroll-drawn fill */}
        <div
          aria-hidden
          className="absolute bottom-0 top-0 left-[7px] w-[2px] bg-sage/15 md:left-[11rem]">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="h-full w-full origin-top bg-sage"
          />
        </div>

        {years.map((group) => (
          <div key={group.year}>
            {/* Year marker */}
            <div className="relative py-10 md:py-14">
              <p className="font-display text-4xl leading-none tracking-tight text-sage md:absolute md:left-0 md:w-[9.5rem] md:pr-10 md:text-right md:text-5xl">
                {group.year}
              </p>
            </div>

            <ol>
              {group.items.map((item) => (
                <Entry key={item.title} item={item} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}

function Entry({ item }: { item: Milestone }): React.ReactElement {
  const dot =
    item.track === "Engineering"
      ? "border-sage bg-sage"
      : item.track === "Storytelling"
      ? "border-terracotta bg-terracotta"
      : "border-sage bg-paper";

  return (
    <li className="relative pb-14 pl-8 md:pb-20 md:pl-[13rem]">
      {/* Marker, inked in as it reaches the middle of the viewport */}
      <motion.span
        aria-hidden
        initial={{ scale: 0.35, opacity: 0.3 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute left-0 top-[0.45rem] size-4 rounded-full border-2 md:left-[10.5rem] ${dot}`}
      />

      <p className="font-body text-xs uppercase tracking-[0.18em] text-terracotta md:absolute md:left-0 md:top-[0.3rem] md:w-[9.5rem] md:pr-10 md:text-right md:text-sage/60">
        {item.date}
      </p>

      <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-sage md:mt-0 md:text-3xl">
        {item.title}
      </h3>

      <p className="mt-3 max-w-[68ch] font-body text-base leading-relaxed text-sage/80">
        {item.description}
      </p>

      {item.image && (
        <a
          href={item.image}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 block w-full max-w-md shadow-[8px_8px_0_0_var(--color-apricot)] transition-shadow hover:shadow-[12px_12px_0_0_var(--color-terracotta)]">
          <span className="duotone relative block aspect-[4/3] overflow-hidden rounded-sm border-2 border-sage">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 28rem"
              className="object-contain"
            />
          </span>
        </a>
      )}
    </li>
  );
}
