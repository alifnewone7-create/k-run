import { MARQUEE } from "@/lib/site";

export const Marquee = () => {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div data-testid="marquee-section" className="relative py-6 sm:py-8 overflow-hidden mask-fade-x">
      <div className="hairline mb-7" />
      <div className="marquee-track gap-0">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 sm:gap-10 sm:pr-10 font-display text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight whitespace-nowrap text-grad-soft">
            {t}
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#D8F244]/60" />
          </span>
        ))}
      </div>
      <div className="hairline mt-7" />
    </div>
  );
};
