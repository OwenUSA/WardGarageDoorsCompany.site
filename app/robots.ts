// Generated rather than hand-maintained, so it can never disagree with
// lib/business.ts's SITE_URL.
//
// This site allows indexing. Some sibling sites carry a pre-launch Disallow guard
// because their business facts are placeholders; Ward's are real, so there is
// nothing here to hide from a crawler.
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/business';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

// output: "export" cannot infer this metadata route is static; say so explicitly.
export const dynamic = 'force-static';
