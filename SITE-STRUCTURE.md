# Site Structure — daytoanthaylong.com

## Current State: Single-Page Application

```
daytoanthaylong.com/
└── / (index.html — all content in one page)
    ├── #hero          — H1, CTA, social proof
    ├── #value         — Value proposition
    ├── #results       — Statistics & commitments
    ├── #curriculum    — 3 course levels
    ├── #platform      — EduSmart LMS showcase
    ├── #documents     — Resource library
    ├── #teacher       — Teacher profile
    ├── #testimonials  — Student reviews
    ├── #faq           — 8 FAQ items
    ├── #contact       — Lead capture form
    └── #location      — Map & contact info
```

## Recommended Future Architecture

```
daytoanthaylong.com/
├── /                           ← Current landing page (keep as-is)
├── /blog/                      ← Blog index
│   ├── /de-thi-vao-10-toan-kien-giang/
│   ├── /lo-trinh-on-thi-thptqg-toan-2026/
│   ├── /kinh-nghiem-thi-chuyen-huynh-man-dat/
│   ├── /cong-thuc-toan-12-day-du/
│   └── ...
├── /tai-lieu/                  ← Resource hub
│   ├── /de-thi/                ← Exam papers collection
│   └── /cong-thuc/             ← Formula sheets
├── /sitemap.xml
└── /robots.txt
```

### Why This Structure

| Decision | Reason |
|----------|--------|
| Keep single-page landing | Already well-optimized, high conversion potential |
| Add /blog/ | Multiple indexed pages = more keyword coverage |
| Add /tai-lieu/ | Resource pages attract backlinks + long-tail traffic |
| No separate service pages yet | Single page already covers all services well |

### Internal Linking Plan

```
Blog Post → #curriculum (relevant course)
Blog Post → #contact (CTA)
Blog Post → /tai-lieu/ (related resources)
FAQ → Blog posts (detailed answers)
Footer → Blog index
Footer → /tai-lieu/
```

---

## URL Naming Conventions

- Use Vietnamese with hyphens: `/de-thi-vao-10-toan-kien-giang/`
- Keep URLs under 60 characters when possible
- Include primary keyword in URL
- Use lowercase only
- No date in URL (evergreen content)

---

## Sitemap Evolution

### Current (1 URL)
```xml
<url>
  <loc>https://daytoanthaylong.com</loc>
  <priority>1.0</priority>
</url>
```

### Target (Phase 2 — 5-10 URLs)
```xml
<url><loc>https://daytoanthaylong.com</loc><priority>1.0</priority></url>
<url><loc>https://daytoanthaylong.com/blog/</loc><priority>0.8</priority></url>
<url><loc>https://daytoanthaylong.com/blog/de-thi-vao-10-toan-kien-giang/</loc><priority>0.7</priority></url>
<url><loc>https://daytoanthaylong.com/blog/on-thi-thptqg-toan-2026/</loc><priority>0.7</priority></url>
<!-- ... more blog posts ... -->
```

### Target (Phase 4 — 20+ URLs)
Add /tai-lieu/ pages, more blog posts, potential service sub-pages
