import ParallaxField from "@/components/about/parallax-field";
import { cycle } from "@/lib/portfolio-data";

/**
 * Restates the original "designation vs. what the job actually is" line as an
 * editorial opener, over the retinted parallax icon field.
 */
export default function AboutHero(): React.ReactElement {
  return (
    <section className="paper-grain relative overflow-hidden bg-paper px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-20">
      <ParallaxField />

      <div className="relative z-10 mx-auto max-w-[92rem]">
        <div className="flex items-center justify-between gap-4 border-y border-sage/20 py-3 text-[0.625rem] uppercase tracking-[0.18em] text-sage/70 md:text-xs">
          <span>About</span>
          <span className="hidden md:inline">How the work gets done</span>
        </div>

        <div className="max-w-[52rem] pt-16 md:pt-24">
          <p className="font-body text-lg text-sage/70 md:text-xl">
            My designation says Software Developer.
          </p>

          <h1 className="mt-4 font-display text-[3rem] leading-[0.95] tracking-tight text-sage md:text-[5.5rem] xl:text-[6.5rem]">
            Essentially,
            <br />
            a problem solver.
          </h1>

          <p className="mt-10 max-w-[68ch] font-body text-base leading-relaxed text-sage/85 md:text-lg">
            A title describes a stack; a problem describes the work. Most of
            what I&rsquo;ve shipped started with a tool I hadn&rsquo;t used yet
            and a team that needed the thing working by Friday — so the method
            matters more to me than the toolkit.
          </p>

          <ul className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-sage/20 pt-6 font-body text-xs uppercase tracking-[0.18em] text-terracotta">
            {cycle.map((item, i) => (
              <li key={item.phase} className="flex items-center gap-4">
                {i > 0 && <span className="text-sage/30">/</span>}
                {item.phase}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
