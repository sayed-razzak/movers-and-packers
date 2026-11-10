import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Brand, WhatsAppIcon } from "./UI";
import { Facebook, Instagram } from "./SocialIcons";
import { siteConfig as config, phoneUrl } from "../config/siteConfig";

export function Footer() {
  const { t } = useTranslation();
  const socials = {
    whatsapp: WhatsAppIcon,
    facebook: Facebook,
    instagram: Instagram,
    tiktok: ({ size = 20 }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M14 3v12a4 4 0 1 1-4-4M14 3c1 4 3 5 7 5" />
      </svg>
    ),
  };
  return (
    <footer>
      <div className="container">
        <div className="footer-banner">
          <h2>{t("footerTitle")}</h2>
          <a href="#quote" className="button blue">
            {t("quote")}
            <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="footer-grid">
          <div>
            <Brand />
            <p>{t("footerText")}</p>
            <div className="socials">
              {Object.entries(config.socials)
                .filter(([, url]) => url)
                .map(([key, url]) => {
                  const Icon = socials[key];
                  return (
                    <a
                      href={url}
                      key={key}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t(key)}
                      title={t(key)}
                    >
                      <Icon size={21} width="21" height="21" />
                    </a>
                  );
                })}
              <a
                href={"mailto:" + config.email}
                aria-label={t("emailAction")}
                title={t("emailAction")}
              >
                <Mail size={21} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div>
            <h3>{t("contact")}</h3>
            <span>{t("direct")}</span>
            <a href={phoneUrl}>
              <Phone size={16} />
              <bdi>{config.phone}</bdi>
            </a>
            <a href={"mailto:" + config.email}>
              <Mail size={16} />
              <bdi>{config.email}</bdi>
            </a>
            <span className="footer-area">
              <MapPin size={17} />
              {t("area")}
            </span>
          </div>
          <div>
            <h3>{t("explore")}</h3>
            <a href="#home">{t("home")}</a>
            <a href="#services">{t("services")}</a>
            <a href="#why-us">{t("why")}</a>
            <a href="#quote">{t("quote")}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {t("brand")}. {t("rights")}
          </span>
          <span>{t("footerNote")}</span>
        </div>
      </div>
    </footer>
  );
}
