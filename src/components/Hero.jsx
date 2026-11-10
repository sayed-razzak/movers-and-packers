import movers480 from "../assets/photos/movers-480.webp";
import movers800 from "../assets/photos/movers-800.webp";
import movers1100 from "../assets/photos/movers-1100.webp";
import { useTranslation } from "react-i18next";
import {
  ArrowDown,
  ArrowUpRight,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCheck,
} from "lucide-react";
import { Reveal } from "./UI";
import { TruckArt } from "./MovingArt";
import { phoneUrl } from "../config/siteConfig";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <Reveal className="hero-copy" eager>
          <span className="eyebrow">
            <span className="little-line" />
            {t("eyebrow")}
          </span>
          <h1>
            {t("heroStart")} <span>{t("heroAccent")}</span> {t("heroEnd")}
          </h1>
          <p>{t("heroText")}</p>
          <div className="hero-buttons">
            <a href="#quote" className="button blue">
              {t("quote")}
              <ArrowUpRight size={19} />
            </a>
            <a href={phoneUrl} className="button outline">
              <Phone size={19} />
              {t("call")}
            </a>
          </div>
          <div className="hero-note">
            <CheckCheck size={19} />
            {t("heroNote")}
          </div>
        </Reveal>
        <Reveal className="hero-visual" eager>
          <div className="hero-dots" />
          <div className="image-frame">
            <img
              src={movers1100}
              srcSet={
                movers480 +
                " 480w, " +
                movers800 +
                " 800w, " +
                movers1100 +
                " 1100w"
              }
              sizes="(max-width: 700px) 92vw, (max-width: 1280px) 45vw, 560px"
              decoding="async"
              alt={t("heroAlt")}
              width="1100"
              height="733"
              fetchPriority="high"
            />
            <div className="photo-tag">
              <span className="tag-icon">
                <ShieldCheck size={22} />
              </span>
              <span>
                <strong>{t("care")}</strong>
                <small>{t("careSub")}</small>
              </span>
            </div>
          </div>
          <div className="route-chip">
            <MapPin size={18} />
            <span>{t("based")}</span>
            <span className="chip-dot" />
            {t("across")}
          </div>
          <div className="truck-float">
            <TruckArt />
          </div>
          <span className="yellow-spark" aria-hidden="true">
            ✦
          </span>
        </Reveal>
      </div>
      <div className="container hero-bottom">
        <span>{t("scroll")}</span>
        <ArrowDown size={16} />
        <span className="hero-rule" />
      </div>
    </section>
  );
}
