import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn, ArrowUpRight } from "lucide-react"
import { homeSectionLinks, primaryNav } from "@/site/site-config"

function isCurrentLink(currentPath, href) {
  const normalizedCurrentPath = currentPath.endsWith("/") ? currentPath : `${currentPath}/`
  if (href === "/") {
    return normalizedCurrentPath === "/"
  }

  return normalizedCurrentPath.startsWith(href)
}

export function Header({ currentPath = "/" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const localContactPaths = new Set(["/", "/chuong-trinh-hoc/", "/ve-thay-long/"])
  const contactHref = localContactPaths.has(currentPath) ? "#contact" : "/#contact"
  const sectionLinks = currentPath === "/" ? homeSectionLinks.map((link) => ({ ...link, href: link.href.replace(/^\//, "") })) : homeSectionLinks

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-[rgba(255,252,245,0.92)] shadow-sm backdrop-blur-xl"
          : "bg-[rgba(255,252,245,0.72)] backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72px] items-center justify-between gap-4 py-3">
          <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90" aria-label="Trang chủ Dạy Toán Thầy Long">
            <img
              src="/logo.webp"
              alt="Dạy Toán Thầy Long - Trung tâm dạy toán tại Rạch Giá, Kiên Giang"
              className="h-12 w-auto object-contain"
              width="176"
              height="96"
            />
            <div className="hidden xl:block">
              <p className="text-sm font-semibold text-slate-950">Dạy Toán Thầy Long</p>
              <p className="text-xs text-slate-500">Rạch Giá, Kiên Giang</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isCurrentLink(currentPath, link.href)
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-slate-950"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <Button size="sm" variant="outline" className="rounded-full bg-white/70" asChild>
                <a href="/blog/">
                  Blog
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" className="rounded-full bg-transparent" asChild>
                <a href="https://lms.daytoanthaylong.com" target="_blank" rel="noopener noreferrer">
                  <LogIn className="h-4 w-4" />
                  Đăng nhập
                </a>
              </Button>
              <Button size="sm" className="rounded-full shadow-md shadow-primary/20" asChild>
                <a href={contactHref}>Đăng ký ngay</a>
              </Button>
            </div>

            <button
              onClick={() => setIsOpen((value) => !value)}
              className="rounded-xl p-2 text-slate-700 transition-colors hover:bg-white lg:hidden"
              aria-label={isOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {currentPath === "/" && (
          <div className="hidden border-t border-slate-200/60 py-3 lg:block">
            <div className="flex flex-wrap items-center gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 transition-colors hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {isOpen && (
          <div className="animate-in border-t border-slate-200/80 bg-[rgba(255,252,245,0.98)] py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {primaryNav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 font-medium transition-all ${
                    isCurrentLink(currentPath, link.href)
                      ? "bg-slate-950 text-white"
                      : "text-slate-700 hover:bg-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {currentPath === "/" && (
                <div className="mt-2 grid gap-2 rounded-2xl border border-slate-200/80 bg-white/75 p-3">
                  {sectionLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-slate-600"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <Button variant="outline" asChild className="mt-3 w-full rounded-full">
                <a href="https://lms.daytoanthaylong.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <LogIn className="h-4 w-4" />
                  Đăng nhập LMS
                </a>
              </Button>
              <Button asChild className="w-full rounded-full">
                <a href={contactHref} onClick={() => setIsOpen(false)}>
                  Đăng ký ngay
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
