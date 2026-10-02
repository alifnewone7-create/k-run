import { motion, useScroll, useTransform } from "framer-motion";
import { LineReveal } from "./Reveal";
import { TelegramButton } from "./TelegramButton";
import { ClickArrow } from "./ClickArrow";
import { CryptoBg } from "./CryptoBg";
import { IS_MOBILE } from "@/hooks/useLenis";

const ease = [0.22, 1, 0.36, 1];


export const Hero = () => {
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 600], [0, 160]);

  return (
    <section id="hero" data-testid="hero-section" className="relative pt-24 lg:pt-28 pb-20 lg:pb-24 overflow-hidden">
      <motion.div style={IS_MOBILE ? undefined : { y: glowY }} className="pointer-events-none absolute inset-x-0 top-0 h-[90vh]" aria-hidden>
        <div className="hero-spot" />
        <div className="hero-beam" />
      </motion.div>
      <div className="violet-horizon" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col items-center gap-16 lg:gap-20">
        <CryptoBg />
        <div className="relative flex flex-col items-center text-center max-w-6xl">
          <div
            data-testid="hero-banner"
            className="group relative mb-10 sm:mb-14 w-full max-w-[620px] sm:max-w-3xl lg:max-w-4xl overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-[#0D1B33]/10 bg-white shadow-[0_30px_70px_-34px_rgba(13,43,94,0.4)] transition-shadow duration-500 hover:shadow-[0_40px_90px_-34px_rgba(13,43,94,0.5)]"
          >
            <img
              src="/hero-banner.jpg"
              alt="KM Nishat 99 — stop trading with indiscipline, trade with discipline on our live calls"
              data-testid="hero-banner-image"
              className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.015]"
            />
            <span className="pointer-events-none absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] ring-1 ring-inset ring-white/60" aria-hidden />
          </div>

          <LineReveal
            as="h1"
            className="font-display text-[2.2rem] leading-[1.08] sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-[4.5rem] font-bold tracking-[-0.03em] text-[#0D1B33]"
            lineClassName="[text-wrap:balance]"
            lines={["Start your trading journey.", "Become profitable", <>with <span className="text-lime">discipline.</span></>]}
          />

          <p className="mt-7 max-w-2xl text-sm sm:text-base md:text-lg text-[#55688A] leading-relaxed">
            KM Nishat 99 teaches smart price-action strategies, strict risk management and the trader psychology that actually keeps accounts alive. No hype. No gambling. Just process.
          </p>

          <div className="relative mt-16 sm:mt-10 flex justify-center w-full sm:w-auto">
            <ClickArrow variant="down" testId="hero-click-arrow-mobile" className="sm:hidden left-4 -top-[46px] h-12 w-24" />
            <ClickArrow className="hidden sm:block right-full mr-3 top-1/2 -mt-[31px] h-14 w-28" />
            <TelegramButton testId="hero-telegram-btn" className="btn-shake sm:!w-auto">Join Free Telegram Channel</TelegramButton>
          </div>
        </div>

      </div>
    </section>
  );
};
