import { renderToString } from "react-dom/server"
import { getPageComponent, getPageMetadata, getStaticPages } from "@/site/page-registry"

export { getStaticPages }

export function renderPage(pageId, pageProps = {}) {
  const Page = getPageComponent(pageId, pageProps)

  return {
    appHtml: renderToString(<Page />),
    metadata: getPageMetadata(pageId, pageProps),
  }
}
