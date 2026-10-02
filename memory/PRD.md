# KM Nishat 99 — Landing Page (React + FastAPI)

## Original problem statement
Clone & run a GitHub repo; evolved into heavy UI/UX polish + mobile performance work on a React landing page.
User language: **Banglish** (always respond in Banglish).

## Architecture
- `/app/frontend` — React, Tailwind, Framer Motion, shadcn/ui
- `/app/backend` — FastAPI (`/api/` health only)
- Key files: `src/pages/LandingPage.jsx`, `src/components/landing/*`, `src/index.css`

## Design system (current — light theme, June 2026)
- Background: off-white / soft blue gradient (`#E8F1FF → #FFFFFF → #E9F1FD`) with blue + gold radial glows
- Ink: `#0D1B33` (headings), `#33456B` / `#55688A` (body), `#8294B0` (muted)
- Blue: `#2563EB` / `#3B82F6` / `#60A5FA`
- Gold accent: `#FFB300` (fills, buttons), `#D98C00`–`#E09400` (accent text on white)
- CTA button (`.btn-ice`) = golden gradient with dark ink label
- Dark islands kept intentionally: phone mock, benefit widget cards, review screenshots

## Implemented (latest first)
- **2026-06**: Full color-grading switch from dark purple/lime to **light white+blue gradient theme with golden-yellow accent**. Rewrote `index.css` tokens (glass, chips, buttons, bands, hero spotlight, dividers, nav, carousel) and remapped all hardcoded hex classes across every landing component. Verified with desktop + mobile + overlay screenshots.
- **2026-06**: Removed page-open entrance fade-in (Hero line reveal, hero paragraph/button fade, Nav drop-in). Continuous animations kept.
- Restored `ReviewCarousel` continuous spin animation on mobile (mouse-tilt/sheen off for perf).
- Mobile perf optimizations in `BenefitCards` + `ReviewCarousel` via `IS_MOBILE`.

## Backlog
- **P0**: Replace dummy stats in `BenefitCards.jsx` ("82% capital kept", "1% risk", "24/7 learning") with real KM Nishat stats.
- **P1**: Add animated arrow + synced `btn-shake` to the footer/final "Join Telegram" button.
- **P2**: Glow effect on red "LIVE" badge in mobile phone frame (`Benefits.jsx`).

## Notes
- No 3rd-party integrations, no DB schema, no auth.
- User is very sensitive to mobile frame drops — keep mobile animations lightweight.
