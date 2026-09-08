// Footer. Every fact rendered here reads from lib/business.ts, which is itself
// derived from content/copy.ts's nap object — no retyped phone number, address or
// hours string anywhere in this file.
import Link from 'next/link';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { business, directionsHref } from '@/lib/business';

export default function SiteFooter() {
  return (
    <footer className="bg-teal-deep text-sand">
      <div className="shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          {/* The full lockup on its own paper, not the keyed mark: the artwork's
              ink is teal and this band is `teal-deep`, so a transparent mark
              would disappear into it. Kept as a card on the supplied ground
              rather than recolouring art we were handed. It reads the business
              name, so the name is not also set as type beside it — `alt` carries
              it for anything that cannot see the image. */}
          <img
            src="/images/ward-lockup.webp"
            alt={business.name}
            width={480}
            height={363}
            className="h-auto w-[220px] rounded-xl"
          />
          <p className="max-w-xs text-sm text-seafoam-wash/70">
            A Gulf Breeze garage door shop. One phone number, published hours, and a
            street address you can drive to.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-1">
          <span className="eyebrow eyebrow-on-teal mb-2">Site</span>
          {ROUTES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="flex min-h-10 items-center text-sm text-seafoam-wash/85 transition-colors hover:text-white"
            >
              {r.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="eyebrow eyebrow-on-teal mb-1">Contact</span>
          <a href={business.phoneHref} className="flex items-center gap-2 font-display text-base font-medium text-white">
            <Phone size={16} aria-hidden="true" />
            {business.phone}
          </a>
          <a href={business.emailHref} className="flex items-start gap-2 text-sm break-all text-seafoam-wash/85 hover:text-white">
            <Mail size={16} aria-hidden="true" className="mt-1 shrink-0" />
            {business.email}
          </a>
          <span className="flex items-start gap-2 text-sm text-seafoam-wash/85">
            <MapPin size={16} aria-hidden="true" className="mt-1 shrink-0" />
            {business.addressLine}
          </span>
          <span className="flex items-start gap-2 text-sm text-seafoam-wash/85">
            <Clock size={16} aria-hidden="true" className="mt-1 shrink-0" />
            {business.hoursLine}
          </span>
          <a href={directionsHref} className="flex min-h-10 items-center text-sm text-seafoam underline underline-offset-4">
            Get directions
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow eyebrow-on-teal mb-1">Service area</span>
          <ul className="flex flex-col gap-1 text-sm text-seafoam-wash/85">
            {business.serviceAreaList.map((place) => (
              <li key={place}>{place}, FL</li>
            ))}
          </ul>
          <p className="text-xs text-seafoam-wash/60">
            Santa Rosa County and the Gulf Breeze peninsula.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-seafoam-wash/60 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-white">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
