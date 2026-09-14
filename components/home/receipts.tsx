import { receipts } from "@/lib/portfolio-data";

/**
 * Inverted block that picks up exactly where the ink flood lands, so the sage
 * surface reads as one continuous pour rather than two adjacent sections.
 */
export default function Receipts(): React.ReactElement {
  return (
    <section className="bg-sage px-6 py-16 text-paper md:px-12 md:py-24">
      <div className="mx-auto max-w-[92rem]">
        <p className="text-xs uppercase tracking-[0.18em] text-apricot">
          Receipts
        </p>

        <dl className="mt-10 grid gap-px border-t border-paper/20 md:mt-14 md:grid-cols-4">
          {receipts.map((item) => (
            <div
              key={item.label}
              className="border-b border-paper/20 py-8 md:border-b-0 md:border-r md:pr-8 md:last:border-r-0">
              <dd className="font-display text-5xl leading-none tracking-tight text-paper md:text-6xl">
                {item.figure}
              </dd>
              <dt className="mt-4 font-body text-xs uppercase tracking-[0.18em] text-apricot">
                {item.label}
              </dt>
              <p className="mt-3 max-w-[34ch] font-body text-sm leading-relaxed text-paper/70">
                {item.note}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
