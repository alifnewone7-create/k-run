import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ as ITEMS } from "@/lib/site";
import { Reveal, SectionHead } from "./Reveal";
import { TelegramButton } from "./TelegramButton";

export const FAQ = () => (
  <section id="faq" data-testid="faq-section" className="relative section-y">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12">
      <div className="lg:col-span-5">
        <SectionHead icon={HelpCircle} eyebrow="Questions · Answered" title="No fluff. Just facts." body="Everything you need to know before you join the channel." />
        <Reveal delay={0.2} className="mt-8"><TelegramButton variant="ghost" testId="faq-telegram-btn" className="sm:!w-auto">Still unsure? Ask in Telegram</TelegramButton></Reveal>
      </div>
      <Reveal className="lg:col-span-7">
        <Accordion type="single" collapsible className="glass rounded-3xl divide-y divide-[#0D1B33]/10 overflow-hidden" data-testid="faq-accordion">
          {ITEMS.map((f, i) => (
            <AccordionItem key={i} value={`q${i}`} className="border-0 px-5 sm:px-6">
              <AccordionTrigger data-testid={`faq-trigger-${i}`} className="py-5 sm:py-6 gap-4 text-left font-display text-[15px] md:text-lg font-semibold text-[#0D1B33] hover:no-underline hover:text-[#D98C00] transition-colors [&>svg]:text-[#D98C00] [&>svg]:shrink-0">
                <span className="flex items-start gap-3">
                  <span className="mt-[3px] font-mono text-[11px] text-[#8294B0]">{String(i + 1).padStart(2, "0")}</span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent data-testid={`faq-content-${i}`} className="pb-6 pl-8 text-[14px] sm:text-[15px] text-[#55688A] leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
