import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";
import { lockScroll } from "@/hooks/useLenis";

const IconBtn = ({ onClick, testId, label, className = "", children }) => (
  <button onClick={onClick} data-testid={testId} aria-label={label}
    className={`grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-gradient-to-br from-[#C4B5FD] via-[#8B5CF6] to-[#3B0F7A] text-white shadow-[0_10px_30px_-8px_rgba(124,58,237,0.8)] transition-[transform,filter,box-shadow] duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_14px_40px_-8px_rgba(139,92,246,0.95)] active:scale-95 ${className}`}>
    {children}
  </button>
);

export const ReviewsGallery = ({ open, onClose, onPick }) => (
  <AnimatePresence>
    {open && (
      <motion.div data-testid="reviews-showcase-overlay" data-lenis-prevent
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
        className="review-glass fixed inset-0 z-[80] flex flex-col">
        <div className="flex items-center justify-between gap-4 px-5 sm:px-10 py-5 border-b border-white/10">
          <div>
            <p className="eyebrow">Showcase</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Member Reviews <span className="text-[#D8F244]">({REVIEWS.length})</span></h3>
          </div>
          <IconBtn onClick={onClose} testId="reviews-showcase-close" label="Close showcase"><X size={20} /></IconBtn>
        </div>
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-10 py-6 sm:py-8">
          <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {REVIEWS.map((src, i) => (
              <motion.button key={src} onClick={() => onPick(i)} data-testid={`reviews-showcase-item-${i}`}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: Math.min(i * 0.025, 0.6) }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 aspect-[591/1280]">
                <img src={src} alt={`Member review ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const ReviewLightbox = ({ index, onClose, onStep }) => {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onStep]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div data-testid="review-lightbox" data-lenis-prevent onClick={onClose}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="review-glass review-glass-deep fixed inset-0 z-[90] flex items-center justify-center px-4 py-16 sm:py-10">
          <motion.img key={index} src={REVIEWS[index]} alt={`Member review ${index + 1}`} data-testid="review-lightbox-image"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
            drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.6} dragSnapToOrigin
            onDragEnd={(_, info) => {
              const dx = info.offset.x;
              if (Math.abs(dx) > 60 || Math.abs(info.velocity.x) > 450) onStep(dx < 0 ? 1 : -1);
            }}
            initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
            className="max-h-[80vh] sm:max-h-[86vh] w-auto max-w-[92vw] object-contain rounded-2xl cursor-grab active:cursor-grabbing touch-pan-y select-none border border-white/10 shadow-[0_30px_90px_-20px_rgba(124,58,237,0.6)]" />
          <IconBtn onClick={onClose} testId="review-lightbox-close" label="Close" className="absolute top-4 right-4 sm:top-6 sm:right-6 !h-12 !w-12"><X size={22} /></IconBtn>
          <IconBtn onClick={(e) => { e.stopPropagation(); onStep(-1); }} testId="review-lightbox-prev" label="Previous" className="absolute bottom-3 left-6 sm:bottom-auto sm:left-8 sm:top-1/2 sm:-translate-y-1/2"><ChevronLeft size={22} /></IconBtn>
          <IconBtn onClick={(e) => { e.stopPropagation(); onStep(1); }} testId="review-lightbox-next" label="Next" className="absolute bottom-3 right-6 sm:bottom-auto sm:right-8 sm:top-1/2 sm:-translate-y-1/2"><ChevronRight size={22} /></IconBtn>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const useScrollLock = (on) => {
  useEffect(() => {
    lockScroll(on);
    return () => lockScroll(false);
  }, [on]);
};
