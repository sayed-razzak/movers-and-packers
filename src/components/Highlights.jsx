import { useTranslation } from "react-i18next";
import { House, Package, Truck } from "lucide-react";

export function Highlights() {
  const { t } = useTranslation();
  return (
    <section className="highlights container" aria-label={t("services")}>
      {t("highlights", { returnObjects: true }).map((item, i) => {
        const Icon = [House, Package, Truck][i];
        return (
          <div key={item.title}>
            <span className={"highlight-icon tone-" + i}>
              <Icon size={27} />
            </span>
            <span>
              <strong className="highlight-title">{item.title}</strong>
              <p>{item.text}</p>
            </span>
          </div>
        );
      })}
    </section>
  );
}
