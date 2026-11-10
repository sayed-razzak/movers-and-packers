import { siteConfig } from "../config/siteConfig.js";
export function buildWhatsAppUrl(values, t) {
  const m = t("message", { returnObjects: true });
  const lines = [
    m.hello,
    m.intro,
    "",
    [m.service, t("serviceOptions." + values.service)],
    [m.pickup, values.pickup.trim()],
    [m.destination, values.destination.trim()],
    [m.date, values.date || m.unspecified],
    [
      m.property,
      values.property ? t("propertyOptions." + values.property) : m.unspecified,
    ],
    [m.phone, values.phone.trim() || m.notProvided],
    [m.details, values.details.trim() || m.none],
  ];
  return (
    "https://wa.me/" +
    siteConfig.whatsappNumber +
    "?text=" +
    encodeURIComponent(
      lines.map((l) => (Array.isArray(l) ? l.join(": ") : l)).join("\n"),
    )
  );
}
