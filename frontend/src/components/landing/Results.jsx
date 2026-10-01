import { motion } from "framer-motion";
import { BadgeCheck, TrendingUp } from "lucide-react";
import { TRADES } from "@/lib/site";
import { Reveal, SectionHead } from "./Reveal";

const curve = [0, 1.2, 2.1, 1.6, 3.4, 4.6, 4.1, 6.2, 7.9, 7.4, 9.1, 11.3];

export const Results = () => {
  const w = 600, h = 220;
  const pts = curve.map((v, i) => [(i / (curve.length - 1)) * w, h - 20 - (v / 12) * (h - 40)]);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");

  return (
    <section id="results" data-testid="results-section" className="relative section-y overflow-hidden">
      <div className="glow-orb -right-40 top-0 h-[600px] w-[600px] bg-[#7C3AED]/[0.07]" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHead icon={TrendingUp} eyebrow="Results · Verified inside Telegram" title="Real trades. Real numbers. Losses included." body="We post every trade, both wins and losses, along with the reasoning behind it. Consistency comes from the process, not from hiding the red." />

        <div className="mt-14 grid lg:grid-cols-12 gap-4 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <div data-testid="equity-curve-card" className="glass rounded-3xl p-5 sm:p-7 lg:p-8 h-full">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow">Community equity curve · last 12 weeks</p>
                  <p className="font-mono text-2xl sm:text-4xl font-bold text-[#22C55E] mt-2">+11.3%</p>
                </div>
                <span className="chip !text-[11px] whitespace-nowrap"><BadgeCheck size={14} className="text-[#D8F244]" /> 1% risk / trade</span>
              </div>
              <svg viewBox={`0 0 ${w} ${h}`} className="mt-6 w-full h-48 sm:h-56" aria-hidden>
                <defs>
                  <linearGradient id="eq" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#D8F244" stopOpacity="0.3" /><stop offset="1" stopColor="#D4D4DE" stopOpacity="0" /></linearGradient>
                  <linearGradient id="eqline" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stopColor="#D4D4DE" /><stop offset="1" stopColor="#D8F244" /></linearGradient>
                </defs>
                {[0, 1, 2, 3].map((i) => <line key={i} x1="0" x2={w} y1={20 + i * ((h - 40) / 3)} y2={20 + i * ((h - 40) / 3)} stroke="#D4D4DE" strokeOpacity="0.08" />)}
                <motion.path d={`${d} L${w} ${h} L0 ${h}Z`} fill="url(#eq)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.6 }} />
                <motion.path d={d} fill="none" stroke="url(#eqline)" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeInOut" }} />
                <motion.circle cx={pts.at(-1)[0]} cy={pts.at(-1)[1]} r="6" fill="#050506" stroke="#22C55E" strokeWidth="2.5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.7 }} />
              </svg>
            </div>
          </Reveal>

          <div className="lg:col-span-5 grid gap-3">
            {TRADES.map((t, i) => {
              const loss = t.result.startsWith("-");
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <div data-testid={`trade-row-${i}`} className="glass rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className={`h-9 w-[3px] rounded-full ${loss ? "bg-gradient-to-b from-[#EF4444] to-[#EF4444]/40" : "bg-gradient-to-b from-[#D8F244] to-[#22C55E]"}`} />
                      <div className="min-w-0">
                        <p className="font-mono font-semibold text-sm sm:text-base text-[#FFFFFF]">{t.pair}</p>
                        <p className="text-[11px] sm:text-xs text-[#9494A8] truncate">{t.setup}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className={`font-mono font-bold text-sm sm:text-base ${loss ? "text-[#EF4444]" : "text-[#22C55E]"}`}>{t.result}</p>
                      <p className="text-[11px] font-mono text-[#55556A]">{t.rr}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
