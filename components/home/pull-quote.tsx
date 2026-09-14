/**
 * The quote from the original landing page, reset as a proper pull quote:
 * apricot ground, serif voice, sans attribution.
 */
export default function PullQuote(): React.ReactElement {
  return (
    <section className="border-y-2 border-sage bg-apricot/50 px-6 py-20 md:px-12 md:py-28">
      <figure className="mx-auto max-w-[92rem]">
        <blockquote className="font-display text-3xl leading-[1.15] tracking-tight text-sage md:text-5xl xl:text-6xl">
          <span aria-hidden className="text-terracotta">
            “
          </span>
          The best way to complain about bad code is to write good code.
          <span aria-hidden className="text-terracotta">
            ”
          </span>
        </blockquote>
        <figcaption className="mt-8 font-body text-xs uppercase tracking-[0.18em] text-terracotta">
          Read it in a book
        </figcaption>
      </figure>
    </section>
  );
}
