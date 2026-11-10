# Movers and Packers

Static React + Vite landing page, English and Arabic, with Tailwind CSS v4, Motion, Lucide and i18next. No backend, analytics or inquiry storage.

## Run locally

Requires a Node.js version supported by Vite 8 (20.19+ or 22.12+).

- npm install
- npm run dev
- npm run build
- npm run preview

## Edit business details

Use src/config/siteConfig.js. Set siteUrl to the final HTTPS production domain, and socialImage to a final absolute sharing-image URL. Rebuild to generate the canonical URL, robots sitemap entry and sitemap.xml. Domain-specific metadata is omitted until confirmed.

Facebook uses the client-supplied URL; Instagram and TikTok remain hidden until configured. The footer also includes a direct email icon. Edit English and Arabic content in src/i18n/en.json and ar.json. Only the language preference is stored in localStorage. Form values remain in memory and are never saved by this website.

The quote form validates pickup, destination and service, then opens a correctly encoded WhatsApp message in the chosen language. Customers review and press Send themselves. A clickable fallback is provided if a popup is blocked. No quotation is calculated automatically.

## Deploy on Vercel

Import this project, select Vite, build command npm run build, output directory dist. No backend, environment variables or paid messaging APIs are required. No deployment was performed as part of local implementation.

## Photo credits and client handoff

Local stock photos, used under the Pexels License (https://www.pexels.com/license/):

- public/images/movers.jpg — RDNE Stock project, https://www.pexels.com/photo/men-carrying-boxes-inside-the-house-7464232/
- public/images/packing.jpg — SHVETS production, https://www.pexels.com/photo/focused-young-couple-packing-carton-boxes-before-relocation-7203881/

These are illustrative stock images, not photographs of the company's actual team. Replace these clearly named files with client photos if available. The truck, boxes and route illustration are original SVG graphics. Routes are decorative, not live tracking or a promise of availability.

Confirm the production domain, sharing image, any optional social links, and client-owned team/fleet photos before public launch. All published business claims use the supplied information; no reviews, achievements, ratings or guarantees were added.

Inter and Cairo are self-hosted with Fontsource variable fonts; no Google Fonts request is required. Browser language determines the first visit language; the switcher saves later choices.

- public/images/furniture-moving.jpg — RDNE Stock project, https://www.pexels.com/photo/close-up-shot-of-men-carrying-a-couch-7464393/

## Performance and publishing

Responsive WebP photos are generated with npm run optimize:images after replacing original JPEGs. The generated src/assets/photos files are tracked and served as hashed immutable assets. Motion features load in a separate lazy chunk; the hero is immediately visible. vercel.json sets the Vite output and asset caching. GitHub Actions validates tests and the production build on main and pull requests. The postbuild step also accepts VITE_SITE_URL or the Vercel-provided VERCEL_PROJECT_PRODUCTION_URL to generate sitemap and canonical metadata.
