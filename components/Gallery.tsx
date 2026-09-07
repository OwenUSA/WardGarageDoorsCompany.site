// A row of portrait tiles. Every tile is a real photograph with its own alt text;
// nothing here is decorative filler.
import type { Photo } from '@/content/copy';

export default function Gallery({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: Photo[];
}) {
  return (
    <section className="band">
      <div className="shell">
        <div className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 text-3xl text-teal md:text-4xl">{heading}</h2>
          {intro ? <p className="mt-4 text-lg text-slate">{intro}</p> : null}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((p) => (
            <li key={p.src} className="overflow-hidden rounded-[20px] border border-line bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                loading="lazy"
                decoding="async"
                className="block aspect-[3/4] w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
