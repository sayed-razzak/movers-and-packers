import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, Menu, Languages } from "lucide-react";
import { Brand, WaLink } from "./UI";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    const close = (e) => {
      if (!navRef.current?.contains(e.target)) setOpen(false);
    };
    const escape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        navRef.current?.querySelector(".menu-toggle")?.focus();
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header className="navbar" ref={navRef}>
      <div className="container nav-inner">
        <Brand />
        <nav
          id="primary-nav"
          className={open ? "nav-links open" : "nav-links"}
          aria-label={t("menu")}
        >
          {[
            ["home", "home"],
            ["services", "services"],
            ["why-us", "why"],
            ["quote", "quote"],
          ].map(([id, key]) => (
            <a href={"#" + id} key={id} onClick={() => setOpen(false)}>
              {t(key)}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="language"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
            }
            aria-label={
              i18n.language === "ar"
                ? "Switch to English"
                : "التبديل إلى العربية"
            }
          >
            <Languages size={17} />
            <span lang={i18n.language === "ar" ? "en" : "ar"}>
              {i18n.language === "ar" ? "English" : "العربية"}
            </span>
          </button>
          <WaLink className="button green nav-wa">{t("whatsapp")}</WaLink>
          <button
            className="menu-toggle"
            aria-label={t(open ? "close" : "menu")}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
