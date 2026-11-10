import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { siteConfig as config } from "../config/siteConfig";

export function SEO() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title =
      t("brand") +
      " | " +
      (i18n.language === "ar"
        ? "نقل وتغليف الأثاث في الرياض"
        : "Moving & Packing in Riyadh");
    const description = t("heroText");
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content =
      document.title;
    document.querySelector('meta[property="og:description"]').content =
      description;
    document.querySelector('meta[property="og:locale"]').content =
      i18n.language === "ar" ? "ar_SA" : "en_SA";
    const setMeta = (selector, tag, attrs) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement(tag);
        document.head.append(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    };
    if (config.siteUrl) {
      setMeta('link[rel="canonical"]', "link", {
        rel: "canonical",
        href: config.siteUrl,
      });
      setMeta('meta[property="og:url"]', "meta", {
        property: "og:url",
        content: config.siteUrl,
      });
    }
    if (config.socialImage)
      setMeta('meta[property="og:image"]', "meta", {
        property: "og:image",
        content: config.socialImage,
      });
    const schema = {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: config.name,
      telephone: config.phone,
      email: config.email,
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      address: {
        "@type": "PostalAddress",
        addressLocality: config.city,
        addressCountry: config.countryCode,
      },
      ...(config.siteUrl ? { url: config.siteUrl } : {}),
    };
    let el = document.getElementById("business-schema");
    if (!el) {
      el = document.createElement("script");
      el.id = "business-schema";
      el.type = "application/ld+json";
      document.head.append(el);
    }
    el.textContent = JSON.stringify(schema);
  }, [t, i18n.language]);
  return null;
}
