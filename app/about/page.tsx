import React from "react";
import SmoothScroll from "@/components/wrappers/lenis";
import AboutHero from "@/components/about/hero";
import Cycle from "@/components/about/cycle";
import FieldNotes from "@/components/about/field-notes";
import Thesis from "@/components/about/thesis";
import Footer from "@/components/redesign/footer";

/**
 * Redesigned about page (REDESIGN.md). The sticky Learn / Implement / Iterate
 * cycle is this page's single experimental moment; everything around it stays
 * quiet and legible.
 *
 * The pre-redesign composition is preserved at /about/v1.
 */
export default function AboutPage(): React.ReactElement {
  return (
    <main className="theme-paper w-full bg-paper font-body text-sage">
      <SmoothScroll lerp={0.12} wheelMx={1}>
        <AboutHero />
        <Cycle />
        <FieldNotes />
        <Thesis />
        <Footer previousHref="/about/v1" />
      </SmoothScroll>
    </main>
  );
}
