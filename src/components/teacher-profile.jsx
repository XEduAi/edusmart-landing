import { Check, Quote } from "lucide-react"

const credentials = [
  "Tốt nghiệp Đại học Sư phạm Vinh",
  "Hơn 40 năm trực tiếp giảng dạy Toán THCS & THPT",
  "Đã đào tạo trên 1.000 học sinh tại Rạch Giá và Kiên Giang",
  "Tác giả nhiều bộ tài liệu ôn thi vào 10 và tốt nghiệp",
]

export function TeacherProfile() {
  return (
    <section id="teacher" className="bg-tint" style={{ padding: "120px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-[0.85fr_1fr]">
          {/* Portrait + name plate */}
          <div className="relative">
            <div
              className="relative w-full overflow-hidden rounded"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src="/potrait.jpeg"
                alt="Thầy Nguyễn Hữu Long — chân dung"
                className="h-full w-full object-cover"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className="absolute -right-7 bottom-8 max-w-[220px] rounded p-5"
              style={{
                background: "var(--color-accent-deep)",
                color: "var(--color-on-accent)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="font-head"
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Thầy Long
              </div>
              <div
                className="mt-1 text-xs"
                style={{
                  color: "var(--color-on-accent-soft)",
                  letterSpacing: "0.04em",
                }}
              >
                Sáng lập · Chủ nhiệm
              </div>
            </div>
          </div>

          {/* Bio + quote + credentials */}
          <div>
            <div className="eyebrow mb-4">Người đứng lớp</div>
            <h2 className="h-section">
              Thầy Nguyễn Hữu Long — 40+ năm dạy Toán, một quan điểm không đổi.
            </h2>

            <div
              className="relative my-6 max-w-[560px]"
              style={{
                paddingLeft: 36,
                borderLeft: "2px solid var(--color-accent-deep)",
                paddingTop: 28,
                paddingBottom: 28,
              }}
            >
              <Quote
                className="absolute h-7 w-7"
                style={{ left: 12, top: 14, color: "var(--color-accent-mid)", opacity: 0.4 }}
              />
              <p
                className="m-0 font-head italic"
                style={{
                  fontSize: 22,
                  lineHeight: 1.45,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.005em",
                }}
              >
                “Toán không khó. Cái khó là thầy có chịu giảng từ gốc, và học sinh có chịu hỏi đến nơi đến chốn hay không.”
              </p>
            </div>

            <ul className="m-0 flex flex-col gap-3 p-0" style={{ listStyle: "none" }}>
              {credentials.map((c) => (
                <li key={c} className="grid grid-cols-[auto_1fr] items-start gap-3.5">
                  <span
                    className="mt-0.5 grid h-[22px] w-[22px] place-items-center rounded-full"
                    style={{
                      background: "var(--color-accent-soft)",
                      color: "var(--color-accent-deep)",
                    }}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--color-body)" }}>
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
