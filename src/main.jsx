import { StrictMode } from "react"
import { hydrateRoot, createRoot } from "react-dom/client"
import "./index.css"
import { getPageComponent } from "@/site/page-registry"

const pageId = window.__PAGE_ID__ || "home"
const pageProps = window.__PAGE_PROPS__ || {}
const Page = getPageComponent(pageId, pageProps)

const app = (
  <StrictMode>
    <Page />
  </StrictMode>
)

const container = document.getElementById("root")

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
