import { useTranslation } from "react-i18next";
import { Heading, Reveal } from "./UI";

export function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className="section steps-section">
      <div className="container">
        <Heading eyebrow={t("stepsEyebrow")} title={t("stepsTitle")} center />
        <div className="steps">
          {t("steps", { returnObjects: true }).map((s, i) => (
            <Reveal key={s.title} className="step">
              <span className="step-number">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
