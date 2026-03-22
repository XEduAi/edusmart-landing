import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Dev plugin: makes all page routes serve index.html and injects a runtime
// script that sets window.__PAGE_ID__ based on window.location.pathname —
// matching exactly what the production build script does via injected <script>.
function devRouterPlugin() {
  const pageRoutes = {
    '/': 'home',
    '/chuong-trinh-hoc': 'programs',
    '/nen-tang-lms': 'platform',
    '/ve-thay-long': 'about',
    '/blog': 'blog-index',
  }

  return {
    name: 'dev-router',

    // Rewrite all clean page URLs to /index.html so Vite serves the app
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = (req.url ?? '/').split('?')[0].replace(/\/$/, '') || '/'
        const isAsset = url.includes('.') || url.startsWith('/@') || url.startsWith('/node_modules')
        if (!isAsset && url !== '/index.html') {
          req.url = '/index.html'
        }
        next()
      })
    },

    // Inject a script that sets __PAGE_ID__ from the real browser URL at runtime
    transformIndexHtml(html) {
      const mapJson = JSON.stringify(pageRoutes)
      return html.replace(
        '<body>',
        `<body><script>
(function(){
  if(window.__PAGE_ID__)return;
  var p=window.location.pathname.replace(/\\/+$/,'')||'/';
  var m=${mapJson};
  var id=m[p];
  if(!id&&p.startsWith('/blog/')){id='blog-post';window.__PAGE_PROPS__={slug:p.replace('/blog/','').replace(/\\/+$/,'')};}
  window.__PAGE_ID__=id||'home';
  window.__PAGE_PROPS__=window.__PAGE_PROPS__||{};
})();
</script>`,
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), devRouterPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
