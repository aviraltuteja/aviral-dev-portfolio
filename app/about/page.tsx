import Experience from "@/components/about-page/experience";
import Explanation from "@/components/about-page/explanation";
import ScrollGraphic from "@/components/about-page/scroll-graphic";
import ParallaxBg from "@/components/parallax-bg";
import SmoothScroll from "@/components/wrappers/lenis";
import React from "react";

export default function AboutUsPage(): React.ReactElement {
  return (
    <SmoothScroll>
      <div className="w-full min-h-[100vh] flex flex-col relative items-center justify-center">
        <div className="w-full h-[200vh] bg-[#e9e9e9] text-[#111111] flex flex-col items-center relative">
          <div className="h-[100vh] sticky top-0 overflow-hidden items-center justify-center flex flex-col w-full">
            <div className="flex flex-col text-center h-full items-center justify-center z-50">
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
          <ParallaxBg />
        </div>
        <ScrollGraphic />
        <Explanation />
        <Experience />
      </div>
    </SmoothScroll>
  );
}
