# Portfolio Redesign — Design Brief & Change Log

This document is the single source of truth for the redesign of `aviral-dev-portfolio`. It has two halves:

1. **The Brief** — the design schema every change must conform to (sections 1–7).
2. **The Log** — an append-only record of what changed, what was added, and what became dead code (section 8 onward). The log is maintained by the `redesign-log` skill.

---

## 1. Why the redesign

The portfolio currently has **no design schema**. Every screen was designed on its own terms, which shows in the best and the worst way:

- **The good:** the decisions were human decisions. Nothing here is the generic, AI-suggested, everyone-else's-portfolio look. The scroll-driven SVG cover, the word-by-word reveal on the tagline, the parallax icon field — those came from taste, not a template.
- **The problem:** without a shared schema, that creativity doesn't add up to a coherent whole. Colors are invented per component (`#e9e9e9`, `#111111`, `#00cc00`, `#00aa00`, `#5ED5AF`, `#305A7F`, blue→green gradients), there is one font doing every job, and the experimental treatments land in places that should be quiet and legible (body copy, cards, timeline) rather than being reserved for moments that earn them.

**The goal:** keep the personality, impose a schema. Be experimental in one or two deliberate places per page; be boring, consistent, and readable everywhere else.

### Specific problems inherited from the current build

| Problem | Where |
| --- | --- |
| Palette invented per component, ~20 distinct hardcoded hex values | Nearly every file in `components/` |
| Design tokens declared but unused (`--background`, `--foreground`), plus Geist font vars that are never loaded | `app/globals.css` |
| `globals.css` sets Arial while `app/layout.tsx` sets Jost — two sources of truth for type | `app/globals.css`, `app/layout.tsx` |
| Single font (Jost) for headings, banners, and body — no typographic hierarchy | Global |
| Blue→green gradient text used as the default "emphasis" everywhere, diluting it | Home, About, Journey, `projects.tsx`, `explanation.tsx` |
| Images have no consistent treatment — some `rounded-xl shadow`, some bare | `journey-page/index.tsx`, `main-screen.tsx` |
| Dark-mode media query exists but components hardcode colors, so it does nothing | `app/globals.css` vs all components |
| Dead / orphaned code: `components/landing-page/skills-and-projects.tsx` (empty), `components/secondary-bg.tsx` (unimported), `public/codebg.webp` (only in comments), `bg-primary` class (undefined), missing `public/images/*` referenced by `projects.tsx`, `react-hot-toast` used with no `<Toaster />` mounted | See section 8 log |

---

## 2. The theme in one line

**Pastel duotone, classy print-adjacent.** A warm paper base, two dominant inks (deep sage and dusty terracotta) doing the duotone work, apricot as the only highlight, serif for anything that speaks and sans-serif for anything that explains. Think a well-set editorial page, not a dashboard.

---

## 3. Color palette

| Role | Name | HEX | Interpretation / where it goes |
| --- | --- | --- | --- |
| **Base / Off-white** | Warm Paper | `#F6F1E7` | The default background of the entire site. Every page starts here. Pure white is never used as a surface. |
| **Shadows** | Deep Sage | `#294A43` | Primary ink: headings, body text, image borders, rules, icons. Also the fill for inverted/dark sections. The darkest value in the system — no black. |
| **Midtones** | Dusty Terracotta | `#B87562` | The second duotone ink and the accent: links, active states, underlines, the warm half of duotone images, secondary borders, small-caps labels. |
| **Highlights** | Soft Apricot | `#E8C7A8` | Highlights only: card fills that need to lift off the base, hover washes, marker-style text highlights, the light half of duotone images, offset shadows behind bordered images. |
| **Error** | Muted Brick | `#B84C4C` | Form validation, failure toasts, destructive states. Never decorative. |
| **Success** | Sage Green | `#5E8C72` | Confirmations ("copied to clipboard"), success toasts, "available for hire" status dot. Never decorative. |

### Rules

- **Duotone means two inks per composition.** Deep Sage + Dusty Terracotta on Warm Paper. Soft Apricot is the third value, used sparingly as a lift — not as a co-equal color.
- **No gradients as identity.** The existing blue→green gradient text is retired. If a gradient is ever needed it stays within the palette (Terracotta → Apricot) and appears at most once per page.
- **Contrast direction:** Deep Sage text on Warm Paper or Soft Apricot. Warm Paper text on Deep Sage. Terracotta is safe on Warm Paper for large text and UI, but not for long body copy.
- **Inverted sections** (the "dark" blocks like `experience.tsx`, the CTA bar, the timeline) use Deep Sage as the surface with Warm Paper text and Soft Apricot accents — never `#111111`.
- **Semantic colors stay semantic.** Muted Brick and Sage Green carry meaning; they never get used because they look nice in a spot.

### Tokens

All colors are declared once in `app/globals.css` under Tailwind v4's `@theme` and consumed as utilities. No component may introduce a new hex value.

```css
@theme {
  --color-paper:      #F6F1E7;
  --color-sage:       #294A43;
  --color-terracotta: #B87562;
  --color-apricot:    #E8C7A8;
  --color-brick:      #B84C4C;
  --color-success:    #5E8C72;
}
```

Usage: `bg-paper`, `text-sage`, `border-sage`, `text-terracotta`, `bg-apricot`, `text-brick`, `text-success`.

Dark mode is **out of scope**. The warm paper base *is* the identity; a dark variant would fight it. The `prefers-color-scheme` block in `globals.css` gets removed rather than reimplemented.

---

## 4. Typography

Two families, strictly divided by job.

| Role | Family | Applied to |
| --- | --- | --- |
| **Display / Serif** | **Fraunces** (variable, optical sizing) | All `h1`–`h3`, hero headlines, banner text, pull quotes, timeline years, big numbers |
| **Body / Sans** | **Inter** (variable) | Paragraphs, nav, buttons, labels, card copy, captions, metadata, `h4`–`h6` |

Both loaded via `next/font/google` in `app/layout.tsx` and exposed as `--font-display` and `--font-body` in `@theme`, replacing the unused Geist variables and the current single Jost import.

```css
@theme {
  --font-display: var(--font-fraunces);
  --font-body:    var(--font-inter);
}
```

**Substitutes, if Fraunces reads too playful in place:** Instrument Serif (tighter, more editorial) or Playfair Display (higher contrast, more formal). Pick one and change it in one file — never mix serifs.

### Rules

- Serif is for **voice**, sans is for **information**. A serif paragraph of body copy is a bug.
- Headline weights sit at 400–600 with tight tracking (`tracking-tight`) and generous size jumps. Avoid 700+ on the serif; it muddies at display sizes.
- Body copy: 16–18px, `leading-relaxed`, max measure ~68 characters (`max-w-[68ch]`). The current full-width paragraphs are part of why the site reads as unfinished.
- **Small-caps sans labels** in Dusty Terracotta (`text-xs uppercase tracking-[0.18em]`) are the standard section eyebrow. This replaces the gradient-text emphasis pattern.
- One display size per section maximum. No competing headlines.

---

## 5. Images

Images are the most visible expression of the theme.

- **Bold borders, always.** Every content image gets a solid `2px`–`4px` border in Deep Sage (`border-2 border-sage` at small sizes, `border-4` for hero/feature images). No borderless images.
- **Offset shadow, not blur.** Instead of soft `shadow-md`, images sit on a hard offset block of Soft Apricot or Dusty Terracotta (`shadow-[8px_8px_0_0_var(--color-apricot)]`). This is the print-adjacent move that ties images to the palette.
- **Radius:** `rounded-none` or `rounded-sm` for feature/project imagery — the border reads as a frame. `rounded-full` is reserved for the profile photo, which keeps a `border-4 border-sage` ring.
- **Duotone treatment** for photographic content: desaturate, then tint with Deep Sage (shadows) and Soft Apricot (highlights) so every photo lands inside the palette rather than importing its own colors. Implemented with a CSS filter/blend utility (`.duotone`) defined once in `globals.css`, not per component.
- **Icons and logos** inherit `currentColor` so they pick up Deep Sage or Terracotta from context. No multicolor brand logos in the skills grid.
- All images use `next/image`. The `public/images/*` paths referenced by `projects.tsx` must either be populated or the references removed (tracked in the log).

---

## 6. Surfaces, spacing, and motion

| Element | Spec |
| --- | --- |
| **Page surface** | `bg-paper`, `text-sage` |
| **Card** | `bg-paper` or `bg-apricot/40`, `border-2 border-sage`, `rounded-sm`, hard offset shadow on hover only. Replaces the current `bg-[#e9e9e9] rounded-2xl shadow-md` + gradient-blur-bar motif |
| **Inverted block** | `bg-sage`, `text-paper`, apricot accents |
| **Rules / dividers** | `1px` Deep Sage at 20% opacity, or a full-weight `2px` rule when it separates major sections |
| **Radius scale** | `0` / `2px` / `4px` only. The current `rounded-2xl` softness is off-theme |
| **Spacing** | 4px base; section vertical rhythm of `py-24` desktop / `py-16` mobile, applied consistently across all four pages |
| **Buttons** | Primary: `bg-sage text-paper`. Secondary: `border-2 border-sage text-sage`, hover fills `bg-apricot`. No gradient buttons |
| **Motion** | Keep Framer Motion and Lenis. Keep one signature scroll moment per page. Cut incidental animation on cards and body text — motion should mark a transition, not decorate every element |

### Experimental budget

One deliberate experimental moment per page, everything else quiet:

- **Home** — the scroll-driven cover transition (retinted: paper → sage instead of gray → black).
- **About** — the sticky Learn / Implement / Iterate cycle.
- **Journey** — the scroll-drawn timeline rule.
- **Contact** — none. It should be the calmest page on the site.

---

## 7. Baseline inventory (pre-redesign)

Recorded so the log can be read against a known starting point.

**Routes** — `app/page.tsx` (home), `app/about/page.tsx`, `app/journey/page.tsx`, `app/contact/page.tsx`, `app/layout.tsx`, `app/globals.css`

**Components**
- Root: `navbar.tsx`, `parallax-bg.tsx`, `secondary-bg.tsx`
- `landing-page/`: `main-screen.tsx`, `bg.tsx`, `svg-cover.tsx`, `jack.tsx`, `projects.tsx`, `quote-banner.tsx`, `learn-more.tsx`, `skills-and-projects.tsx`
- `about-page/`: `scroll-graphic.tsx`, `explanation.tsx`, `experience.tsx`
- `journey-page/`: `index.tsx`
- `wrappers/`: `lenis.tsx`

**Lib** — `lib/utils.ts` (`cn()`)

**Stack** — Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 (CSS-based config, no `tailwind.config.js`), Framer Motion, Lenis, Font Awesome, react-icons, lucide-react, react-hot-toast

---

## 8. Change Log

Maintained by the `redesign-log` skill (`.cursor/skills/redesign-log/SKILL.md`). Append-only — newest entry at the top of the entries list. Nothing below this line is edited by hand during the redesign.

### Open dead-code candidates

Carried forward across runs until resolved. Items are removed from this table only when the log records their deletion or their reinstatement.

| Item | Kind | Status | First flagged |
| --- | --- | --- | --- |
| `components/landing-page/skills-and-projects.tsx` | File | Unused — empty placeholder, imported nowhere | Baseline |
| `components/secondary-bg.tsx` | File | Unused — never imported | Baseline |
| `public/codebg.webp` | Asset | Referenced only from commented-out code in `main-screen.tsx` | Baseline |
| `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | Assets | `create-next-app` leftovers, unreferenced | Baseline |
| `public/logos/` | Directory | Empty | Baseline |
| `--font-geist-sans` / `--font-geist-mono` in `app/globals.css` | Tokens | Declared, never defined or loaded | Baseline |
| `@next/font` dependency | Package | Legacy; code imports `next/font/google` | Baseline |
| `bg-primary` in `components/journey-page/index.tsx` | Class | Undefined in theme, no effect | Baseline |
| `motion` package alongside `framer-motion` | Package | Two copies of the same library; only `bg.tsx` uses `motion/react` | Baseline |
| `react-hot-toast` in `app/contact/page.tsx` | Integration | Called without a `<Toaster />` mounted anywhere | Baseline |

### Entries

_No redesign work logged yet. The first run of the `redesign-log` skill will add an entry here._
