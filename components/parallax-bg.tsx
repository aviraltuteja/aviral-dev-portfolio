"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Atom } from "lucide-react";
import { useRef, useEffect, useState, JSX } from "react";
import { FaReact, FaDocker, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiFlask,
  SiLangchain,
} from "react-icons/si";
import { DiDatabase, DiPython, DiUbuntu } from "react-icons/di";

function LangGraphIcon({ size = 80 }: { size?: number }): React.ReactElement {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-label="LangGraph"
      fill="currentColor">
      <path d="M5 19H10A5 5 0 115 14ZM19 14A5 5 0 1114 19H19ZM10 5A5 5 0 105 10V5ZM19 5V10A5 5 0 1014 5Z" />
    </svg>
  );
}

function FastApiIcon({ size = 80 }: { size?: number }): React.ReactElement {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-label="FastAPI"
      fill="currentColor">
      <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896" />
    </svg>
  );
}

const allSkills = [
  { name: "React", logo: <FaReact size={80} /> },
  { name: "NextJS", logo: <SiNextdotjs size={80} /> },
  { name: "CSS", logo: <FaCss3Alt size={80} /> },
  { name: "Prisma", logo: <SiPrisma size={80} /> },
  { name: "PostgreSQL", logo: <SiPostgresql size={80} /> },
  { name: "Jotai", logo: <Atom size={80} /> },
  { name: "Redux", logo: <SiRedux size={80} /> },
  { name: "Docker", logo: <FaDocker size={80} /> },
  { name: "Flask", logo: <SiFlask size={80} /> },
  { name: "Langchain", logo: <SiLangchain size={80} /> },
  {
    name: "DSPy",
    logo: <div className="font-semibold text-2xl tracking-wide">DSPy</div>,
  },
  {
    name: "LangGraph",
    logo: <LangGraphIcon size={80} />,
  },
  {
    name: "FastAPI",
    logo: <FastApiIcon size={80} />,
  },
  { name: "Database", logo: <DiDatabase size={80} /> },
  { name: "Python", logo: <DiPython size={80} /> },
  { name: "Ubuntu", logo: <DiUbuntu size={80} /> },
];

export default function ParallaxBg() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // transforms for 8 columns
  const yTransforms = [
    useTransform(scrollY, [0, 2000], [0, 600]),
    useTransform(scrollY, [0, 2000], [0, 900]),
    useTransform(scrollY, [0, 2000], [0, 400]),
    useTransform(scrollY, [0, 2000], [0, 800]),
    useTransform(scrollY, [0, 2000], [0, 500]),
    useTransform(scrollY, [0, 2000], [0, 700]),
    useTransform(scrollY, [0, 2000], [0, 650]),
    useTransform(scrollY, [0, 2000], [0, 550]),
  ];

  // client-only pre-generated layout
  const [columns, setColumns] = useState<
    Array<Array<{ name: string; logo: JSX.Element } | null>>
  >([]);

  useEffect(() => {
    const generatedColumns = Array.from({ length: 8 }).map(() =>
      Array.from({ length: 20 }).map(() =>
        Math.random() > 0.5
          ? allSkills[Math.floor(Math.random() * allSkills.length)]
          : null
      )
    );
    setColumns(generatedColumns);
  }, []); // run once on mount

  if (columns.length === 0) return null; // prevent rendering until layout is ready

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 w-full h-full">
      <div className="absolute inset-0 grid md:grid-cols-8 grid-cols-3 gap-2 px-4">
        {yTransforms.map((y, colIndex) => (
          <motion.div
            key={colIndex}
            style={{ y, willChange: "transform" }}
            className="flex flex-col gap-14 items-center text-3xl text-[#333333] opacity-20">
            {columns[colIndex].map((skill, i) =>
              skill ? (
                <div key={i} title={skill.name}>
                  {skill.logo}
                </div>
              ) : (
                <div key={i} className="h-[80px] w-[80px]"></div>
              )
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
