import { Brain, Target, Zap, GraduationCap } from "lucide-react"

const pillars = [
  {
    n: "01",
    title: "Hiểu bản chất, không học vẹt",
    body: "Mỗi khái niệm được giải thích từ gốc, kèm ví dụ thực tế. Học sinh hiểu vì sao công thức đúng — không chỉ nhớ.",
    icon: Brain,
  },
  {
    n: "02",
    title: "Lộ trình cá nhân hoá",
    body: "Bài kiểm tra đầu vào xác định điểm yếu. Mỗi học sinh có lộ trình riêng theo lớp, mục tiêu và tốc độ học.",
    icon: Target,
  },
  {
    n: "03",
    title: "Luyện tập thông minh",
    body: "Hệ thống bài tập tự động đề xuất dạng đúng trình độ. Không làm dư, không bỏ sót dạng nào.",
    icon: Zap,
  },
  {
    n: "04",
    title: "Thầy giáo 40 năm kinh nghiệm",
    body: "Thầy Long trực tiếp đứng lớp và phản hồi từng bài. Tận tâm với từng học sinh, từ căn bản đến nâng cao.",
    icon: GraduationCap,
  },
]

export function ValueProposition() {
  return (
    <section id="value" className="bg-surface" style={{ padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-14 max-w-[720px]">
          <div className="eyebrow mb-4">Vì sao chọn Thầy Long</div>
          <h2 className="h-section m-0">
            Bốn cam kết — không phải khẩu hiệu, mà là cách chúng tôi dạy mỗi ngày.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ borderTop: "1px solid var(--color-rule)" }}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.n}
                className="grid grid-cols-[auto_1fr] gap-6"
                style={{
                  padding: "36px 36px 36px 0",
                  borderBottom: i < 2 ? "1px solid var(--color-rule)" : "none",
                  borderRight: i % 2 === 0 ? "1px solid var(--color-rule)" : "none",
                  paddingLeft: i % 2 === 1 ? 36 : 0,
                }}
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-md"
                  style={{
                    background: "var(--color-accent-deep)",
                    color: "var(--color-on-accent)",
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div
                    className="mb-2 font-mono"
                    style={{ fontSize: 12, color: "var(--color-muted)", letterSpacing: "0.08em" }}
                  >
                    — {p.n}
                  </div>
                  <h3
                    className="font-head"
                    style={{
                      fontWeight: 500,
                      fontSize: 24,
                      lineHeight: 1.2,
                      margin: "0 0 12px",
                      color: "var(--color-ink)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="m-0 max-w-[460px]"
                    style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-body)" }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
