# Build prompt — Ward Garage Door Repair Service

## The business (REAL facts — never invent, never placeholder)

| | |
|---|---|
| Name | Ward Garage Door Repair Service |
| Domain | `wardgaragedoorscompany.site` |
| Phone | (850) 990-9379 — `tel:+18509909379` |
| Category | Garage Door Services |
| Address | 872 Gulf Breeze Pkwy, Gulf Breeze, FL 32561 |
| Email | rob@wardgaragedoorscompany.site |
| Hours | Monday–Sunday, 7:00 AM – 8:30 PM |
| Service area | Gulf Breeze, Navarre, Pensacola Beach, Midway, Tiger Point — Santa Rosa County FL |

These are **real** contact details, not the 555-01XX fictions some sibling sites carry.
So: `robots.ts` **allows** indexing, there is no `docs/PRE-LAUNCH.md` guard, and
`SITE_URL` is `https://wardgaragedoorscompany.site` — never a localhost port.

> Note the email is `rob@`, not `contact@`, and the domain is
> `wardgaragedoorscompany.site` while the business name has no "Company" in it. Both are
> correct as given; do not "tidy" either one.

## Design direction — coastal modern

Ward must not resemble any sibling site. Its own look:

- **Palette** — deep teal `#0E4F52` ground, seafoam `#7FC3B8` accent, warm sand `#FDFBF7`
  paper, slate `#4A5A63` secondary. Salt-air light, high key.
- **Type** — Space Grotesk (500/700) for headings, Inter (400/500) for body. Wide letter
  spacing on small caps labels; headings sentence case, not uppercase.
- **Layout** — airy and horizontal. Wide whitespace, a hero with copy on a teal panel
  beside a rounded photo, and full-width photo bands separating sections. Content capped
  at 1240px with generous 96px section padding.
- **Cards** — 20px radius, white on sand, seafoam top border that thickens on hover.
  Coastal framing throughout (salt-air corrosion on springs and hinges, humidity-swollen
  panels, storm-season readiness), never snow or desert heat.

## Routes (exactly five, no more)

`/`, `/about`, `/services`, `/contact`, `/privacy` — declared once in `lib/routes.ts` and
read by the nav, the footer and `app/sitemap.ts`.

## Sections

- **Home** — Hero, trust strip (hours / licensed / local), Services grid (6), Why Ward,
  photo gallery band, Map, CTA.
- **About** — banner, story, approach (3 steps), gallery, CTA.
- **Services** — banner, intro, 6 service cards with real copy, FAQ accordion (6 Q&A), CTA.
- **Contact** — banner, NAP block + hours table, contact form (non-submitting; static
  export has no server — wire it to `mailto:` or mark it clearly), map.
- **Privacy** — plain prose privacy policy naming the real business and email.

The six services: spring replacement, opener repair & install, cable and drum repair,
off-track door realignment, panel and section replacement, and corrosion-focused
maintenance tune-ups. Write real, specific copy — symptoms a homeowner notices on the
Gulf coast, what the fix involves.

## Images

29 real photographs are already at `public/images/`, described in
`public/images/manifest.json`:

- `wide-01..10.webp` — landscape. Heroes, banners, wide bands.
- `tall-01..16.webp` — portrait. Cards, gallery tiles, split-layout columns.
- `square-01..03.webp` — square. Spot images.

**Look at the images before placing them** — they are unlabelled, and a door-panel
close-up does not work as a full-bleed hero. Every `<img>` needs real `alt` text
describing that photo, plus explicit `width`/`height` from the manifest so nothing
shifts on load. Use `loading="lazy"` below the fold.

## Stack and constraints

- Next.js 15 App Router, TypeScript, Tailwind v4 via `@tailwindcss/postcss`.
- `next.config.ts`: `output: 'export'`, `images: { unoptimized: true }`,
  `trailingSlash: true`.
- `app/robots.ts` and `app/sitemap.ts` each need `export const dynamic = "force-static"`
  or the export build fails.
- npm, not pnpm. Commit `package-lock.json` — CI runs `npm ci`.
- Dev port **3114** (`next dev -p 3114`). 3100–3113 are taken by sibling sites.
- No route handlers, no `'use server'`, no `middleware.ts`, no `cookies()`/`headers()`.
  The deploy target is a directory of static files.

## Map

The address is real, so embed it by address query rather than by coordinates:
`https://www.google.com/maps?q=<url-encoded address>&z=15&output=embed`, in a lazy
`<iframe>` with a `title`. Add a "Get directions" link to
`https://www.google.com/maps/dir/?api=1&destination=<url-encoded address>`.

## Structured data

One `LocalBusiness` JSON-LD block in `app/layout.tsx`, derived from the facts module —
name, phone, email, `address`, `openingHoursSpecification` for Mon–Sun 07:00–20:30, `url`,
`areaServed`. **No `aggregateRating` and no `review`** — there are no real reviews, and
inventing them is both a lie and a Google penalty.

## Done means

`npm run build` exports `out/` with five pages plus `404.html`, `sitemap.xml` and
`robots.txt`; `grep -rl "localhost:3" out/` finds nothing; every page has a unique title,
meta description and canonical; and the site is responsive at 390 / 768 / 1440.
