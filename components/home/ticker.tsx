const items = [
  "TypeScript",
  "Next.js",
  "React",
  "Prisma",
  "PostgreSQL",
  "Docker",
  "Flask",
  "Django",
  "Tailwind",
  "Framer Motion",
  "Technical SEO",
  "Plotly",
];

/**
 * Thin inverted rule between the hero and the ink flood. Two identical runs
 * translated by -50% give a seamless loop; motion is dropped entirely under
 * `prefers-reduced-motion` (see globals.css).
 */
export default function Ticker(): React.ReactElement {
  return (
    <div className="overflow-hidden border-y-2 border-sage bg-sage py-3.5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((run) => (
          <ul
            key={run}
            aria-hidden={run === 1}
            className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="flex shrink-0 items-center gap-8 px-8 font-body text-xs uppercase tracking-[0.18em] text-paper/80">
                {item}
                <span className="text-apricot">✳</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
