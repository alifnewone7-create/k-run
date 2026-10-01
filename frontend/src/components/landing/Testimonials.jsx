import { Star, Quote, Users } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import { Reveal, SectionHead } from "./Reveal";

export const Testimonials = () => (
  <section id="testimonials" data-testid="testimonials-section" className="relative section-y band">
    <div className="glow-orb left-1/4 top-1/4 h-[420px] w-[420px] bg-[#8B5CF6]/[0.07]" aria-hidden />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHead icon={Users} eyebrow="Community" title="See it from traders like you." body="Members from Bangladesh and beyond who chose process over gambling." />
      <div className="mt-14 columns-1 md:columns-2 lg:columns-3 gap-3.5 [column-fill:_balance]">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.08} className="mb-3.5 break-inside-avoid">
            <figure data-testid={`testimonial-card-${i}`} className="group glass glass-lift rounded-3xl p-5 sm:p-6 relative overflow-hidden">
              <Quote size={44} className="absolute -top-1 right-3 text-[#D4D4DE]/[0.07]" aria-hidden />
              <div className="flex gap-0.5 text-[#D8F244]">{[...Array(5)].map((_, k) => <Star key={k} size={13} fill="currentColor" />)}</div>
              <blockquote className="mt-4 text-[14px] sm:text-[15px] text-[#D4D4DE]/92 leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="h-9 w-9 rounded-full grid place-items-center font-display font-bold text-sm text-[#0B0B0B] bg-gradient-to-br from-[#FFFFFF] via-[#D4D4DE] to-[#D8F244] shadow-[0_8px_20px_-10px_rgba(216,242,68,0.7)]">{t.name[0]}</span>
                <div>
                  <p className="text-sm font-semibold text-[#FFFFFF]">{t.name}</p>
                  <p className="text-[11px] font-mono text-[#55556A]">{t.place} · Verified member</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
