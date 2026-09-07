// Full-width photograph band, used to separate sections. Always below the fold,
// so always lazy; width/height come from the manifest so the band reserves its
// space before the file arrives.
import type { Photo } from '@/content/copy';

export default function PhotoBand({
  photo,
  caption,
  height = 'md',
}: {
  photo: Photo;
  caption?: string;
  height?: 'sm' | 'md';
}) {
  const h = height === 'sm' ? 'h-[220px] md:h-[300px]' : 'h-[280px] md:h-[420px]';
  return (
    <div className="relative w-full overflow-hidden bg-teal-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        className={`w-full object-cover ${h}`}
      />
      {caption ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-deep/85 to-transparent">
          <div className="shell py-6">
            <p className="max-w-2xl font-display text-lg font-medium text-white md:text-2xl">
              {caption}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
