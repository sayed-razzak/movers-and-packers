import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import i18next from "i18next";
import { buildWhatsAppUrl } from "../src/utils/whatsapp.js";
import { siteConfig } from "../src/config/siteConfig.js";
const en = JSON.parse(
  (
    await readFile(new URL("../src/i18n/en.json", import.meta.url), "utf8")
  ).replace(/^\uFEFF/, ""),
);
const ar = JSON.parse(
  (
    await readFile(new URL("../src/i18n/ar.json", import.meta.url), "utf8")
  ).replace(/^\uFEFF/, ""),
);
const data = {
  pickup: "الرياض & Al Malqa #5",
  destination: "New home / مكتب",
  service: "house",
  date: "2026-12-20",
  property: "apartment",
  phone: "+966 500 000 000",
  details: "Sofa + boxes\nKitchen: fragile & glass?",
};
for (const language of ["en", "ar"]) {
  test(
    language +
      ": preserves every supplied detail, Unicode, punctuation and selected service",
    async () => {
      const i = i18next.createInstance();
      await i.init({
        lng: language,
        resources: { [language]: { translation: language === "ar" ? ar : en } },
        interpolation: {
          escapeValue: false,
          defaultVariables: {
            contactPerson:
              language === "ar"
                ? siteConfig.contactPersonArabic
                : siteConfig.contactPerson,
          },
        },
      });
      for (const service of Object.keys(en.serviceOptions)) {
        const url = new URL(
          buildWhatsAppUrl({ ...data, service }, i.t.bind(i)),
        );
        assert.equal(url.origin, "https://wa.me");
        assert.equal(url.pathname, "/" + siteConfig.whatsappNumber);
        assert.equal(url.searchParams.size, 1);
        const message = url.searchParams.get("text");
        for (const key of ["pickup", "destination", "date", "phone", "details"])
          assert.ok(message.includes(data[key]));
        assert.ok(message.includes(i.t("serviceOptions." + service)));
        assert.ok(message.includes(i.t("propertyOptions.apartment")));
        assert.ok(!message.includes("{{"));
      }
    },
  );
  test(
    language + ": optional empty fields have localized fallbacks",
    async () => {
      const resource = language === "ar" ? ar : en;
      const i = i18next.createInstance();
      await i.init({
        lng: language,
        resources: { [language]: { translation: resource } },
      });
      const message = new URL(
        buildWhatsAppUrl(
          { ...data, date: "", property: "", phone: "", details: "" },
          i.t.bind(i),
        ),
      ).searchParams.get("text");
      for (const key of ["unspecified", "notProvided", "none"])
        assert.ok(message.includes(resource.message[key]));
    },
  );
}
test("English and Arabic resources have matching keys and all service cards map to a real option", () => {
  function keys(obj, prefix = "") {
    return Object.entries(obj)
      .flatMap(([k, v]) =>
        v && typeof v === "object" ? keys(v, prefix + k + ".") : [prefix + k],
      )
      .sort();
  }
  assert.deepEqual(keys(en), keys(ar));
  for (const resource of [en, ar])
    for (const card of resource.serviceCards)
      assert.ok(resource.serviceOptions[card.id]);
});
