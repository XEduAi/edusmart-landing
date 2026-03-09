# Full SEO Audit Report — daytoanthaylong.com
**Date:** 2026-03-10
**Site:** Dạy Toán Thầy Long — Math tutoring center, Rạch Giá, Kiên Giang
**Type:** Single-page React/Vite SPA
**Audited by:** 4 specialist agents (Technical, Content, Schema, Performance)

---

## Executive Summary

### Overall SEO Health Score: 63 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 61 | 15.3 |
| Content Quality | 25% | 71 | 17.8 |
| On-Page SEO | 20% | 65 | 13.0 |
| Schema / Structured Data | 10% | 55 | 5.5 |
| Performance (CWV) | 10% | 50 | 5.0 |
| Images | 5% | 65 | 3.3 |
| AI Search Readiness | 5% | 58 | 2.9 |
| **TOTAL** | | | **62.8 → 63** |

### Business Type Detected
Local educational service — Vietnamese private math tutoring center (grades 6–12), single physical location, conversion-focused landing page with contact form as primary CTA.

### Top 5 Critical Issues
1. **CRITICAL FACTUAL ERROR** — Province listed as "An Giang" across 4 files + schema; Rạch Giá is in **Kiên Giang**
2. **SPA with no SSR/prerender** — All body content is invisible to Googlebot on the fast HTML-only pass
3. **LCP images unoptimized** — Hero JPEGs not preloaded, no WebP, blocked behind JS `opacity-0` gate
4. **Missing LocalBusiness schema type** — No local pack eligibility without it
5. **Dead social links** — Facebook, Zalo icon links in footer are `href="#"` placeholders

### Top 5 Quick Wins
1. Fix province name (1-line change in 4 files, immediate trust + schema fix)
2. Add `<link rel="preload">` for `room1.jpeg` in `index.html` (1 line, -500ms LCP)
3. Add `"@type": ["EducationalOrganization", "LocalBusiness"]` to schema (1-word change)
4. Trim meta description to 145 chars and insert "Rạch Giá" (2 minutes)
5. Add `loading="lazy"` to 5 below-fold images (10 minutes)

---

## 1. Technical SEO — Score: 61/100

### 1.1 SPA Crawlability — CRITICAL FAIL

**No SSR, no prerendering, no SSG is configured.**

`vite.config.js` uses only `@vitejs/plugin-react` and `@tailwindcss/vite`. No `vite-plugin-prerender`, `vite-ssg`, or equivalent exists. The HTML shell Googlebot sees on its fast pass contains only:

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

Every meaningful content element — teacher credentials, curriculum, FAQ, contact info — is entirely JS-rendered. Googlebot may index it on the deferred JS pass, but with variable delay and no guarantee of completeness during complex animations.

**Fix:** Add `vite-plugin-prerender` to generate a static HTML snapshot of the fully-rendered page.

### 1.2 robots.txt — PASS (minor gap)

```
User-agent: *
Allow: /
Sitemap: https://daytoanthaylong.com/sitemap.xml
```

Valid. `Sitemap:` directive present and correct. The `Allow: /` is redundant but harmless.

**Gap:** No AI crawler directives (`GPTBot`, `ClaudeBot`, `CCBot`, `anthropic-ai`). Add deliberate policy.

### 1.3 sitemap.xml — PASS (with consistency note)

Valid XML, correct namespace, single URL entry appropriate for an SPA. `<loc>` uses `https://daytoanthaylong.com` (no trailing slash), consistent with the canonical tag.

**Risk:** If hosting auto-appends a trailing slash (Netlify/Vercel behavior), the sitemap `<loc>` would mismatch the served URL. Verify at hosting level.

### 1.4 Canonical Tag — PASS

```html
<link rel="canonical" href="https://daytoanthaylong.com" />
```

Present in static `<head>`, correct placement for SPA. Self-referencing. HTTPS. Consistent with `og:url`.

**Risk:** Trailing slash normalization at hosting layer could create a redirect chain before the canonical target.

### 1.5 Meta Robots — PASS

```html
<meta name="robots" content="index, follow" />
```

Explicit, correct. No `noindex` directives found.

### 1.6 Core Web Vitals — AT RISK

**LCP:** Hero images (`room1.jpeg`, `room2.jpeg`) are the LCP candidates. Neither has `fetchpriority="high"` or a `<link rel="preload">`. They are JPEG (not WebP). They are hidden behind a `useState(false)` + `useEffect` animation gate that keeps them `opacity: 0` until React hydrates — this directly inflates measured LCP.

**INP:** No heavy third-party scripts. Tab switching in PlatformShowcase is O(4), acceptable. Embla carousel may affect INP on low-end Android — monitor with field data.

**CLS:** All `<img>` tags have explicit `width`/`height` attributes — PASS. Google Fonts uses `display=swap` — PASS. No layout-affecting animations detected.

### 1.7 Mobile Viewport — PASS

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

No `maximum-scale` restriction. Tailwind responsive breakpoints used consistently.

### 1.8 Security Signals in HTML — PARTIAL

Present: relative paths (no mixed content), HTTPS on all external links, `theme-color` set.

Not visible in HTML (must be verified at hosting/CDN layer): `Content-Security-Policy`, `X-Frame-Options`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`.

**Flag:** The contact form POSTs to `https://smartedu-backend.io.vn/api/leads/register` — a different domain. The document showcase CTA links to `https://app.edusmart.vn/documents` — yet another domain. These cross-domain references may confuse users and should be explained or unified.

### 1.9 Redirect Chain Risks — MEDIUM

- www vs. non-www: canonical uses non-www; DNS A record for `www.` may not redirect
- Trailing slash normalization at hosting layer
- Footer social links `href="#"` — not a redirect risk but dead links

---

## 2. Content Quality & E-E-A-T — Score: 71/100

### 2.1 E-E-A-T Breakdown

**Experience: 14/20**

Positive: Real classroom photos with location-specific alt text. Named teacher with real portrait. Specific testimonial outcomes (score improvement from 5→8.5, score 9.5 for chuyên Toán exam).

Gaps: No datestamped content. "1000+ học sinh" claim appears 3× with no external substantiation. Hero social proof avatars use placeholder letter initials (H, T, M, L) — not real students.

**Expertise: 17/25**

Positive: Teacher name, alma mater (ĐH Sư phạm Toán, Vinh), 40+ years teaching. Named methodology ("Hiểu sâu bản chất – Luyện tập thông minh – Nhớ lâu dễ dàng"). Curriculum maps to specific exam types.

Gaps: No graduation year, teaching license, or anchoring details. Teacher bio is 3 bullet points — needs biographical prose. No syllabus depth or sample problems. No mention of which curriculum framework is followed (Bộ GD&ĐT 2018).

**Authoritativeness: 14/25**

Positive: Comprehensive schema markup. Live LMS subdomain demonstrates operational infrastructure.

Gaps: Facebook link is `href="#"` (placeholder — not live). No Google Business Profile link. No third-party citations. "4.9/5 đánh giá" in hero has no review source link. Zalo icon link also `href="#"`.

**Trustworthiness: 20/30**

Positive: Two real `tel:` phone numbers, consistent street address across schema + footer + contact form. Embedded Google Map. Opening hours in both UI and structured data.

Gaps: No privacy policy — critical for a form collecting minor children's parents' contact info. Province name wrong ("An Giang" should be "Kiên Giang") — appears in 4 files. Document showcase links to `app.edusmart.vn` without explanation.

### 2.2 Title Tag

**Current:** `Dạy Toán Thầy Long - Học Toán Dễ Như Chơi, Giỏi Toán Từ Lớp 6 Đến 12` (72 chars)

Assessment: Good keyword placement, click-worthy tone. **Too long** — truncated on mobile at ~60 chars. **No local keyword** ("Rạch Giá") — missed for local search intent.

**Recommended:** `Dạy Toán Thầy Long Rạch Giá - Học Toán Lớp 6-12, Bứt Phá Điểm Số` (61 chars)

### 2.3 Meta Description

**Current:** 177 characters — exceeds 155-char limit. The CTA ("Đăng ký học thử miễn phí ngay!") is truncated in SERPs. No local keyword.

**Recommended (146 chars):** `Trung tâm dạy Toán Rạch Giá uy tín. Phương pháp hiểu bản chất, học theo năng lực, bứt phá điểm số chỉ sau 4 buổi. Đăng ký học thử miễn phí!`

### 2.4 Heading Hierarchy

H1 → multiple H2 (one per section) → H3 for sub-content. Structure is sound.

**Gaps:**
- H1 contains "Học Toán" but not "Dạy Toán" (higher-volume search term)
- No H2 contains "Rạch Giá" or "Kiên Giang" — zero local keyword in headings
- Location H2 reads "Đến với lớp học của chúng tôi" — missed geo-signal opportunity

### 2.5 Content Depth by Section

| Section | ~Word Count | Status |
|---|---|---|
| Hero | 80 | Acceptable (hook) |
| Value Proposition | 150 | Adequate |
| Results | 80 | **Thin** — stats with no narrative |
| Curriculum | 130 | **Thin** — topic lists only |
| Platform Showcase | 280 | Adequate |
| Document Showcase | 80 | **Thin** — cross-domain link unexplained |
| Teacher Profile | 100 | **Thin** — most E-E-A-T critical section |
| Testimonials | 160 | Adequate |
| FAQ | 450 | **Strong** |
| Location | 60 | Thin but appropriate |
| **Total** | ~1,710 | Clears 500-word minimum |

### 2.6 Local Keyword Coverage

| Keyword | Title | H1 | Visible Body | Meta Desc |
|---|---|---|---|---|
| Rạch Giá | ❌ | ❌ | Alt text only | ❌ |
| Kiên Giang | ❌ | ❌ | Schema only | ❌ |
| dạy toán | ✅ | ❌ | ✅ | ✅ |
| học toán | ✅ | ✅ | ✅ | ❌ |
| trung tâm toán | ❌ | ❌ | Footer only | ✅ |

"Rạch Giá" and "Kiên Giang" appear **only** in alt text, structured data, and address fields — never in any visible heading or paragraph copy. A parent searching "học toán ở Rạch Giá" finds no visible geographic confirmation in the page body.

### 2.7 FAQ Quality

6 questions present. Best: "Học thử trước được không?" (specific, actionable). Weakest: "Học phí bao nhiêu?" (deflects with no price range — frustrates users).

Missing high-intent queries: "Lớp học ở đâu?", "Có học online không?", "Học phí một tháng hết bao nhiêu?", "Trẻ lớp 6 yếu Toán có theo kịp không?", "Thầy dạy Toán được bao nhiêu năm?"

### 2.8 Testimonial Credibility

Strong: "điểm tăng từ 5 lên 8.5 sau 3 tháng" (Chị Nguyễn Thị Hoa), "điểm 9.5, đỗ lớp chuyên Toán" (Em Trần Minh Khoa) — specific and verifiable.

Weak: Two other testimonials are emotional/vague with no measurable outcome. All use initial-only avatars with no external platform link. The 4.9/5 score in the hero is not linked to any review source.

---

## 3. Schema / Structured Data — Score: 55/100

### 3.1 Existing Schema

Format: JSON-LD (correct). Location: static `<head>` (correct). Type: `EducationalOrganization`.

A second `FAQPage` schema is dynamically injected via `useEffect` in `faq.jsx` — dependent on JS execution. Note: FAQPage rich results are restricted to government/healthcare sites since August 2023. This site **does not qualify** for FAQ rich results.

### 3.2 Critical Error: Province Mismatch

**`"addressRegion": "An Giang"` is factually wrong.**

Rạch Giá is the capital of **Kiên Giang province**, not An Giang. The geo coordinates (`10.02217, 105.08156`) confirm this — they map to Rạch Giá (Kiên Giang), not to any city in An Giang.

This error appears in:
- `index.html` — schema `addressRegion`
- `footer.jsx` line 86 — visible text "Tỉnh An Giang"
- `teacher-profile.jsx` — `<img>` alt text "Rạch Giá, An Giang"
- `contact-form.jsx` — address display text
- `location.jsx` — address display text

### 3.3 Missing: LocalBusiness Type

`EducationalOrganization` does not inherit `LocalBusiness` eligibility for Google's local pack. Without `LocalBusiness`, the site cannot appear in the map block for queries like "dạy toán Rạch Giá".

**Fix:** Change `"@type": "EducationalOrganization"` to `"@type": ["EducationalOrganization", "LocalBusiness"]`

### 3.4 Other Schema Issues

| Issue | Severity |
|---|---|
| `image` duplicates `logo` (same URL) | Medium |
| No `sameAs` (social profiles, Google Maps) | High |
| `contactType: "customer service"` → should be `"customer support"` | Low |
| No `Person` schema for teacher | High |
| No `Course` schema for 3 curriculum programs | High |
| No `WebSite` schema | Medium |
| No `AggregateRating` despite 4.9/5 displayed | Medium |

### 3.5 Recommended New Schema Blocks (see ACTION-PLAN.md for full JSON-LD)

1. Updated `EducationalOrganization + LocalBusiness` block (fix province, add dual type, add sameAs, add hasOfferCatalog)
2. `Person` schema for Thầy Nguyễn Hữu Long
3. `Course` `@graph` block (3 programs)
4. `WebSite` schema

---

## 4. Performance / Core Web Vitals — Score: 50/100

### 4.1 LCP — CRITICAL

**Hero images are the LCP candidates. Three compounding problems:**

1. No `<link rel="preload" as="image" href="/room1.jpeg">` in `<head>` — browser cannot discover images until React renders
2. `useState(false)` + `useEffect` gate in `hero.jsx` keeps all hero content `opacity: 0` until JS runs — the LCP paint is delayed by the full JS parse + execute time
3. `room1.jpeg` and `room2.jpeg` are JPEG — no WebP versions exist (unlike logo which has `.webp`)

**Expected LCP on mobile (3G): 4–6 seconds without fixes. Target: under 2.5 seconds.**

### 4.2 CLS — PASS

All `<img>` tags have explicit `width` and `height` attributes. Google Fonts uses `display=swap`. Animations use `transform`/`opacity` only (no layout-affecting properties). ✅

### 4.3 INP — MODERATE

No heavy third-party JS (no GA4, GTM, Facebook Pixel). Tab switching in PlatformShowcase is fast. Embla carousel may cause INP issues on low-end Android — monitor with field data.

### 4.4 Image Optimization Issues

| Image | Format | WebP Available | Lazy Loading | Issue |
|---|---|---|---|---|
| room1.jpeg | JPEG | ❌ | No attr (eager — correct for LCP) | Convert to WebP, add preload |
| room2.jpeg | JPEG | ❌ | No attr (eager) | Convert to WebP |
| potrait.jpeg | JPEG | ❌ | No `loading="lazy"` | Convert to WebP, add lazy |
| logo.png | PNG | ✅ logo.webp | N/A | OK |
| ss-*.webp | WebP | ✅ | No `loading="lazy"` | Add lazy loading |

### 4.5 Vite Build Optimization Gaps

| Missing | Impact |
|---|---|
| No `manualChunks` config | All JS in one bundle; no vendor caching |
| No `vite-plugin-compression` | No brotli/gzip pre-compression |
| No image optimizer plugin | JPEG/PNG copied as-is to dist/ |
| No `React.lazy` for below-fold sections | Full bundle must load before any content |
| No critical CSS inlining | Render-blocking CSS bundle |

### 4.6 Font Loading

`preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com` is present and correct. `display=swap` is set. No `<link rel="preload" as="font">` for Inter weight 400/600 — adds FOUT window.

---

## 5. Images — Score: 65/100

**Alt text: PASS** — All images have descriptive Vietnamese alt text with location keywords.

**OG Image:** Points to `logo.png` (2816×1536px). When shared on Facebook/Zalo, this will be cropped to 1200×630. A dedicated classroom photo or designed banner would produce better social share previews.

**File Format:** Room photos and teacher portrait are JPEG with no WebP alternatives. Screenshots have both `.png` and `.webp` — good.

**Lazy Loading:** Not applied to any below-fold images (screenshots, teacher portrait).

**Dimensions:** All `<img>` tags have explicit `width` and `height` — CLS prevention is correct.

---

## 6. AI Search Readiness — Score: 58/100

**Present (positive signals):**
- `FAQPage` schema (even if not eligible for rich results, still helps AI parsing)
- `EducationalOrganization` schema with structured data
- Specific quotable statistics: "40+ năm kinh nghiệm", "lớp nhóm nhỏ 5-10 học sinh"
- Named, distinctive methodology phrase

**Missing:**
- No `Course` schema — directly supported by AI Overviews for education queries
- No `Person` schema for the educator
- Unattributed statistics ("95% đạt điểm 8+", "1000+ học sinh") — AI systems will not cite these
- Content structured as UI cards, not prose — AI systems extract quotes from paragraphs more reliably
- No clear "About this school" prose sentence for direct-answer extraction
