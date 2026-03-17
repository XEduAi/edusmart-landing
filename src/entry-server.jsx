import { renderToString } from "react-dom/server"
import { Analytics } from "@vercel/analytics/react"
import { getPageComponent, getPageMetadata, getStaticPages } from "@/site/page-registry"

export { getStaticPages }

export function renderPage(pageId, pageProps = {}) {
  const Page = getPageComponent(pageId, pageProps)

  return {
    appHtml: renderToString(
      <>
        <Page />
        <Analytics />
      </>,
    ),
    metadata: getPageMetadata(pageId, pageProps),
  }
}
