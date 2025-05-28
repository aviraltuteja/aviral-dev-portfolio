"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface milestone {
  title: string;
  image: string | null;
  yearIndex: number;
  year: number;
  dateDisplay: string;
  description: string;
}

export interface Journey {
  title: string;
  milestones: milestone[];
}

export const journey: Journey = {
  title: "The Journey",
  milestones: [
    {
      title: "Full Stack Developer, Surety Seven",
      image: null,
      yearIndex: 0,
      year: 2024,
      dateDisplay: "Feb 2024 - Present",
      description:
        "Built full stack features, APIs, and internal tools. Revamped landing pages, integrated libraries, and boosted SEO impressions by 200%.",
    },
    {
      title: "Software Developer, Vruent",
      image: null,
      yearIndex: 1,
      year: 2024,
      dateDisplay: "Nov 2024 - Feb 2025",
      description:
        "Developed dynamic landing pages and migrated hosting to cut costs. Laid the foundation for an in-house CMS platform.",
    },
    {
      title: "Software Developer and Consultant, CGIAR",
      image: null,
      yearIndex: 1,
      year: 2025,
      dateDisplay: "Jan 2025 - Mar 2025",
      description:
        "Migrated legacy databases and deployed Flask apps with near-zero downtime. Delivered new data visualizations using Plotly.",
    },
    {
      title: "Software Engineer Intern, Kaksha.ai",
      image: null,
      yearIndex: 1,
      year: 2023,
      dateDisplay: "Sep 2023 - Jan 2024",
      description:
        "Worked on React-based projects, integrated third-party libraries, and collaborated on Python API integrations and Docker setups.",
    },
    {
      title: "Saanjh Matrimonial Services, Personal Project",
      image: null,
      yearIndex: 0,
      year: 2023,
      dateDisplay: "Jun 2023",
      description:
        "Handled both frontend and backend using EJS templates. Added secure token-based authentication and improved UX flow.",
    },
    {
      title: "Capture Films, College Project",
      image: null,
      yearIndex: 0,
      year: 2022,
      dateDisplay: "Aug 2022",
      description:
        "Created a React-based landing page with animations for a college project. Learned fundamentals of frontend dev.",
    },
    {
      title: "God in a Metro",
      image: null,
      yearIndex: 0,
      year: 2021,
      dateDisplay: "Apr 2021",
      description:
        "Released my Zero-Budget Web-series that I made with my college friends with limited resources and handled a team of 20+ people to achieve major targets like Background Score, Cinematic Shots, Voiceovers among other things.",
    },
    {
      title: "Song got featured in Rolling Stones India",
      image: null,
      yearIndex: 1,
      year: 2022,
      dateDisplay: "Aug 2022",
      description:
        "One of my songs got mentioned in Rolling Stones India's Instagram Page as part of the daily top 10s.",
    },
    {
      title: "Content Writing Intern, Wepreneurs",
      image: null,
      yearIndex: 6,
      year: 2020,
      dateDisplay: "Apr 2020 - Jun 2020",
      description:
        "Took a break from Programming and contributed articles with marketing content in a remote setup, refining writing, editing, and research skills.",
    },

    {
      title: "Joined School's IT Club",
      image: null,
      year: 2010,
      yearIndex: 0,
      dateDisplay: "2010",
      description:
        "Joined the school's IT club, where I wrote my first lines of code in HTML, CSS, and learned the basics of computing.",
    },
    {
      title: "3rd Place, SriTeq Senior Quiz - Sri Ram School",
      image: null,
      year: 2015,
      yearIndex: 1,
      dateDisplay: "2015",
      description:
        "Secured 3rd place in the inter-school quiz hosted by The Sriram School.",
    },
    {
      title: "3rd Place, TCS ITWiz Delhi Edition",
      image: null,
      year: 2016,
      yearIndex: 2,
      dateDisplay: "2016",
      description:
        "Won 3rd place in the Delhi edition of TCS ITWiz, India’s biggest inter-school IT quiz competition.",
    },
    {
      title: "Started Java at PepCoding",
      image: null,
      year: 2019,
      yearIndex: 3,
      dateDisplay: "2019",
      description:
        "Began learning Java, Data Structures, Algorithms and problem-solving fundamentals at PepCoding.",
    },
  ],
};

export default function JourneyTimeline(): React.ReactElement {
  const [containerHeight, setContainerHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight]
  );

  // Group milestones by year
  const milestonesByYear = journey.milestones.reduce((acc, milestone) => {
    if (!acc[milestone.year]) acc[milestone.year] = [];
    acc[milestone.year].push(milestone);
    return acc;
  }, {} as Record<number, milestone[]>);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto py-10 px-4"
      ref={containerRef}>
      {/* Journey Title */}
      <div className="text-4xl font-bold text-center mb-10 text-[#e9e9e9]">
        {journey.title}
      </div>

      {/* Central Line */}
      <div className="relative">
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-3 bg-white rounded-full md:visible invisible"
          style={{ height: lineHeight }}
        />

        {/* Milestones */}
        {Object.entries(milestonesByYear)
          .sort(([a], [b]) => Number(a) - Number(b))
          .map(([year, milestones]) => (
            <div key={year} className="mb-16">
              {/* <h3 className="text-2xl font-semibold text-center text-primary mb-6 text-[#e9e9e9]">
                {year}
              </h3> */}

              {milestones
                .sort((a, b) => a.yearIndex - b.yearIndex)
                .map((milestone, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col md:flex-row items-center md:items-start mb-12">
                    {/* Left Side: Text */}
                    <div className="md:w-1/2 md:pr-6 text-center md:text-right mb-4 md:mb-0">
                      <h4 className="text-xl font-bold mb-2 text-[#e9e9e9]">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-[#797979] mb-1">
                        {milestone.dateDisplay}
                      </p>
                      <p className="text-[#d9d9d9]">{milestone.description}</p>
                    </div>

                    {/* Connector Dot */}
                    <div className="relative z-10 mb-4 md:mb-0">
                      <div className="w-5 h-5 bg-primary rounded-full border-4 border-white shadow mx-auto md:mx-0" />
                    </div>

                    {/* Right Side: Image */}
                    <div className="md:w-1/2 md:pl-6">
                      {milestone.image ? (
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-auto rounded-xl shadow"
                        />
                      ) : (
                        <div className=""></div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
