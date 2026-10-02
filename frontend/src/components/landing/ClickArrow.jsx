import { motion } from "framer-motion";

const CYCLE = { duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 1.3 };
const BODY = { pathLength: [0, 1, 1, 1], opacity: [0, 1, 1, 0], times: [0, 0.21, 0.95, 1] };
const HEAD = { pathLength: [0, 0, 1, 1, 1], opacity: [0, 0, 1, 1, 0], times: [0, 0.2, 0.26, 0.95, 1] };
const loop = ({ times, ...animate }) => ({ initial: { pathLength: 0, opacity: 0 }, animate, transition: { ...CYCLE, times } });

const PATHS = {
  side: ["M6 10 C 14 26, 28 30, 34 22 C 39 15, 31 9, 26 15 C 21 22, 30 34, 48 36 C 62 37.5, 76 34, 88 28", "M77 26.4 L88 28 L82.8 37.6"],
  down: ["M6 14 C 14 30, 28 32, 34 24 C 39 17, 31 11, 26 17 C 21 24, 32 34, 50 32 C 64 30, 76 28, 86 40", "M85.1 29 L86 40 L75.4 37.1"],
};

const stroke = { stroke: "currentColor", strokeWidth: 2.6, strokeLinecap: "round", strokeLinejoin: "round" };

export const ClickArrow = ({ className = "", variant = "side", testId = "hero-click-arrow" }) => (
  <div
    aria-hidden
    data-testid={testId}
    className={`pointer-events-none absolute ${className}`}
  >
    <svg viewBox="0 0 100 50" fill="none" className="h-full w-full overflow-visible text-[#D98C00]">
      <motion.path
        d={PATHS[variant][0]}
        {...stroke}
        {...loop(BODY)}
      />
      <motion.path d={PATHS[variant][1]} {...stroke} {...loop(HEAD)} />
    </svg>
  </div>
);
