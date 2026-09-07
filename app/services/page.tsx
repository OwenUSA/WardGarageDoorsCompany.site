import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import { meta, photos, services, faqs } from '@/content/copy';
import { business } from '@/lib/business';
import { pageMetadata } from '@/lib/meta';
import PageBanner from '@/components/PageBanner';
import PhotoBand from '@/components/PhotoBand';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = pageMetadata(meta.services);

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        heading="Springs, openers, cables, tracks, panels and the tune-up that prevents all five."
        intro="Residential garage door work across Gulf Breeze, Navarre, Pensacola Beach, Midway and Tiger Point. Every service below is something we do ourselves, on our own tools, seven days a week."
      />

      {/* INTRO */}
      <section className="band pb-0 md:pb-0">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="prose-block max-w-2xl text-lg text-slate">
            <h2 className="mb-5 text-3xl text-teal md:text-4xl">
              Start with what the door is doing, not with what you think is broken.
            </h2>
            <p>
              Homeowners usually call and name a part. Nine times in ten the symptom
              points somewhere else: the &ldquo;dead opener&rdquo; is a corroded sensor
              splice, the &ldquo;bad spring&rdquo; is a cable that came off its drum, the
              door that will not close is two millimetres of photo-eye misalignment.
            </p>
            <p>
              So each service below is written the way you would actually meet it — the
              symptoms first, then what the repair genuinely involves. Read the symptom
              lists, find the one that sounds like your door, and mention it when you
              call. It saves both of us a diagnostic trip.
            </p>
          </div>
          <div className="card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos.carriageDoor.src}
              alt={photos.carriageDoor.alt}
              width={photos.carriageDoor.width}
              height={photos.carriageDoor.height}
              loading="lazy"
              decoding="async"
              className="block aspect-[6/5] w-full object-cover"
            />
            <div className="px-6 py-6">
              <span className="eyebrow">Also on the list</span>
              <p className="mt-3 text-slate">
                Full door replacement, when a repair genuinely is not the cheaper answer.
                Steel, composite or glass-and-aluminium, insulated or not, wind-rated where
                the address calls for it. We will say plainly when you have reached that
                point rather than quietly quoting for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIX SERVICES */}
      <section className="band">
        <div className="shell flex flex-col gap-8">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="card scroll-mt-28 grid gap-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.photo.src}
                alt={s.photo.alt}
                width={s.photo.width}
                height={s.photo.height}
                loading="lazy"
                decoding="async"
                className={`block h-full min-h-[240px] w-full object-cover ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              />
              <div className="flex flex-col gap-5 px-7 py-8 md:px-10 md:py-10">
                <div>
                  <span className="eyebrow">Service {String(i + 1).padStart(2, '0')}</span>
                  <h2 className="mt-3 font-display text-2xl font-medium text-teal md:text-3xl">
                    {s.title}
                  </h2>
                </div>
                <p className="text-slate">{s.blurb}</p>

                <div>
                  <h3 className="font-display text-sm font-medium tracking-[0.14em] text-teal uppercase">
                    What you notice
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2 text-slate">
                    {s.symptoms.map((sym) => (
                      <li key={sym} className="flex items-baseline gap-3">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-seafoam"
                        />
                        {sym}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-sm font-medium tracking-[0.14em] text-teal uppercase">
                    What we do
                  </h3>
                  <p className="mt-3 text-slate">{s.work}</p>
                </div>

                <a href={business.phoneHref} className="btn btn-solid self-start">
                  <Phone size={16} aria-hidden="true" />
                  {business.phone}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PhotoBand
        photo={photos.sectionJoint}
        caption="Hinges, roller stems and section joints — the parts that carry the door, and the parts salt reaches first."
      />

      {/* FAQ */}
      <section className="band">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <div>
            <span className="eyebrow">Questions</span>
            <h2 className="mt-3 text-3xl text-teal md:text-4xl">
              What homeowners here ask us most.
            </h2>
            <p className="mt-5 text-slate">
              If yours is not covered, call and ask. We would rather answer it once on the
              phone than have you find out the hard way in September.
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBand
        heading="Book a visit, or just ask."
        body={`We are reachable ${business.hoursShort.toLowerCase()}, on ${business.phone}. If your door is stuck or making a noise it did not make yesterday, call rather than email.`}
      />
    </>
  );
}
