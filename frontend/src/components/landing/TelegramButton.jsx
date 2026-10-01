import { ArrowUpRight } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/site";

export const TelegramIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden>
    <path d="M21.94 4.3 18.9 19.1c-.23 1.02-.83 1.27-1.69.79l-4.66-3.44-2.25 2.17c-.25.25-.46.46-.94.46l.33-4.75 8.64-7.8c.38-.33-.08-.52-.58-.19L6.07 13.06l-4.6-1.44c-1-.31-1.02-1 .21-1.48l17.9-6.9c.83-.3 1.56.2 1.36 1.06Z" />
  </svg>
);

export const TelegramButton = ({ children = "Join Free Telegram", variant = "ice", testId, className = "" }) => (
  <a
    href={TELEGRAM_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testId}
    className={`group ${variant === "ice" ? "btn-ice" : "btn-ghost"} ${className}`}
  >
    {variant === "ice" ? <TelegramIcon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" /> : null}
    <span>{children}</span>
    {variant === "ghost" ? <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
  </a>
);
