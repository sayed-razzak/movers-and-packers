import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircle, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Heading, Reveal, WhatsAppIcon } from "./UI";
import { TruckArt } from "./MovingArt";
import { siteConfig as config, phoneUrl } from "../config/siteConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export function QuoteForm({ values, setValues }) {
  const { t, i18n } = useTranslation();
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(false);
  const formRef = useRef(null);
  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((s) => ({ ...s, [name]: false }));
    setReady(false);
  };
  const submit = (e) => {
    e.preventDefault();
    const next = Object.fromEntries(
      ["pickup", "destination", "service"]
        .filter((k) => !values[k].trim())
        .map((k) => [k, true]),
    );
    setErrors(next);
    if (Object.keys(next).length) {
      formRef.current.elements[Object.keys(next)[0]].focus();
      return;
    }
    setReady(true);
    window.open(buildWhatsAppUrl(values, t), "_blank", "noopener,noreferrer");
  };
  const field = (name, optional = false, type = "text") => (
    <div className={"field " + (name === "details" ? "full" : "")}>
      <label htmlFor={name}>
        {t(name)} <small>{optional ? "(" + t("optional") + ")" : "*"}</small>
      </label>
      {name === "details" ? (
        <textarea
          id={name}
          name={name}
          value={values[name]}
          onChange={update}
          placeholder={t("detailsPlaceholder")}
          rows="3"
          maxLength="2000"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          dir={name === "phone" ? "ltr" : undefined}
          autoComplete={name === "phone" ? "tel" : "off"}
          value={values[name]}
          onChange={update}
          placeholder={type === "date" ? undefined : t(name + "Placeholder")}
          required={!optional}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? name + "-error" : undefined}
          maxLength={type === "text" ? 180 : undefined}
        />
      )}
      {errors[name] && (
        <span className="error" id={name + "-error"}>
          {t("validation")}
        </span>
      )}
    </div>
  );
  return (
    <section id="quote" className="section quote-section">
      <div className="container quote-grid">
        <div className="quote-copy">
          <Heading
            eyebrow={t("quoteEyebrow")}
            title={t("quoteTitle")}
            text={t("quoteText")}
          />
          <div className="contact-person">
            <span>
              <MessageCircle size={24} />
            </span>
            <div>
              <strong>{t("direct")}</strong>
              <p>{t("noAuto")}</p>
            </div>
          </div>
          <a href={phoneUrl} className="quote-phone">
            <Phone size={19} />
            <bdi>{config.phone}</bdi>
          </a>
          <TruckArt className="quote-truck" />
        </div>
        <Reveal>
          <form
            ref={formRef}
            className="quote-form"
            noValidate
            onSubmit={submit}
          >
            <div className="form-grid">
              {field("pickup")}
              {field("destination")}
              <div className="field">
                <label htmlFor="service">{t("service")} *</label>
                <select
                  id="service"
                  name="service"
                  value={values.service}
                  onChange={update}
                  required
                  aria-invalid={!!errors.service}
                  aria-describedby={
                    errors.service ? "service-error" : undefined
                  }
                >
                  <option value="">{t("choose")}</option>
                  {Object.entries(
                    t("serviceOptions", { returnObjects: true }),
                  ).map(([key, label]) => (
                    <option value={key} key={key}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span id="service-error" className="error">
                    {t("serviceValidation")}
                  </span>
                )}
              </div>
              {field("date", true, "date")}
              <div className="field">
                <label htmlFor="property">
                  {t("property")} <small>({t("optional")})</small>
                </label>
                <select
                  id="property"
                  name="property"
                  value={values.property}
                  onChange={update}
                >
                  <option value="">{t("chooseProperty")}</option>
                  {Object.entries(
                    t("propertyOptions", { returnObjects: true }),
                  ).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              {field("phone", true, "tel")}
              {field("details", true)}
            </div>
            <button className="button green submit" type="submit">
              <WhatsAppIcon width="23" height="23" />
              {t("submit")}
              <ArrowUpRight size={19} />
            </button>
            <p className="privacy">
              <ShieldCheck size={15} />
              {t("privacy")}
            </p>
            <p className="manual-send">{t("manualSend")}</p>
            {ready && (
              <div className="form-status" role="status">
                {t("ready")}{" "}
                <a
                  href={buildWhatsAppUrl(values, t)}
                  target="_blank"
                  rel="noopener noreferrer"
                  lang={i18n.language}
                >
                  {t("continue")}
                </a>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
