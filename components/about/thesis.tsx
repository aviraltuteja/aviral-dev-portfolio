import { aboutThesis } from "@/lib/portfolio-data";

/**
 * Closing statement, carried over from `experience.tsx` — previously an
 * inverted centred paragraph, now set as a proper statement with a label.
 */
export default function Thesis(): React.ReactElement {
  return (
    <section className="border-y-2 border-sage bg-apricot/50 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[92rem] gap-8 md:grid-cols-12">
        <p className="font-body text-xs uppercase tracking-[0.18em] text-terracotta md:col-span-3">
          Why startups
        </p>
        <p className="max-w-[46ch] font-display text-2xl leading-[1.28] tracking-tight text-sage md:col-span-9 md:text-4xl md:leading-[1.22]">
          {aboutThesis}
        </p>
      </div>
    </section>
  );
}
