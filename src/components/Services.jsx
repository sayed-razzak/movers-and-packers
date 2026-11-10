import { useTranslation } from "react-i18next";
import {
  House,
  Sofa,
  Package,
  Building2,
  Wrench,
  Truck,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { Heading, Reveal } from "./UI";
const serviceIcons = [House, Sofa, Package, Building2, Wrench, Truck];

export function Services({ selectService }) {
  const { t } = useTranslation();
  return (
    <section id="services" className="section services">
      <div className="container">
        <Heading
          eyebrow={t("servicesEyebrow")}
          title={t("servicesTitle")}
          text={t("servicesText")}
          center
        />
        <div className="service-grid">
          {t("serviceCards", { returnObjects: true }).map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.06}>
                <article className="service-card">
                  <div className="service-top">
                    <span className={"service-art tone-" + i}>
                      <Icon size={43} strokeWidth={1.35} />
                      <span />
                    </span>
                    <span className="service-number">0{i + 1}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <Check size={14} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#quote" onClick={() => selectService(s.id)}>
                    {t("request")}
                    <ArrowUpRight size={18} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="service-extra">
          <Wrench size={17} />
          {t("included")}
        </p>
      </div>
    </section>
  );
}
