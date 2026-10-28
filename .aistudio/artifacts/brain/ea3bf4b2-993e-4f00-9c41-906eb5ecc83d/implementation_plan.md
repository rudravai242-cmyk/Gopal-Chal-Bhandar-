# Implementation Plan: Production Technical SEO & Link-Preview Architecture

An end-to-end, production-ready SEO and social link-preview configuration for **Gopal Chal Bhandar** (`https://gopal-chal-bhandar.pntr.dev`). This plan ensures instant indexing, search engine rankings for rice wholesale/retail terms, and rich media preview cards across WhatsApp, Facebook, Twitter/X, Telegram, Discord, and LinkedIn.

---

## 1. Social Link Previews & Branded Media Snippets

### Open Graph (og:) Configuration
- **`og:site_name`**: `Gopal Chal Bhandar - Wholesale & Retail Rice Store`
- **`og:type`**: `website`
- **`og:title`**: `Gopal Chal Bhandar | Best Rice Shop in India - Wholesale & Retail` (exact 60 characters for crisp display)
- **`og:description`**: `Direct wholesale & retail rice shop in Kalna RMC Market, West Bengal. Authentic Minikit, Basmati, Gobindobhog & Dudheswar rice bags at daily mandi rates.` (158 characters, no truncation)
- **`og:image`**: Absolute URL `https://gopal-chal-bhandar.pntr.dev/og-image.jpg`
  - Dimensions: Exact 1200 × 630 pixels (1.91:1 ratio)
  - Format: Optimized JPEG (< 150 KB) ensuring instant loading on mobile 2G/3G networks
  - Dedicated tags: `og:image:secure_url`, `og:image:type` (`image/jpeg`), `og:image:width` (`1200`), `og:image:height` (`630`), and `og:image:alt`
- **`og:url`**: Canonical URL `https://gopal-chal-bhandar.pntr.dev/`
- **`og:locale`**: `en_IN` with alternates `bn_IN` and `hi_IN`

### Twitter / X Social Cards
- **`twitter:card`**: `summary_large_image` (generates the full-width high-impact preview card)
- **`twitter:url`**: `https://gopal-chal-bhandar.pntr.dev/`
- **`twitter:title`**: `Gopal Chal Bhandar | Best Rice Shop in India`
- **`twitter:description`**: `Wholesale & retail rice shop in Kalna, Purba Bardhaman, WB. Minikit, Gobindobhog, Basmati rice at daily mandi prices.`
- **`twitter:image`**: `https://gopal-chal-bhandar.pntr.dev/og-image.jpg`
- **`twitter:image:alt`**: `Gopal Chal Bhandar - Premium Rice Sacks & Mandi Rates`

### Platform-Specific Preview Optimizations
- **WhatsApp & Telegram**: Include Schema.org microdata fallbacks (`itemprop="name"`, `itemprop="description"`, `itemprop="image"`) which Android WebView crawlers use when Open Graph is cached or missing.
- **Discord & Slack**: Specific `theme-color` meta tag (`#d97706` warm amber) providing a branded vertical accent bar on shared embed cards.
- **LinkedIn & Facebook**: Ensure proper Open Graph headers and MIME types to pass the Facebook Graph API and LinkedIn Post Inspector validation.

---

## 2. On-Page & Technical SEO Optimization

### Title Tag & Meta Description
- Title tag: 55–60 characters incorporating primary target commercial and localized keywords (`Gopal Chal Bhandar - Best Rice Shop in India | Wholesale & Retail`).
- Meta description: 155 characters balancing call-to-action (CTA), store location, varieties (Minikit, Gobindobhog, Basmati), and phone/WhatsApp inquiry.
- Comprehensive localized meta keywords covering Bengali, English, and Hindi search phrases.

### Canonical & Mobile Meta Tags
- Strict canonical tag: `<link rel="canonical" href="https://gopal-chal-bhandar.pntr.dev/" />` preventing duplicate indexing between HTTP, HTTPS, subdomains, and URL hash routes.
- Viewport configuration: `viewport-fit=cover` and responsive scaling.
- Search Engine Bot Directives: `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`.
- Geographic SEO tags: ISO country (`IN-WB`), geographic coordinates (`geo.position`, `ICBM`), and exact physical store address in Kalna RMC Market.

### Structured Data (JSON-LD Schema)
Embed comprehensive Schema.org structured data inside `<script type="application/ld+json">`:
1. **`WholesaleStore` & `Store`**: Store name, alternate names (Bengali/Hindi), physical address, GPS coordinates, opening hours, accepted currencies (`INR`), phone number, and Google Maps URL.
2. **`ItemList` / `Product`**: Key featured rice varieties (Kalna Gold Minikit 26kg bag, Pure Gobindobhog, XXL Biryani Basmati, Dudheswar) with pricing and availability status.
3. **`BreadcrumbList`**: Structured navigation for Google SERP rich snippet breadcrumbs.

---

## 3. Sitemap & Robots.txt Generation

### `public/robots.txt`
- Explicit allow rules for major search engine crawlers (`Googlebot`, `Googlebot-Image`, `Bingbot`, `Slurp`, `DuckDuckBot`).
- Explicit allow rules for social network preview user-agents (`facebookexternalhit`, `WhatsApp`, `Twitterbot`, `LinkedInBot`, `TelegramBot`, `Discordbot`).
- Absolute sitemap link: `Sitemap: https://gopal-chal-bhandar.pntr.dev/sitemap.xml`.

### `public/sitemap.xml`
- Fully compliant with the standard Sitemaps XML protocol `http://www.sitemaps.org/schemas/sitemap/0.9`.
- Includes image sitemap namespace (`http://www.google.com/schemas/sitemap-image/1.1`) linking the primary `og-image.jpg` banner and featured product bag imagery.
- Accurate `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>` weights across store tabs.

---

## 4. Search Engine Verification & Webmaster Playbook

### Site Verification Meta Tags
Embed placeholder verification tags in `index.html` ready for instant activation:
- `<meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />`
- `<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />`
- `<meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />`

### Webmaster Workflow & Documentation
Provide actionable, copy-paste instructions for:
1. **Google Search Console**:
   - URL Prefix vs Domain verification.
   - Adding DNS TXT record via DNS provider (Cloudflare, Namecheap, GoDaddy).
   - Sitemap submission and URL Inspection tool workflow for instant indexing.
2. **Social Media Cache Invalidation Tools**:
   - Facebook Sharing Debugger (`developers.facebook.com/tools/debug/`)
   - LinkedIn Post Inspector (`linkedin.com/post-inspector/`)
   - Twitter Card Validator (`cards-dev.twitter.com/validator`)
   - Telegram Webpage Bot (`@WebpageBot`)
   - WhatsApp preview refresh protocol.
3. **Common Indexing Pitfalls & Fixes**:
   - Resolving "Crawled - currently not indexed".
   - Handling SPA hash routes vs server-rendered HTML.
   - Managing 404 fallbacks for client-side routing.

---

## 5. Verification & Testing Steps

1. Run `compile_applet` and `lint_applet` to ensure valid markup and syntax.
2. Build distribution assets with `npm run build` to synchronize `dist/`, `docs/`, and `public/`.
3. Validate Open Graph tag parity between `index.html` and static files.
4. Verify HTTP 200 response and correct MIME header for `og-image.jpg`.
