// lib/business.ts — THE single source of truth for business facts.
//
// Every value here is DERIVED from content/copy.ts's `nap` object. Nothing is
// retyped. That is the whole point: two forms of the same fact that agree today
// are the precondition for a drift tomorrow.
//
// The parsers THROW rather than fall back. A silent fallback would turn a copy
// edit into wrong structured data, which is the failure with no visible symptom.
//
// These are REAL details for a real business at a real address, so unlike some
// sibling sites there is no pre-launch guard: robots.ts allows indexing and
// SITE_URL is the public origin, never a dev port.

import { nap } from '@/content/copy';

const ADDRESS_RE = /^(.+),\s*(.+),\s*([A-Z]{2})\s*(\d{5})$/;
const HOURS_RE = /(\d{1,2}):(\d{2})\s*(AM|PM)\s*to\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i;

function parseAddress(s: string) {
  const m = ADDRESS_RE.exec(s);
  if (!m) throw new Error(`business.ts: nap.address does not parse: ${s}`);
  return { street: m[1], locality: m[2], region: m[3], postalCode: m[4] };
}

function to24(h: string, mm: string, ap: string): string {
  let n = Number(h) % 12;
  if (/pm/i.test(ap)) n += 12;
  return `${String(n).padStart(2, '0')}:${mm}`;
}

function parseHours(s: string) {
  const m = HOURS_RE.exec(s);
  if (!m) throw new Error(`business.ts: nap.hours does not parse: ${s}`);
  return { opens: to24(m[1], m[2], m[3]), closes: to24(m[4], m[5], m[6]) };
}

export const address = parseAddress(nap.address);
export const hours = parseHours(nap.hours);

/** Public origin. Static export served by nginx on owen-main. Never a localhost port. */
export const SITE_URL = 'https://wardgaragedoorscompany.site';

/** All seven days, one block, no split hours. */
export const OPEN_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

// The address is real, so the map is embedded by address query rather than by
// coordinates — no geocoding step to get wrong, and the pin carries the street.
const ADDRESS_Q = encodeURIComponent(nap.address);

export const mapEmbedSrc = (zoom = 15) =>
  `https://www.google.com/maps?q=${ADDRESS_Q}&z=${zoom}&output=embed`;

export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_Q}`;

export const business = {
  name: nap.business,
  tagline: nap.tagline,
  phone: nap.phone,
  phoneHref: nap.phoneHref,
  email: nap.email,
  emailHref: nap.emailHref,
  addressLine: nap.address,
  hoursLine: nap.hours,
  hoursShort: nap.hoursShort,
  serviceArea: nap.serviceArea,
  serviceAreaList: nap.serviceAreaList,
  address,
  hours,
} as const;

export default business;
