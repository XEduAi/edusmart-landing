import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Target, Trophy, ArrowRight, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"

export function Curriculum() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const courses = [
    {
      icon: BookOpen,
      level: "Toán cơ bản lớp 6-8",
      description: "Nền tảng vững chắc cho học sinh THCS",
      features: ["Số học, Đại số cơ bản", "Hình học phẳng", "Phương trình, Bất phương trình"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderHoverColor: "hover:border-blue-300",
      expandedInfo: "Học sinh lớp 6, 7, 8 muốn xây dựng nền tảng vững chắc",
    },
    {
      icon: Target,
      level: "Luyện thi vào 10 tại Rạch Giá",
      description: "Luyện thi chuyên và thi vào trường THPT tại Rạch Giá, Kiên Giang",
      features: ["Chuyên đề nâng cao", "Bồi dưỡng học sinh giỏi Rạch Giá", "Luyện đề thi vào 10 THPT Kiên Giang"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderHoverColor: "hover:border-purple-300",
      popular: true,
      expandedInfo: "Học sinh lớp 8, 9 tại Rạch Giá chuẩn bị thi vào 10 và trường chuyên Huỳnh Mẫn Đạt",
    },
    {
      icon: Trophy,
      level: "Ôn thi THPTQG tại Rạch Giá",
      description: "Ôn thi THPT Quốc gia và chinh phục đại học tại Rạch Giá",
      features: [
        "Giải tích, Hình học không gian",
        "Đại số và Giải tích",
        "Luyện đề THPT Quốc gia",
        "Phương pháp giải nhanh",
      ],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderHoverColor: "hover:border-amber-300",
      expandedInfo: "Học sinh lớp 10, 11, 12 tại Rạch Giá, Kiên Giang chuẩn bị ôn thi THPT Quốc gia",
    },
  ]

  return (
    <section id="curriculum" className="relative bg-gradient-to-b from-muted/30 to-background py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-20 right-0 -z-10 h-80 w-80 rounded-full bg-blue-100/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 -z-10 h-80 w-80 rounded-full bg-purple-100/20 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Lộ trình học tập
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Chương trình học</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Lộ trình dạy thêm toán tại Rạch Giá rõ ràng, phù hợp với từng cấp học
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card
                  className={`card-hover relative flex flex-col p-8 h-full cursor-pointer border-border/50 ${course.borderHoverColor} transition-all duration-300 ${
                    expandedIndex === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {course.popular && (
                    <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                      Phổ biến nhất
                    </div>
                  )}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} transition-transform duration-300 ${
                    expandedIndex === index ? "scale-110 rotate-12" : ""
                  }`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{course.level}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{course.description}</p>

                  <div className={`mt-6 space-y-3 overflow-hidden transition-all duration-300 ${
                    expandedIndex === index ? "max-h-96 opacity-100" : "max-h-32 opacity-75"
                  }`}>
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                        <p className="text-sm text-foreground/75">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {expandedIndex === index && (
                    <div className="mt-4 pt-4 border-t border-border animate-in">
                      <p className="text-sm font-medium text-primary mb-2">Thích hợp cho:</p>
                      <p className="text-sm text-foreground/75">{course.expandedInfo}</p>
                    </div>
                  )}

                  <div className="mt-auto pt-8">
                    <Button
                      className={`w-full rounded-xl ${course.popular ? 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-purple-500/25' : 'bg-transparent'}`}
                      variant={course.popular ? "default" : "outline"}
                      asChild
                    >
                      <a href="#contact">
                        Đăng ký ngay
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
