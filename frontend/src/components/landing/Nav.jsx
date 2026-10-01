import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LOGO, NAV_LINKS } from "@/lib/site";
import { scrollToId } from "@/hooks/useLenis";
import { TelegramButton } from "./TelegramButton";

const ease = [0.22, 1, 0.36, 1];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > 24);
      const delta = y - lastY;
      if (y < 80) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY = y;
      const mid = window.innerHeight * 0.38;
      let current = "";
      NAV_LINKS.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= mid) current = l.id;
      });
      setActive(current);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (id) => { setOpen(false); setTimeout(() => scrollToId(id), 60); };

  return (
    <motion.header
      data-testid="site-nav"
      data-hidden={hidden && !open}
      initial={false}
      animate={{ y: hidden && !open ? "-110%" : 0, opacity: 1 }}
      transition={{ duration: hidden ? 0.45 : 0.55, ease }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="nav-bar relative" data-scrolled={scrolled}>
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? "h-14 lg:h-16" : "h-16 lg:h-[74px]"}`}>
          <div className="flex h-full items-center justify-between gap-3">
            <button onClick={() => go("hero")} data-testid="nav-logo" className="group flex items-center gap-2.5 shrink-0">
              <span className="relative">
                <img src={LOGO} alt="KM Nishat 99 logo" className="h-8 w-8 lg:h-9 lg:w-9 rounded-full object-cover ring-1 ring-[#D4D4DE]/25 transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 rounded-full ring-1 ring-[#D8F244]/0 group-hover:ring-[#D8F244]/40 transition-all duration-500" />
              </span>
              <span className="font-display font-bold tracking-tight text-[15px] lg:text-base text-grad">KM Nishat 99</span>
            </button>

            <nav className="hidden lg:flex items-center gap-1 rounded-xl border border-[#D4D4DE]/10 bg-[#D4D4DE]/[0.035] px-1.5 py-1 backdrop-blur-xl">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  data-testid={`nav-link-${l.id}`}
                  className={`relative rounded-lg px-3.5 py-1.5 text-[13px] transition-colors duration-300 ${
                    active === l.id ? "text-[#FFFFFF]" : "text-[#9494A8] hover:text-[#D4D4DE]"
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#D4D4DE]/16 to-[#D8F244]/12 border border-[#D4D4DE]/15"
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <TelegramButton testId="nav-telegram-btn" className="btn-w-auto !py-2 !px-[18px] !text-[13px]">Join Telegram</TelegramButton>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <TelegramButton testId="nav-mobile-cta-btn" className="btn-w-auto !py-1.5 !px-3.5 !text-xs">Join</TelegramButton>
              <button
                onClick={() => setOpen(!open)}
                data-testid="nav-mobile-toggle"
                aria-label="Toggle menu"
                aria-expanded={open}
                className="grid h-9 w-9 place-items-center rounded-xl border border-[#D4D4DE]/15 bg-[#D4D4DE]/[0.06] text-[#D4D4DE] active:scale-95 transition-transform"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4D4DE]/15 to-transparent" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
            data-testid="nav-mobile-menu"
            className="lg:hidden mx-3 mt-2 rounded-3xl border border-[#D4D4DE]/12 bg-[#100E1C]/95 backdrop-blur-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            <div className="p-3">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.4, ease }}
                  onClick={() => go(l.id)}
                  data-testid={`nav-mobile-link-${l.id}`}
                  className={`w-full flex items-center justify-between rounded-lg px-4 py-3.5 text-[15px] transition-colors ${
                    active === l.id ? "text-[#FFFFFF] bg-[#D4D4DE]/[0.07]" : "text-[#D4D4DE]"
                  }`}
                >
                  {l.label}
                  <ArrowUpRight size={15} className="text-[#D8F244]/70" />
                </motion.button>
              ))}
              <div className="px-1 pt-2 pb-1">
                <TelegramButton testId="nav-mobile-telegram-btn">Join Telegram</TelegramButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
