import { BookOpen, Users, TrendingUp, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function ValueProposition() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const values = [
    {
      icon: BookOpen,
      title: "Hiểu sâu bản chất",
      description: "Không học vẹt, không nhồi nhét. Học sinh hiểu rõ nguyên lý và vận dụng linh hoạt.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Cá nhân hóa bài giảng",
      description: "Mỗi học sinh có lộ trình riêng phù hợp với năng lực và mục tiêu cá nhân.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Luyện tập thông minh",
      description: "Hệ thống bài tập từ cơ bản đến nâng cao, giúp học sinh tiến bộ từng ngày.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Award,
      title: "Đội ngũ giáo viên giỏi",
      description: "40+ năm kinh nghiệm, từng đào tạo hàng ngàn học sinh đạt giải cấp tỉnh.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
  ]

  return (
    <section id="value" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Tại sao chọn chúng tôi
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tại sao chọn <span className="gradient-text">Thầy Long</span>?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Phương pháp giảng dạy khác biệt giúp học sinh yêu thích Toán và đạt kết quả cao
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className={`card-hover group flex flex-col items-center text-center rounded-2xl border border-border/50 bg-card p-8 cursor-pointer transition-all duration-700 transform ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${value.bgColor} transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12`}>
                  <Icon className={`h-8 w-8 ${value.iconColor} transition-transform group-hover:rotate-12`} />
                </div>
                <h3 className="mt-6 text-lg font-semibold group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65 group-hover:text-foreground transition-colors">{value.description}</p>
              </div>
            )
          })}
        </div>

        <div className={`mx-auto mt-20 max-w-3xl rounded-3xl border border-border/50 bg-gradient-to-br from-card via-card to-blue-50/50 p-8 sm:p-12 shadow-xl shadow-blue-900/5 transition-all duration-1000 hover:shadow-2xl hover:border-primary/30 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
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
