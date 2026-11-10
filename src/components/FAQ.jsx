import * as m from "motion/react-m";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Heading } from "./UI";

export function FAQ() {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);
  const reduced = useReducedMotion();
  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <Heading eyebrow={t("faqEyebrow")} title={t("faqTitle")} />
        <div className="faq-list">
          {t("faqs", { returnObjects: true }).map((f, i) => (
            <div className={"faq " + (active === i ? "active" : "")} key={i}>
              <h3>
                <button
                  id={"faq-button-" + i}
                  aria-expanded={active === i}
                  aria-controls={"faq-panel-" + i}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  {f.q}
                  <ChevronDown size={19} />
                </button>
              </h3>
              <m.div
                id={"faq-panel-" + i}
                role="region"
                aria-labelledby={"faq-button-" + i}
                initial={false}
                animate={{
                  height: active === i ? "auto" : 0,
                  opacity: active === i ? 1 : 0,
                }}
                transition={{ duration: reduced ? 0 : 0.2 }}
                inert={active !== i}
              >
                <p>{f.a}</p>
              </m.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
