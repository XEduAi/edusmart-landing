# SEO Action Plan — daytoanthaylong.com

**Audit date:** 2026-03-22
**SEO Health Score: 63 / 100**

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 25% | 67 |
| Content Quality / E-E-A-T | 25% | 61 |
| On-Page SEO | 20% | 70 |
| Schema / Structured Data | 10% | 65 |
| Performance (CWV) | 10% | 58 |
| Images | 5% | 45 |
| AI Search Readiness (GEO) | 5% | 57 |

---

## 🔴 Critical — Fix Immediately

- [ ] **C1. Fix canonical domain conflict (www vs non-www)**
  - Server redirects non-www → www via **307 Temporary**, but all canonical tags, sitemap `<loc>`, hreflang, and robots.txt `Sitemap:` point to **non-www**
  - Decide: pick one domain. Easiest = keep non-www (canonical tags + sitemap already say non-www), then **remove the www redirect** entirely
  - If keeping www: update all canonical tags, sitemap `<loc>`, hreflang, robots.txt to `https://www.daytoanthaylong.com/` and change redirect to **301 Permanent**

- [x] **C2. Move preload links from `<body>` into `<head>`**
  - `<link rel="preload">` for `room1.jpeg` and `logo.webp` are inside `<div id="root">` — browser preload scanner ignores them, negating all LCP benefit
  - Fix in `scripts/build.mjs` → `renderHtmlDocument()`: move both preloads into `<head>` before the stylesheet
  - Add `fetchpriority="high"` on the `room1.jpeg` preload link

- [x] **C3. Fix SSR counter hydration bug — Googlebot sees "0+ years experience"**
  - Animated counters in `src/components/results.jsx` initialize at `useState(0)` → SSR HTML says "0+ năm kinh nghiệm" and "0+ học sinh"
  - Fix: initialize `useState(target)` for SSR; animate visually from the real number on the client
  - Alternatively: render the final value as static text in SSR, add CSS counter animation on top

- [x] **C4. Remove `FAQPage` schema — policy violation**
  - Google restricted `FAQPage` rich results to government/healthcare sites only (August 2023)
  - Remove `FAQPage` JSON-LD from homepage and `/chuong-trinh-hoc/` in `src/site/page-registry.jsx`
  - The visible FAQ section on the page is fine to keep

- [ ] **C5. Expand `/ve-thay-long/` from ~250 words to 800+ words**
  - Currently the primary E-E-A-T page has almost no biographical depth
  - Must add: teaching career timeline, graduation year from Đại học Sư phạm Vinh, a concrete classroom example, any verifiable recognition (district honours, competition coordination)
  - File: `src/site/page-registry.jsx` → `aboutSignals` array + `about` page component

- [x] **C6. Add a privacy policy page**
  - Contact form collects name, grade, and phone number — no privacy policy exists anywhere
  - Potential violation of Vietnamese Decree 13/2023/NĐ-CP on personal data protection
  - Create `/chinh-sach-bao-mat/` page; link it from the contact form and footer
  - Add the route to `src/site/page-registry.jsx` staticPages array

---

## 🟠 High — Fix Within 1 Week

- [x] **H1. Expand all 4 blog posts to minimum 1,000–1,500 words each**
  - Current word counts: Post 3 ~280 words, Posts 1/2/4 ~350–420 words
  - All four published on the same date (`2026-03-15`) — signals a content dump
  - Each post needs: specific Kiên Giang exam examples, ≥1 external reference link (MOET, provincial exam papers), first-person teaching anecdote
  - Stagger `updatedAt` dates in `src/content/blog-posts.js` as each post is revised
  - File: `src/content/blog-posts.js`

- [x] **H2. Add security headers via `vercel.json`**
  - Five headers completely absent: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`
  - Create `vercel.json` at project root:
  ```json
  {
    "headers": [
      {
        "source": "/(.*)",
        "headers": [
          { "key": "X-Content-Type-Options", "value": "nosniff" },
          { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
          { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
          { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
        ]
      },
      {
        "source": "/assets/(.*)",
        "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
      }
    ]
  }
  ```
  - The `/assets/(.*)` rule also fixes H4 (no long-term caching) in the same step

- [ ] **H3. Install Google Analytics 4**
  - No analytics token found anywhere on the site — impossible to measure SEO results
  - Add GA4 snippet inside `renderHtmlDocument()` in `scripts/build.mjs` so it appears in every page's `<head>`

- [x] **H4. Fix asset caching (covered by `vercel.json` in H2)**
  - Hashed JS/CSS bundles (`index-DG8iJFQf.js`) served with `max-age=0, must-revalidate` — repeat visitors re-download 102KB JS on every visit
  - Fixed by the `/assets/(.*)` header rule in H2's `vercel.json`

- [x] **H5. Fix schema `@id` and telephone format in `page-registry.jsx`**
  - `EducationalOrganization` has no `@id` — Google cannot build a coherent Knowledge Graph entity
  - All `Course.provider`, `BlogPosting.publisher`, `BlogPosting.author` duplicate the org object inline instead of referencing a shared URI
  - Telephone is `"0919 414 006"` — must be `"+84919414006"` (E.164) for click-to-call eligibility
  - Fixes:
    - Add `"@id": "https://daytoanthaylong.com/#organization"` to org block
    - Add `"@id": "https://daytoanthaylong.com/#teacher"` to Person block
    - Replace all inline author/publisher/provider with `{"@id": "..."}` references
    - Update both telephone numbers to E.164 format

- [ ] **H6. Convert LCP image to WebP + fix dimensions**
  - `room1.jpeg`: 66KB JPEG, declared `1600×900` but actual size is `963×1280` — wrong aspect ratio declared
  - `potrait.jpeg`: 165KB for a 600×800 portrait (should be ~25KB as WebP)
  - `logo.webp`: 73KB for a 176×96 logo (should be ~8–10KB)
  - Fix: convert `room1.jpeg` and `potrait.jpeg` to WebP via `<picture>` with JPEG fallback; add `fetchpriority="high"` to hero `<img>`; re-export logo at correct resolution
  - Correct declared `width`/`height` on `room1.jpeg` `<img>` to match actual file dimensions

- [x] **H7. Make testimonials verifiable**
  - No dates, no last names, no link to third-party review platforms
  - Add visible link to Google Maps listing and Facebook page where reviews can be independently checked
  - Add review dates next to each testimonial
  - File: `src/components/testimonials.jsx`

---

## 🟡 Medium — Fix Within 1 Month

- [x] **M1. Fix sitemap domain and lastmod dates**
  - All 9 `<loc>` entries use non-www (update to match canonical choice from C1)
  - All 9 pages share `lastmod: 2026-03-22` (today's build date — use real content dates)
  - File: `scripts/build.mjs` → `generateSitemap()`

- [x] **M2. Add `hasCourseInstance` to Course schema**
  - Google requires `hasCourseInstance` before rendering Course rich results
  - File: `src/site/page-registry.jsx` → `ItemList` of `Course` objects

- [x] **M3. Add visible author byline and publish date to blog posts**
  - Schema has `author.name` and `datePublished` but they are not rendered in the HTML
  - Google quality raters check the visible page, not just schema
  - File: `src/site/page-registry.jsx` → blog post page component

- [x] **M4. Add first-person teaching experience to blog posts**
  - All blog content is generic advice anyone could write — no classroom-specific signals
  - Add ≥1 paragraph per post: e.g. "Khi dạy học sinh lớp 9 chuẩn bị thi chuyên Huỳnh Mẫn Đạt, tôi thường thấy..."
  - File: `src/content/blog-posts.js`

- [x] **M5. Add external citations to blog posts**
  - Zero external links in any blog post — all pedagogical claims are unsubstantiated
  - Add ≥1 link per post to: official MOET exam structures, Kiên Giang provincial education announcements, or verified past exam papers
  - File: `src/content/blog-posts.js`

- [ ] **M6. Add route-level code splitting**
  - 331KB single JS bundle — all 5 route components bundled together on every page
  - Add `React.lazy()` + `Suspense` for components not needed on the current route
  - Target: reduce homepage initial JS from 331KB to under 150KB
  - File: `src/main.jsx`, `src/site/page-registry.jsx`

- [x] **M7. Add `openingHoursSpecification` to LocalBusiness schema**
  - Hours are visible on the page but not machine-readable in schema
  - Add structured hours (Mon–Sat 13:00–21:00, Sun 08:00–21:00) to the org block
  - Unlocks Google Knowledge Panel hours display
  - File: `src/site/page-registry.jsx`

- [ ] **M8. Add pricing transparency**
  - No fee information anywhere — parents use cost as a primary enrollment decision signal
  - Add at least a fee range or "Học thử miễn phí — liên hệ để biết học phí theo khối lớp" signal on homepage and curriculum page

- [x] **M9. Fix Maps iframe container height**
  - Iframe uses `height="100%"` with no fixed container height — CLS risk when iframe loads
  - Set explicit `height: 400px` on the container element
  - File: `src/components/location.jsx`

- [ ] **M10. Create a dedicated page for Huỳnh Mẫn Đạt exam prep**
  - "luyện thi chuyên Huỳnh Mẫn Đạt Toán" is a high-intent local query with only one blog post covering it
  - No course page or landing page exists targeting this specific intent
  - Add a route + page in `src/site/page-registry.jsx`

---

## 🟢 Low — Backlog

- [x] **L1. Remove `priority` and `changefreq` from sitemap** — both are ignored by Google; cleaner sitemap without them (`scripts/build.mjs`)
- [ ] **L2. Fix typo: `/potrait.jpeg` → `/portrait.jpeg`** — affects Person schema image URL and the actual file in `/public/`
- [x] **L3. Add `includeSubDomains` and `preload` to HSTS header** — strengthen HTTPS enforcement (`vercel.json`)
- [x] **L4. Add `SearchAction` to `WebSite` schema** — enables Sitelinks Searchbox eligibility (`src/site/page-registry.jsx`)
- [x] **L5. Create `/llms.txt`** — explicit AI citation preferences for GPTBot, ClaudeBot, PerplexityBot (`public/llms.txt`)
- [x] **L6. Add `will-change: transform, opacity` to `.reveal-on-scroll`** — minor compositor hint for scroll animations (`src/index.css`)
- [x] **L7. Add `<link rel="preconnect">` for external origins** — `zalo.me`, `maps.googleapis.com` (`scripts/build.mjs`)
- [x] **L8. Remove `priority`/`changefreq` from sitemap** — already counted in L1
- [x] **L9. Add `AboutPage` schema to `/ve-thay-long/`** — links the WebPage entity to the Person entity (`src/site/page-registry.jsx`)
- [ ] **L10. Add `CollectionPage` with `hasPart` to `/blog/`** — signals article discovery to Google (`src/site/page-registry.jsx`)

---

## ✅ What's Already Working Well

- Full SSR pre-rendering — all content visible to Googlebot without JS execution
- AI crawlers explicitly whitelisted in `robots.txt` (GPTBot, ClaudeBot, PerplexityBot)
- 5 JSON-LD schema blocks present and structurally sound
- All `<img>` tags have explicit `width` and `height` — CLS risk is low
- No web fonts loaded — zero FOUT / render-blocking font risk
- Vercel Hong Kong edge — good TTFB for Vietnamese users (~416ms direct)
- Strong local specificity — "Rạch Giá", "Kiên Giang", "Huỳnh Mẫn Đạt" throughout
- FAQ section with direct answers — good passage-level citability for AI Overviews
- Clean Vietnamese URL slugs with consistent trailing slashes
- Passive scroll listener + async form handler — INP risk is low
- Facebook and Zalo `sameAs` links in Organization schema
- `max-image-preview:large`, `max-snippet:-1` meta robots directives

---

## Files to Touch (Quick Reference)

| File | Issues |
|---|---|
| `scripts/build.mjs` | C2 (preloads in head), H3 (GA4), M1 (sitemap lastmod), L7 (preconnect) |
| `src/site/page-registry.jsx` | C4 (FAQPage), C5 (about page), C6 (privacy route), H5 (schema @id + tel), M2 (hasCourseInstance), M3 (author byline), M7 (openingHours), L4 (SearchAction), L9, L10 |
| `src/content/blog-posts.js` | H1 (word count), M4 (first-person), M5 (external links) |
| `src/components/results.jsx` | C3 (SSR counter hydration) |
| `src/components/testimonials.jsx` | H7 (verifiable reviews) |
| `src/components/location.jsx` | M9 (iframe height) |
| `public/` | H6 (convert images to WebP), L2 (rename potrait→portrait), L5 (llms.txt) |
| `vercel.json` *(new file)* | H2 (security headers), H4 (asset caching), L3 (HSTS) |
| `src/index.css` | L6 (will-change hint) |
