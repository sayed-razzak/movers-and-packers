import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Heading } from "./UI";

export function ServiceCoverage() {
  const { t } = useTranslation();
  return (
    <section className="coverage">
      <div className="container coverage-grid">
        <div>
          <Heading
            eyebrow={t("coverageEyebrow")}
            title={t("coverageTitle")}
            text={t("coverageText")}
          />
          <a className="text-link" href="#quote">
            {t("quote")}
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="route-art">
          <svg viewBox="0 0 500 280" role="img" aria-label={t("mapLabel")}>
            <defs>
              <pattern
                id="dots"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#b8d1e4" />
              </pattern>
            </defs>
            <rect width="500" height="280" rx="30" fill="url(#dots)" />
            <circle cx="260" cy="148" r="90" fill="#e1edf6" />
            <g
              fill="none"
              stroke="#789dbb"
              strokeWidth="2"
              strokeDasharray="5 7"
            >
              <path d="M260 148Q260 25 405 55" />
              <path d="M260 148Q120 110 95 40" />
              <path d="M260 148Q135 170 75 228" />
              <path d="M260 148Q330 220 420 218" />
            </g>
            {[
              [405, 55],
              [95, 40],
              [75, 228],
              [420, 218],
            ].map(([x, y]) => (
              <circle
                key={x}
                cx={x}
                cy={y}
                r="6"
                fill="#f5b942"
                stroke="white"
                strokeWidth="3"
              />
            ))}
            <circle cx="260" cy="148" r="22" fill="#165dad" opacity=".13" />
            <circle
              cx="260"
              cy="148"
              r="10"
              fill="#165dad"
              stroke="white"
              strokeWidth="4"
            />
            <rect
              x="210"
              y="178"
              width="100"
              height="35"
              rx="17"
              fill="white"
            />
            <text
              x="260"
              y="201"
              textAnchor="middle"
              fill="#102a43"
              fontSize="15"
              fontWeight="700"
            >
              {t("riyadh")}
            </text>
          </svg>
          <small>{t("routeNote")}</small>
        </div>
      </div>
    </section>
  );
}
