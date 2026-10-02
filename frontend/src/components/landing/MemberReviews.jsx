import { useCallback, useState } from "react";
import { LayoutGrid, MessageSquareQuote, Hand } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";
import { Reveal, SectionHead } from "./Reveal";
import { ReviewCarousel } from "./ReviewCarousel";
import { ReviewsGallery, ReviewLightbox, useScrollLock } from "./ReviewsOverlay";

export const MemberReviews = () => {
  const [gallery, setGallery] = useState(false);
  const [active, setActive] = useState(null);
  useScrollLock(gallery || active !== null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((d) => setActive((i) => (i + d + REVIEWS.length) % REVIEWS.length), []);

  return (
    <section id="reviews" data-testid="reviews-section" className="relative section-y overflow-hidden">
      <div className="glow-orb left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 bg-[#3B82F6]/[0.10]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHead align="center" icon={MessageSquareQuote} eyebrow="Real students · Real results" title="Member Reviews"
          body="Screenshots straight from our Telegram. Wins, lessons and thank-yous from the KM Nishat 99 family." />
        <Reveal delay={0.1} className="mt-12 lg:mt-16">
          <ReviewCarousel onOpen={setActive} />
        </Reveal>
        <Reveal delay={0.15} className="mt-8 flex flex-col items-center gap-4">
          <p className="flex items-center gap-2 text-xs font-mono text-[#55688A]"><Hand size={13} className="text-[#D98C00]" />Drag to spin · Tap a card to open</p>
          <button onClick={() => setGallery(true)} data-testid="reviews-showcase-btn" className="btn-ice group w-full sm:w-auto">
            <LayoutGrid size={16} />
            <span>View Showcase ({REVIEWS.length} reviews)</span>
          </button>
        </Reveal>
      </div>
      <ReviewsGallery open={gallery} onClose={() => setGallery(false)} onPick={setActive} />
      <ReviewLightbox index={active} onClose={close} onStep={step} />
    </section>
  );
};
