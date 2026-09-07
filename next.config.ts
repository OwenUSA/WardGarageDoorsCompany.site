import type { NextConfig } from 'next';

// Static export: five brochure routes, no route handlers, no server actions, no
// dynamic APIs. The deploy target on owen-main is a directory of files served by
// the shared nginx container, so there is nothing for a Node server to do.
const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  // The Next image optimizer needs a running server; export requires it off.
  images: { unoptimized: true },
  // Emit /about/index.html rather than /about.html so nginx serves the tree with
  // no rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
