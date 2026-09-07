import Link from 'next/link';
import { Phone } from 'lucide-react';
import { business } from '@/lib/business';

export default function NotFound() {
  return (
    <section className="band bg-teal text-white">
      <div className="shell max-w-2xl">
        <span className="eyebrow eyebrow-on-teal">404</span>
        <h1 className="mt-4 text-4xl md:text-5xl">That page is not here.</h1>
        <p className="mt-5 text-lg text-seafoam-wash/85">
          The link may be old, or mistyped. The five pages of this site are Home, About,
          Services, Contact and Privacy — or you can just call us.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Back to the home page
          </Link>
          <a href={business.phoneHref} className="btn btn-outline">
            <Phone size={16} aria-hidden="true" />
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
