import { primaryNav, siteConfig } from "@/site/site-config"

const columns = [
  {
    title: "Chương trình",
    links: [
      { label: "Lớp 6–9", href: "/chuong-trinh-hoc/" },
      { label: "Lớp 10–12", href: "/chuong-trinh-hoc/" },
      { label: "Ôn thi vào 10", href: "/blog/de-thi-vao-10-toan-kien-giang/" },
      { label: "Ôn thi tốt nghiệp", href: "/chuong-trinh-hoc/" },
      { label: "Bồi dưỡng HSG", href: "/chuong-trinh-hoc/" },
    ],
  },
  {
    title: "EduSmart",
    links: [
      { label: "Bảng phụ huynh", href: "/nen-tang-lms/" },
      { label: "Quiz & bài tập", href: "/nen-tang-lms/" },
      { label: "Kho tài liệu", href: "https://app.edusmart.vn/documents" },
      { label: "Flashcard", href: "/nen-tang-lms/" },
    ],
  },
  {
    title: "Trung tâm",
    links: [
      { label: "Về Thầy Long", href: "/ve-thay-long/" },
      { label: "Blog", href: "/blog/" },
      { label: "FAQ", href: "/#faq" },
      { label: "Liên hệ", href: "/#contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer
      className="bg-base"
      style={{
        borderTop: "1px solid var(--color-line)",
        padding: "72px 0 32px",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-14 grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div
                className="grid h-9 w-9 place-items-center rounded-md font-head text-[17px] font-semibold"
                style={{ background: "var(--color-accent-deep)", color: "var(--color-on-accent)" }}
              >
                L
              </div>
              <div
                className="font-head"
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Dạy Toán Thầy Long
              </div>
            </div>
            <p
              className="m-0 mb-5 max-w-[320px]"
              style={{ fontSize: 14, lineHeight: 1.6, color: "var(--color-body)" }}
            >
              Trung tâm Toán cho học sinh THCS &amp; THPT tại Rạch Giá, Kiên Giang. Học bài bản, lộ trình rõ ràng, theo dõi tiến độ thật qua EduSmart LMS.
            </p>
            <div
              className="font-mono"
              style={{ fontSize: 13, color: "var(--color-muted)", letterSpacing: "0.04em" }}
            >
              © {new Date().getFullYear()} Dạy Toán Thầy Long
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div
                className="mb-5 text-xs font-semibold uppercase"
                style={{
                  letterSpacing: "0.14em",
                  color: "var(--color-ink)",
                }}
              >
                {col.title}
              </div>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm no-underline transition-opacity hover:opacity-70"
                      style={{ color: "var(--color-body)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-6"
          style={{
            borderTop: "1px solid var(--color-line)",
            fontSize: 12.5,
            color: "var(--color-muted)",
          }}
        >
          <div>{siteConfig.address.display}</div>
          <div className="flex gap-5">
            {primaryNav.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="no-underline transition-opacity hover:opacity-70"
                style={{ color: "var(--color-muted)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/chinh-sach-bao-mat/"
              className="no-underline transition-opacity hover:opacity-70"
              style={{ color: "var(--color-muted)" }}
            >
              Chính sách
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
