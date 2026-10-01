export const TELEGRAM_URL = "https://t.me/kmnishat9";
export const LOGO = "/km-logo.webp";

export const NAV_LINKS = [
  { id: "reviews", label: "Reviews" },
  { id: "learn", label: "What You'll Learn" },
  { id: "results", label: "Results" },
  { id: "testimonials", label: "Community" },
  { id: "faq", label: "FAQ" },
];

export const STATS = [
  { value: 12500, suffix: "+", label: "Community Members" },
  { value: 88, suffix: "%", label: "Avg. Monthly Win Rate", decimals: 0 },
  { value: 3, prefix: "1:", suffix: "+", label: "Minimum Risk : Reward" },
  { value: 365, suffix: "", label: "Days of Market Breakdowns" },
];

export const LEARN = [
  {
    title: "Price Action & Market Structure",
    body: "Read the chart without indicators. Break of structure, liquidity sweeps, order blocks and the exact entries the smart money leaves behind.",
    tag: "Core",
    span: "lg:col-span-2 lg:row-span-2",
    chart: true,
  },
  { title: "Risk Management System", body: "Fixed 1% risk, 1:3 minimum reward, no revenge trading. The rules that keep your account alive for years.", tag: "Discipline", span: "" },
  { title: "Trader Psychology", body: "Master fear, greed and FOMO. Trade the plan, not the emotion.", tag: "Mindset", span: "" },
  { title: "Live Telegram Signals", body: "Entry, stop-loss and targets posted in real time with reasoning. Learn while you earn.", tag: "Daily", span: "lg:col-span-2", telegram: true },
  { title: "Daily Setup Analysis", body: "Gold, Forex majors and crypto breakdowns every morning before London open.", tag: "Routine", span: "lg:col-span-2" },
  { title: "Community Q&A", body: "Ask, review your trades and grow alongside 12,500+ disciplined traders.", tag: "Support", span: "lg:col-span-2" },
];

export const TRADES = [
  { pair: "XAUUSD", result: "+3.4%", rr: "1:3.4", setup: "London liquidity sweep" },
  { pair: "EURUSD", result: "+1.8%", rr: "1:2.6", setup: "NY session retrace" },
  { pair: "GBPJPY", result: "+2.9%", rr: "1:3.1", setup: "4H order block" },
  { pair: "BTCUSD", result: "+5.2%", rr: "1:4.0", setup: "Daily continuation" },
  { pair: "USDJPY", result: "-1.0%", rr: "SL", setup: "Stopped · rules followed" },
  { pair: "XAUUSD", result: "+2.7%", rr: "1:3.0", setup: "Asia range break" },
];

export const TESTIMONIALS = [
  { name: "Rafiul H.", place: "Dhaka, BD", text: "First month I did not blow an account. Nishat bhai's risk rules literally changed how I see the chart. Discipline over everything." },
  { name: "Tanvir A.", place: "Chattogram, BD", text: "Signals are good but the daily breakdowns are the real gold. I finally understand WHY price moves, not just where." },
  { name: "Sadia K.", place: "Sylhet, BD", text: "Started with zero knowledge. In 3 months I passed my first funded challenge following the 1% rule from this channel." },
  { name: "Imran S.", place: "Kuala Lumpur, MY", text: "No hype, no lambo posts. Just clean setups, honest losses and real teaching. Rare in this space." },
  { name: "Arif M.", place: "Dubai, AE", text: "The psychology lessons stopped my revenge trading. My equity curve has been steady since I joined." },
  { name: "Nusrat J.", place: "Rajshahi, BD", text: "Community is very supportive. Every question gets answered and every trade gets reviewed properly." },
];

export const FAQ = [
  { q: "Is the Telegram channel free?", a: "Yes. The KM Nishat 99 Telegram channel is completely free to join. You get daily market breakdowns, trade ideas and education at no cost." },
  { q: "Do I need any trading experience?", a: "No. We start from the basics: how to read a chart, how to manage risk and how to build a routine. Complete beginners are welcome." },
  { q: "Which markets do you cover?", a: "Mainly Gold (XAUUSD), Forex majors and select crypto pairs. Everything is taught with the same price-action and risk framework." },
  { q: "How much capital do I need to start?", a: "You can start on a demo account with zero money. When you go live, we recommend risking only 1% of your account per trade. The final amount is up to you." },
  { q: "Is this financial advice?", a: "No. Everything shared is for educational purposes only. Trading involves substantial risk and you are responsible for your own decisions." },
  { q: "How do I join?", a: "Tap any 'Join Telegram' button on this page. It opens the channel directly. Join, turn on notifications and start learning today." },
];

export const MARQUEE = [
  "Discipline over emotion",
  "Risk 1% · Aim 1:3",
  "Plan the trade · Trade the plan",
  "Losses are tuition",
  "Patience pays",
  "Process before profit",
  "Protect capital first",
];
