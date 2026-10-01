import { useId } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const view = { once: true, margin: "-60px" };

export const DrawUnderline = ({ className = "", testId = "draw-underline" }) => {
  const id = useId().replace(/:/g, "");
  return (
    <div aria-hidden data-testid={testId} className={`pointer-events-none ${className}`}>
      <svg viewBox="0 0 240 20" fill="none" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id={`ug-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D8F244" />
            <stop offset="55%" stopColor="#EEF9A8" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <clipPath id={`uc-${id}`}>
            <motion.rect x="0" y="0" height="20" initial={{ width: 0 }} whileInView={{ width: 240 }} viewport={view} transition={{ duration: 1.1, delay: 0.28, ease }} />
          </clipPath>
        </defs>
        <g clipPath={`url(#uc-${id})`} fill={`url(#ug-${id})`}>
          <path d="M4 11.8 C 60 4.6, 140 3, 204 6 L 204 7.8 C 140 6, 62 9.6, 6 16.4 Q 0.8 14.4 4 11.8 Z" />
          <path d="M188 9.6 L 214 10 L 214 11.2 L 188 11 Z" opacity="0.8" />
        </g>
        <motion.circle cx="230" cy="10.4" r="2.2" fill="#FFFFFF" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={view} transition={{ duration: 0.35, delay: 1.25, ease }} style={{ transformOrigin: "230px 10.4px" }} />
      </svg>
    </div>
  );
};
