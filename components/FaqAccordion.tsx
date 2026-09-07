'use client';

// FAQ accordion built on <details>/<summary>: it works with JavaScript disabled,
// it is keyboard-operable for free, and the answer text is in the DOM whether the
// panel is open or shut. The only client state is which panel is open.
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <details
            key={item.q}
            open={isOpen}
            onToggle={(e) => {
              const el = e.currentTarget;
              if (el.open) setOpenIndex(i);
              else if (openIndex === i) setOpenIndex(null);
            }}
            className="group overflow-hidden rounded-[20px] border border-line bg-white"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 font-display text-lg font-medium text-teal marker:hidden [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <span
                aria-hidden="true"
                className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-seafoam-wash text-teal"
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </summary>
            <div className="border-t border-line px-6 py-5 text-slate">{item.a}</div>
          </details>
        );
      })}
    </div>
  );
}
