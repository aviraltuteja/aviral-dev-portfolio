"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { BackgroundBeams } from "../landing-page/bg";

export default function ScrollGraphic(): React.ReactElement {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Define individual progress ranges for each screen
  const learnOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const implementOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.75],
    [0, 1, 0]
  );
  const iterateOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <div className="h-[240vh] w-full  bg-[#111111]" ref={containerRef}>
      <div className="sticky top-0 left-0 h-screen">
        <BackgroundBeams />
        <motion.div
          className="h-screen absolute w-full flex items-center justify-center   md:text-8xl text-6xl text-[#e9e9e9] font-bold"
          style={{ opacity: learnOpacity }}>
          Learn
        </motion.div>

        <motion.div
          className="h-screen w-full absolute flex items-center justify-center  md:text-8xl text-6xl text-[#e9e9e9] font-bold"
          style={{ opacity: implementOpacity }}>
          Implement
        </motion.div>

        <motion.div
          className="h-screen absolute w-full flex items-center justify-center  md:text-8xl text-6xl text-[#00cc00] font-bold"
          style={{ opacity: iterateOpacity }}>
          Iterate
        </motion.div>
      </div>
    </div>
  );
}
