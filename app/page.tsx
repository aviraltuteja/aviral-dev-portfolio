import MainScreen from "@/components/landing-page/main-screen";
import React, { ReactElement } from "react";
import QuoteBanner from "@/components/landing-page/quote-banner";
import SVGCover from "@/components/landing-page/svg-cover";
import JackOfAll from "@/components/landing-page/jack";
import Projects from "@/components/landing-page/projects";
import LearnMore from "@/components/landing-page/learn-more";
import SmoothScroll from "@/components/wrappers/lenis";

export default function Home(): ReactElement {
  return (
    <div className={`w-full  flex flex-col `}>
      <SmoothScroll wheelMx={0.2} lerp={0.5}>
        <MainScreen />
        <div>
          <SVGCover />
        </div>
        <JackOfAll />
        <Projects />
        <QuoteBanner />
        <LearnMore />
      </SmoothScroll>
    </div>
  );
}
