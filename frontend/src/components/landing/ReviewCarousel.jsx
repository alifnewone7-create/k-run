import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { RING } from "@/lib/reviews";
import { IS_MOBILE } from "@/hooks/useLenis";

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const mix = (a, b, t) => a + (b - a) * t;
const out = (t) => 1 - (1 - t) ** 4;
const rate = (speed) => 1.6 - (speed / 100) * 1.2;
const stillness = () => typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const springOf = (tune) => ({ k: 0.08 + (tune / 100) * 0.16, d: 0.62 + (tune / 100) * 0.2 });

function useSpring(target, tune = 50, instant = false) {
  const [at, setAt] = useState(target);
  const cur = useRef(target);
  const vel = useRef(0);
  const raf = useRef(0);
  useEffect(() => {
    if (instant) { cur.current = target; vel.current = 0; setAt(target); return; }
    const { k, d } = springOf(tune);
    let prev = 0;
    const tick = (t) => {
      const dt = prev ? clamp((t - prev) / 16.67, 0, 2.5) : 1;
      prev = t;
      vel.current += (target - cur.current) * k * dt;
      vel.current *= Math.pow(d, dt);
      cur.current += vel.current * dt;
      if (Math.abs(target - cur.current) < 0.02 && Math.abs(vel.current) < 0.02) {
        cur.current = target; vel.current = 0; setAt(target); raf.current = 0; return;
      }
      setAt(cur.current);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf.current); raf.current = 0; };
  }, [target, tune, instant]);
  return at;
}

const CARD_W = 230;
const CARD_H = 480;
const STAGE_W = 720;
const STAGE_H = 580;
const ORBIT = 240;
const DEPTH = 100;
const DEPTH_MAX = 150;
const CORNER = 18;
const FLOAT = 45;
const SINK = 50;
const SETTLE = 50;
const LEAN = 40;
const PULL = 140;
const TOSS = 150;
const MOST = 2;
const BASE = 620;
const N = RING.length;
const OPENS_ON = Math.floor((N - 1) / 2);
const ANGLE = [-4.2, 2.6, -1.4, 3.8, 1.7, -2.9, 0.8];
const PERIOD = [4.7, 5.9, 6.7, 5.3, 7.1, 6.1, 5.6];

const spotOf = (i, turn, orbit, depth) => {
  const th = (i - turn) * ((Math.PI * 2) / N);
  const f = (Math.cos(th) + 1) / 2;
  return {
    x: Math.sin(th) * orbit,
    y: -(1 - f) * LEAN,
    s: mix(1 - clamp(depth, 0, DEPTH_MAX) / 200, 1, f),
    z: Math.round(f * 100),
  };
};

const write = (el, sp, angle) => {
  el.style.transform = `translate(-50%, -50%) translate(${sp.x.toFixed(2)}px, ${sp.y.toFixed(2)}px) rotate(${angle}deg) scale(${sp.s.toFixed(4)})`;
  el.style.zIndex = String(sp.z);
};

const useFit = () => {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1, e.contentRect.width / (STAGE_W * 0.78))));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, scale];
};

export function ReviewCarousel({ onOpen, spin = 42 }) {
  const still = stillness();
  const slots = useRef([]);
  const turn = useRef(OPENS_ON);
  const raf = useRef(0);
  const drag = useRef(null);
  const [held, setHeld] = useState(false);
  const [fitRef, scale] = useFit();

  const paint = useCallback(() => {
    slots.current.forEach((el, i) => el && write(el, spotOf(i, turn.current, ORBIT, DEPTH), ANGLE[i % ANGLE.length]));
  }, []);

  useLayoutEffect(paint, [paint]);
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  useEffect(() => {
    if (!spin || still || held) return;
    if (IS_MOBILE) {
      const id = setInterval(() => glideRef.current(Math.round(turn.current) + 1), 3200);
      return () => clearInterval(id);
    }
    let id = 0;
    let prev = 0;
    const step = (t) => {
      if (prev) turn.current += ((t - prev) / 1000) * (N / spin);
      prev = t;
      paint();
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [spin, still, held, paint]);

  const glideRef = useRef(() => {});
  const glide = (to) => {
    cancelAnimationFrame(raf.current);
    const from = turn.current;
    if (still || from === to) { turn.current = to; paint(); return; }
    const ms = BASE * rate(clamp(SETTLE, 0, 100));
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / ms);
      turn.current = mix(from, to, out(p));
      paint();
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };
  glideRef.current = glide;

  const go = (d) => glide(Math.round(turn.current) + d);

  const down = (e) => {
    cancelAnimationFrame(raf.current);
    const hit = e.target.closest?.("[data-idx]");
    drag.current = { x0: e.clientX, t0: turn.current, last: e.clientX, t: e.timeStamp, vx: 0, moved: false, idx: hit ? Number(hit.dataset.idx) : null };
    setHeld(true);
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* not a live pointer */ }
  };

  const move = (e) => {
    const g = drag.current;
    if (!g) return;
    const dx = (e.clientX - g.x0) / scale;
    if (!g.moved && Math.abs(dx) > 4) g.moved = true;
    const dt = Math.max(1, e.timeStamp - g.t);
    g.vx = (g.vx + (e.clientX - g.last) / scale / dt) / 2;
    g.last = e.clientX;
    g.t = e.timeStamp;
    turn.current = g.t0 - dx / PULL;
    paint();
  };

  const up = () => {
    const g = drag.current;
    if (!g) return;
    drag.current = null;
    setHeld(false);
    if (!g.moved && g.idx !== null) onOpen?.(g.idx);
    const carry = clamp((-g.vx * TOSS) / PULL, -MOST, MOST);
    glide(Math.round(turn.current + carry));
  };

  const key = (e) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    go(d);
  };

  return (
    <div ref={fitRef} className="w-full flex justify-center" data-testid="reviews-carousel">
      <div className="relative shrink-0" style={{ width: STAGE_W * scale, height: STAGE_H * scale }}>
        <div className="car absolute left-0 top-0 origin-top-left" style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}>
          <div
            className="car-track"
            data-held={held}
            role="group"
            aria-label="Member reviews carousel"
            aria-roledescription="carousel"
            tabIndex={0}
            onKeyDown={key}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={up}
          >
            {RING.map((shot, i) => (
              <div key={shot.src} ref={(el) => { slots.current[i] = el; }} className="car-slot" style={{ width: CARD_W, height: CARD_H }}>
                <div
                  className="car-float"
                  style={{
                    animationDuration: `${PERIOD[i % PERIOD.length]}s`,
                    "--lift": `${((FLOAT / 100) * 16).toFixed(2)}px`,
                    "--sway": `${((FLOAT / 100) * 1.4).toFixed(2)}deg`,
                  }}
                >
                  <Card shot={shot.src} idx={shot.idx} corner={CORNER} sink={SINK} off={held || still} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ shot, idx, corner, sink, off }) {
  const skin = useRef(null);
  const [pt, setPt] = useState({ x: 0, y: 0 });
  const [on, setOn] = useState(false);
  const still = stillness();
  const live = on && !off;
  const sx = useSpring(live ? pt.x : 0, 50, still);
  const sy = useSpring(live ? pt.y : 0, 50, still);
  const lit = useSpring(live ? 1 : 0, 50, still);
  const deep = clamp(sink, 0, 100) / 100;
  const max = deep * 13;
  const rx = -sy * max;
  const ry = sx * max;
  const px = ((sx + 1) / 2) * 100;
  const py = ((sy + 1) / 2) * 100;
  const dark = deep * 0.5 * lit;
  const rim = deep * 0.16 * lit;

  const track = (e) => {
    if (e.pointerType !== "mouse") return;
    const b = skin.current.getBoundingClientRect();
    setPt({ x: clamp(((e.clientX - b.left) / b.width) * 2 - 1, -1, 1), y: clamp(((e.clientY - b.top) / b.height) * 2 - 1, -1, 1) });
    setOn(true);
  };

  return (
    <div
      ref={skin}
      data-idx={idx}
      data-testid={`review-ring-card-${idx}`}
      className="car-card"
      onPointerMove={track}
      onPointerOut={(e) => { const to = e.relatedTarget; if (!to || !skin.current.contains(to)) setOn(false); }}
      onPointerCancel={() => setOn(false)}
      style={{
        borderRadius: corner,
        backgroundImage: `url(${shot})`,
        transform: `translateZ(${(-10 * deep * lit).toFixed(2)}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`,
        boxShadow: "0 12px 28px -10px rgba(var(--shadow-rgb), 0.28)",
      }}
    >
      <span
        className="car-sheen"
        aria-hidden="true"
        style={{
          borderRadius: corner,
          backgroundImage: `radial-gradient(44% 36% at ${px.toFixed(1)}% ${py.toFixed(1)}%, rgba(9, 14, 28, ${dark.toFixed(3)}) 0%, rgba(9, 14, 28, 0) 100%), radial-gradient(54% 44% at ${(100 - px).toFixed(1)}% ${(100 - py).toFixed(1)}%, rgba(255, 255, 255, ${rim.toFixed(3)}) 0%, rgba(255, 255, 255, 0) 100%)`,
        }}
      />
    </div>
  );
}
