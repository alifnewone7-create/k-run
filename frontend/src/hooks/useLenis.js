import { useEffect, useRef } from "react";
import Lenis from "lenis";

let lenisInstance = null;

export const IS_MOBILE = typeof window !== "undefined" && window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches;

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) lenisInstance.scrollTo(el, { offset: -72, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const lockScroll = (on) => {
  document.documentElement.style.overflow = on ? "hidden" : "";
  if (!lenisInstance) return;
  if (on) lenisInstance.stop();
  else lenisInstance.start();
};

export const useLenis = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (IS_MOBILE) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisInstance = lenis;
    ref.current = lenis;
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); lenisInstance = null; };
  }, []);
  return ref;
};
