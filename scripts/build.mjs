import fs from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { build } from "vite"

const rootDir = path.resolve(new URL("..", import.meta.url).pathname)
const distDir = path.join(rootDir, "dist")
const ssrDir = path.join(rootDir, ".ssr")
const buildDate = new Date().toISOString().slice(0, 10)

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function serializeForScript(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
}

function inferImageMimeType(url) {
  if (url.endsWith(".png")) {
    return "image/png"
  }
  if (url.endsWith(".webp")) {
    return "image/webp"
  }
  if (url.endsWith(".jpg") || url.endsWith(".jpeg")) {
    return "image/jpeg"
  }

  return ""
}

function getOutputPath(route) {
  if (route === "/") {
    return path.join(distDir, "index.html")
  }

  const normalized = route.replace(/^\/|\/$/g, "")
  return path.join(distDir, normalized, "index.html")
}

async function readManifest() {
  const manifestCandidates = [path.join(distDir, ".vite", "manifest.json"), path.join(distDir, "manifest.json")]

  for (const candidate of manifestCandidates) {
    try {
      const raw = await fs.readFile(candidate, "utf8")
      return JSON.parse(raw)
    } catch {
      // Try next candidate.
    }
  }

  throw new Error("Could not find Vite manifest after client build.")
}

function collectImports(manifest, entryKey, seen = new Set()) {
  const entry = manifest[entryKey]

  if (!entry || seen.has(entryKey)) {
    return []
  }

  seen.add(entryKey)

  const imports = []
  for (const importedKey of entry.imports || []) {
    const importedEntry = manifest[importedKey]
    if (!importedEntry) {
      continue
    }
    imports.push(importedEntry.file, ...collectImports(manifest, importedKey, seen))
  }

  return imports
}

function renderHtmlDocument({ appHtml, metadata, entry, importFiles, pageId, pageProps }) {
  const cssLinks = (entry.css || [])
    .map((file) => `<link rel="stylesheet" href="/${file}">`)
    .join("")
  const preloadLinks = importFiles
    .filter(Boolean)
    .map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`)
    .join("")
  const structuredDataScripts = (metadata.structuredData || [])
    .map((item) => `<script type="application/ld+json">${serializeForScript(item)}</script>`)
    .join("")
  const ogImageType = metadata.ogImage ? inferImageMimeType(metadata.ogImage) : ""
  const articleMeta = metadata.article
    ? `
    <meta property="article:published_time" content="${escapeHtml(metadata.article.publishedTime || "")}" />
    <meta property="article:modified_time" content="${escapeHtml(metadata.article.modifiedTime || "")}" />
    <meta property="article:section" content="${escapeHtml(metadata.article.section || "")}" />
    ${(metadata.article.tags || [])
      .map((tag) => `<meta property="article:tag" content="${escapeHtml(tag)}" />`)
      .join("\n    ")}`
    : ""

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0f766e" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="Dạy Toán Thầy Long" />
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="keywords" content="${escapeHtml(metadata.keywords || "")}" />
    <meta name="language" content="vi-VN" />
    <meta name="geo.region" content="VN-47" />
    <meta name="geo.placename" content="Rạch Giá, Kiên Giang" />
    <meta name="geo.position" content="10.02217;105.08156" />
    <meta name="ICBM" content="10.02217, 105.08156" />
    <title>${escapeHtml(metadata.title)}</title>
    <link rel="canonical" href="${metadata.canonical}" />
    <link rel="alternate" hreflang="vi-VN" href="${metadata.canonical}" />
    <link rel="alternate" hreflang="x-default" href="${metadata.canonical}" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta property="og:type" content="${metadata.ogType}" />
    <meta property="og:locale" content="vi_VN" />
    <meta property="og:url" content="${metadata.canonical}" />
    <meta property="og:site_name" content="Dạy Toán Thầy Long" />
    <meta property="og:title" content="${escapeHtml(metadata.title)}" />
    <meta property="og:description" content="${escapeHtml(metadata.description)}" />
    <meta property="og:image" content="${metadata.ogImage}" />
    <meta property="og:image:alt" content="${escapeHtml(metadata.ogImageAlt || metadata.title)}" />
    ${ogImageType ? `<meta property="og:image:type" content="${ogImageType}" />` : ""}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(metadata.title)}" />
    <meta name="twitter:description" content="${escapeHtml(metadata.description)}" />
    <meta name="twitter:image" content="${metadata.ogImage}" />
    <meta name="twitter:image:alt" content="${escapeHtml(metadata.ogImageAlt || metadata.title)}" />
    ${articleMeta}
    ${cssLinks}
    ${preloadLinks}
    ${structuredDataScripts}
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script>window.__PAGE_ID__=${serializeForScript(pageId)};window.__PAGE_PROPS__=${serializeForScript(pageProps)};</script>
    <script type="module" crossorigin src="/${entry.file}"></script>
  </body>
</html>`
}

function generateSitemap(pages) {
  const urls = pages
    .map(
      (page) => `  <url>
    <loc>https://daytoanthaylong.com${page.route === "/" ? "/" : page.route}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${page.route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${page.route === "/" ? "1.0" : page.route === "/blog/" ? "0.8" : "0.7"}</priority>
  </url>`,
    )
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

function generateRobots() {
  return `User-agent: *
Allow: /

# AI Search Crawlers — allowed for GEO visibility
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://daytoanthaylong.com/sitemap.xml
`
}

await build({
  root: rootDir,
  logLevel: "info",
  build: {
    manifest: true,
    outDir: distDir,
    emptyOutDir: true,
  },
})

await build({
  root: rootDir,
  logLevel: "info",
  build: {
    ssr: path.join(rootDir, "src", "entry-server.jsx"),
    outDir: ssrDir,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "entry-server.js",
      },
    },
  },
})

const manifest = await readManifest()
const entryKey = manifest["index.html"] ? "index.html" : Object.keys(manifest).find((key) => manifest[key].isEntry)

if (!entryKey) {
  throw new Error("Could not resolve the client entry from Vite manifest.")
}

const clientEntry = manifest[entryKey]
const importedFiles = [...new Set(collectImports(manifest, entryKey))]
const serverBundle = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href + `?t=${Date.now()}`)
const pages = serverBundle.getStaticPages()

for (const page of pages) {
  const { appHtml, metadata } = serverBundle.renderPage(page.id, page.props || {})
  const outputPath = getOutputPath(page.route)
  const html = renderHtmlDocument({
    appHtml,
    metadata,
    entry: clientEntry,
    importFiles: importedFiles,
    pageId: page.id,
    pageProps: page.props || {},
  })

  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, html, "utf8")
}

await fs.writeFile(path.join(distDir, "sitemap.xml"), generateSitemap(pages), "utf8")
await fs.writeFile(path.join(distDir, "robots.txt"), generateRobots(), "utf8")
await fs.rm(ssrDir, { recursive: true, force: true })
