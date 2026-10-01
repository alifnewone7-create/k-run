import { AlertTriangle, ArrowUpRight, Compass } from "lucide-react";
import { LOGO, NAV_LINKS, TELEGRAM_URL } from "@/lib/site";
import { scrollToId } from "@/hooks/useLenis";
import { TelegramIcon } from "./TelegramButton";
import { IconTile } from "./IconTile";

export const Footer = () => (
  <footer data-testid="site-footer" className="relative pt-14 pb-10 overflow-hidden">
    <div className="hairline" />
    <div className="glow-orb left-1/2 -bottom-40 h-[420px] w-[520px] -translate-x-1/2 bg-[#7C3AED]/[0.07]" aria-hidden />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10 pt-6">
      <div className="md:col-span-5">
        <div className="flex items-center gap-3">
          <img src={LOGO} alt="KM Nishat 99" className="h-11 w-11 rounded-full object-cover ring-1 ring-[#D4D4DE]/25" />
          <span className="font-display text-lg sm:text-xl font-bold text-grad">KM Nishat 99</span>
        </div>
        <p className="mt-5 max-w-sm text-[13px] sm:text-sm text-[#9494A8] leading-relaxed">Start your trading journey and become profitable with discipline. Smart strategies, proper risk management and a community that holds you accountable.</p>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" data-testid="footer-telegram-link" className="group mt-6 inline-flex items-center gap-3 rounded-2xl border border-[#D4D4DE]/12 bg-[#D4D4DE]/[0.04] px-3.5 py-2.5 text-sm text-[#D4D4DE] hover:border-[#D8F244]/40 transition-colors">
          <IconTile icon={TelegramIcon} size="sm" />
          <span className="font-mono">t.me/kmnishat9</span>
          <ArrowUpRight size={14} className="text-[#D8F244] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
      <div className="md:col-span-3">
        <p className="eyebrow mb-5 flex items-center gap-2"><Compass size={13} className="text-[#D8F244]" /> Explore</p>
        <ul className="space-y-3">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button onClick={() => scrollToId(l.id)} data-testid={`footer-link-${l.id}`} className="group inline-flex items-center gap-2 text-sm text-[#9494A8] hover:text-[#D4D4DE] transition-colors">
                <span className="h-px w-3 bg-[#D4D4DE]/30 transition-all duration-300 group-hover:w-5 group-hover:bg-[#D8F244]" />
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-4">
        <p className="eyebrow mb-5 flex items-center gap-2"><AlertTriangle size={13} className="text-[#D8F244]" /> Risk disclaimer</p>
        <p data-testid="footer-disclaimer" className="text-xs text-[#55556A] leading-relaxed">
          Trading Forex, Gold and cryptocurrencies involves substantial risk of loss and is not suitable for every investor. All content shared by KM Nishat 99 is for educational purposes only and is not financial advice. Past performance does not guarantee future results. Never trade with money you cannot afford to lose.
        </p>
      </div>
    </div>
    <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-[#D4D4DE]/8 flex flex-col sm:flex-row justify-between gap-3 text-[11px] sm:text-xs font-mono text-[#55556A]">
      <span>© {new Date().getFullYear()} KM Nishat 99. All rights reserved.</span>
      <span>Discipline · Risk · Consistency</span>
    </div>
  </footer>
);
