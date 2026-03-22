import { BookOpen, Users, TrendingUp, Award } from "lucide-react"

export function ValueProposition() {
  const values = [
    {
      icon: BookOpen,
      title: "Hiểu sâu bản chất",
      description: "Không học vẹt, không nhồi nhét. Học sinh hiểu rõ nguyên lý và vận dụng linh hoạt.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-700",
    },
    {
      icon: Users,
      title: "Cá nhân hóa bài giảng",
      description: "Mỗi học sinh có lộ trình riêng phù hợp với năng lực và mục tiêu cá nhân.",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-700",
    },
    {
      icon: TrendingUp,
      title: "Luyện tập thông minh",
      description: "Hệ thống bài tập từ cơ bản đến nâng cao, giúp học sinh tiến bộ từng ngày.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-700",
    },
    {
      icon: Award,
      title: "Đội ngũ giáo viên giỏi",
      description: "40+ năm kinh nghiệm dạy toán tại Rạch Giá, Kiên Giang. Đào tạo hàng ngàn học sinh đạt giải cấp tỉnh.",
      bgColor: "bg-slate-100",
      iconColor: "text-slate-800",
    },
  ]

  return (
    <section id="value" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="tape-label mb-4">Tại sao chọn chúng tôi</span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tại sao chọn <span className="gradient-text">Thầy Long</span>?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Phương pháp dạy toán khác biệt tại Rạch Giá giúp học sinh yêu thích Toán và đạt kết quả cao
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="dossier-panel card-hover group relative flex flex-col items-center rounded-[1.7rem] p-8 text-center overflow-hidden"
              >
                {/* MagicUI shimmer on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(circle_at_50%_0%,rgba(15,118,110,0.08),transparent_60%)]" />
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${value.bgColor} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg`}
                >
                  <Icon className={`h-8 w-8 ${value.iconColor} transition-transform duration-500 group-hover:rotate-6`} />
                </div>
                <h3 className="mt-6 text-lg font-semibold group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75 group-hover:text-foreground transition-colors duration-300">{value.description}</p>
              </div>
            )
          })}
        </div>

        <div className="dossier-panel mx-auto mt-20 max-w-3xl rounded-[2rem] p-8 transition-all hover:border-primary/30 hover:shadow-2xl sm:p-12">
          <div className="text-center">
            <span className="tape-label mb-4">Phương pháp giảng dạy</span>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-500">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Phương pháp giảng dạy</h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground max-w-xl mx-auto">
              Chúng tôi áp dụng phương pháp{" "}
              <span className="font-semibold text-foreground bg-primary/10 px-2 py-1 rounded transition-colors hover:bg-primary/20">
                &ldquo;Hiểu sâu bản chất – Luyện tập thông minh – Nhớ lâu dễ dàng&rdquo;
              </span>
              . Mỗi bài học được thiết kế để học sinh không chỉ biết làm bài mà còn hiểu tại sao, từ đó tự tin giải
              quyết mọi dạng toán.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
