import { milestones } from "@/lib/portfolio-data";

const legend: { track: string; description: string }[] = [
  { track: "Engineering", description: "Shipping software" },
  { track: "Storytelling", description: "Film, writing, music" },
  { track: "Learning", description: "Clubs, quizzes, coursework" },
];

export default function JourneyHero(): React.ReactElement {
  const first = milestones[0].year;
  const last = milestones[milestones.length - 1].year;

  return (
    <section className="bg-paper px-6 pb-16 pt-12 md:px-12 md:pb-20 md:pt-20">
      <div className="mx-auto max-w-[92rem]">
        <div className="flex items-center justify-between gap-4 border-y border-sage/20 py-3 text-[0.625rem] uppercase tracking-[0.18em] text-sage/70 md:text-xs">
          <span>Journey</span>
          <span className="hidden md:inline">
            {first} — {last}
          </span>
        </div>

        <div className="grid gap-12 pt-16 md:grid-cols-12 md:pt-24">
          <div className="md:col-span-7">
            <h1 className="font-display text-[3rem] leading-[0.95] tracking-tight text-sage md:text-[5.5rem] xl:text-[6.5rem]">
              The long
              <br />
              way round.
            </h1>

            <p className="mt-10 max-w-[68ch] font-body text-base leading-relaxed text-sage/85 md:text-lg">
              Two lines run through this list. One is code, starting with an
              HTML tag in a school IT club. The other is film and writing, which
              paid off in festivals before the code paid off in salary. They
              overlap for about four years, and I don&rsquo;t think the engineer
              would be much good without the other one.
            </p>
          </div>

          {/* Legend for the timeline markers */}
          <dl className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="font-body text-xs uppercase tracking-[0.18em] text-terracotta">
              Reading the rule
            </p>
            <div className="mt-5 space-y-3 border-t border-sage/20 pt-5">
              {legend.map((item) => (
                <div key={item.track} className="flex items-baseline gap-3">
                  <span
                    aria-hidden
                    className={`mt-1.5 size-3 shrink-0 rounded-full border-2 ${
                      item.track === "Engineering"
                        ? "border-sage bg-sage"
                        : item.track === "Storytelling"
                        ? "border-terracotta bg-terracotta"
                        : "border-sage bg-paper"
                    }`}
                  />
                  <dt className="font-body text-xs uppercase tracking-[0.14em] text-sage">
                    {item.track}
                  </dt>
                  <dd className="font-body text-xs text-sage/55">
                    {item.description}
                  </dd>
                </div>
              ))}
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
