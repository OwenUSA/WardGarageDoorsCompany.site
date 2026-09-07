import type { Metadata } from 'next';
import { meta, photos } from '@/content/copy';
import { business } from '@/lib/business';
import { pageMetadata } from '@/lib/meta';
import PageBanner from '@/components/PageBanner';
import PhotoBand from '@/components/PhotoBand';
import Gallery from '@/components/Gallery';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = pageMetadata(meta.about);

const approach = [
  {
    step: '01',
    heading: 'You describe it, we narrow it',
    body: 'On the phone we ask three or four questions: what you heard, whether the door moves at all, whether it lifts level, and how old the opener is. That is usually enough to know whether we are bringing springs, cables or a section, and it means we arrive with the part instead of a second appointment.',
  },
  {
    step: '02',
    heading: 'We look at the whole door, not the broken bit',
    body: 'A snapped spring on a door whose drums are seizing is two failures, and fixing one of them is a wasted visit. So before anything comes off, we run the door on the manual release, check balance at three heights, and look at the cables, rollers, hinges and bottom brackets for the corrosion that caused the problem in the first place.',
  },
  {
    step: '03',
    heading: 'We finish by telling you the truth',
    body: 'Before we leave, the safety reversal is tested against an obstruction, the photo eyes are aligned and the door is balanced. Then you get a straight account of the parts that are fine, the ones with a season left, and the ones that will not survive the next named storm — with no pressure attached to any of it.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About us"
        heading="A garage door shop that lives where the salt lands."
        intro={`${business.name} works out of Gulf Breeze, on the strip of land between Pensacola Bay and the Sound. Everything we know about garage doors, we learned on doors that live in that air.`}
      />

      {/* STORY */}
      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="prose-block max-w-2xl text-lg text-slate">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-3 mb-6 text-3xl text-teal md:text-4xl">
              Coastal doors fail differently, and they fail early.
            </h2>
            <p>
              A garage door is a few hundred pounds of steel held in balance by two
              springs, two cables and about a dozen small brackets. Inland, most of
              those parts wear out mechanically: the coils fatigue after enough cycles,
              a roller bearing gives up, a hinge goes oval. That is a slow, predictable
              kind of ageing, and manufacturers rate their parts against it.
            </p>
            <p>
              On the Gulf Breeze peninsula, almost nothing gets the chance to fail that
              way. Salt aerosol comes off the water and settles on every exposed metal
              surface, and the humidity here keeps that film damp for most of the year.
              Corrosion starts pitting the spring wire and the cable strands long before
              the cycle count is anywhere near spent. A door that would run a decade in
              Alabama gets four or five here, and the failure, when it comes, is sudden
              rather than gradual.
            </p>
            <p>
              That is the whole reason this business exists in the shape it does. We are
              not a general handyman service that also does garage doors. We do garage
              doors, on this coast, and we have made every default in the way we work a
              coastal default: galvanised or coated springs where the address warrants
              it, both cables replaced as a pair, sealed splices on sensor wiring,
              lubricants chosen for whether they survive a downpour rather than for how
              cheap they come.
            </p>
            <p>
              We publish our hours, our street address and one phone number. When you
              call during those hours, you talk to someone who works on these doors and
              can tell you over the phone whether what you are describing is urgent.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[20px] border border-line bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos.diamondDoor.src}
                alt={photos.diamondDoor.alt}
                width={photos.diamondDoor.width}
                height={photos.diamondDoor.height}
                loading="lazy"
                decoding="async"
                className="block aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="card px-7 py-7">
              <span className="eyebrow">Where we work</span>
              <ul className="mt-4 flex flex-col gap-2 text-slate">
                {business.serviceAreaList.map((place) => (
                  <li key={place} className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-seafoam" />
                    {place}, Florida
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-5 text-sm text-slate-soft">
                {business.addressLine}
                <br />
                {business.hoursLine}
              </p>
            </div>
          </div>
        </div>
      </section>

      <PhotoBand
        photo={photos.raisedDoorUnderside}
        caption="Half of what fails on a garage door is out of sight above your head, in the tracks and the rail."
      />

      {/* APPROACH */}
      <section className="band bg-sand-deep">
        <div className="shell">
          <div className="max-w-2xl">
            <span className="eyebrow">How a visit goes</span>
            <h2 className="mt-3 text-3xl text-teal md:text-4xl">Three steps, every time.</h2>
            <p className="mt-4 text-lg text-slate">
              There is no version of this where we turn up, swap a part and leave without
              telling you what caused it.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 lg:grid-cols-3">
            {approach.map((a) => (
              <li key={a.step} className="card px-7 py-8">
                <span className="font-display text-4xl font-bold text-seafoam">{a.step}</span>
                <h3 className="mt-4 font-display text-xl font-medium text-teal">{a.heading}</h3>
                <p className="mt-3 text-slate">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Gallery
        eyebrow="On the job"
        heading="What we spend our days looking at"
        intro="Springs, drums, sensors and sections — photographed on ordinary residential doors, in the state they were found."
        items={[photos.springOnBrick, photos.torsionTight, photos.doubleDoorFirewood, photos.chamberlainWindow]}
      />

      <CtaBand
        heading="Want a straight answer about your door?"
        body="Describe the noise, the movement and roughly how old the door is. Most of the time we can tell you on the phone whether it needs looking at this week or this season."
      />
    </>
  );
}
