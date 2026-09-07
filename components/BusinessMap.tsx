// The address is real, so the map is embedded by address query rather than by
// coordinates — see lib/business.ts. The iframe is lazy so it never costs anything
// on first paint, and it carries a title because an untitled iframe is an
// unlabelled landmark to a screen reader.
import { MapPin, Navigation } from 'lucide-react';
import { business, mapEmbedSrc, directionsHref } from '@/lib/business';

export default function BusinessMap({ heading }: { heading: string }) {
  return (
    <section className="band bg-sand-deep">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)]">
          <div>
            <span className="eyebrow">Find us</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-teal">{heading}</h2>
            <p className="mt-4 max-w-md text-slate">
              We work out of Gulf Breeze and cover the peninsula and the corridor east
              toward Navarre. If you are on Pensacola Beach or out at Tiger Point, you
              are inside our normal run.
            </p>
            <p className="mt-6 flex items-start gap-3 font-display text-lg font-medium text-teal">
              <MapPin size={20} aria-hidden="true" className="mt-1 shrink-0 text-seafoam-deep" />
              {business.addressLine}
            </p>
            <a href={directionsHref} className="btn btn-solid mt-6">
              <Navigation size={16} aria-hidden="true" />
              Get directions
            </a>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-sm">
            <iframe
              src={mapEmbedSrc(15)}
              title={`Map showing ${business.name} at ${business.addressLine}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[340px] w-full border-0 md:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
