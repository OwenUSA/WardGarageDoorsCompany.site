// Generated from lib/routes.ts so a sitemap entry can never name a route that
// does not exist. next.config.ts sets trailingSlash: true, so every served URL
// (and every canonical tag) ends in "/" — matched exactly here, because a sitemap
// URL that disagrees with the canonical for the same page is precisely the drift
// this file exists to prevent.
import type { MetadataRoute } from 'next';
import { ROUTES } from '@/lib/routes';
import { SITE_URL } from '@/lib/business';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: new URL(r.href === '/' ? '/' : `${r.href}/`, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: r.href === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: r.href === '/' ? 1 : 0.7,
  }));
}

// output: "export" cannot infer this metadata route is static; say so explicitly.
export const dynamic = 'force-static';
