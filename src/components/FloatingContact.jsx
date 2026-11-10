import { useTranslation } from "react-i18next";
import { Phone } from "lucide-react";
import { WaLink } from "./UI";
import { phoneUrl } from "../config/siteConfig";

export function FloatingContact() {
  const { t } = useTranslation();
  return (
    <aside className="floating-contact" aria-label={t("contact")}>
      <a
        href={phoneUrl}
        className="button blue"
        title={t("call")}
        aria-label={t("call")}
      >
        <Phone size={21} />
        <span>{t("call")}</span>
      </a>
      <WaLink
        className="button green"
        title={t("whatsapp")}
        aria-label={t("whatsapp")}
      >
        <span>{t("whatsapp")}</span>
      </WaLink>
    </aside>
  );
}
