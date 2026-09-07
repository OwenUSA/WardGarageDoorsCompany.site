// One place that turns a PageMeta from content/copy.ts into Next Metadata, so
// every route gets a unique title, a unique description and a canonical that ends
// in "/" to match trailingSlash: true.
import type { Metadata } from 'next';
import type { PageMeta } from '@/content/copy';
import { SITE_URL } from '@/lib/business';

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
    },
  };
}
