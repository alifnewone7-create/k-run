import { ShieldCheck, Zap, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { TelegramButton } from "./TelegramButton";

const perks = [
  { icon: Zap, label: "Free forever" },
  { icon: ShieldCheck, label: "No card needed" },
  { icon: Clock, label: "Leave anytime" },
];

export const FinalCTA = () => (
  <section id="cta" data-testid="cta-section" className="relative py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[#0D1B33]/12 px-5 py-16 sm:px-16 lg:py-28 text-center backdrop-blur-xl">
          <div className="absolute inset-0" style={{ background: "linear-gradient(165deg, rgba(212,212,222,0.07), rgba(139,92,246,0.04) 55%, transparent)" }} aria-hidden />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 112%, rgba(139,92,246,0.26), transparent 70%)" }} aria-hidden />
          <div className="absolute inset-0 grid-lines mask-fade-y opacity-50" aria-hidden />
          <div className="relative">
            <span className="chip mx-auto mb-6"><span className="live-dot" /><span className="uppercase tracking-[0.18em]">Final step</span></span>
            <h2 className="font-display text-[2.2rem] sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] leading-[1.03] text-grad text-glow">
              The door is open.<br />Walk through it.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-sm sm:text-base md:text-lg text-[#55688A]">Join the KM Nishat 99 Telegram channel now. It's free, and the next disciplined trade could be yours.</p>
            <div className="mt-9 flex justify-center">
              <TelegramButton testId="cta-telegram-btn" className="sm:!w-auto sm:!text-base sm:!px-8 sm:!py-4">Join Free Telegram Channel</TelegramButton>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-mono text-[#55688A]">
              {perks.map((p) => (
                <span key={p.label} className="flex items-center gap-2"><p.icon size={13} className="text-[#D98C00]" />{p.label}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
