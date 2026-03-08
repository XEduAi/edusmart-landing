import { FileText, BookOpen, GraduationCap, Library, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function DocumentShowcase() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const categories = [
    {
      icon: FileText,
      title: "Đề thi",
      description: "Đề thi các cấp, đề kiểm tra thường xuyên",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: BookOpen,
      title: "Tài liệu ôn tập",
      description: "Tổng hợp lý thuyết, công thức, phương pháp giải",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: GraduationCap,
      title: "Bài giảng",
      description: "Video bài giảng, slide thuyết trình chi tiết",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Library,
      title: "Sách tham khảo",
      description: "Sách chuyên đề, sách nâng cao",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
  ]

  return (
    <section id="documents" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Kho tài liệu
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Kho Tài Liệu <span className="gradient-text">Toán Học</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Hàng trăm tài liệu chất lượng cao, được biên soạn bởi giáo viên giàu kinh nghiệm
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`card-hover group flex flex-col items-center text-center rounded-2xl border border-border/50 bg-card p-8 cursor-pointer transition-all duration-700 transform ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.bgColor} transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12`}
                >
                  <Icon
                    className={`h-8 w-8 ${category.iconColor} transition-transform group-hover:rotate-12`}
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                  {category.description}
                </p>
              </div>
            )
          })}
        </div>

        <div
          className={`mx-auto mt-12 max-w-2xl text-center transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-sm font-medium text-muted-foreground">
            <span className="text-foreground font-semibold">500+ tài liệu</span>
            {" · "}
            Cập nhật liên tục
            {" · "}
            <span className="text-primary font-semibold">Từ 0đ</span>
          </p>
          <div className="mt-6">
            <Button
              size="lg"
              className="rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all gap-2"
              asChild
            >
              <a href="https://app.edusmart.vn/documents" target="_blank" rel="noopener noreferrer">
                Khám phá kho tài liệu
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
