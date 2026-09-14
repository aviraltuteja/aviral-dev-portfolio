import { fieldNotes } from "@/lib/portfolio-data";

/**
 * The six stories from the pre-redesign `explanation.tsx`, reset as framed
 * cards. The gradient-blur bar is gone; the only hover treatment is the hard
 * apricot offset (REDESIGN.md §6).
 */
export default function FieldNotes(): React.ReactElement {
  return (
    <section className="bg-paper px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[92rem]">
        <div className="flex items-end justify-between gap-6 border-b-2 border-sage pb-5">
          <h2 className="font-display text-4xl leading-none tracking-tight text-sage md:text-6xl">
            Field notes
          </h2>
          <p className="hidden shrink-0 max-w-[30ch] font-body text-xs uppercase tracking-[0.18em] text-sage/60 md:block">
            Six times the tool was new
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {fieldNotes.map((note, i) => (
            <li
              key={note.title}
              className="rounded-sm border-2 border-sage bg-paper p-6 transition-shadow duration-200 hover:shadow-[8px_8px_0_0_var(--color-apricot)] md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-display text-sm text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="border border-sage/30 px-2.5 py-1 font-body text-[0.625rem] uppercase tracking-[0.14em] text-sage/70">
                  {note.learned}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight text-sage md:text-[1.75rem]">
                {note.title}
              </h3>

              <p className="mt-4 max-w-[68ch] font-body text-base leading-relaxed text-sage/80">
                {note.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
