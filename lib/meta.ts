// One place that turns a PageMeta from content/copy.ts into Next Metadata, so
// every route gets a unique title, a unique description and a canonical that ends
// in "/" to match trailingSlash: true.
import type { Metadata } from 'next';
import type { PageMeta } from '@/content/copy';
import { SITE_URL } from '@/lib/business';

// The 1200x630 card derived from the supplied lockup. One image for every route:
// the pages share a brand, and a per-route card would be five copies of the same
// artwork. Resolved against metadataBase, which layout.tsx sets to SITE_URL.
const OG_IMAGE = '/images/ward-og.jpg';

export function pageMetadata(m: PageMeta): Metadata {
  const canonicalPath = m.path === '/' ? '/' : `${m.path}/`;
  const url = new URL(canonicalPath, SITE_URL).toString();
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title: m.title,
      description: m.description,
      url,
      siteName: 'Ward Garage Door Repair Service',
      locale: 'en_US',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Ward Garage Door Repair Service' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: [OG_IMAGE],
    },
  };
}
