"use client";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
    "NextJS",
    "React",
    "CSS",
    "Prisma",
    "PostgreSQL",
    "Jotai",
    "Redux",
    "UI/UX",
    "Technical SEO",
    "Docker",
    "Flask",
    "Django",
  ];

  const projectData: Project[] = [
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
      duration: "Feb'24 - Present",
      position: "Full Stack Developer",
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
    {
      id: 5,
      title: "TodoList",
      description:
        "I know TodoList is the 'hello world' of development but developed a personal project to learn Django and Redux, building a full-stack task management application. Integrated a Django REST API with PostgreSQL for persistent storage, and added user authentication with JWT. ",
      skills: [
        "Django",
        "Redux",
        "React",
        "PostgreSQL",
        "CSS",
        "UI/UX",
        "JWT Authentication",
      ],
      image: "/images/todolist.png",
      link: "https://atlabs-todo.vercel.app/",
      duration: "Apr'25",
      position: "Personal Project",
    },
  ];

  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const filteredProjects = activeSkill
    ? projectData.filter((project) => project.skills.includes(activeSkill))
    : projectData;
  return (
    <div className="w-full min-h-[100vh] bg-[#111111] md:px-20 px-6">
      <div className="p-6 gap-8 flex flex-col items-center">
        <div className="flex gap-4 flex-wrap">
          {allSkills.map((skill) => (
            <button
              key={skill}
              onClick={() =>
                setActiveSkill(skill === activeSkill ? null : skill)
              }
              className={`px-4 py-2 rounded-sm cursor-pointer text-sm md:text-base 2xl:text-xl  ${
                activeSkill === skill
                  ? "bg-[#00aa00] text-[#e9e9e9]"
                  : "bg-gradient-to-r from-[#222222] via-transparent to-[#222222] text-[#e9e9e9]"
              }`}>
              {skill}
            </button>
          ))}
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
