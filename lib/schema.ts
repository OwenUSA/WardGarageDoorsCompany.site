// lib/schema.ts — LocalBusiness JSON-LD, derived entirely from lib/business.ts.
//
// NO aggregateRating and NO review markup, ever. This business has no reviews we
// hold, and fabricating them is both a lie to the reader and a manual-action risk
// with Google. Every field below is a real fact about the business or about the
// page itself.
import {
  SITE_URL,
  business,
  address,
  hours,
  OPEN_DAYS,
} from '@/lib/business';
import { nap } from '@/content/copy';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: business.name,
  description: business.tagline,
  url: SITE_URL,
  telephone: business.phone,
  email: business.email,
  // `image` stays a photograph of the work, which is what consumers render as
  // one. `logo` is the square mark, added with the logo drop-in — the two are
  // distinct properties and a mark is the wrong thing to show as a photo.
  image: `${SITE_URL}/images/wide-02.webp`,
  logo: `${SITE_URL}/images/ward-icon.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: address.street,
    addressLocality: address.locality,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: 'US',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: OPEN_DAYS,
    opens: hours.opens,
    closes: hours.closes,
  },
  areaServed: nap.serviceAreaList.map((name) => ({
    '@type': 'City',
    name,
    addressRegion: 'FL',
  })),
} as const;
