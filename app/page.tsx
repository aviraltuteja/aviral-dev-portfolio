import { ReactElement } from "react";
import SmoothScroll from "@/components/wrappers/lenis";
import Hero from "@/components/home/hero";
import Ticker from "@/components/home/ticker";
import InkFlood from "@/components/home/ink-flood";
import Receipts from "@/components/home/receipts";
import SelectedWork from "@/components/home/selected-work";
import PullQuote from "@/components/home/pull-quote";
import Footer from "@/components/redesign/footer";

/**
 * Redesigned home (REDESIGN.md). Reads paper → ink → paper: the hero and work
 * index sit on Warm Paper, and the sage ink flood pours straight into the
 * inverted receipts block so the two read as one surface.
 *
 * The pre-redesign composition is preserved at /v1.
 */
export default function Home(): ReactElement {
  return (
    <main className="theme-paper w-full bg-paper font-body text-sage">
      <SmoothScroll lerp={0.12} wheelMx={1}>
        <Hero />
        <Ticker />
        <InkFlood />
        <Receipts />
        <SelectedWork />
        <PullQuote />
        <Footer previousHref="/v1" />
      </SmoothScroll>
    </main>
  );
}
