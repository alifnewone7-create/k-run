import { Video, Mic, Users } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { TelegramButton } from "./TelegramButton";
import { BenefitCards } from "./BenefitCards";

const Phone = () => (
  <div className="phone-float relative mx-auto w-[250px] sm:w-[280px]" data-testid="benefits-phone">
    <div className="absolute -inset-10 rounded-full bg-[#7C3AED]/[0.16] blur-[70px]" aria-hidden />
    <div className="relative rounded-[2.6rem] p-[9px] bg-gradient-to-b from-[#231E33] via-[#14121C] to-[#0B0A10] border border-[#8B5CF6]/25 shadow-[0_40px_90px_-30px_rgba(124,58,237,0.45)]">
      <div className="relative overflow-hidden rounded-[2.1rem] bg-[#262626] aspect-[9/19] flex flex-col">
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
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#D8F244] text-black"><Mic size={13} /></span>
          <span className="text-[11px] text-white/80">KM NISHAT is speaking…</span>
        </div>
      </div>
    </div>
  </div>
);

export const Benefits = () => (
  <section id="benefits" data-testid="benefits-section" className="relative section-y overflow-hidden">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHead align="center" icon={Video} eyebrow="Live with KM Nishat" title="Your Benefits" body="Learn live with KM Nishat through real sessions, real lessons and real guidance." />
      <Reveal delay={0.1} className="mt-16 lg:mt-20"><Phone /></Reveal>
      <BenefitCards />
      <Reveal delay={0.2} className="mt-10 sm:mt-12 flex justify-center">
        <TelegramButton testId="benefits-telegram-cta" className="w-full sm:w-auto text-base px-7 py-4">Start Your Trading Journey With Us</TelegramButton>
      </Reveal>
    </div>
  </section>
);
