"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { cycle } from "@/lib/portfolio-data";

/**
 * The about page's one experimental moment (REDESIGN.md §6): the three phases
 * stay on screen as a standing index and the active one inks in, rather than
 * the original crossfade where each word replaced the last. Keeping all three
 * visible is what makes it read as a cycle instead of a slideshow.
 */
export default function Cycle(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = v < 0.34 ? 0 : v < 0.67 ? 1 : 2;
    setActive((prev) => (prev === next ? prev : next));
  });

  const current = cycle[active];

  return (
    <section ref={ref} className="relative h-[300vh] bg-sage">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-sage text-paper">
        <div className="mx-auto grid w-full max-w-[92rem] items-center gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-12">
          {/* Standing index */}
          <ol className="md:col-span-7">
            {cycle.map((item, i) => {
              const isActive = active === i;
              return (
                <li key={item.phase} className="flex items-baseline gap-4 md:gap-6">
                  <span
                    className={`font-body text-xs tracking-[0.18em] transition-colors duration-500 ${
                      isActive ? "text-apricot" : "text-paper/25"
                    }`}>
                    0{i + 1}
                  </span>
                  <span
                    className={`font-display text-[2.75rem] leading-[1.06] tracking-tight transition-colors duration-500 md:text-[5.25rem] xl:text-[6.5rem] ${
                      isActive ? "text-paper" : "text-paper/20"
                    }`}>
                    {item.phase}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* The active phase, explained */}
          <div className="md:col-span-5">
            <div className="border-l-2 border-apricot pl-6 md:min-h-[15rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.phase}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}>
                  <p className="font-body text-xs uppercase tracking-[0.18em] text-apricot">
                    {current.caption}
                  </p>
                  <p className="mt-5 max-w-[46ch] font-body text-base leading-relaxed text-paper/80 md:text-lg">
                    {current.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="mt-10 flex items-center gap-3 border-t border-paper/20 pt-6 font-body text-xs uppercase tracking-[0.18em] text-paper/45">
              <span aria-hidden className="text-apricot">
                ↻
              </span>
              And then back to Learn
            </p>
          </div>
        </div>

        {/* Cycle progress */}
        <motion.div
          aria-hidden
          style={{ scaleX: scrollYProgress }}
          className="absolute inset-x-0 bottom-0 h-1 origin-left bg-apricot"
        />
      </div>
    </section>
  );
}
