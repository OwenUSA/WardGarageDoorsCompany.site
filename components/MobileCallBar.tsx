// Sticky tel: bar for phones. Hidden at lg and above, where the header's own call
// button is already visible. The body carries matching bottom padding so the bar
// never covers the last line of a page.
import { Phone } from 'lucide-react';
import { business } from '@/lib/business';

export default function MobileCallBar() {
  return (
    <a
      href={business.phoneHref}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-teal py-3.5 font-display text-base font-medium text-white lg:hidden"
    >
      <Phone size={18} aria-hidden="true" />
      Call {business.phone}
    </a>
  );
}
