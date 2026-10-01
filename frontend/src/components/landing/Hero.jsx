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
      <motion.div style={IS_MOBILE ? undefined : { y: glowY }} className="pointer-events-none absolute inset-x-0 -top-40 h-[75vh]" aria-hidden>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(255,255,255,0.06), rgba(5,5,6,0) 70%)" }} />
      </motion.div>
      <div className="violet-horizon" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col items-center gap-16 lg:gap-20">
        <CryptoBg />
        <div className="relative flex flex-col items-center text-center max-w-6xl">
          <LineReveal
            as="h1"
            delay={0.45}
            className="font-display text-[2.2rem] leading-[1.08] sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-[4.5rem] font-bold tracking-[-0.03em] text-[#FFFFFF]"
            lineClassName="[text-wrap:balance]"
            lines={["Start your trading journey.", "Become profitable", <>with <span className="text-lime">discipline.</span></>]}
          />

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.95, ease }}
            className="mt-7 max-w-2xl text-sm sm:text-base md:text-lg text-[#9494A8] leading-relaxed">
            KM Nishat 99 teaches smart price-action strategies, strict risk management and the trader psychology that actually keeps accounts alive. No hype. No gambling. Just process.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.1, ease }}
            className="relative mt-16 sm:mt-10 flex justify-center w-full sm:w-auto">
            <ClickArrow variant="down" testId="hero-click-arrow-mobile" className="sm:hidden left-4 -top-[46px] h-12 w-24" />
            <ClickArrow className="hidden sm:block right-full mr-3 top-1/2 -mt-[31px] h-14 w-28" />
            <TelegramButton testId="hero-telegram-btn" className="sm:!w-auto">Join Free Telegram Channel</TelegramButton>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
