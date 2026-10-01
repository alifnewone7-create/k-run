import { motion } from "framer-motion";
import { DrawUnderline } from "./DrawUnderline";

const ease = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const LineReveal = ({ lines, className = "", lineClassName = "", delay = 0, as = "h1" }) => {
  const Tag = motion[as];
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: "110%", rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.1, delay: delay + i * 0.12, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const SectionHead = ({ eyebrow, title, body, icon: Icon, align = "left" }) => (
  <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <Reveal>
      <span className={`chip mb-5 ${align === "center" ? "mx-auto" : ""}`}>
        {Icon ? <Icon size={13} className="text-[#D8F244]" /> : <span className="h-1.5 w-1.5 rounded-full bg-[#D8F244]" />}
        <span className="font-display font-semibold uppercase tracking-normal text-[0.78rem] text-[#D4D4DE]">{eyebrow}</span>
      </span>
    </Reveal>
    {title && (
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-grad-accent">{title}</h2>
      </Reveal>
    )}
    {body && (
      <Reveal delay={0.16}>
        <p className="mt-5 text-base md:text-lg text-[#9494A8] leading-relaxed">{body}</p>
        <DrawUnderline className={`mt-3 h-6 w-[190px] sm:w-[220px] ${align === "center" ? "mx-auto" : ""}`} />
      </Reveal>
    )}
  </div>
);
