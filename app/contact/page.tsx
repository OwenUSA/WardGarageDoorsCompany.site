import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Navigation } from 'lucide-react';
import { meta, photos } from '@/content/copy';
import { business, directionsHref, OPEN_DAYS } from '@/lib/business';
import { pageMetadata } from '@/lib/meta';
import PageBanner from '@/components/PageBanner';
import PhotoBand from '@/components/PhotoBand';
import ContactForm from '@/components/ContactForm';
import BusinessMap from '@/components/BusinessMap';

export const metadata: Metadata = pageMetadata(meta.contact);

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        heading="One number, one inbox, one address."
        intro={`Call ${business.name} on ${business.phone} any day between 7:00 AM and 8:30 PM, or send an email and we will come back to you the same day we read it.`}
      />

      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* NAP + HOURS */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="eyebrow">Reach us</span>
              <h2 className="mt-3 text-3xl text-teal">How to get hold of us</h2>
            </div>

            <ul className="flex flex-col gap-5">
              <li className="card px-6 py-5">
                <span className="flex items-center gap-2 text-sm text-slate-soft">
                  <Phone size={15} aria-hidden="true" /> Phone
                </span>
                <a
                  href={business.phoneHref}
                  className="mt-1 block font-display text-2xl font-medium text-teal"
                >
                  {business.phone}
                </a>
                <p className="mt-2 text-sm text-slate">
                  The fastest route for anything jammed, stuck or noisy right now.
                </p>
              </li>

              <li className="card px-6 py-5">
                <span className="flex items-center gap-2 text-sm text-slate-soft">
                  <Mail size={15} aria-hidden="true" /> Email
                </span>
                <a
                  href={business.emailHref}
                  className="mt-1 block font-display text-lg font-medium break-all text-teal"
                >
                  {business.email}
                </a>
                <p className="mt-2 text-sm text-slate">
                  Good for quotes, photographs of a damaged section, or scheduling a
                  tune-up that is not urgent.
                </p>
              </li>

              <li className="card px-6 py-5">
                <span className="flex items-center gap-2 text-sm text-slate-soft">
                  <MapPin size={15} aria-hidden="true" /> Address
                </span>
                <p className="mt-1 font-display text-lg font-medium text-teal">
                  {business.addressLine}
                </p>
                <a
                  href={directionsHref}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-seafoam-deep underline underline-offset-4"
                >
                  <Navigation size={14} aria-hidden="true" />
                  Get directions
                </a>
              </li>
            </ul>

            <div className="card px-6 py-6">
              <span className="eyebrow">Opening hours</span>
              <table className="mt-4 w-full text-left text-slate">
                <caption className="sr-only">
                  Opening hours for {business.name}, seven days a week
                </caption>
                <tbody>
                  {OPEN_DAYS.map((day) => (
                    <tr key={day} className="border-b border-line last:border-0">
                      <th scope="row" className="py-2.5 pr-4 font-normal">
                        {day}
                      </th>
                      <td className="py-2.5 text-right font-display font-medium text-teal">
                        7:00 AM &ndash; 8:30 PM
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm text-slate-soft">
                Same hours every day of the week, holidays included.
              </p>
            </div>

            <div className="card px-6 py-6">
              <span className="eyebrow">Service area</span>
              <p className="mt-3 text-slate">{business.serviceArea}</p>
            </div>
          </div>

          {/* FORM */}
          <div>
            <span className="eyebrow">Send a message</span>
            <h2 className="mt-3 text-3xl text-teal">Tell us about the door</h2>
            <p className="mt-4 max-w-xl text-slate">
              The more you can say about what the door is doing, the better the chance we
              arrive with the right part on the first visit. Age of the door, age of the
              opener, and what changed most recently are the three most useful things.
            </p>
            <div className="mt-8 rounded-[20px] border border-line bg-white px-6 py-7 md:px-8 md:py-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <PhotoBand
        photo={photos.headerRelease}
        caption="Between 7:00 AM and 8:30 PM, seven days a week, someone who works on these doors picks up."
        height="sm"
      />

      <BusinessMap heading="872 Gulf Breeze Pkwy" />
    </>
  );
}
