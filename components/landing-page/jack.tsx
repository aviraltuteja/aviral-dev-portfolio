"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function JackOfAll(): React.ReactElement {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "start 0.4"],
  });
  const text = "Oftentimes better than master of one";
  const words = text.split(" ");

  return (
    <div
      className="w-full h-[40vh] bg-[#111111] text-6xl text-[#e3e3e3] flex justify-center items-start text-center leading-16 py-10"
      ref={targetRef}>
      <div className="flex flex-col gap-2">
        {" "}
        <div> Jack of all trades master of none</div>
        <p className="text-transparent  z-20 md:px-20 px-10    flex flex-wrap gap-[0.35rem] md:gap-2 2xl:gap-4">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word + " "}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0.4, 1]);
  const color = useTransform(progress, range, ["#111111", "#e9e9e9"]);

  return (
    <motion.span
      style={{
        opacity,
        color,
      }}
      className="inline-block ">
      {children}
    </motion.span>
  );
};
