"use client";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiDocker,
  SiFlask,
  SiRedux,
} from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { Atom } from "lucide-react";

function LangGraphIcon({ size = 40 }: { size?: number }): React.ReactElement {
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

function FastApiIcon({ size = 40 }: { size?: number }): React.ReactElement {
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

export default function Projects(): React.ReactElement {
  type Project = {
    id: number;
    title: string;
    description: string;
    skills: string[];
    image: string;
    link: string;
    duration: string;
    position: string;
  };

  const allSkills = [
    { name: "NextJS", logo: <SiNextdotjs size={40} /> },
    { name: "React", logo: <FaReact size={40} /> },
    { name: "CSS", logo: <FaCss3Alt size={40} /> },
    { name: "Prisma", logo: <SiPrisma size={40} /> },
    { name: "PostgreSQL", logo: <SiPostgresql size={40} /> },
    { name: "Jotai", logo: <Atom size={40} /> },
    { name: "Redux", logo: <SiRedux size={40} /> },
    { name: "Docker", logo: <SiDocker size={40} /> },
    { name: "Flask", logo: <SiFlask size={40} /> },
    {
      name: "DSPy",
      logo: <div className="font-semibold text-xl tracking-wide">DSPy</div>,
    },
    {
      name: "LangGraph",
      logo: <LangGraphIcon size={40} />,
    },
    {
      name: "FastAPI",
      logo: <FastApiIcon size={40} />,
    },
  ];

  const experienceData: Project[] = [
    {
      id: 7,
      title: "Unravel.tech",
      description:
        "Designed and shipped multi-agent AI workflows using DSPy, ReAct orchestration, and evaluation-driven optimization. Built RAG and semantic-search pipelines (Pinecone), delivered streaming inline Chart.js widgets, and supported platform migrations and observability improvements across Snowflake, WebSockets, and Langfuse instrumentation.",
      skills: [
        "React",
        "NextJS",
        "PostgreSQL",
        "API Development",
        "DSPy",
        "LangGraph",
        "FastAPI",
        "UI/UX",
        "Docker",
      ],
      image: "/images/unravel-tech.png",
      link: "https://unravel.tech",
      duration: "Aug'25 - Present",
      position: "SDE2",
    },
    {
      id: 1,
      title: "Surety Seven",
      description:
        "Implemented full stack features including Document Generation, Internal Chats, and Statistical Displays. Designed UI components, strategized UX flows, and integrated NPM libraries like Pusher, DocX, Framer Motion, Tanstack, and Recharts. Redesigned the landing page with a visually pleasing theme and implemented Technical SEO, increasing monthly impressions by over 200%.",
      skills: [
        "React",
        "NextJS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "API Development",
        "Jotai",
        "CSS",
        "Technical SEO",
        "Docker",
        "UI/UX",
      ],
      image: "/images/surety-seven.png", // Placeholder image path
      link: "https://suretyseven.com", // Placeholder link
      duration: "Feb'24 - Aug'25",
      position: "Software Engineer",
    },
    {
      id: 2,
      title: "CGIAR",
      description:
        "Migrated data from ElephantDB to Render, re-hosted Flask app on Render and GoDaddy with minimal downtime, and developed a new data visualization feature using Plotly in Flask, optimizing performance and reducing costs.",
      skills: [
        "Flask",
        "Plotly",
        "Render",
        "GoDaddy",
        "PostgreSQL",
        "API Development",
        "CSS",
      ],
      image: "/images/cgiar-project.png",
      link: "https://mira-wasca.com",
      duration: "Jan'25 - Mar'25",
      position: "Software Engineer and Consultant",
    },
    {
      id: 3,
      title: "Vruent",
      description:
        "Developed high-performance landing pages using Next.js and Tailwind CSS, optimized website infrastructure by migrating to efficient hosting platforms, and architected the foundational structure for an in-house CMS.",
      skills: ["NextJS", "CSS", "UI/UX", "Technical SEO", "TypeScript"],
      image: "/images/vruent-landing.png",
      link: "https://vruent.com",
      duration: "Nov'24 - Feb'25",
      position: "Software Developer",
    },
    {
      id: 4,
      title: "Kaksha.ai",
      description:
        "Contributed to a live project by implementing advanced React features, integrating libraries like ReactMUI, CodeMirror, ReactPdf, and ReactYoutube, and collaborating on Python API integration with Docker and Git operations.",
      skills: ["React", "Docker", "CSS", "UI/UX", "Redux"],
      image: "/images/kaksha-ai.png",
      link: "https://kaksha.ai",
      duration: "Sep'23 - Jan'24",
      position: "Software Engineer Intern",
    },
  ];

  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const filteredProjects = activeSkill
    ? experienceData.filter((project) => project.skills.includes(activeSkill))
    : experienceData;
  return (
    <div className="w-full min-h-[100vh] bg-[#111111] md:px-20 px-6 py-20">
      <div className="p-6 gap-8 flex flex-col items-center">
        <div className="grid md:grid-cols-6 grid-cols-3 md:gap-10 gap-4 ">
          {allSkills.map(({ name, logo }) => (
            <button
              key={name}
              title={name}
              onClick={() => setActiveSkill(name === activeSkill ? null : name)}
              className={`flex items-center gap-2 px-4 py-4 rounded-sm  cursor-pointer text-sm md:text-base 2xl:text-xl ${
                activeSkill === name
                  ? "bg-[#00aa00] text-[#e9e9e9]"
                  : "bg-gradient-to-r from-[#222222] via-transparent to-[#222222] text-[#e9e9e9]"
              }`}>
              {logo}
            </button>
          ))}
        </div>
        <div className="2xl:text-7xl md:text-6xl text-xl py-8 text-[#e9e9e9]">
          Experience
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                position={project.position}
                title={project.title}
                description={project.description}
                duration={project.duration}
                link={project.link}
                skills={project.skills}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

type ProjectCardProps = {
  position: string;
  title: string;
  description: string;
  duration: string;
  link: string;
  skills?: string[];
};

export function ProjectCard({
  position,
  title,
  description,
  duration,
  link,
}: ProjectCardProps): React.ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ opacity: 0, y: 20 }}
      className="relative border rounded-2xl p-4 2xl:p-8 shadow-md bg-[#e9e9e9] "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="absolute inset-x-0 bottom-0 h-1.5 w-full bg-gradient-to-r z-10 from-blue-500 via-[#00cc00] to-blue-500 blur-sm "></div>

      <div className="w-full flex justify-between">
        <div className="md:text-xl 2xl:text-2xl font-semibold mb-2 text-[#222222]">
          {position}, {title}
        </div>
        <div className="md:text-sm 2xl:text-base text-[#444444]">
          {duration}
        </div>
      </div>
      <p className="text-[#222222] mb-4 md:text-base 2xl:text-lg">
        {description}
      </p>

      {/* Hover Icon */}
      <AnimatePresence>
        {isHovered && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 bg-[#00aa00] text-white rounded-full hover:bg-[#008800] transition-colors">
            <FontAwesomeIcon icon={faExternalLink} className="text-lg" />
          </motion.a>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
