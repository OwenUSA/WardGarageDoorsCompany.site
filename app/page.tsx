import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, ShieldCheck, Anchor, ArrowRight, Waves, Wrench, Timer } from 'lucide-react';
import { meta, photos, services } from '@/content/copy';
import { business } from '@/lib/business';
import { pageMetadata } from '@/lib/meta';
import PhotoBand from '@/components/PhotoBand';
import Gallery from '@/components/Gallery';
import BusinessMap from '@/components/BusinessMap';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = pageMetadata(meta.home);

const trust = [
  {
    icon: Clock,
    label: 'Open seven days',
    body: `${business.hoursShort}. Same hours on a Sunday in July as on a Tuesday in February.`,
  },
  {
    icon: ShieldCheck,
    label: 'Licensed and insured',
    body: 'A Florida-licensed, insured garage door contractor. We will show you the paperwork before we start.',
  },
  {
    icon: Anchor,
    label: 'Peninsula local',
    body: `Based on Gulf Breeze Pkwy, covering ${business.serviceAreaList.slice(0, 4).join(', ')} and Tiger Point.`,
  },
];

const whyWard = [
  {
    icon: Waves,
    heading: 'We plan for salt, not around it',
    body: 'Every quote we write assumes the part is going to live in chloride-laden air. That means galvanised or coated springs where the address warrants it, sealed splices on sensor wiring, and lubricants that do not rinse off in a summer squall. It costs a little more once and saves a call-out.',
  },
  {
    icon: Wrench,
    heading: 'We diagnose before we sell',
    body: 'A corroded photo-eye splice looks exactly like a dead opener from the driveway. We test the board, the capacitor and the force settings first, because we would rather charge you for twenty minutes than for a unit you did not need.',
  },
  {
    icon: Timer,
    heading: 'We tell you what has time left',
    body: 'At the end of a visit you get a plain account of which parts are fine, which have a season in them and which will fail in the next storm. No pressure attached to any of it — you can act on it now, later, or not at all.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — copy on a teal panel beside a rounded photograph. */}
      <section className="bg-teal text-white">
        <div className="shell grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:py-24">
          <div>
            <span className="eyebrow eyebrow-on-teal">Gulf Breeze &middot; Santa Rosa County, FL</span>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-[4.1rem]">
              Garage doors that have to live in salt air.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-seafoam-wash/85 md:text-xl">
              {business.name} repairs springs, openers, cables and panels across the
              Gulf Breeze peninsula. We work on doors a few hundred yards from the
              Sound, so we build every repair around the two things that actually kill
              hardware here: chloride and humidity.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={business.phoneHref} className="btn btn-primary">
                <Phone size={16} aria-hidden="true" />
                Call {business.phone}
              </a>
              <Link href="/services" className="btn btn-outline">
                See what we fix
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-7 flex items-center gap-2 text-sm text-seafoam-wash/70">
              <Clock size={15} aria-hidden="true" />
              {business.hoursLine}
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] bg-teal-deep shadow-[0_24px_60px_rgba(9,54,56,0.35)]">
            {/* Above the fold: the one image that is not lazy. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos.heroDoors.src}
              alt={photos.heroDoors.alt}
              width={photos.heroDoors.width}
              height={photos.heroDoors.height}
              fetchPriority="high"
              decoding="async"
              className="block aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-line bg-sand-deep">
        <div className="shell grid gap-8 py-10 md:grid-cols-3 md:py-12">
          {trust.map((t) => (
            <div key={t.label} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-seafoam-wash text-teal">
                <t.icon size={20} aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-base font-medium text-teal">{t.label}</h2>
                <p className="mt-1 text-sm text-slate">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="band">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-3 text-3xl text-teal md:text-4xl">
                Six things go wrong on a coastal garage door. We fix all six.
              </h2>
              <p className="mt-4 text-lg text-slate">
                Almost every call we take on the peninsula lands in one of these. If
                yours does not, say so on the phone and we will tell you honestly
                whether it is ours to fix.
              </p>
            </div>
            <Link href="/services" className="btn btn-solid shrink-0">
              All services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.photo.src}
                  alt={s.photo.alt}
                  width={s.photo.width}
                  height={s.photo.height}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[16/10] w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                  <h3 className="font-display text-xl font-medium text-teal">{s.title}</h3>
                  <p className="text-[15px] text-slate">{s.blurb}</p>
                  <Link
                    href={`/services#${s.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-2 font-display text-sm font-medium text-seafoam-deep"
                  >
                    What the fix involves
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PhotoBand
        photo={photos.brightInterior}
        caption="A door on the Gulf coast opens and closes about a thousand times a year in air that never really dries out."
      />

      {/* WHY WARD */}
      <section className="band bg-sand-deep">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <span className="eyebrow">Why Ward</span>
            <h2 className="mt-3 text-3xl text-teal md:text-4xl">
              The difference is what we assume about the air.
            </h2>
            <p className="mt-5 text-slate">
              An inland shop can fit an oil-tempered spring and reasonably expect it to
              last. Fit the same spring on Fairpoint Drive and you have booked a return
              visit. Most of what we do differently follows from that one fact.
            </p>
            <div className="mt-8 overflow-hidden rounded-[20px] border border-line bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos.drumCorner.src}
                alt={photos.drumCorner.alt}
                width={photos.drumCorner.width}
                height={photos.drumCorner.height}
                loading="lazy"
                decoding="async"
                className="block aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <ul className="flex flex-col gap-6">
            {whyWard.map((w) => (
              <li key={w.heading} className="card px-7 py-7">
                <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-seafoam-wash text-teal">
                  <w.icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-teal">{w.heading}</h3>
                <p className="mt-2 text-slate">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Gallery
        eyebrow="From our work"
        heading="Doors and hardware from around the peninsula"
        intro="Ordinary residential doors, photographed as we found them. Most of what fails here fails quietly, at the corners, long before anyone notices the noise."
        items={[photos.windowDoorClean, photos.blackDoorSunny, photos.craftsmanInterior, photos.fourLiteDoor]}
      />

      <BusinessMap heading="We are on Gulf Breeze Pkwy" />

      <CtaBand
        heading="Tell us what the door is doing."
        body="A description of the noise and when it started usually narrows it to one or two parts before we arrive. Call during opening hours and you will speak to someone who works on these doors."
      />
    </>
  );
}
