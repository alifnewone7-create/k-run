import { ArrowUpRight, CandlestickChart, ShieldCheck, Brain, Radio, Sunrise, MessagesSquare, GraduationCap } from "lucide-react";
import { LEARN, TELEGRAM_URL } from "@/lib/site";
import { Reveal, SectionHead } from "./Reveal";
import { IconTile } from "./IconTile";
import { TelegramIcon } from "./TelegramButton";

const ICONS = [CandlestickChart, ShieldCheck, Brain, Radio, Sunrise, MessagesSquare];

const ChartArt = () => (
  <svg viewBox="0 0 400 160" className="absolute inset-x-0 bottom-0 w-full h-36 sm:h-44 opacity-70 sm:opacity-90" aria-hidden>
    <defs>
      <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FFB300" stopOpacity="0.32" />
        <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="stroke" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#2563EB" />
        <stop offset="1" stopColor="#FFB300" />
      </linearGradient>
    </defs>
    <path d="M0 130 L40 118 L80 124 L120 96 L160 104 L200 70 L240 84 L280 48 L320 60 L360 30 L400 36 L400 160 L0 160Z" fill="url(#fill)" />
    <path d="M0 130 L40 118 L80 124 L120 96 L160 104 L200 70 L240 84 L280 48 L320 60 L360 30 L400 36" fill="none" stroke="url(#stroke)" strokeWidth="2.2" strokeLinecap="round" />
    {[[120, 96], [200, 70], [280, 48], [360, 30]].map(([x, y], i) => (
      <g key={i}><circle cx={x} cy={y} r="4" fill="#FFFFFF" stroke="#D98C00" strokeWidth="2" /><text x={x + 8} y={y - 8} fill="#15803D" fontFamily="JetBrains Mono" fontSize="10">+{(i + 1) * 1.2}R</text></g>
    ))}
  </svg>
);

const TelegramArt = () => (
  <div className="absolute right-5 bottom-5 hidden md:flex flex-col gap-2 w-56" aria-hidden>
    {["GOLD BUY · 2342.5", "SL 2336.8 · TP 2351.2", "TP1 hit · SL to BE"].map((t, i) => (
      <div key={t} className="rounded-xl border border-[#0D1B33]/12 bg-[#FFFFFF]/85 backdrop-blur-md px-3 py-2 text-[11px] font-mono text-[#33456B] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)]" style={{ marginLeft: i * 10 }}>{t}</div>
    ))}
  </div>
);

export const Learn = () => (
  <section id="learn" data-testid="learn-section" className="relative section-y band">
    <div className="pointer-events-none absolute inset-0 grid-dots mask-fade-y opacity-35" aria-hidden />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHead icon={GraduationCap} eyebrow="What you'll learn" title="A complete system that takes you from reading the chart to protecting your account." body="Every lesson inside the Telegram channel is built around one goal: making you a consistent, disciplined trader." />

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:auto-rows-[244px]">
        {LEARN.map((c, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={c.title} delay={i * 0.07} className={`${c.span} h-full`}>
              <div data-testid={`learn-card-${i}`} className={`group glass glass-lift rounded-3xl p-5 sm:p-6 lg:p-7 h-full min-h-[200px] relative overflow-hidden flex flex-col ${c.chart ? "pb-40 sm:pb-44 lg:pb-7" : ""}`}>
                <div className="flex items-center justify-between gap-3">
                  <IconTile icon={Icon} size="sm" />
                  <span className="eyebrow !text-[0.62rem] text-[#8294B0]">{String(i + 1).padStart(2, "0")} · {c.tag}</span>
                </div>
                <h3 className={`font-display font-semibold mt-4 text-[#0D1B33] ${c.chart ? "text-xl sm:text-2xl lg:text-3xl text-grad" : "text-base sm:text-lg"}`}>{c.title}</h3>
                <p className={`text-[13px] sm:text-sm text-[#55688A] mt-2.5 leading-relaxed ${c.chart ? "max-w-sm" : ""} ${c.telegram ? "md:pr-64" : ""}`}>{c.body}</p>
                {c.chart && <ChartArt />}
                {c.telegram && <TelegramArt />}
                {c.telegram && (
                  <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" data-testid="learn-telegram-link" className="relative mt-auto pt-4 inline-flex items-center gap-2 text-sm text-[#33456B] hover:text-[#D98C00] transition-colors">
                    <TelegramIcon size={14} /> Open the channel <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
