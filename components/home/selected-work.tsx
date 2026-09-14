"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiDocker,
  SiFlask,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { Palette, SearchCheck, Atom } from "lucide-react";
import { tools, work, type Work } from "@/lib/portfolio-data";

/** Icons inherit currentColor so they take Deep Sage or Warm Paper from context. */
const icons: Record<string, React.ReactElement> = {
  next: <SiNextdotjs size={26} />,
  react: <FaReact size={26} />,
  typescript: <SiTypescript size={26} />,
  css: <FaCss3Alt size={26} />,
  prisma: <SiPrisma size={26} />,
  postgres: <SiPostgresql size={26} />,
  jotai: <Atom size={26} />,
  redux: <SiRedux size={26} />,
  uiux: <Palette size={26} />,
  seo: <SearchCheck size={26} />,
  docker: <SiDocker size={26} />,
  flask: <SiFlask size={26} />,
};

export default function SelectedWork(): React.ReactElement {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [openId, setOpenId] = useState<number | null>(work[0].id);

  const filtered = activeTool
    ? work.filter((item) => item.tools.includes(activeTool))
    : work;

  return (
    <section id="work" className="bg-paper px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[92rem]">
        {/* Toolkit — doubles as the filter for the index below */}
        <p className="text-xs uppercase tracking-[0.18em] text-terracotta">
          The toolkit
        </p>
        <p className="mt-4 max-w-[68ch] font-body text-sm leading-relaxed text-sage/70">
          Pick a tool to filter the index below.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-px border border-sage/20 sm:grid-cols-4 md:grid-cols-6">
          {tools.map((tool) => {
            const isActive = activeTool === tool.name;
            return (
              <button
                key={tool.name}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTool(isActive ? null : tool.name)}
                className={`flex cursor-pointer flex-col items-center justify-center gap-3 border border-sage/20 px-3 py-6 transition-colors ${
                  isActive
                    ? "bg-sage text-paper"
                    : "bg-paper text-sage hover:bg-apricot/50"
                }`}>
                {icons[tool.key]}
                <span className="text-center font-body text-[0.625rem] uppercase tracking-[0.14em]">
                  {tool.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Index */}
        <div className="mt-20 flex items-end justify-between gap-6 border-b-2 border-sage pb-5">
          <h2 className="font-display text-4xl leading-none tracking-tight text-sage md:text-6xl">
            Selected work
          </h2>
          <p className="shrink-0 font-body text-xs uppercase tracking-[0.18em] text-sage/60">
            {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
            {activeTool && (
              <button
                type="button"
                onClick={() => setActiveTool(null)}
                className="ml-3 cursor-pointer text-terracotta underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta">
                Clear
              </button>
            )}
          </p>
        </div>

        <ol>
          <AnimatePresence initial={false}>
            {filtered.map((item, i) => (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="border-b border-sage/20">
                <IndexRow
                  item={item}
                  ordinal={String(i + 1).padStart(2, "0")}
                  isOpen={openId === item.id}
                  onToggle={() =>
                    setOpenId(openId === item.id ? null : item.id)
                  }
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      </div>
    </section>
  );
}

function IndexRow({
  item,
  ordinal,
  isOpen,
  onToggle,
}: {
  item: Work;
  ordinal: string;
  isOpen: boolean;
  onToggle: () => void;
}): React.ReactElement {
  return (
    <div className="group">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-baseline gap-4 px-2 py-6 text-left transition-colors group-hover:bg-apricot/40 md:gap-8 md:px-4">
        <span className="w-8 shrink-0 font-display text-sm text-terracotta md:text-base">
          {ordinal}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-display text-2xl leading-tight tracking-tight text-sage md:text-4xl">
            {item.title}
          </span>
          <span className="mt-2 block font-body text-sm leading-relaxed text-sage/70 md:hidden">
            {item.summary}
          </span>
        </span>

        <span className="hidden w-[14rem] shrink-0 font-body text-xs uppercase tracking-[0.18em] text-sage/70 lg:block">
          {item.role}
        </span>

        <span className="hidden w-[11rem] shrink-0 font-body text-xs uppercase tracking-[0.18em] text-sage/60 md:block">
          {item.period}
        </span>

        <span
          aria-hidden
          className="shrink-0 font-body text-lg text-terracotta">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className="grid gap-8 px-2 pb-10 md:grid-cols-12 md:px-4 md:pl-[3rem]">
              <p className="max-w-[68ch] font-body text-base leading-relaxed text-sage/85 md:col-span-7">
                {item.detail}
              </p>

              <div className="md:col-span-5">
                <ul className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <li
                      key={tool}
                      className="border border-sage/30 px-2.5 py-1 font-body text-[0.625rem] uppercase tracking-[0.14em] text-sage/70">
                      {tool}
                    </li>
                  ))}
                </ul>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-b-2 border-terracotta pb-1 font-body text-xs uppercase tracking-[0.18em] text-terracotta transition-colors hover:text-sage hover:border-sage">
                  Visit
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
