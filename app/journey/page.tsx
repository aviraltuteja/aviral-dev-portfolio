import React from "react";
import SmoothScroll from "@/components/wrappers/lenis";
import JourneyHero from "@/components/journey/hero";
import Timeline from "@/components/journey/timeline";
import Footer from "@/components/redesign/footer";

/**
 * Redesigned journey page (REDESIGN.md). The scroll-drawn timeline rule is this
 * page's single experimental moment.
 *
 * The pre-redesign composition is preserved at /journey/v1.
 */
export default function Journey(): React.ReactElement {
  return (
    <main className="theme-paper w-full bg-paper font-body text-sage">
      <SmoothScroll lerp={0.12} wheelMx={1}>
        <JourneyHero />
        <Timeline />
        <Footer previousHref="/journey/v1" />
      </SmoothScroll>
    </main>
  );
}
