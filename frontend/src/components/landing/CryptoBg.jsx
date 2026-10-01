const EthIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[55%] w-[55%]"><path d="M12 2 5.5 12.3 12 16.2l6.5-3.9L12 2Zm0 15.6-6.5-3.9L12 22l6.5-8.3-6.5 3.9Z" /></svg>
);
const BnbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[55%] w-[55%]"><path d="M12 3.5 14.6 6.1 12 8.7 9.4 6.1ZM17.9 9.4 20.5 12 17.9 14.6 15.3 12ZM6.1 9.4 8.7 12 6.1 14.6 3.5 12ZM12 9.4 14.6 12 12 14.6 9.4 12ZM12 15.3 14.6 17.9 12 20.5 9.4 17.9Z" /></svg>
);

const COINS = [
  { s: "₿", pos: "left-[4%] top-[2%]", size: "h-16 w-16 text-3xl lg:h-20 lg:w-20 lg:text-4xl", tone: "lime", d: "0s", t: "7s" },
  { s: "eth", icon: EthIcon, pos: "right-[6%] top-[0%]", size: "h-14 w-14 text-2xl lg:h-[4.5rem] lg:w-[4.5rem] lg:text-3xl", tone: "violet", d: "1.2s", t: "8s" },
  { s: "₮", pos: "left-[16%] top-[46%] hidden sm:grid", size: "h-11 w-11 text-xl", tone: "white", d: "2.1s", t: "6.5s" },
  { s: "◎", pos: "right-[15%] top-[42%] hidden sm:grid", size: "h-12 w-12 text-xl", tone: "lime", d: "0.6s", t: "7.5s" },
  { s: "Ł", pos: "left-[30%] -top-[4%] hidden lg:grid", size: "h-10 w-10 text-lg", tone: "violet", d: "1.8s", t: "9s" },
  { s: "✕", pos: "right-[30%] -top-[2%] hidden lg:grid", size: "h-9 w-9 text-sm", tone: "white", d: "2.6s", t: "6s" },
  { s: "bnb", icon: BnbIcon, pos: "right-[6%] top-[58%] sm:hidden", size: "h-10 w-10 text-lg", tone: "violet", d: "1.4s", t: "7s" },
];

const TONES = {
  lime: "text-[#D8F244] border-[#D8F244]/40 bg-[#D8F244]/[0.06]",
  violet: "text-[#A78BFA] border-[#8B5CF6]/45 bg-[#7C3AED]/[0.08]",
  white: "text-white border-white/25 bg-white/[0.04]",
};

export const CryptoBg = () => (
  <div aria-hidden data-testid="hero-crypto-bg" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] sm:h-[480px] max-w-6xl mx-auto">
    {COINS.map((c) => (
      <span
        key={c.s}
        className={`crypto-coin absolute grid place-items-center rounded-full border font-display font-bold ${c.pos} ${c.size} ${TONES[c.tone]}`}
        style={{ animationDelay: c.d, animationDuration: c.t }}
      >
        {c.icon ? <c.icon /> : c.s}
      </span>
    ))}
  </div>
);
