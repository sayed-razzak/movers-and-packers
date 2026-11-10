import * as m from "motion/react-m";
import { useTranslation } from "react-i18next";
import { Truck } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { siteConfig as config } from "../config/siteConfig";
const wa = config.socials.whatsapp;

export function WhatsAppIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.1 7.3c-.7.2-1 1-.7 2 .7 2.6 2.8 4.8 5.5 5.5 1 .3 1.9-.1 2.1-.8l.3-1-2.4-1.1-.8.8a6.4 6.4 0 0 1-3-3l.8-.8-1-2Z" />
    </svg>
  );
}

export function WaLink({ children, className = "button green", ...props }) {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      <WhatsAppIcon width="21" height="21" />
      {children}
    </a>
  );
}

export function Brand() {
  const { t } = useTranslation();
  return (
    <a className="brand" href="#home" aria-label={t("brand")}>
      <span className="brand-icon">
        <Truck size={27} />
      </span>
      <span>
        <strong>{t("brand")}</strong>
        <small>{t("brandSmall")}</small>
      </span>
    </a>
  );
}

export function Heading({ eyebrow, title, text, center = false }) {
  return (
    <div className={"section-heading" + (center ? " centered" : "")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0, eager = false }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={reduced || eager ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </m.div>
  );
}
