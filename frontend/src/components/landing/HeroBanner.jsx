import { TELEGRAM_URL } from "@/lib/site";
import { TelegramIcon } from "./TelegramButton";
import { Radio, ShieldCheck, Target } from "lucide-react";

const CHIPS = [
  { icon: Radio, label: "Live Sessions" },
  { icon: ShieldCheck, label: "Risk Management" },
  { icon: Target, label: "Daily Guidance" },
];

export const HeroBanner = () => (
  <div
    data-testid="hero-banner"
    className="group relative w-full max-w-[620px] sm:max-w-3xl lg:max-w-5xl overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-[#0D1B33]/10 shadow-[0_34px_80px_-36px_rgba(13,43,94,0.42)] transition-shadow duration-500 hover:shadow-[0_44px_100px_-36px_rgba(13,43,94,0.5)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F1F6FF] to-[#DCE9FF]" aria-hidden />
    <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
    <div className="absolute -right-10 -top-16 h-72 w-72 rounded-full bg-[#60A5FA]/25 blur-[70px]" aria-hidden />
    <div className="absolute -left-16 bottom-0 h-60 w-60 rounded-full bg-[#FFB300]/20 blur-[70px]" aria-hidden />

    <svg className="absolute inset-0 h-full w-full opacity-[0.16]" viewBox="0 0 800 300" preserveAspectRatio="none" aria-hidden>
      <path d="M0 240 L90 200 L170 215 L250 150 L330 170 L420 100 L510 125 L600 70 L700 90 L800 30" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
      {[[120, 190, 34], [230, 160, 46], [360, 140, 38], [470, 110, 52], [590, 80, 40]].map(([x, y, h], i) => (
        <g key={i} stroke="#1D4ED8" strokeWidth="2">
          <line x1={x} y1={y - 14} x2={x} y2={y + h + 14} />
          <rect x={x - 7} y={y} width="14" height={h} fill="#93C5FD" />
        </g>
      ))}
    </svg>

    <div className="relative flex items-stretch justify-between gap-2 pl-5 pr-1 pt-6 pb-5 sm:pl-9 sm:pr-3 sm:pt-9 sm:pb-7 lg:pl-12 lg:pt-11">
      <div className="flex flex-col items-start text-left max-w-[62%] sm:max-w-[60%]">
        <span className="inline-flex items-center gap-2 text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.26em] text-[#2563EB]">
          <TelegramIcon size={13} />
          Trading Community
        </span>

        <h2 className="mt-3 sm:mt-4 font-display font-bold tracking-[-0.035em] leading-[0.92] text-[1.75rem] sm:text-5xl lg:text-[3.6rem]">
          <span className="block text-grad">KM NISHAT</span>
          <span className="block text-[#E09400]">99</span>
        </h2>

        <p className="mt-3 sm:mt-5 text-[11px] sm:text-base lg:text-lg font-medium leading-snug text-[#15284A]">
          Stop trading with indiscipline.
          <span className="block text-[#55688A] font-normal">Trade with discipline on our live calls.</span>
        </p>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="hero-banner-cta"
          className="mt-4 sm:mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFE08A] via-[#FFB300] to-[#F59E0B] px-4 py-2 sm:px-6 sm:py-3 text-[11px] sm:text-sm font-bold text-[#1A1203] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_14px_30px_-12px_rgba(234,160,0,0.85)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          <TelegramIcon size={15} />
          Join Live Call
        </a>

        <div className="mt-4 sm:mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
          {CHIPS.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-[#0D1B33]/10 bg-white/80 px-2.5 py-1 text-[8px] sm:text-[11px] font-semibold text-[#33456B]">
              <Icon size={11} className="text-[#2563EB]" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex w-[38%] sm:w-[40%] items-end justify-center self-end">
        <div className="absolute bottom-0 h-[78%] w-[78%] rounded-full bg-gradient-to-t from-[#2563EB]/25 to-[#60A5FA]/10 blur-[36px]" aria-hidden />
        <img
          src="/km-nishat-cutout.png"
          alt="KM Nishat 99"
          data-testid="hero-banner-portrait"
          className="relative block h-auto w-full max-w-[190px] sm:max-w-[250px] lg:max-w-[300px] object-contain drop-shadow-[0_26px_40px_rgba(13,43,94,0.32)] transition-transform duration-700 group-hover:-translate-y-1"
        />
      </div>
    </div>
  </div>
);
