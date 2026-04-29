import { ArrowRight, Zap, Users, BookOpen } from "lucide-react"

const features = [
  {
    title: "Bài tập & quiz tự động",
    body: "Học sinh làm bài trên web/điện thoại. Hệ thống chấm tức thì, gợi ý dạng cần luyện thêm.",
    icon: Zap,
  },
  {
    title: "Bảng theo dõi cho phụ huynh",
    body: "Xem điểm, bài đã nộp, phản hồi của thầy theo từng tuần — không phải đợi cuối kỳ.",
    icon: Users,
  },
  {
    title: "Flashcard & tài liệu ôn thi",
    body: "Kho công thức, đề thi các năm, flashcard ghi nhớ — học mọi lúc, mọi nơi.",
    icon: BookOpen,
  },
]

function PlatformMock() {
  return (
    <div
      className="overflow-hidden rounded-md"
      style={{
        background: "var(--color-base)",
        color: "var(--color-ink)",
        border: "1px solid var(--color-line)",
        boxShadow: "var(--shadow-mock)",
        transform: "rotate(-1.2deg)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-3.5 py-2.5"
        style={{ borderBottom: "1px solid var(--color-line)" }}
      >
        <span className="h-[9px] w-[9px] rounded-full" style={{ background: "#FF6259" }} />
        <span className="h-[9px] w-[9px] rounded-full" style={{ background: "#FFB927" }} />
        <span className="h-[9px] w-[9px] rounded-full" style={{ background: "#1FCA50" }} />
        <span
          className="ml-3 font-mono text-[11px]"
          style={{ color: "var(--color-muted)" }}
        >
          edusmart.daytoanthaylong.vn / phụ-huynh
        </span>
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-baseline justify-between">
          <div>
            <div
              className="eyebrow"
              style={{ color: "var(--color-muted)", letterSpacing: "0.06em" }}
            >
              Tiến độ tuần 14
            </div>
            <div
              className="mt-0.5 font-head"
              style={{ fontSize: 22, fontWeight: 600, color: "var(--color-ink)" }}
            >
              Nguyễn Minh An · Lớp 9A
            </div>
          </div>
          <div
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
            style={{
              background: "var(--color-accent-soft)",
              color: "var(--color-accent-deep)",
            }}
          >
            ● Đang theo dõi
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          {[
            { l: "Bài tập đã nộp", v: "12/14", pct: 86 },
            { l: "Điểm trung bình", v: "8.7", pct: 87 },
          ].map((m) => (
            <div
              key={m.l}
              className="rounded-md p-3.5"
              style={{ background: "var(--color-accent-tint)" }}
            >
              <div className="text-[11px]" style={{ color: "var(--color-muted)" }}>
                {m.l}
              </div>
              <div
                className="my-0.5 mb-2 font-head"
                style={{ fontSize: 26, fontWeight: 600, color: "var(--color-ink)" }}
              >
                {m.v}
              </div>
              <div
                className="h-1 overflow-hidden rounded-full"
                style={{ background: "var(--color-line)" }}
              >
                <div
                  className="h-full"
                  style={{
                    width: `${m.pct}%`,
                    background: "var(--color-accent-deep)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="mb-2 eyebrow"
          style={{ color: "var(--color-muted)", letterSpacing: "0.06em" }}
        >
          Phản hồi mới nhất
        </div>
        <div
          className="pl-3"
          style={{
            borderLeft: "2px solid var(--color-accent-deep)",
            fontSize: 13,
            lineHeight: 1.55,
            color: "var(--color-body)",
          }}
        >
          “An đã nắm chắc dạng phương trình bậc hai. Tuần tới luyện thêm hệ thức Vi-ét.”{" "}
          <span style={{ color: "var(--color-muted)" }}>— Thầy Long, 23/04</span>
        </div>
      </div>
    </div>
  )
}

export function PlatformShowcase() {
  return (
    <section id="platform" className="bg-surface" style={{ padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-[72px]">
          <div>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wider"
              style={{
                background: "var(--color-accent-deep)",
                color: "var(--color-on-accent)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--color-accent-soft)" }}
              />
              EDUSMART LMS
            </div>
            <h2 className="h-section">
              Nền tảng học tập riêng — để phụ huynh không còn “đợi đến cuối kỳ”.
            </h2>
            <p className="lead mb-9 mt-4">
              Mỗi học sinh có một tài khoản. Phụ huynh đăng nhập riêng để xem tiến độ thật sự
              — bài tập đã nộp, điểm, phản hồi của thầy hằng tuần.
            </p>

            <div
              className="flex flex-col"
              style={{ borderTop: "1px solid var(--color-rule)" }}
            >
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    className="grid grid-cols-[auto_1fr] items-start gap-5 py-5"
                    style={{ borderBottom: "1px solid var(--color-rule)" }}
                  >
                    <div
                      className="grid h-9 w-9 place-items-center rounded-md"
                      style={{
                        background: "var(--color-accent-soft)",
                        color: "var(--color-accent-deep)",
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        className="font-head"
                        style={{
                          fontWeight: 600,
                          fontSize: 17,
                          margin: "0 0 4px",
                          color: "var(--color-ink)",
                        }}
                      >
                        {f.title}
                      </h3>
                      <p
                        className="m-0"
                        style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-body)" }}
                      >
                        {f.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-7">
              <a
                href="https://lms.daytoanthaylong.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[46px] items-center gap-2 rounded-full px-5 text-[14.5px] font-semibold no-underline transition-opacity hover:opacity-90"
                style={{
                  background: "var(--color-accent-deep)",
                  color: "var(--color-on-accent)",
                }}
              >
                Xem demo EduSmart
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <PlatformMock />
        </div>
      </div>
    </section>
  )
}
