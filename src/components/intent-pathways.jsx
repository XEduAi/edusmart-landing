import { ArrowRight, BookOpenText, FilePenLine, GraduationCap, MonitorSmartphone } from "lucide-react"
import { Card } from "@/components/ui/card"

const pathways = [
  {
    icon: GraduationCap,
    href: "/chuong-trinh-hoc/",
    label: "Lộ trình theo khối lớp",
    title: "Học sinh lớp 6-9 cần xây nền Toán chắc từ gốc",
    description:
      "Xem cách trung tâm tách lớp theo năng lực đầu vào, chữa lỗi sai theo dạng bài và giữ nhịp học đều theo từng tuần.",
    action: "Xem chương trình lớp 6-9",
  },
  {
    icon: FilePenLine,
    href: "/blog/de-thi-vao-10-toan-kien-giang/",
    label: "Nhóm mục tiêu thi",
    title: "Phụ huynh đang tìm lớp luyện thi vào 10 hoặc ôn THPT môn Toán",
    description:
      "Đi thẳng tới nội dung sát nhu cầu thi cử: lộ trình luyện đề, tăng tốc giai đoạn cuối và cách giữ điểm ở các câu dễ mất điểm.",
    action: "Đọc nội dung luyện thi",
  },
  {
    icon: MonitorSmartphone,
    href: "/nen-tang-lms/",
    label: "Theo dõi tiến độ",
    title: "Muốn học trực tiếp nhưng vẫn có LMS để xem bài tập và kết quả",
    description:
      "Trang EduSmart LMS giải thích rõ cách phụ huynh theo dõi bài tập, quiz, nhận xét và tiến độ học tập ngoài giờ lên lớp.",
    action: "Xem EduSmart LMS",
  },
  {
    icon: BookOpenText,
    href: "/blog/",
    label: "Tài nguyên miễn phí",
    title: "Muốn đọc trước các bài viết về học Toán, luyện thi và đồng hành cùng con",
    description:
      "Blog đóng vai trò như thư viện nội dung cho phụ huynh và học sinh tại Rạch Giá, đồng thời giúp điều hướng về đúng chương trình học.",
    action: "Khám phá blog",
  },
]

export function IntentPathways() {
  return (
    <section id="pathways" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffdf8_0%,rgba(242,239,230,0.9)_55%,#ffffff_100%)]" />
      <div className="absolute left-[10%] top-10 -z-10 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute right-[8%] bottom-8 -z-10 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="dossier-panel rounded-[2rem] p-7 sm:p-8">
            <span className="tape-label">Bắt đầu đúng điểm rơi</span>
            <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Chọn đúng điểm vào trước khi để lại thông tin.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Thay vì đẩy mọi người về cùng một CTA, trang chủ giờ dẫn thẳng tới nhu cầu thật: xây nền lớp 6-9, luyện thi
              vào 10, theo dõi bằng LMS hoặc đọc tài nguyên miễn phí trước khi đăng ký.
            </p>

            <div className="mt-8 grid gap-3 rounded-[1.5rem] border border-amber-100 bg-amber-50/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-900">Local fit</p>
              <p className="text-sm leading-7 text-amber-950">
                Nội dung được viết theo ngữ cảnh thật của phụ huynh và học sinh tại Rạch Giá, Kiên Giang thay vì dùng copy
                chung chung kiểu landing page đại trà.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {pathways.map((pathway) => {
              const Icon = pathway.icon
              return (
                <a key={pathway.title} href={pathway.href} className="group block">
                  <Card className="dossier-panel card-hover h-full rounded-[1.8rem] p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="tape-label">{pathway.label}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold leading-8 text-slate-950 transition-colors group-hover:text-primary">
                      {pathway.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{pathway.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors group-hover:text-primary">
                      {pathway.action}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
