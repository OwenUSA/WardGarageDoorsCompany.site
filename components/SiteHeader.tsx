'use client';

// Sticky header. Nav entries come from lib/routes.ts, so they cannot drift from a
// real route. The drawer is the same list; there is no second copy of it.
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { business } from '@/lib/business';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-sand/95 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-teal focus:px-5 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="shell flex h-[72px] items-center justify-between gap-6 lg:h-[88px]">
        <Link href="/" className="flex min-h-11 shrink-0 items-center gap-3" aria-label={`${business.name} — home`}>
          {/* The supplied WC monogram, replacing the drawn "W" tile that stood in
              for it. Its paper ground is keyed out, so it sits on `sand` without
              the slightly-darker box an opaque crop would show (#f4f0e5 paper
              against a #fdfbf7 band). The wordmark beside it stays: this crop is
              the mark alone and carries no words, so nothing is set twice.
              Plain <img> — `output: 'export'` turns the optimizer off, so
              next/image would emit this element anyway. */}
          <img
            src="/images/ward-mark.webp"
            alt=""
            aria-hidden="true"
            width={256}
            height={149}
            className="h-8 w-auto shrink-0 lg:h-9"
          />
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-bold tracking-tight text-teal">
              Ward Garage Door
            </span>
            <span className="block text-[11px] tracking-[0.18em] text-slate-soft uppercase">
              Repair Service
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {ROUTES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="font-display text-[15px] font-medium text-slate transition-colors hover:text-teal"
            >
              {r.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={business.phoneHref} className="btn btn-primary hidden lg:inline-flex">
            <Phone size={16} aria-hidden="true" />
            {business.phone}
          </a>

          <button
            type="button"
            aria-controls="mobile-nav-drawer"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] border border-line text-teal lg:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-drawer"
        hidden={!open}
        className="border-t border-line bg-sand lg:hidden"
      >
        <nav aria-label="Primary mobile" className="shell flex flex-col gap-1 py-4">
          {ROUTES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-display text-base font-medium text-teal"
            >
              {r.label}
            </Link>
          ))}
          <a href={business.phoneHref} className="btn btn-solid mt-3">
            <Phone size={16} aria-hidden="true" />
            Call {business.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
