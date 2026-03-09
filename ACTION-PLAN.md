# SEO Action Plan — daytoanthaylong.com
**Generated:** 2026-03-10 | **Overall Score:** 63/100
**Goal:** Reach 80+ within 30 days with the changes below.

---

## 🔴 CRITICAL — Fix Immediately (Today)

### C1. Fix Wrong Province Name (5 files)

Rạch Giá is in **Kiên Giang**, not An Giang. This appears in the schema Google reads directly and in 4 visible UI components. A quality rater or parent verifying the address will see this immediately.

**Files to edit:**

**`index.html`** — line 52 in schema:
```json
"addressRegion": "Kiên Giang",
```

**`src/components/footer.jsx`** — line 86:
```
Hẻm 1, Đường Nguyễn Tuân, Phường Rạch Giá, Tỉnh Kiên Giang
```

**`src/components/contact-form.jsx`** — address display text:
```
Tỉnh Kiên Giang
```

**`src/components/location.jsx`** — address display text:
```
Tỉnh Kiên Giang
```

**`src/components/teacher-profile.jsx`** — img alt text:
```
tại Rạch Giá, Kiên Giang
```

---

### C2. Add LocalBusiness to Schema Type

Without `LocalBusiness`, the site is ineligible for Google's local map pack (the most valuable placement for local search queries like "dạy toán Rạch Giá").

**`index.html`** — change in the schema `<script>`:
```json
"@type": ["EducationalOrganization", "LocalBusiness"],
```

---

### C3. Replace Schema addressRegion and Fix Full Organization Block

Replace the entire existing `<script type="application/ld+json">` block in `index.html` with this corrected version:

```json
{
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "name": "Dạy Toán Thầy Long",
  "alternateName": "Trung tâm Toán Thầy Long",
  "description": "Trung tâm dạy Toán uy tín với phương pháp hiểu bản chất từ lớp 6 đến 12. Học theo năng lực từng học sinh, bứt phá điểm số chỉ sau 4 buổi.",
  "url": "https://daytoanthaylong.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://daytoanthaylong.com/logo.png",
    "width": 2816,
    "height": 1536
  },
  "image": "https://daytoanthaylong.com/room1.jpeg",
  "telephone": ["+84919414006", "+84918877407"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hẻm 1, Đường Nguyễn Tuân",
    "addressLocality": "Rạch Giá",
    "addressRegion": "Kiên Giang",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.02217,
    "longitude": 105.08156
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "13:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "21:00"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84919414006",
    "contactType": "customer support",
    "availableLanguage": "Vietnamese"
  },
  "areaServed": {
    "@type": "City",
    "name": "Rạch Giá"
  },
  "priceRange": "$$",
  "sameAs": [
    "https://zalo.me/0918877407"
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://daytoanthaylong.com/#teacher"
  }
}
```

> **Note:** Add the real Facebook page URL to the `sameAs` array once it is available. Replace `room1.jpeg` in the `image` field with a dedicated business photo if one exists.

---

## 🟠 HIGH — Fix Within 1 Week

### H1. Add Image Preload for LCP

Adds ~500ms–1500ms LCP improvement on mobile. One line in `index.html` `<head>`, after the favicon links:

```html
<link rel="preload" as="image" href="/room1.jpeg" fetchpriority="high" />
```

Also add `fetchpriority="high"` to the first hero image in `src/components/hero.jsx`:
```jsx
<img
  src="/room1.jpeg"
  fetchpriority="high"
  alt="Không gian lớp học Toán Thầy Long - phòng học hiện đại tại Rạch Giá, Kiên Giang"
  ...
/>
```

---

### H2. Remove JS Animation Gate from Hero Images

The `isLoaded` pattern in `hero.jsx` keeps the hero section `opacity: 0` until React hydrates. This delays LCP even after the image is fetched. Remove the opacity transition from the classroom images (keep it for text/buttons if desired):

```jsx
// In hero.jsx — remove the transition class from the image grid div:
// BEFORE:
<div className={`mt-16 grid ... transition-all duration-1000 delay-700 ${
  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
}`}>
// AFTER:
<div className="mt-16 grid ...">
```

---

### H3. Fix Meta Description (Local SEO + Length)

**`index.html`** line 13 — replace with:
```html
<meta name="description" content="Trung tâm dạy Toán Rạch Giá uy tín. Phương pháp hiểu bản chất, học theo năng lực, bứt phá điểm số chỉ sau 4 buổi. Đăng ký học thử miễn phí!" />
```
(146 characters — within safe display range, includes "Rạch Giá", CTA preserved)

---

### H4. Fix Title Tag (Local SEO)

**`index.html`** line 12 — replace with:
```html
<title>Dạy Toán Thầy Long Rạch Giá - Học Toán Lớp 6-12, Bứt Phá Điểm Số</title>
```
(61 characters — safe for mobile, includes local keyword)

---

### H5. Add Person + Course + WebSite Schema Blocks

Add these three `<script type="application/ld+json">` blocks to `index.html` after the existing schema block:

**Person schema (teacher):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://daytoanthaylong.com/#teacher",
  "name": "Nguyễn Hữu Long",
  "honorificPrefix": "Thầy",
  "jobTitle": "Giáo viên môn Toán",
  "description": "Giáo viên Toán với 40+ năm kinh nghiệm giảng dạy THCS và THPT, tốt nghiệp Đại học Sư phạm Toán tại Vinh. Đào tạo hơn 1000 học sinh đạt học sinh giỏi.",
  "image": "https://daytoanthaylong.com/potrait.jpeg",
  "worksFor": {
    "@type": "EducationalOrganization",
    "@id": "https://daytoanthaylong.com",
    "name": "Dạy Toán Thầy Long"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Đại học Sư phạm Vinh"
  },
  "knowsAbout": ["Toán học", "Toán THCS", "Toán THPT", "Luyện thi THPT Quốc gia"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rạch Giá",
    "addressRegion": "Kiên Giang",
    "addressCountry": "VN"
  }
}
```

**Course schema (3 programs):**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://daytoanthaylong.com/#course-toan-co-ban",
      "name": "Toán cơ bản lớp 6–8",
      "description": "Xây dựng nền tảng vững chắc cho học sinh THCS. Bao gồm Số học, Đại số cơ bản, Hình học phẳng, Phương trình và Bất phương trình.",
      "url": "https://daytoanthaylong.com/#curriculum",
      "provider": {"@type": "EducationalOrganization", "@id": "https://daytoanthaylong.com"},
      "instructor": {"@type": "Person", "@id": "https://daytoanthaylong.com/#teacher"},
      "educationalLevel": "Trung học cơ sở",
      "inLanguage": "vi",
      "courseMode": "onsite",
      "offers": {"@type": "Offer", "priceCurrency": "VND", "url": "https://daytoanthaylong.com/#contact"}
    },
    {
      "@type": "Course",
      "@id": "https://daytoanthaylong.com/#course-toan-thi-vao-10",
      "name": "Toán thi vào lớp 10",
      "description": "Luyện thi chuyên và thi vào trường THPT. Chuyên đề nâng cao, bồi dưỡng học sinh giỏi, luyện đề thi vào 10.",
      "url": "https://daytoanthaylong.com/#curriculum",
      "provider": {"@type": "EducationalOrganization", "@id": "https://daytoanthaylong.com"},
      "instructor": {"@type": "Person", "@id": "https://daytoanthaylong.com/#teacher"},
      "educationalLevel": "Trung học cơ sở — Nâng cao",
      "inLanguage": "vi",
      "courseMode": "onsite",
      "offers": {"@type": "Offer", "priceCurrency": "VND", "url": "https://daytoanthaylong.com/#contact"}
    },
    {
      "@type": "Course",
      "@id": "https://daytoanthaylong.com/#course-toan-thpt",
      "name": "Toán lớp 10–12 và THPT Quốc gia",
      "description": "Chinh phục kỳ thi THPT và đại học. Giải tích, Hình học không gian, Đại số, luyện đề THPT Quốc gia với phương pháp giải nhanh.",
      "url": "https://daytoanthaylong.com/#curriculum",
      "provider": {"@type": "EducationalOrganization", "@id": "https://daytoanthaylong.com"},
      "instructor": {"@type": "Person", "@id": "https://daytoanthaylong.com/#teacher"},
      "educationalLevel": "Trung học phổ thông",
      "inLanguage": "vi",
      "courseMode": "onsite",
      "offers": {"@type": "Offer", "priceCurrency": "VND", "url": "https://daytoanthaylong.com/#contact"}
    }
  ]
}
```

**WebSite schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Dạy Toán Thầy Long",
  "url": "https://daytoanthaylong.com",
  "description": "Trung tâm dạy Toán uy tín từ lớp 6 đến 12 tại Rạch Giá, Kiên Giang",
  "inLanguage": "vi",
  "publisher": {"@type": "EducationalOrganization", "@id": "https://daytoanthaylong.com"}
}
```

---

### H6. Add `loading="lazy"` to Below-Fold Images

**`src/components/platform-showcase.jsx`** — all 4 screenshot `<img>` tags:
```jsx
<img loading="lazy" src={tab.image} ... />
```

**`src/components/teacher-profile.jsx`** — portrait:
```jsx
<img loading="lazy" src="/potrait.jpeg" ... />
```

---

### H7. Fix Footer Social Links

**`src/components/footer.jsx`** — replace `href="#"` placeholders with real URLs:
```jsx
{ href: "https://www.facebook.com/YOUR_PAGE_SLUG", icon: Facebook, label: "Facebook" },
{ href: "https://zalo.me/0918877407", icon: MessageCircle, label: "Zalo" },
{ href: "tel:0918877407", icon: Phone, label: "Phone" },
```

---

## 🟡 MEDIUM — Fix Within 1 Month

### M1. Implement Prerendering (SSR/SSG)

The single highest-impact technical fix. Without it, all body content depends on JS execution for Googlebot indexing.

```bash
npm install vite-plugin-prerender --save-dev
```

**`vite.config.js`:**
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createPrerenderer } from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createPrerenderer({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/'],
    }),
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
})
```

---

### M2. Convert Hero + Portrait Images to WebP

```bash
# Install cwebp or use sharp
npx sharp-cli -i public/room1.jpeg -o public/room1.webp
npx sharp-cli -i public/room2.jpeg -o public/room2.webp
npx sharp-cli -i public/potrait.jpeg -o public/potrait.webp
```

Then update `hero.jsx` and `teacher-profile.jsx` to use `<picture>`:
```jsx
<picture>
  <source srcSet="/room1.webp" type="image/webp" />
  <img src="/room1.jpeg" fetchpriority="high" alt="..." width="963" height="1280" />
</picture>
```

---

### M3. Add Local Keywords to Visible Body Copy

Add "Rạch Giá" and "Kiên Giang" to at least:
1. The `location.jsx` section — add a 2-sentence prose description of how to find the center
2. The `teacher-profile.jsx` bio — mention "giảng dạy tại Rạch Giá, Kiên Giang từ..."
3. Change the Location H2 from "Đến với lớp học của chúng tôi" to "Tìm lớp học Toán tại Rạch Giá"

---

### M4. Expand Teacher Bio to Prose

**`src/components/teacher-profile.jsx`** — replace the 3 bullet points with a paragraph:

Example:
> "Thầy Nguyễn Hữu Long tốt nghiệp Đại học Sư phạm Toán tại Vinh và đã có hơn 40 năm giảng dạy Toán cho học sinh THCS và THPT tại Rạch Giá, Kiên Giang. Với phương pháp giảng dạy chú trọng vào hiểu bản chất, thầy đã giúp hơn 1.000 học sinh bứt phá điểm số và nhiều em đạt giải học sinh giỏi cấp tỉnh."

---

### M5. Add Vite Build Optimizations

**`vite.config.js`** — add to `build` section:
```js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'react-router-dom'],
        carousel: ['embla-carousel-react', 'embla-carousel-autoplay'],
      },
    },
  },
},
```

Also add brotli compression:
```bash
npm install vite-plugin-compression --save-dev
```
```js
import compression from 'vite-plugin-compression'
// In plugins array:
compression({ algorithm: 'brotliCompress', ext: '.br' }),
```

---

### M6. Add Missing FAQ Questions

**`src/components/faq.jsx`** — add these entries to the FAQ data array:

```js
{
  question: "Lớp học Toán Thầy Long ở đâu tại Rạch Giá?",
  answer: "Lớp học tọa lạc tại Hẻm 1, Đường Nguyễn Tuân, Phường Rạch Giá, Tỉnh Kiên Giang. Liên hệ 0918 877 407 để được hướng dẫn đường đi."
},
{
  question: "Có học online không?",
  answer: "Hiện tại lớp học chủ yếu theo hình thức trực tiếp tại cơ sở. Học sinh có thể ôn tập và làm bài kiểm tra trực tuyến qua nền tảng EduSmart LMS tại lms.daytoanthaylong.com."
},
{
  question: "Học phí một tháng khoảng bao nhiêu?",
  answer: "Học phí phụ thuộc vào cấp lớp và số buổi học mỗi tuần. Vui lòng liên hệ thầy qua số 0918 877 407 hoặc Zalo để được tư vấn học phí cụ thể và phù hợp."
},
```

---

### M7. Create and Link a Privacy Policy Page

A form collecting name, phone number, grade, and learning goals of minor children's parents requires a privacy policy under Vietnamese cybersecurity law (Luật An ninh mạng 2018).

Create `public/privacy.html` with a simple Vietnamese privacy policy, then link in the footer:
```jsx
<a href="/privacy.html" className="text-sm text-muted-foreground hover:text-primary">
  Chính sách bảo mật
</a>
```

---

## 🟢 LOW — Backlog (Nice to Have)

### L1. Add Font Preload

**`index.html`** — add after the `preconnect` links:
```html
<link rel="preload" as="font" type="font/woff2"
  href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
  crossorigin />
```

### L2. Add AI Crawler Policy to robots.txt

```
User-agent: GPTBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: ClaudeBot
Disallow: /
```
(Only add if opting out of AI training is desired.)

### L3. Replace OG Image with a 1200×630 Banner

The current OG image is `logo.png` (2816×1536). When shared on Facebook/Zalo, it gets cropped awkwardly. Create a 1200×630 classroom photo or branded banner and update:
```html
<meta property="og:image" content="https://daytoanthaylong.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### L4. Add React.lazy for Below-Fold Sections

```jsx
// In App.jsx:
const Testimonials = React.lazy(() => import('./components/testimonials'))
const DocumentShowcase = React.lazy(() => import('./components/document-showcase'))
// etc.
```

### L5. Add Sticky/Floating Zalo CTA

On a long-scroll page, a user reading FAQ or teacher profile has no persistent conversion path. A floating Zalo button (bottom-right corner, `position: fixed`) with `href="https://zalo.me/0918877407"` solves this without cluttering the layout.

### L6. Add AggregateRating (Only After Real Review Collection)

Do NOT add this until there is a verifiable review source (Google Maps reviews, Facebook reviews). Add it as an extension to the EducationalOrganization schema block:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "47",
  "bestRating": "5",
  "worstRating": "1"
}
```
Fabricated ratings risk a Google manual action penalty.

---

## Summary Table

| ID | Priority | Action | File(s) | Effort | SEO Impact |
|---|---|---|---|---|---|
| C1 | 🔴 Critical | Fix province "Kiên Giang" | 5 files | 5 min | Trust, Schema |
| C2 | 🔴 Critical | Add LocalBusiness to @type | index.html | 1 min | Local Pack |
| C3 | 🔴 Critical | Replace full schema block | index.html | 10 min | Schema, Local |
| H1 | 🟠 High | Add image preload + fetchpriority | index.html, hero.jsx | 5 min | LCP |
| H2 | 🟠 High | Remove opacity-0 gate from hero images | hero.jsx | 5 min | LCP |
| H3 | 🟠 High | Fix meta description (local + length) | index.html | 2 min | CTR |
| H4 | 🟠 High | Fix title tag (add Rạch Giá) | index.html | 2 min | Local SEO |
| H5 | 🟠 High | Add Person + Course + WebSite schema | index.html | 15 min | AI, Schema |
| H6 | 🟠 High | Add loading="lazy" to below-fold images | 2 files | 5 min | Performance |
| H7 | 🟠 High | Fix footer social links | footer.jsx | 5 min | Trust |
| M1 | 🟡 Medium | Add SSR/prerender (vite-plugin-prerender) | vite.config.js | 1 hour | Crawlability |
| M2 | 🟡 Medium | Convert room/portrait images to WebP | public/ + 2 JSX files | 30 min | LCP, Bandwidth |
| M3 | 🟡 Medium | Add local keywords to visible body | 2-3 components | 20 min | Local SEO |
| M4 | 🟡 Medium | Expand teacher bio to prose | teacher-profile.jsx | 15 min | E-E-A-T |
| M5 | 🟡 Medium | Vite manualChunks + brotli | vite.config.js | 20 min | Performance |
| M6 | 🟡 Medium | Add 3 new FAQ questions | faq.jsx | 15 min | Content, Local |
| M7 | 🟡 Medium | Create and link privacy policy | new file + footer.jsx | 30 min | Trust, Legal |
| L1 | 🟢 Low | Font preload for Inter | index.html | 5 min | FOUT |
| L2 | 🟢 Low | AI crawler robots.txt policy | robots.txt | 5 min | AI opt-out |
| L3 | 🟢 Low | New 1200×630 OG image | public/ + index.html | 1 hour | Social sharing |
| L4 | 🟢 Low | React.lazy for below-fold sections | App.jsx | 30 min | FCP |
| L5 | 🟢 Low | Floating Zalo CTA button | New component | 20 min | Conversion |
| L6 | 🟢 Low | AggregateRating (after real reviews) | index.html | 10 min | Rich results |
