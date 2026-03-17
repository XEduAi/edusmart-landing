import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookOpenText,
  Clock3,
  FileText,
  GraduationCap,
  MapPin,
  MonitorSmartphone,
  NotebookTabs,
  Phone,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { siteConfig } from "@/site/site-config"

const heroStats = [
  { value: "40+", label: "năm kinh nghiệm giảng dạy và phân nhóm học sinh môn Toán" },
  { value: "1000+", label: "học sinh tại Rạch Giá từng theo học và được xây nền theo lộ trình riêng" },
  { value: "5-10", label: "học sinh mỗi lớp để chữa bài kỹ và theo sát nhịp tiến bộ" },
]

const practiceFlow = [
  {
    icon: BookOpenText,
    title: "Học hiểu bản chất",
    description: "Bài mới được chia nhỏ, giải thích rõ ý tưởng thay vì học mẹo.",
  },
  {
    icon: NotebookTabs,
    title: "Luyện đúng dạng bài",
    description: "Mỗi nhóm kiến thức có bộ bài và checklist lỗi sai riêng.",
  },
  {
    icon: MonitorSmartphone,
    title: "Theo dõi trên LMS",
    description: "Bài tập, nhận xét và tiến độ học được lưu tập trung trên EduSmart.",
  },
]

const heroActions = [
  {
    icon: GraduationCap,
    href: "/chuong-trinh-hoc/",
    label: "Chương trình lớp 6-12",
  },
  {
    icon: MonitorSmartphone,
    href: "/nen-tang-lms/",
    label: "Cách theo dõi trên LMS",
  },
  {
    icon: FileText,
    href: "/blog/de-thi-vao-10-toan-kien-giang/",
    label: "Đọc lộ trình luyện thi",
  },
]

export function Hero({ featuredPost }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(13,148,136,0.18),_transparent_42%),radial-gradient(circle_at_85%_20%,_rgba(245,158,11,0.2),_transparent_28%),linear-gradient(180deg,_#fffdf8_0%,_#f7f4ea_55%,_#ffffff_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute left-[6%] top-28 -z-10 h-44 w-44 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="absolute right-[8%] top-20 -z-10 h-56 w-56 rounded-full bg-amber-300/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />
      <div aria-hidden="true" className="formula-whisper absolute left-[8%] top-40 hidden rotate-[-8deg] text-5xl lg:block">
        x² + y² = progress
      </div>
      <div aria-hidden="true" className="formula-whisper absolute right-[10%] top-56 hidden rotate-[7deg] text-4xl lg:block">
        d/dx(confidence)
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Dạy Toán tại Rạch Giá với mô hình lớp nhỏ và EduSmart LMS
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Dạy Toán tại Rạch Giá cho học sinh lớp 6-12 với lớp nhỏ, lộ trình rõ và theo dõi tiến độ thật.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Trung tâm dạy Toán Thầy Long tại Rạch Giá, Kiên Giang dành cho học sinh lớp 6-12, luyện thi vào 10 và ôn thi
              THPT. Mỗi lớp được giữ sĩ số nhỏ, chữa bài theo lỗi sai thực tế và kết hợp EduSmart LMS để phụ huynh nhìn thấy
              bài tập, nhận xét và tiến độ từng tuần thay vì chỉ chờ điểm số cuối kỳ.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-xl px-7 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
                asChild
              >
                <a href="#contact">
                  Đăng ký học thử
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-slate-300 bg-white/75 px-7" asChild>
                <a href="/chuong-trinh-hoc/">Xem chương trình học</a>
              </Button>
              <Button size="lg" variant="ghost" className="rounded-xl px-3 text-slate-700 hover:bg-white/80" asChild>
                <a href="/blog/">Đọc blog học Toán</a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <a
                href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                Gọi tư vấn nhanh
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-transparent px-4 py-2 font-semibold text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-950"
              >
                <TrendingUp className="h-4 w-4" />
                Xem quy trình tăng tiến bộ
              </a>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 font-semibold text-white">
                <MapPin className="h-4 w-4 text-amber-300" />
                {siteConfig.address.locality}, {siteConfig.address.region}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroActions.map((action) => {
                const Icon = action.icon
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/82 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-slate-950"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {action.label}
                  </a>
                )
              })}
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="dossier-panel rounded-[1.6rem] p-5 backdrop-blur">
                  <dt className="editorial-kicker">{stat.label}</dt>
                  <dd className="editorial-number mt-3">{stat.value}</dd>
                </div>
              ))}
            </dl>

            {featuredPost && (
              <a
                href={`/blog/${featuredPost.slug}/`}
                className="dossier-panel mt-8 flex max-w-2xl flex-col gap-3 rounded-[1.8rem] px-6 py-5 text-slate-950 transition-all hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="tape-label">Bài viết nổi bật</span>
                  <h2 className="mt-2 text-xl font-semibold">{featuredPost.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{featuredPost.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Đọc ngay
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-slate-950/8 blur-xl" />
            <div className="dossier-panel relative rounded-[2rem] p-6 backdrop-blur">
              <div className="absolute -right-3 top-6 rotate-[8deg] rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
                Editorial Study Board
              </div>
              <div className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-950">
                <img
                  src="/room1.jpeg"
                  alt="Không gian lớp học Toán Thầy Long tại Rạch Giá"
                  className="h-56 w-full object-cover opacity-90"
                  width="1600"
                  height="900"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent px-5 py-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Không gian học thật</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-200">
                    Lớp học trực tiếp tại Rạch Giá kết hợp nhịp ôn tập số hóa để phụ huynh không bị mất dấu tiến độ của con.
                  </p>
                </div>
              </div>

              <div className="graph-paper mt-6 rounded-[1.7rem] border border-emerald-100 bg-emerald-50/70 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-emerald-900">Lộ trình ôn luyện</p>
                  <p className="text-sm text-emerald-800/80">Chia theo nền tảng, mục tiêu và giai đoạn thi</p>
                </div>
                <TrendingUp className="h-6 w-6 text-emerald-700" />
              </div>

              <div className="mt-6 space-y-4">
                {practiceFlow.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="grid gap-4 rounded-2xl border border-slate-200/80 bg-white/92 px-4 py-4 shadow-sm sm:grid-cols-[auto_1fr]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-100 px-2 text-xs font-semibold text-amber-900">
                            0{index + 1}
                          </span>
                          <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950 px-5 py-5 text-white">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-amber-300" />
                    <p className="text-sm font-semibold">Khung giờ linh hoạt</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Tổ chức lớp theo khối và mục tiêu thi, thuận tiện cho học sinh THCS lẫn THPT.
                  </p>
                </div>
                <div className="relative rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                  <div className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">local</div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p className="text-sm font-semibold text-slate-950">Rạch Giá, Kiên Giang</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Kết hợp lớp trực tiếp với tài nguyên số để giữ nhịp học đều và giảm phụ thuộc vào học thuộc.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 px-5 py-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-5 w-5 text-amber-700" />
                  <div>
                    <p className="text-sm font-semibold text-amber-950">Tập trung vào tiến bộ thật</p>
                    <p className="mt-1 text-sm leading-6 text-amber-900/80">
                      Học sinh được chữa lỗi theo nhóm dạng bài, không học tràn lan. Phụ huynh nhìn thấy tiến độ qua từng
                      buổi và từng bài kiểm tra.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "Theo dõi tiến độ theo tuần",
                  "Chữa lỗi sai theo dạng bài",
                  "Kết hợp lớp trực tiếp và LMS",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white/92 px-4 py-3 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <div className="rotate-[-3deg] rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">ghi chú</p>
                  <p className="mt-1 max-w-[13rem] text-sm leading-6 text-slate-600">
                    Cấu trúc lớp học được thiết kế để phụ huynh thấy tiến độ thật, không chỉ thấy điểm số rời rạc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
