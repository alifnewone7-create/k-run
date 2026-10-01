import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Video, BookOpenCheck, Compass, ShieldCheck, Brain, Radio, GraduationCap, Target, Wallet, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];
const spring = { type: "spring", stiffness: 400, damping: 40, mass: 1 };
const STARS = [[12, 18], [28, 62], [70, 22], [86, 48], [58, 80], [40, 36], [78, 74], [18, 84]];

const Card = ({ tone, icon: Icon, title, chip: ChipIcon, chipText, caption, children }) => (
  <div className={`wcard wcard-${tone} h-full w-full flex flex-col p-6 sm:p-7`}>
    <span className="wcard-grid" aria-hidden />
    <div className="flex items-start justify-between">
      <span className="wcard-icon"><Icon size={22} strokeWidth={1.8} /></span>
      <span className="wcard-chip"><ChipIcon size={11} strokeWidth={2.2} />{chipText}</span>
    </div>
    <div className="mt-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">Live</p>
      <p className="text-[22px] font-semibold text-white leading-tight tracking-[-0.02em]">{title}</p>
    </div>
    <div className="relative flex-1 flex flex-col items-center justify-center py-3">{children}</div>
    <div className="wcard-foot"><p className="text-[13px] text-white/85 pr-16">{caption}</p></div>
    <span className="wcard-mark" aria-hidden>KM NISHAT</span>
  </div>
);

const Stat = ({ value, label, className = "text-6xl" }) => (
  <>
    <p className={`wcard-num ${className}`}>{value}</p>
    <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/60">{label}</p>
  </>
);

const SessionCard = () => (
  <Card tone="violet" icon={Video} title="Session" chip={Radio} chipText="On air" caption="Real trades · Real time">
    {STARS.map(([x, y], k) => <span key={k} className="w-star" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${k * 0.4}s` }} />)}
    <div className="relative">
      <span className="w-ring" /><span className="w-ring d2" />
      <div className="w-orb !w-24 !h-24" />
    </div>
    <div className="mt-6 text-center"><Stat value="12.5k+" label="Traders learning live" className="text-5xl" /></div>
  </Card>
);

const WAVES = ["M0 50 C 40 20, 70 20, 110 50 S 180 80, 220 50 S 290 20, 320 50", "M0 60 C 45 40, 75 40, 115 60 S 185 85, 225 60 S 295 40, 320 60", "M0 42 C 50 70, 80 70, 120 42 S 190 10, 230 42 S 300 70, 320 42"];
const LessonCard = () => (
  <Card tone="teal" icon={BookOpenCheck} title="Lesson" chip={GraduationCap} chipText="Beginner friendly" caption="Price action · Risk · Psychology">
    <div className="text-center"><Stat value="A → Z" label="Structured curriculum" className="text-6xl" /></div>
    <svg viewBox="0 0 320 90" className="mt-6 w-full max-w-[260px]" fill="none" strokeLinecap="round">
      {WAVES.map((d, k) => (
        <motion.path key={k} d={d} stroke="#fff" strokeOpacity={0.85 - k * 0.3} strokeWidth={k === 0 ? 2 : 1.4}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: 0.3 + k * 0.2, ease }} />
      ))}
    </svg>
  </Card>
);

const BARS = [28, 46, 40, 92, 62, 34, 24];
const GuidelineCard = () => (
  <Card tone="blue" icon={Compass} title="Guideline" chip={Target} chipText="Discipline" caption="Risk 1% · Follow the plan">
    <div className="text-center"><Stat value="1:3 RR" label="Minimum risk : reward" className="text-6xl" /></div>
    <div className="mt-6 grid grid-cols-7 gap-2 w-full max-w-[240px] items-end h-20">
      {BARS.map((h, k) => (
        <div key={k} className="flex flex-col items-center gap-1.5 h-full justify-end">
          <motion.div className={`w-bar ${k === 3 ? "on" : ""}`} style={{ height: `${h}%` }}
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + k * 0.08, ease }} />
          <span className={`text-[10px] ${k === 3 ? "text-white" : "text-white/45"}`}>{"MTWTFSS"[k]}</span>
        </div>
      ))}
    </div>
  </Card>
);

const RING = 2 * Math.PI * 44;
const ManagementCard = () => (
  <Card tone="rose" icon={ShieldCheck} title="Management" chip={Wallet} chipText="Capital safe" caption="Position size · Stop loss · Drawdown">
    <div className="relative grid place-items-center h-36 w-36">
      <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
        <circle cx="50" cy="50" r="44" stroke="rgba(255,255,255,0.12)" strokeWidth="6" fill="none" />
        <motion.circle cx="50" cy="50" r="44" stroke="url(#w-rose)" strokeWidth="6" strokeLinecap="round" fill="none" strokeDasharray={RING}
          initial={{ strokeDashoffset: RING }} whileInView={{ strokeDashoffset: RING * 0.18 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: 0.3, ease }} />
        <defs><linearGradient id="w-rose" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFE4E6" /><stop offset="100%" stopColor="#FB7185" /></linearGradient></defs>
      </svg>
      <div className="text-center"><p className="wcard-num text-4xl">82%</p><p className="text-[9px] uppercase tracking-[0.2em] text-white/60 mt-1">Capital kept</p></div>
    </div>
    <div className="mt-5 flex gap-2">
      {["1% risk", "SL first", "No revenge"].map((t) => <span key={t} className="wcard-tag">{t}</span>)}
    </div>
  </Card>
);

const STEPS = ["Basics", "Strategy", "Mindset", "Mastery"];
const LearningCard = () => (
  <Card tone="orange" icon={Brain} title="Learning" chip={Sparkles} chipText="Every day" caption="Q&A · Chart review · Growth">
    <div className="text-center"><Stat value="24/7" label="Community learning" className="text-6xl" /></div>
    <div className="mt-7 w-full max-w-[250px]">
      <div className="relative h-1.5 rounded-full bg-white/15">
        <motion.div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-white to-[#FDBA74]"
          initial={{ width: 0 }} whileInView={{ width: "75%" }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.3, ease }} />
      </div>
      <div className="mt-3 flex justify-between">
        {STEPS.map((s, k) => <span key={s} className={`text-[10px] ${k < 3 ? "text-white" : "text-white/45"}`}>{s}</span>)}
      </div>
    </div>
  </Card>
);

const ITEMS = [
  { name: "LIVE SESSION", Comp: SessionCard },
  { name: "LIVE LESSON", Comp: LessonCard },
  { name: "LIVE GUIDELINE", Comp: GuidelineCard },
  { name: "LIVE MANAGEMENT", Comp: ManagementCard },
  { name: "LIVE LEARNING", Comp: LearningCard },
];

const CARD_W = 340;
const CARD_H = 425;
const canHover = () => typeof window !== "undefined" && window.innerWidth >= 640 && window.matchMedia("(hover: hover)").matches;

const NameRow = ({ item, i, active, dim, onEnter, onSelect }) => (
  <button type="button" data-testid={`benefit-name-${i}`} aria-pressed={active} onMouseEnter={onEnter} onClick={onSelect}
    className="block overflow-hidden outline-none">
    <motion.span className="relative block font-display text-[2rem] sm:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-none whitespace-pre"
      animate={{ y: active ? "-100%" : "0%" }} transition={spring}>
      <span className="block transition-colors duration-300" style={{ color: dim ? "#51565A" : "#FFFFFF" }}>{item.name}</span>
      <span aria-hidden className="block absolute top-full left-0 w-full text-white">{item.name}</span>
    </motion.span>
  </button>
);

export const BenefitCards = () => {
  const ref = useRef(null);
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [scale, setScale] = useState(0.8);
  const current = hovered ?? selected;
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 26, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 90, damping: 26, mass: 0.6 });

  const rest = () => {
    const el = ref.current;
    if (!el) return;
    const w = el.offsetWidth;
    const mobile = w < 640;
    setScale(mobile ? 0.56 : 0.82);
    rawX.set(mobile ? w * 0.7 : w / 2 + 230);
    rawY.set(el.offsetHeight / 2);
  };

  useEffect(() => {
    rest();
    window.addEventListener("resize", rest);
    return () => window.removeEventListener("resize", rest);
  }, []);

  useEffect(() => {
    if (hovered !== null) return;
    const id = setInterval(() => setSelected((s) => (s + 1) % ITEMS.length), 2000);
    return () => clearInterval(id);
  }, [hovered, selected]);

  const onMove = (e) => {
    if (!canHover()) return;
    const r = ref.current.getBoundingClientRect();
    const half = (CARD_H * scale) / 2 + 8;
    rawX.set(e.clientX - r.left + 200);
    rawY.set(Math.min(Math.max(e.clientY - r.top, half), r.height - half));
  };

  return (
    <motion.div ref={ref} data-testid="benefits-strip" onMouseMove={onMove} onMouseLeave={() => { setHovered(null); rest(); }}
      className="relative mx-auto mt-14 lg:mt-20 max-w-5xl min-h-[360px] sm:min-h-[560px] lg:min-h-[640px] overflow-hidden flex flex-col items-start sm:items-center justify-center"
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, ease }}>
      <div className="relative z-[1] flex flex-col items-start sm:items-center gap-4 sm:gap-7">
        {ITEMS.map((item, i) => (
          <NameRow key={item.name} item={item} i={i} active={current === i} dim={current !== i}
            onEnter={() => canHover() && setHovered(i)} onSelect={() => { setSelected(i); setHovered(null); }} />
        ))}
      </div>
      <motion.div data-testid="benefit-preview" className="pointer-events-none absolute top-0 left-0 z-[2] rounded-[1.6rem] overflow-hidden shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]"
        style={{ x, y, translateX: "-50%", translateY: "-50%", width: CARD_W * scale, height: CARD_H * scale }}>
        <div style={{ width: CARD_W, height: CARD_H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
          {ITEMS.map(({ Comp }, i) => (
            <motion.div key={i} data-testid={`benefit-item-${i}`} className="absolute inset-0" initial={false}
              animate={{ y: i < current ? "-100%" : i > current ? "100%" : "0%" }} transition={spring}>
              <Comp />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
