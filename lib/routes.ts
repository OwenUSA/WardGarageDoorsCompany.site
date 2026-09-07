// lib/routes.ts — the five routes, declared ONCE. The nav, the mobile drawer, the
// footer and app/sitemap.ts all read this array, so an entry here cannot drift
// from a route that actually exists.
export const ROUTES = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
] as const;

export type RouteHref = (typeof ROUTES)[number]['href'];
