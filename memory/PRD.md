# KM Nishat 99 — Landing Page (React + FastAPI)

## Original problem statement
Clone & run a GitHub repo; evolved into heavy UI/UX polish + mobile performance work on a React landing page.
User language: **Banglish** (always respond in Banglish).

## Architecture
- `/app/frontend` — React, Tailwind, Framer Motion, shadcn/ui
- `/app/backend` — FastAPI (`/api/` health only)
- Key files: `src/pages/LandingPage.jsx`, `src/components/landing/*`, `src/index.css`

## Implemented (latest first)
- **2026-06 (this session)**: Removed page-open entrance fade-in — Hero heading line reveal, hero paragraph/button fade-in, and Nav drop-in. Content now renders instantly on load. Continuous animations (carousel spin, btn-shake, arrow, glows) kept intact. Verified via screenshot.
- Restored `ReviewCarousel` continuous spin animation on mobile (mouse-tilt/sheen still off for perf).
- Mobile perf optimizations in `BenefitCards` + `ReviewCarousel` via `IS_MOBILE`.
- Cinematic color grading, hero spotlight, section depth bands, vignette.

## Backlog
- **P0**: Replace dummy stats in `BenefitCards.jsx` ("82% capital kept", "1% risk", "24/7 learning") with real KM Nishat stats.
- **P1**: Add animated arrow + synced `btn-shake` to the footer/final "Join Telegram" button (`index.css`, `FinalCTA.jsx`/`Footer.jsx`).
- **P2**: Glow effect on red "LIVE" badge in mobile frame (`Benefits.jsx`).

## Notes
- No 3rd-party integrations, no DB schema, no auth.
- User is very sensitive to mobile frame drops — keep mobile animations lightweight.
