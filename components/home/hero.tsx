import Image from "next/image";
import Link from "next/link";
import myphoto from "../../public/Asset 10.webp";
import { colophon, profile } from "@/lib/portfolio-data";

/**
 * Editorial masthead-style hero: metadata rules top and bottom, the name set
 * as the page title, and the portrait framed and duotoned into the palette.
 */
export default function Hero(): React.ReactElement {
  return (
    <section className="paper-grain relative overflow-hidden bg-paper px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-[92rem]">
        {/* Dateline rule */}
        <div className="flex items-center justify-between gap-4 border-y border-sage/20 py-3 text-[0.625rem] uppercase tracking-[0.18em] text-sage/70 md:text-xs">
          <span>
            {profile.role} — {profile.location}
          </span>
          <span className="hidden md:inline">Portfolio, Vol. II</span>
        </div>

        <div className="grid gap-12 pt-10 md:grid-cols-12 md:gap-10 md:pt-16">
          {/* Voice */}
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.18em] text-terracotta">
              Full stack developer
            </p>

            <h1 className="mt-5 font-display text-[3.25rem] leading-[0.92] tracking-tight text-sage md:text-[6rem] xl:text-[7.5rem]">
              Aviral
              <br />
              Tuteja
            </h1>

            <p className="mt-8 max-w-[68ch] font-body text-base leading-relaxed text-sage/85 md:text-lg">
              {profile.lede}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#work"
                className="border-2 border-sage bg-sage px-6 py-3 font-body text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:bg-sage/90">
                Selected work
              </Link>
              <Link
                href="/contact"
                className="border-2 border-sage px-6 py-3 font-body text-xs uppercase tracking-[0.18em] text-sage transition-colors hover:bg-apricot">
                Get in touch
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="md:col-span-5 md:justify-self-end">
            <div className="relative w-48 shadow-[10px_10px_0_0_var(--color-apricot)] md:w-full md:max-w-[22rem]">
              <div className="duotone relative aspect-square overflow-hidden rounded-full border-4 border-sage">
                <Image
                  src={myphoto}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 12rem, 22rem"
                  className="object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Colophon */}
        <dl className="mt-16 grid gap-px border-t-2 border-sage pt-px md:mt-24 md:grid-cols-4">
          {colophon.map((item) => (
            <div
              key={item.label}
              className="border-b border-sage/20 py-5 md:border-b-0 md:border-r md:pr-6 md:last:border-r-0">
              <dt className="text-xs uppercase tracking-[0.18em] text-terracotta">
                {item.label}
              </dt>
              <dd className="mt-2 font-body text-sm leading-relaxed text-sage/85">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
