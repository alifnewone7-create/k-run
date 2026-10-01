import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const stroke = { stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", fill: "none" };

const draw = (delay, duration) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { pathLength: { duration, delay, ease }, opacity: { duration: 0.25, delay } },
});

export const DrawUnderline = ({ className = "", testId = "draw-underline" }) => (
  <div aria-hidden data-testid={testId} className={`pointer-events-none ${className}`}>
    <svg viewBox="0 0 220 26" fill="none" className="h-full w-full overflow-visible text-[#D8F244]">
      <motion.path
        d="M4 16 C 34 6, 66 6, 96 12 C 126 18, 158 19, 206 9"
        {...stroke}
        {...draw(0.28, 1.15)}
      />
      <motion.path
        d="M16 22 C 48 15, 84 15, 118 19 C 150 22.5, 176 21, 198 16"
        {...stroke}
        strokeWidth={1.4}
        opacity={0.5}
        {...draw(0.62, 0.95)}
      />
    </svg>
  </div>
);
