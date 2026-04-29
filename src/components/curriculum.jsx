const grades = [
  { l: "Lớp 6", topics: ["Số tự nhiên & phân số", "Hình học trực quan", "Tỉ lệ thức"] },
  { l: "Lớp 7", topics: ["Số hữu tỉ", "Tam giác bằng nhau", "Đại lượng tỉ lệ"] },
  { l: "Lớp 8", topics: ["Hằng đẳng thức", "Tứ giác", "Phương trình bậc nhất"] },
  { l: "Lớp 9", topics: ["Phương trình bậc hai", "Đường tròn", "Ôn thi vào 10"] },
  { l: "Lớp 10", topics: ["Mệnh đề & tập hợp", "Hàm số bậc hai", "Vectơ"] },
  { l: "Lớp 11", topics: ["Lượng giác", "Tổ hợp – xác suất", "Cấp số"] },
  { l: "Lớp 12", topics: ["Khảo sát hàm số", "Tích phân", "Hình giải tích"] },
]

const exams = [
  {
    label: "Ôn thi vào 10",
    body: "Lớp tăng cường tháng 3–6, đề thi các năm Kiên Giang & toàn quốc.",
  },
  {
    label: "Ôn thi tốt nghiệp THPT",
    body: "Cấu trúc đề mới, luyện đề có chấm – sửa hằng tuần.",
  },
  {
    label: "Bồi dưỡng HSG",
    body: "Dành cho học sinh khá giỏi, bài toán nâng cao theo chuyên đề.",
  },
]

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-base" style={{ padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-12 max-w-[720px]">
          <div className="eyebrow mb-4">Chương trình</div>
          <h2 className="h-section m-0">
            Lộ trình theo đúng từng lớp 6–12, kèm chương trình ôn thi.
          </h2>
        </div>

        {/* Grades grid: 7 columns desktop, fewer on smaller screens */}
        <div
          className="mb-12 grid grid-cols-2 overflow-hidden rounded sm:grid-cols-4 lg:grid-cols-7"
          style={{ border: "1px solid var(--color-rule)" }}
        >
          {grades.map((g, i) => {
            const isHighlight = i === 3 // Lớp 9 — entry point for thi vào 10
            return (
              <div
                key={g.l}
                style={{
                  padding: "24px 18px",
                  borderRight:
                    i < grades.length - 1 ? "1px solid var(--color-rule)" : "none",
                  borderBottom: "1px solid var(--color-rule)",
                  background: isHighlight ? "var(--color-accent-tint)" : "transparent",
                }}
              >
                <div
                  className="mb-3.5 font-head"
                  style={{
                    fontWeight: 600,
                    fontSize: 20,
                    color: "var(--color-ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {g.l}
                </div>
                <ul className="m-0 flex flex-col gap-2 p-0" style={{ listStyle: "none" }}>
                  {g.topics.map((t) => (
                    <li
                      key={t}
                      className="relative pl-3"
                      style={{ fontSize: 12.5, lineHeight: 1.4, color: "var(--color-body)" }}
                    >
                      <span
                        className="absolute left-0 h-1 w-1 rounded-full"
                        style={{ top: 6, background: "var(--color-accent-deep)" }}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Exam prep cards — deep band moment */}
        <div className="grid gap-4 sm:grid-cols-3">
          {exams.map((e) => (
            <div
              key={e.label}
              className="rounded p-7"
              style={{ background: "var(--color-accent-deep)", color: "var(--color-on-accent)" }}
            >
              <div
                className="eyebrow mb-2.5"
                style={{ color: "var(--color-accent-soft)" }}
              >
                Ôn thi
              </div>
              <h3
                className="font-head"
                style={{
                  fontWeight: 500,
                  fontSize: 22,
                  margin: "0 0 10px",
                  color: "var(--color-on-accent)",
                  letterSpacing: "-0.01em",
                }}
              >
                {e.label}
              </h3>
              <p
                className="m-0"
                style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-on-accent-soft)" }}
              >
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
