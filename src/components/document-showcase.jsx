import { ArrowRight } from "lucide-react"

const docs = [
  {
    tag: "Đề thi",
    title: "Bộ đề thi vào 10 — Kiên Giang 2015–2025",
    note: "42 đề · có lời giải",
  },
  {
    tag: "Chuyên đề",
    title: "Phương trình bậc hai & ứng dụng",
    note: "120 trang · lớp 9",
  },
  {
    tag: "Flashcard",
    title: "Công thức lượng giác lớp 11",
    note: "180 thẻ · ôn nhanh",
  },
  {
    tag: "Đề thi",
    title: "Đề thi tốt nghiệp THPT 2020–2025",
    note: "35 đề · cấu trúc mới",
  },
]

export function DocumentShowcase() {
  return (
    <section id="documents" className="bg-base" style={{ padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[640px]">
            <div className="eyebrow mb-4">Tài liệu & đề thi</div>
            <h2 className="h-section m-0">
              Kho tài liệu được biên soạn riêng cho học sinh Rạch Giá.
            </h2>
          </div>
          <a
            href="https://app.edusmart.vn/documents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[46px] items-center gap-2 rounded-full border px-5 text-[14.5px] font-semibold no-underline transition-opacity hover:opacity-80"
            style={{ borderColor: "var(--color-rule)", color: "var(--color-ink)" }}
          >
            Xem toàn bộ kho tài liệu
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {docs.map((d) => (
            <div
              key={d.title}
              className="overflow-hidden rounded"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-line)",
              }}
            >
              {/* Faux PDF cover */}
              <div
                className="relative flex items-end p-4"
                style={{
                  aspectRatio: "3 / 4",
                  background: `repeating-linear-gradient(180deg, var(--color-accent-tint) 0 24px, var(--color-accent-soft) 24px 48px)`,
                }}
              >
                <div
                  className="rounded-full px-2.5 py-1 text-[10.5px] font-semibold tracking-wider"
                  style={{
                    background: "var(--color-accent-deep)",
                    color: "var(--color-on-accent)",
                  }}
                >
                  {d.tag}
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 50%, var(--color-surface) 100%)`,
                  }}
                />
                <div
                  className="absolute right-4 top-4 font-mono"
                  style={{ fontSize: 11, color: "var(--color-accent-mid)", letterSpacing: "0.06em" }}
                >
                  PDF
                </div>
              </div>
              <div className="px-4 pb-5 pt-4">
                <h3
                  className="font-head"
                  style={{
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: 1.3,
                    margin: "0 0 8px",
                    color: "var(--color-ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  className="m-0 font-mono"
                  style={{ fontSize: 12.5, color: "var(--color-muted)" }}
                >
                  {d.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
