import { Video, Mic, Users } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { TelegramButton } from "./TelegramButton";
import { BenefitCards } from "./BenefitCards";
import { ClickArrow } from "./ClickArrow";

const Phone = () => (
  <div className="phone-float relative mx-auto w-[250px] sm:w-[280px]" data-testid="benefits-phone">
    <div className="absolute -inset-10 rounded-full bg-[#7C3AED]/[0.16] blur-[70px]" aria-hidden />
    <span className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l-md bg-gradient-to-b from-[#A78BFA] to-[#5B21B6]" aria-hidden />
    <span className="absolute -left-[3px] top-36 h-14 w-[3px] rounded-l-md bg-gradient-to-b from-[#A78BFA] to-[#5B21B6]" aria-hidden />
    <span className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r-md bg-gradient-to-b from-[#A78BFA] to-[#5B21B6]" aria-hidden />
    <div className="relative rounded-[2.75rem] p-[2px] bg-gradient-to-br from-[#C4B5FD] via-[#8B5CF6] to-[#6D28D9] shadow-[0_40px_90px_-30px_rgba(124,58,237,0.55),0_0_0_1px_rgba(255,255,255,0.04)]">
    <div className="relative rounded-[2.65rem] p-[8px] bg-gradient-to-b from-[#1E1A2B] via-[#111018] to-[#09080D] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(255,255,255,0.05)]">
      <div className="relative overflow-hidden rounded-[2.1rem] bg-[#262626] aspect-[9/19] flex flex-col ring-1 ring-black/60">
        <div className="relative flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-semibold text-white">
          <span>9:41</span>
          <span className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
          <span className="flex items-center gap-1"><span className="h-2 w-3 rounded-sm border border-white/70" /></span>
        </div>
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
          <span className="flex items-center gap-2 text-[13px] font-semibold text-white"><Users size={14} /> Live Call</span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#EF4444]/15 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#EF4444]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EF4444] animate-pulse" /> LIVE
          </span>
        </div>
        <img src="/live-call.png" alt="KM Nishat 99 live call participants" data-testid="benefits-phone-image" className="w-full object-cover" loading="lazy" />
        <div className="mt-auto flex items-center gap-2 px-4 py-3 bg-black/30">
          <span data-testid="benefits-mic-icon" className="relative grid h-7 w-7 place-items-center">
            <span className="absolute inset-0 rounded-full bg-[#D8F244]/60 animate-ping" aria-hidden />
            <span className="relative grid h-7 w-7 place-items-center rounded-full bg-[#D8F244] text-black animate-pulse"><Mic size={13} /></span>
          </span>
          <span className="text-[11px] text-white/80">KM NISHAT is speaking…</span>
        </div>
      </div>
    </div>
    </div>
  </div>
);

export const Benefits = () => (
  <section id="benefits" data-testid="benefits-section" className="relative section-y overflow-hidden band-deep">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHead align="center" icon={Video} eyebrow="Live with KM Nishat" title="Your Benefits" body="Learn live with KM Nishat through real sessions, real lessons and real guidance." />
      <Reveal delay={0.1} className="mt-16 lg:mt-20"><Phone /></Reveal>
      <BenefitCards />
      <Reveal delay={0.2} className="mt-8 sm:mt-12 flex justify-center">
        <div className="relative mb-12 sm:mb-0 flex justify-center w-full sm:w-auto">
          <ClickArrow variant="down" testId="benefits-click-arrow-mobile" className="sm:hidden left-4 -bottom-[50px] h-12 w-24 -scale-y-100" />
          <ClickArrow testId="benefits-click-arrow" className="hidden sm:block right-full mr-3 top-1/2 -mt-[31px] h-14 w-28" />
          <TelegramButton testId="benefits-telegram-cta" className="btn-shake w-full sm:w-auto text-base px-7 py-4">Join Free Telegram Channel</TelegramButton>
        </div>
      </Reveal>
    </div>
  </section>
);
