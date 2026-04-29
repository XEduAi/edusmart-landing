import { ArrowRight, Phone, GraduationCap } from "lucide-react"
import { siteConfig } from "@/site/site-config"

const heroStats = [
  { value: "40+", label: "năm kinh nghiệm" },
  { value: "1000+", label: "học sinh đã dạy" },
  { value: "95%", label: "học sinh tiến bộ rõ rệt" },
]

export function Hero() {
  const primaryPhone = siteConfig.phones[0]

  return (
    <section
      id="hero"
      className="bg-deep relative overflow-hidden"
      style={{ padding: "88px 0 96px" }}
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8">
        {/* Left: copy */}
        <div>
          <div
            className="eyebrow mb-4"
            style={{ color: "var(--color-accent-soft)" }}
          >
            Trung tâm Toán · Rạch Giá, Kiên Giang
          </div>

          <h1
            className="font-head"
            style={{
              fontSize: "var(--fs-display)",
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "var(--tracking-display)",
              color: "var(--color-on-accent)",
              textWrap: "balance",
              margin: "0 0 24px",
            }}
          >
            Học Toán có lộ trình,
            <br />
            <em
              className="not-italic font-head italic"
              style={{ color: "var(--color-accent-soft)" }}
            >
              cha mẹ yên tâm
            </em>{" "}
            theo dõi.
          </h1>

          <p
            className="mb-8 max-w-[540px]"
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--color-on-accent-soft)",
              textWrap: "pretty",
            }}
          >
            Lớp học tại Rạch Giá theo lộ trình bài bản, có hệ thống. Kết hợp nền tảng{" "}
            <b style={{ color: "var(--color-on-accent)", fontWeight: 600 }}>EduSmart LMS</b> giúp
            phụ huynh xem bài tập, phản hồi và tiến độ con hằng tuần — không phải đợi đến cuối kỳ.
          </p>

          <div className="mb-12 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-[54px] items-center gap-2 rounded-full px-7 text-[15.5px] font-semibold no-underline transition-opacity hover:opacity-90"
              style={{
                background: "var(--color-on-accent)",
                color: "var(--color-accent-deep)",
              }}
            >
              Đăng ký học thử
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${primaryPhone.replace(/\s/g, "")}`}
              className="inline-flex h-[54px] items-center gap-2 rounded-full border px-7 text-[15.5px] font-semibold no-underline transition-opacity hover:opacity-90"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "var(--color-on-accent)",
              }}
            >
              <Phone className="h-4 w-4" />
              Gọi tư vấn
            </a>
          </div>

          {/* Stats — hairline-divided columns */}
          <dl
            className="grid max-w-[560px] grid-cols-3 gap-0 pt-7"
            style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}
          >
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  paddingLeft: i === 0 ? 0 : 20,
                  borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <dt
                  className="font-head"
                  style={{
                    fontWeight: 500,
                    fontSize: 38,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "var(--color-on-accent)",
                  }}
                >
                  {stat.value}
                </dt>
                <dd
                  className="m-0 mt-2"
                  style={{
                    fontSize: 12.5,
                    color: "var(--color-on-accent-soft)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: portrait + credential overlap */}
        <div className="relative">
          <div
            className="relative w-full overflow-hidden rounded"
            style={{ aspectRatio: "4 / 5" }}
          >
            <img
              src="/potrait.jpeg"
              alt="Thầy Nguyễn Hữu Long — Giáo viên dạy Toán hơn 40 năm tại Rạch Giá, Kiên Giang"
              className="h-full w-full object-cover"
              width="800"
              height="1000"
            />
            <div
              className="absolute left-3 top-3 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide"
              style={{ background: "rgba(255,255,255,0.92)", color: "var(--color-ink)" }}
            >
              Thầy Nguyễn Hữu Long
            </div>
          </div>

          {/* Credential overlap card */}
          <div
            className="absolute -bottom-6 -left-6 flex max-w-[300px] items-center gap-3.5 rounded p-4"
            style={{
              background: "var(--color-base)",
              color: "var(--color-ink)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
            }}
          >
            <div
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
              style={{
                background: "var(--color-accent-soft)",
                color: "var(--color-accent-deep)",
              }}
            >
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="text-xs leading-snug">
              <b style={{ fontWeight: 600 }}>ĐHSP Vinh</b> · 40+ năm dạy Toán
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
