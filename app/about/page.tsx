import Experience from "@/components/about-page/experience";
import Explanation from "@/components/about-page/explanation";
import ScrollGraphic from "@/components/about-page/scroll-graphic";
import SecondaryBG from "@/components/secondary-bg";
import React from "react";

export default function AboutUsPage(): React.ReactElement {
  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      <div className="w-full h-[100vh] bg-[#e9e9e9] text-[#111111] flex items-center justify-center">
        <div className="absolute w-full h-auto hidden md:block">
          <SecondaryBG />
        </div>
        <div className="flex flex-col text-center">
          <div className="md:text-4xl text-2xl 2xl:text-5xl font-medium">
            My designation is Software Developer but
          </div>
          <div className="md:text-6xl 2xl:text-7xl text-3xl">
            I am essentially a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-500 to-[#00cc00] font-medium">
              Problem Solver
            </span>
            .
          </div>
        </div>
      </div>
      <ScrollGraphic />
      <Explanation />
      <Experience />
    </div>
  );
}
