import packing480 from "../assets/photos/packing-480.webp";
import packing900 from "../assets/photos/packing-900.webp";
import furniture360 from "../assets/photos/furniture-moving-360.webp";
import furniture600 from "../assets/photos/furniture-moving-600.webp";
import { useTranslation } from "react-i18next";
import { Package, Check } from "lucide-react";
import { Heading, Reveal, WaLink } from "./UI";
import { BoxArt } from "./MovingArt";

export function WhyChooseUs() {
  const { t } = useTranslation();
  return (
    <section id="why-us" className="section">
      <div className="container why-grid">
        <Reveal className="why-visual">
          <img
            src={packing900}
            srcSet={packing480 + " 480w, " + packing900 + " 900w"}
            sizes="(max-width: 700px) 90vw, 500px"
            decoding="async"
            width="900"
            height="600"
            loading="lazy"
            alt={t("whyAlt")}
          />
          <img
            className="why-inset"
            src={furniture600}
            srcSet={furniture360 + " 360w, " + furniture600 + " 600w"}
            sizes="(max-width: 700px) 44vw, 250px"
            decoding="async"
            width="900"
            height="600"
            loading="lazy"
            alt={t("furnitureAlt")}
          />
          <div className="box-float">
            <BoxArt />
          </div>
          <span className="why-caption">
            <Package size={20} />
            {t("care")}
          </span>
        </Reveal>
        <Reveal>
          <Heading
            eyebrow={t("whyEyebrow")}
            title={t("whyTitle")}
            text={t("whyText")}
          />
          <ul className="benefits">
            {t("benefits", { returnObjects: true }).map((b) => (
              <li key={b}>
                <span>
                  <Check size={16} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <WaLink>{t("talk")}</WaLink>
        </Reveal>
      </div>
    </section>
  );
}
