import { useEffect, useState } from "react"
import { Menu, X, Phone, ArrowRight, MessageCircle, LogIn } from "lucide-react"
import { homeSectionLinks, primaryNav, siteConfig } from "@/site/site-config"

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
  const primaryPhone = siteConfig.phones[0]
  const showSectionStrip = currentPath === "/"
  const sectionLinks = showSectionStrip
    ? homeSectionLinks.map((link) => ({ ...link, href: link.href.replace(/^\//, "") }))
    : homeSectionLinks

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Body scroll lock + ESC to close while overlay open
  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen])

  return (
    <>
      <header
        className="sticky top-0 z-40 backdrop-blur-md transition-colors"
        style={{
          background: isScrolled ? "rgba(251, 248, 241, 0.94)" : "rgba(251, 248, 241, 0.78)",
          borderBottom: `1px solid ${isScrolled ? "var(--color-line)" : "transparent"}`,
        }}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <a
            href="/"
            className="flex items-center gap-3.5 no-underline"
            aria-label="Trang chủ Dạy Toán Thầy Long"
          >
            <div
              className="grid h-11 w-11 place-items-center rounded-md font-head text-[20px] font-semibold tracking-tight"
              style={{ background: "var(--color-accent-deep)", color: "var(--color-on-accent)" }}
            >
              L
            </div>
            <div className="leading-tight">
              <p
                className="font-head text-[17px] font-semibold tracking-tight"
                style={{ color: "var(--color-ink)" }}
              >
                Dạy Toán Thầy Long
              </p>
              <p
                className="font-mono text-[11px] uppercase"
                style={{ color: "var(--color-muted)", letterSpacing: "0.08em" }}
              >
                Rạch Giá · Kiên Giang
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.replace(/\s/g, "")}`}
              className="hidden items-center gap-2 text-[14px] font-medium no-underline transition-opacity hover:opacity-70 md:flex"
              style={{ color: "var(--color-body)" }}
            >
              <Phone className="h-4 w-4" style={{ color: "var(--color-accent-mid)" }} />
              <span>{primaryPhone}</span>
            </a>
            <a
              href={contactHref}
              className="hidden h-11 items-center gap-2 rounded-full px-5 text-[14px] font-semibold no-underline transition-opacity hover:opacity-90 sm:inline-flex"
              style={{ background: "var(--color-accent-deep)", color: "var(--color-on-accent)" }}
            >
              Đăng ký học thử
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex h-11 items-center gap-2.5 rounded-full px-4 text-[13px] font-semibold uppercase transition-colors"
              style={{
                color: "var(--color-ink)",
                background: "transparent",
                border: "1px solid var(--color-rule)",
                letterSpacing: "0.16em",
              }}
              aria-label="Mở menu"
              aria-expanded={isOpen}
              aria-controls="primary-menu-overlay"
            >
              <Menu className="h-4 w-4" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        id="primary-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Menu chính"
        aria-hidden={!isOpen}
        className="fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: "var(--color-accent-deep)",
          color: "var(--color-on-accent)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* Top bar inside overlay */}
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3.5 no-underline"
            aria-label="Trang chủ Dạy Toán Thầy Long"
          >
            <div
              className="grid h-11 w-11 place-items-center rounded-md font-head text-[20px] font-semibold tracking-tight"
              style={{ background: "var(--color-on-accent)", color: "var(--color-accent-deep)" }}
            >
              L
            </div>
            <div className="leading-tight">
              <p
                className="font-head text-[17px] font-semibold tracking-tight"
                style={{ color: "var(--color-on-accent)" }}
              >
                Dạy Toán Thầy Long
              </p>
              <p
                className="font-mono text-[11px] uppercase"
                style={{ color: "var(--color-on-accent-soft)", letterSpacing: "0.08em" }}
              >
                Rạch Giá · Kiên Giang
              </p>
            </div>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex h-11 items-center gap-2.5 rounded-full px-4 text-[13px] font-semibold uppercase transition-opacity hover:opacity-80"
            style={{
              border: "1px solid rgba(255,255,255,0.35)",
              color: "var(--color-on-accent)",
              letterSpacing: "0.16em",
              background: "transparent",
            }}
            aria-label="Đóng menu"
          >
            <X className="h-4 w-4" />
            <span className="hidden sm:inline">Đóng</span>
          </button>
        </div>

        {/* Body of overlay */}
        <div
          className="mx-auto grid max-w-[1320px] gap-12 px-6 py-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:px-10 lg:py-16"
          style={{ overflowY: "auto", maxHeight: "calc(100vh - 92px)" }}
        >
          {/* Primary nav — large serif links */}
          <div>
            <div
              className="font-mono mb-6 text-[11px] font-semibold uppercase"
              style={{ color: "var(--color-accent-soft)", letterSpacing: "0.18em" }}
            >
              Điều hướng
            </div>
            <nav aria-label="Điều hướng chính">
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {primaryNav.map((link, i) => {
                  const active = isCurrentLink(currentPath, link.href)
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-baseline gap-5 no-underline transition-opacity hover:opacity-80"
                        style={{
                          padding: "12px 0",
                          borderTop: "1px solid rgba(255,255,255,0.18)",
                          color: "var(--color-on-accent)",
                        }}
                      >
                        <span
                          className="font-mono shrink-0 text-[12px] font-semibold tabular-nums"
                          style={{ color: "var(--color-accent-soft)", letterSpacing: "0.06em" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="font-head"
                          style={{
                            fontSize: "clamp(28px, 4.5vw, 56px)",
                            fontWeight: 500,
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            fontStyle: active ? "italic" : "normal",
                          }}
                        >
                          {link.label}
                        </span>
                        <span
                          className="ml-auto self-center transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {showSectionStrip && (
              <div className="mt-10">
                <div
                  className="font-mono mb-4 text-[11px] font-semibold uppercase"
                  style={{ color: "var(--color-accent-soft)", letterSpacing: "0.18em" }}
                >
                  Trên trang chủ
                </div>
                <div className="flex flex-wrap gap-x-7 gap-y-2">
                  {sectionLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-mono text-[12px] font-semibold uppercase no-underline transition-opacity hover:opacity-70"
                      style={{
                        color: "var(--color-on-accent-soft)",
                        letterSpacing: "0.16em",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: contact + actions */}
          <aside
            className="flex flex-col gap-8"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.18)",
              paddingTop: 24,
            }}
          >
            <div>
              <div
                className="font-mono mb-3 text-[11px] font-semibold uppercase"
                style={{ color: "var(--color-accent-soft)", letterSpacing: "0.18em" }}
              >
                Liên hệ
              </div>
              <div className="flex flex-col gap-2.5">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 no-underline transition-opacity hover:opacity-80"
                    style={{ color: "var(--color-on-accent)" }}
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-head text-[22px] tracking-tight">{phone}</span>
                  </a>
                ))}
                <a
                  href={siteConfig.zaloHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-3 no-underline transition-opacity hover:opacity-80"
                  style={{ color: "var(--color-on-accent-soft)" }}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-[14px]">Nhắn Zalo</span>
                </a>
              </div>
            </div>

            <div>
              <div
                className="font-mono mb-3 text-[11px] font-semibold uppercase"
                style={{ color: "var(--color-accent-soft)", letterSpacing: "0.18em" }}
              >
                Địa chỉ
              </div>
              <p
                className="m-0 max-w-[320px]"
                style={{ fontSize: 15, lineHeight: 1.55, color: "var(--color-on-accent-soft)" }}
              >
                {siteConfig.address.display}
              </p>
              <p
                className="mt-2"
                style={{ fontSize: 13, color: "var(--color-on-accent-soft)" }}
              >
                Thứ 2 – Thứ 7: 13:00 – 21:00 · CN: 8:00 – 21:00
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <a
                href={contactHref}
                onClick={() => setIsOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[14.5px] font-semibold no-underline transition-opacity hover:opacity-90"
                style={{
                  background: "var(--color-on-accent)",
                  color: "var(--color-accent-deep)",
                }}
              >
                Đăng ký học thử
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://lms.daytoanthaylong.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border px-6 text-[14.5px] font-semibold no-underline transition-opacity hover:opacity-90"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "var(--color-on-accent)",
                }}
              >
                <LogIn className="h-4 w-4" />
                Đăng nhập EduSmart LMS
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
