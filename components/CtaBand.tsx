import { Phone, Mail } from 'lucide-react';
import { business } from '@/lib/business';

export default function CtaBand({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="band bg-teal text-white">
      <div className="shell grid items-center gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div>
          <span className="eyebrow eyebrow-on-teal">Talk to us</span>
          <h2 className="mt-3 text-3xl md:text-4xl">{heading}</h2>
          <p className="mt-4 max-w-xl text-seafoam-wash/85">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <a href={business.phoneHref} className="btn btn-primary">
            <Phone size={16} aria-hidden="true" />
            {business.phone}
          </a>
          <a href={business.emailHref} className="btn btn-outline">
            <Mail size={16} aria-hidden="true" />
            Email us
          </a>
          <p className="text-sm text-seafoam-wash/70 lg:text-right">{business.hoursShort}</p>
        </div>
      </div>
    </section>
  );
}
