// Shared banner for the four inner routes. Teal panel, wide tracking label,
// sentence-case heading — the same voice as the home hero without repeating it.
export default function PageBanner({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
}) {
  return (
    <section className="bg-teal text-white">
      <div className="shell py-14 md:py-24">
        <span className="eyebrow eyebrow-on-teal">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">{heading}</h1>
        <p className="mt-6 max-w-2xl text-lg text-seafoam-wash/85 md:text-xl">{intro}</p>
      </div>
    </section>
  );
}
