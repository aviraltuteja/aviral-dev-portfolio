"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const LINE_ONE = "Jack of all trades, master of none.";
const LINE_TWO = "Oftentimes better than master of one.";

/**
 * The one experimental moment on this page (REDESIGN.md §6): sage ink floods
 * the paper from the bottom as you scroll, and the type inverts exactly at the
 * ink line. Two identical copies of the text are stacked — the lower one in
 * paper ink, clipped to whatever the flood has already covered.
 */
export default function InkFlood(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const flood = useTransform(scrollYProgress, [0.12, 0.68], [0, 100], {
    clamp: true,
  });
  const floodHeight = useMotionTemplate`${flood}%`;

  // The flood rises from the bottom, so the inverted copy is revealed by
  // clipping away everything above the ink line.
  const inverted = useTransform(flood, (v) => 100 - v);
  const invertedClip = useMotionTemplate`inset(${inverted}% 0% 0% 0%)`;

  return (
    <section ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-paper">
        {/* The ink */}
        <motion.div
          aria-hidden
          style={{ height: floodHeight }}
          className="absolute inset-x-0 bottom-0 bg-sage"
        />

        <Copy progress={scrollYProgress} tone="sage" />

        <motion.div
          aria-hidden
          style={{ clipPath: invertedClip, WebkitClipPath: invertedClip }}
          className="absolute inset-0 flex items-center justify-center">
          <Copy progress={scrollYProgress} tone="paper" />
        </motion.div>
      </div>
    </section>
  );
}

function Copy({
  progress,
  tone,
}: {
  progress: MotionValue<number>;
  tone: "sage" | "paper";
}): React.ReactElement {
  const words = LINE_TWO.split(" ");
  const isSage = tone === "sage";

  return (
    <div
      className={`relative z-10 max-w-5xl px-6 text-center font-display tracking-tight md:px-12 ${
        isSage ? "text-sage" : "text-paper"
      }`}>
      <p
        className={`font-body text-xs uppercase tracking-[0.18em] ${
          isSage ? "text-terracotta" : "text-apricot"
        }`}>
        The working theory
      </p>

      <p className="mt-8 text-[2.25rem] leading-[1.05] md:text-6xl xl:text-7xl">
        {LINE_ONE}
      </p>

      <p className="mt-4 flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 text-[2.25rem] leading-[1.05] md:text-6xl xl:text-7xl">
        {words.map((word, i) => (
          <Word
            key={i}
            progress={progress}
            range={[0.2 + (i / words.length) * 0.5, 0.2 + ((i + 1) / words.length) * 0.5]}>
            {word}
          </Word>
        ))}
      </p>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}): React.ReactElement {
  const opacity = useTransform(progress, range, [0.18, 1], { clamp: true });

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}
