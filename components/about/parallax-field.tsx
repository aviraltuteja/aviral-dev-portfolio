"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Atom } from "lucide-react";
import { FaReact, FaDocker, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiDjango,
  SiFlask,
  SiTypescript,
} from "react-icons/si";
import { DiDatabase, DiPython, DiUbuntu } from "react-icons/di";

/** Monochrome only — icons inherit currentColor from the field (REDESIGN.md §5). */
const icons = [
  <FaReact key="react" />,
  <SiNextdotjs key="next" />,
  <FaCss3Alt key="css" />,
  <SiPrisma key="prisma" />,
  <SiPostgresql key="postgres" />,
  <Atom key="jotai" />,
  <SiRedux key="redux" />,
  <FaDocker key="docker" />,
  <SiDjango key="django" />,
  <SiFlask key="flask" />,
  <SiTypescript key="ts" />,
  <DiDatabase key="db" />,
  <DiPython key="python" />,
  <DiUbuntu key="ubuntu" />,
];

const COLUMNS = 8;
const ROWS = 14;

/**
 * The parallax icon field from the pre-redesign about page, retinted into the
 * palette. The scatter is derived from the indices rather than Math.random, so
 * it renders on the server and never pops in after hydration.
 */
export default function ParallaxField(): React.ReactElement {
  const { scrollY } = useScroll();

  const speeds = [
    useTransform(scrollY, [0, 1600], [0, 420]),
    useTransform(scrollY, [0, 1600], [0, 660]),
    useTransform(scrollY, [0, 1600], [0, 280]),
    useTransform(scrollY, [0, 1600], [0, 580]),
    useTransform(scrollY, [0, 1600], [0, 360]),
    useTransform(scrollY, [0, 1600], [0, 520]),
    useTransform(scrollY, [0, 1600], [0, 470]),
    useTransform(scrollY, [0, 1600], [0, 400]),
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-sage opacity-[0.07]">
      <div className="grid h-full grid-cols-3 gap-2 px-4 md:grid-cols-8">
        {speeds.slice(0, COLUMNS).map((y, col) => (
          <motion.div
            key={col}
            style={{ y }}
            className={`flex flex-col items-center gap-12 text-5xl ${
              col > 2 ? "hidden md:flex" : ""
            }`}>
            {Array.from({ length: ROWS }).map((_, row) => {
              // Deterministic scatter: roughly a third of the cells stay empty.
              const isEmpty = (col * 3 + row * 7) % 5 === 0;
              return (
                <div key={row} className="size-12">
                  {isEmpty ? null : icons[(col * 5 + row * 3) % icons.length]}
                </div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
