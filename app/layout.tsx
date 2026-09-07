import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MobileCallBar from '@/components/MobileCallBar';
import { localBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/business';
import { meta } from '@/content/copy';

// Space Grotesk for headings and small-caps labels, Inter for body. Both SIL OFL,
// both loaded through next/font so the files are self-hosted in the export and
// there is no render-blocking request to a font CDN.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

// No title.template. Every route sets its full title from content/copy.ts, and a
// template that appends the brand would serve it twice on titles that already
// name it. The values here are only the fallback for a route that sets none.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.home.title,
  description: meta.home.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="pb-[52px] lg:pb-0">
        {/* Site-wide LocalBusiness structured data, derived from lib/business.ts.
            No aggregateRating and no review: there are none to report. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileCallBar />
      </body>
    </html>
  );
}
