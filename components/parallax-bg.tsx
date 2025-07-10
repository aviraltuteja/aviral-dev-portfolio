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
  SiDjango,
  SiFlask,
  SiLangchain,
} from "react-icons/si";
import { DiDatabase, DiPython, DiUbuntu } from "react-icons/di";

const allSkills = [
  { name: "React", logo: <FaReact size={80} /> },
  { name: "NextJS", logo: <SiNextdotjs size={80} /> },
  { name: "CSS", logo: <FaCss3Alt size={80} /> },
  { name: "Prisma", logo: <SiPrisma size={80} /> },
  { name: "PostgreSQL", logo: <SiPostgresql size={80} /> },
  { name: "Jotai", logo: <Atom size={80} /> },
  { name: "Redux", logo: <SiRedux size={80} /> },
  { name: "Docker", logo: <FaDocker size={80} /> },
  { name: "Django", logo: <SiDjango size={80} /> },
  { name: "Flask", logo: <SiFlask size={80} /> },
  { name: "Langchain", logo: <SiLangchain size={80} /> },
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
            style={{ y }}
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
