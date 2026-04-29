const stats = [
  {
    number: "40+",
    unit: "năm",
    label: "Trực tiếp giảng dạy Toán THCS & THPT, từ 1984 đến nay.",
  },
  {
    number: "1.000+",
    unit: "học sinh",
    label: "Đã được Thầy Long và đội ngũ kèm cặp tại Rạch Giá.",
  },
  {
    number: "95%",
    unit: "học sinh",
    label: "Tiến bộ rõ rệt sau 3 tháng theo học, theo khảo sát phụ huynh.",
  },
]

const steps = [
  {
    n: "1",
    title: "Kiểm tra đầu vào",
    body: "Xác định điểm mạnh và lỗ hổng kiến thức.",
  },
  {
    n: "2",
    title: "Lộ trình & học tại lớp",
    body: "Lớp phù hợp mục tiêu, theo dõi qua EduSmart.",
  },
  {
    n: "3",
    title: "Đánh giá & điều chỉnh",
    body: "Báo cáo tuần cho phụ huynh, điều chỉnh kịp thời.",
  },
]

export function Results() {
  return (
    <section id="results" className="bg-deep" style={{ padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Big numerals row */}
        <div
          className="mb-[88px] grid items-end gap-12 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{ borderTop: "1px solid rgba(255,255,255,0.18)", paddingTop: 24 }}
            >
              <div className="flex items-baseline gap-2">
                <div
                  className="font-head"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(72px, 9vw, 120px)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.04em",
                    color: "var(--color-on-accent)",
                  }}
                >
                  {s.number}
                </div>
                <div
                  className="font-head italic"
                  style={{
                    fontWeight: 400,
                    fontSize: 22,
                    color: "var(--color-accent-soft)",
                  }}
                >
                  {s.unit}
                </div>
              </div>
              <p
                className="m-0 mt-4 max-w-[320px]"
                style={{ fontSize: 15, lineHeight: 1.55, color: "var(--color-on-accent-soft)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* 3-step process */}
        <div>
          <div className="eyebrow mb-4" style={{ color: "var(--color-accent-soft)" }}>
            Quy trình 3 bước
          </div>
          <h2
            className="h-section mb-10 max-w-[760px]"
            style={{ color: "var(--color-on-accent)" }}
          >
            Cách chúng tôi đồng hành cùng học sinh — từ ngày đầu tới kết quả thi.
          </h2>

          <div className="grid gap-0 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.n}
                style={{
                  padding: "24px 28px 24px 0",
                  paddingLeft: i === 0 ? 0 : 28,
                  borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <div
                  className="mb-5 grid h-10 w-10 place-items-center rounded-full font-head text-base font-semibold"
                  style={{ background: "var(--color-on-accent)", color: "var(--color-accent-deep)" }}
                >
                  {s.n}
                </div>
                <h3
                  className="font-head"
                  style={{
                    fontWeight: 500,
                    fontSize: 22,
                    margin: "0 0 8px",
                    color: "var(--color-on-accent)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="m-0"
                  style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--color-on-accent-soft)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
