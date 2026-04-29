import { ArrowRight, GraduationCap, BookOpen, Trophy } from "lucide-react"

const pathways = [
  {
    eyebrow: "Cho phụ huynh",
    title: "Tôi muốn theo dõi việc học của con",
    body: "Xem bài tập, phản hồi và tiến độ con hằng tuần qua EduSmart.",
    cta: "Xem bảng điều khiển phụ huynh",
    href: "/nen-tang-lms/",
    icon: GraduationCap,
  },
  {
    eyebrow: "Cho học sinh",
    title: "Tôi cần học chắc Toán theo lớp",
    body: "Lộ trình rõ ràng theo từng lớp 6–12, học bài bản từ căn bản đến nâng cao.",
    cta: "Xem lộ trình theo lớp",
    href: "/chuong-trinh-hoc/",
    icon: BookOpen,
  },
  {
    eyebrow: "Cho luyện thi",
    title: "Tôi đang ôn thi vào 10 / tốt nghiệp",
    body: "Kho đề, flashcard và lớp ôn cường độ cao trước kỳ thi.",
    cta: "Xem chương trình luyện thi",
    href: "/blog/de-thi-vao-10-toan-kien-giang/",
    icon: Trophy,
  },
]

export function IntentPathways() {
  return (
    <section id="pathways" className="bg-base" style={{ padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="eyebrow mb-4">Bạn đang tìm gì?</div>
            <h2 className="h-section m-0">
              Ba lý do phụ huynh và học sinh tìm đến chúng tôi
            </h2>
          </div>
          <p
            className="m-0 max-w-[360px]"
            style={{ fontSize: 16, lineHeight: 1.6, color: "var(--color-body)" }}
          >
            Chọn lối vào phù hợp với bạn — mỗi đường dẫn đến đúng phần thông tin cần thiết.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pathways.map((p, i) => {
            const Icon = p.icon
            const isMid = i === 1
            return (
              <a
                key={p.title}
                href={p.href}
                className="block rounded-md p-7 no-underline transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background: isMid ? "var(--color-accent-tint)" : "var(--color-surface)",
                  border: "1px solid var(--color-line)",
                  color: "inherit",
                }}
              >
                <div
                  className="mb-6 grid h-11 w-11 place-items-center rounded-md"
                  style={{
                    background: "var(--color-accent-deep)",
                    color: "var(--color-on-accent)",
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="eyebrow mb-2.5">{p.eyebrow}</div>
                <h3
                  className="font-head"
                  style={{
                    fontWeight: 500,
                    fontSize: 22,
                    lineHeight: 1.2,
                    margin: "0 0 12px",
                    color: "var(--color-ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="m-0 mb-6"
                  style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--color-body)" }}
                >
                  {p.body}
                </p>
                <div
                  className="flex items-center gap-2 text-[13.5px] font-semibold"
                  style={{ color: "var(--color-ink)" }}
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
