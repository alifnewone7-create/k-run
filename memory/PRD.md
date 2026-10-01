# KM Nishat 99 — Landing Page PRD

## Original problem statement
Build a landing page for "Km Nishat 99" (trading mentor / Telegram community).
- OG Title: KM Nishat 99 | Start Your Trading Journey & Become Profitable With Discipline
- OG Description: Join our Telegram channel and start your trading journey with KM Nishat 99…
- Favicon / OG image: user-provided logo
- Background #050710, text/buttons #AFCAED
- Colour grading reference: authkit.com; structure reference: alveetrade.com

## User choices
- Telegram: https://t.me/kmnishat9 (only social link)
- Sections: Hero + About/Mentor + What You'll Learn + Results/Stats + Testimonials + FAQ + CTA + Footer
- Static only, no backend

## Architecture
- React (CRA/craco) + Tailwind + shadcn Accordion, framer-motion, lenis smooth scroll
- No backend routes used; FastAPI/Mongo template untouched
- Files: `src/pages/LandingPage.jsx`, `src/components/landing/*`, `src/lib/site.js` (all copy/data), `src/hooks/useLenis.js`, `public/index.html` (meta/OG/favicon), `public/km-logo.webp|og-image.jpg|favicon.*`

## Implemented (June 2026)
- Sticky glass nav w/ Telegram CTA + mobile menu
- Kinetic hero: line-by-line masked reveal, parallax light-leak, 3D tilt Telegram signal card
- Animated stats counters, Mentor section w/ logo spotlight, 6-card bento "What You'll Learn"
- Results: animated equity curve + trade rows (losses included), editorial marquee
- Testimonials masonry, FAQ accordion, final CTA light-leak block, footer w/ risk disclaimer
- Nav updated: full-width bar with bottom border/hairline separating it from content, compact sizes on mobile (Join pill + menu) and desktop, mobile dropdown menu with dividers

## Design system refresh (July 2026)
User request: gradient + glassy colour grading, professional icons, smooth mobile+desktop UI/design system.
User choices: accent gradient = ice blue → cyan (#AFCAED → #67E8F9); glass intensity = subtle & premium.
- `index.css` rewritten as a design system: layered radial-gradient mesh body background, `.glass` (16px blur + gradient hairline border via mask), `.text-grad` / `.text-grad-soft`, glossy `.btn-ice`, glass `.btn-ghost`, `.chip`, `.icon-tile`, `.glow-orb`, `.section-y` fluid spacing, gradient scrollbar, mobile-specific tweaks, reduced-motion guard
- New `IconTile.jsx` + custom `TelegramIcon` (inline SVG) — consistent Lucide icon language across Stats, Learn, Mentor, Results, Testimonials, FAQ, CTA, Footer (no emoji)
- Nav: active-section pill (layoutId spring), gradient scroll-progress line, AnimatePresence mobile menu with staggered links + body scroll lock, tighter desktop/mobile sizing
- Responsive polish: fluid heading sizes, full-width mobile buttons (`.btn-w-auto` opt-out), tighter card padding/gaps, truncation on trade rows
- Fixes this round: gradient text clipped hero lines 2–3 (moved `text-grad` onto each line span); signal-card candles not rendering (removed per-candle `motion.g`); mobile horizontal pan (`html{overflow-x:hidden}` + `body{overflow-x:clip}`)
- Verified: testing agent iteration_2 — frontend 100%, all 40+ test IDs resolved, no console errors, no horizontal overflow at 1920/390

## Section polish + nav + colour grading (June 2026)
User choices: nav hides on scroll-down / shows on scroll-up; keep dark+violet+lime palette but smoother; polish all sections (defaults).
- Nav: scroll-direction hide/show (`hidden` state, `data-hidden` attr, y -110%), stays visible while mobile menu open; `.nav-bar` solid on mobile (blur disabled there)
- Colour grading: body bg = smooth violet mesh (removed star dots), glass more neutral, btn-ice smoother gradient, violet-horizon/orbs/CTA glow toned down, dividers & hairlines neutral with small lime dot
- Learn card 0 chart no longer overlaps text on mobile (pb-40 sm:pb-44 lg:pb-7)
- Verified: testing agent iteration_5 — all pass, 0 console errors, no overflow at 1920/390

## Backlog
- P1: Real testimonial screenshots / video reviews; real trade history data
- P2: Multi-language (Bangla) toggle; blog section; join-click analytics


## 2026-06 Update: Benefits redesign
- Benefits 3 items redesigned as individual glass cards (stacked on mobile, 3-col on desktop) with icon, numbered index, lime label, title and description.
- Added English Telegram CTA below cards: "Start Your Trading Journey With Us" (data-testid=benefits-telegram-cta) -> TELEGRAM_URL.

## 2026-06 Update: Widget-style benefit cards
- New `BenefitCards.jsx`: 3 colored gradient widget cards (violet Session w/ orb + 12.5k+, teal Lesson w/ A→Z + waves, blue Guideline w/ 1:3 RR + bar chart), grain texture, "KM NISHAT" watermark bottom-right, stacked on mobile / 3-col on desktop. CSS `.wcard*` in index.css.

## 2026-06 Update: Hover/click name reveal for benefit cards
- BenefitCards.jsx now: left list of 3 big names (Session/Lesson/Guideline, data-testid benefit-name-{i}) with slide-up hover text + accent color; right preview panel (benefit-preview) stacks the 3 widget cards and slides vertically (spring) to the hovered/selected one. Default selected = Session. Click selects (works on mobile); hover previews on desktop.

## 2026-06 Update: Overlay hover-reveal (reference style)
- BenefitCards: centered single-line names (LIVE SESSION / LIVE LESSON / LIVE GUIDELINE), card floats OVER the text (pointer-events none), follows cursor with spring on desktop (>=640px & hover:hover), rests right-of-center otherwise. Mobile: tap selects, card fixed over right half of text. Default = Session.

## 2026-06 — Background redesign
- Replaced pure black (#050506) site background with deep indigo/charcoal (#0B0A14) + violet/lime/indigo ambient radial glows (fixed), subtle 64px grid (masked) and soft-light grain overlay via body::before/::after. Updated hardcoded #050506 fills (Results/Learn SVG dots, scrollbar, selection) and Nav/Learn surface tints to match.

## 2026-06 — "Deep Cosmos" Aura background (user-supplied colour grading)
- New `/app/frontend/src/components/landing/AuraBackground.jsx` mounted in App.js above LandingPage; 4 fixed full-page layers (`.aura-bg` + `.aura-layer-1..4` in index.css).
- body/html base colour now `#100e0b`; removed old body radial-mesh background-image. Layer 1 = violet linear gradient (alphas tempered to 0.34/0.46 for text contrast), layers 2-3 = screen-blend radial glows (blur 120px mobile / 260px desktop), layer 4 = screen-blend star dots.
- Content kept above via `.App > *:not(.aura-bg) { z-index: 1 }`. Verified by screenshots at top/mid/footer — readable, no overflow.
- REVERTED (same day, user request "ager background firiye anen"): Aura Deep Cosmos layers removed, AuraBackground.jsx deleted, old deep-indigo (#0B0A14) radial-mesh body background restored.

## 2026-06 — Professional colour grading refresh (violet + lime kept, cinematic)
- Body bg: single top violet spotlight + soft bottom glow + smooth vertical gradient (#100D1F → #080710); removed blotchy lime/side patches. `body::before` vignette (desktop only).
- Hero: new `.hero-spot` (white core + violet halo) + `.hero-beam` light cone (desktop only); `violet-horizon` toned down.
- Section depth: `.band` (Learn, Testimonials = lifted violet tint) / `.band-deep` (Benefits, Results = slightly darker) for scroll rhythm.
- Dividers/hairlines violet-tinted with lime glowing centre dot; glass slightly brighter top highlight; nav bar indigo-tinted; btn-ice gets lavender ring + stronger glow.
- Verified via screenshots at 1920 and 390 (hero, learn, testimonials, benefits).
