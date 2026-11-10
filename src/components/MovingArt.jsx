import { useId } from "react";
export function TruckArt({ className = "" }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      className={className}
      viewBox="0 0 360 220"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={uid + "-body"}
          x1="50"
          y1="30"
          x2="230"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#c7dfef" />
        </linearGradient>
        <linearGradient id={uid + "-cab"} x1="230" y1="75" x2="320" y2="180">
          <stop stopColor="#3b8cdf" />
          <stop offset="1" stopColor="#165dad" />
        </linearGradient>
        <linearGradient id={uid + "-box"} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#f3cb85" />
          <stop offset="1" stopColor="#ce9145" />
        </linearGradient>
      </defs>
      <ellipse
        cx="183"
        cy="194"
        rx="158"
        ry="14"
        fill="#102a43"
        opacity=".09"
      />
      <path d="M42 55 191 37 227 59 78 79Z" fill="#fff" />
      <path d="M42 55 78 79V170L42 149Z" fill="#b8d2e5" />
      <path d="M78 79 227 59V151L78 174Z" fill={"url(#" + uid + "-body)"} />
      <path d="m227 96 49-7 35 43 2 32-86 13Z" fill={"url(#" + uid + "-cab)"} />
      <path d="m239 104 32-4 24 29-56 8Z" fill="#a9e5f5" />
      <path d="m278 99 15 29 12 3-24-32Z" fill="#d9f4fa" />
      <path
        d="m238 147 14-2"
        stroke="#e0efff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="m78 162 149-21v20L78 181Z" fill="#165dad" />
      <path d="m228 162 86-13v16l-86 15Z" fill="#102a43" />
      <path d="m298 145 13-2v9l-13 2Z" fill="#f5b942" />
      <ellipse cx="115" cy="177" rx="20" ry="24" fill="#102a43" />
      <ellipse cx="120" cy="176" rx="10" ry="14" fill="#d6e3ee" />
      <ellipse cx="271" cy="174" rx="20" ry="24" fill="#102a43" />
      <ellipse cx="276" cy="173" rx="10" ry="14" fill="#d6e3ee" />
      <path
        d="m112 108 71-10"
        stroke="#165dad"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="m112 123 45-6"
        stroke="#f5b942"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="m17 153 35-8 26 15-35 9Z" fill="#f8d698" />
      <path d="m17 153 26 16v31l-26-15Z" fill="#ce9145" />
      <path d="m43 169 35-9v31l-35 9Z" fill={"url(#" + uid + "-box)"} />
      <path d="m32 149 26 15v10" stroke="#fff0cd" strokeWidth="6" />
      <path d="m308 170 24-6 17 10-25 6Z" fill="#f8d698" />
      <path d="m308 170 16 10v23l-16-10Z" fill="#b57e38" />
      <path d="m324 180 25-6v23l-25 6Z" fill="#eab665" />
    </svg>
  );
}
export function BoxArt() {
  return (
    <svg viewBox="0 0 150 140" fill="none" aria-hidden="true">
      <ellipse cx="75" cy="124" rx="62" ry="10" fill="#102a43" opacity=".08" />
      <path d="m30 61 54-15 40 22-54 16Z" fill="#f8d698" />
      <path d="m30 61 40 23v43l-40-22Z" fill="#bf893f" />
      <path d="m70 84 54-16v43l-54 16Z" fill="#e7b366" />
      <path d="m51 55 40 23v20l13-4V74L64 51Z" fill="#fff0d0" />
      <path d="m54 14 33-9 25 14-34 10Z" fill="#f8d698" />
      <path d="m54 14 24 15v34L54 49Z" fill="#ce974c" />
      <path d="m78 29 34-10v34L78 63Z" fill="#eabd78" />
      <path d="m69 10 24 15v13" stroke="#fff0d0" strokeWidth="9" />
      <path
        d="m93 101 12-4m-8-6v15"
        stroke="#805a29"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
