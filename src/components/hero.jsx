import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Calculator, Brain, Target } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50/30 to-background" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-[10%] -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-[10%] -z-10 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl animate-float-slow delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-200/20 to-violet-200/20 blur-3xl" />

      {/* Floating icons */}
      <div className="absolute top-32 left-[8%] hidden lg:block animate-float delay-200">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 shadow-lg shadow-blue-200/50">
          <Calculator className="h-7 w-7 text-blue-600" />
        </div>
      </div>
      <div className="absolute top-48 right-[12%] hidden lg:block animate-float delay-500">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 shadow-lg shadow-purple-200/50">
          <Brain className="h-6 w-6 text-purple-600" />
        </div>
      </div>
      <div className="absolute bottom-32 left-[15%] hidden lg:block animate-float delay-300">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 shadow-lg shadow-amber-200/50">
          <Target className="h-5 w-5 text-amber-600" />
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}>
            <Sparkles className="h-4 w-4" />
            <span>Trung tâm dạy Toán uy tín #1 tại Rạch Giá, Kiên Giang</span>
          </div>

          <h1 className={`text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1] transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Dạy Toán Tại Rạch Giá – <br className="hidden sm:block" />
            <span className="gradient-text">Giỏi Toán</span> Từ Lớp 6 Đến 12
          </h1>
          <p className={`mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Dạy thêm Toán, ôn thi THPT Quốc gia, luyện thi vào 10 tại Rạch Giá, Kiên Giang. Bứt phá điểm số chỉ sau 4 buổi với phương pháp hiểu bản chất!
          </p>
          <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 animate-pulse-glow group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Đăng ký học thử miễn phí ngay!
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent text-base px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#curriculum">Xem chương trình học</a>
            </Button>
          </div>

          {/* Social proof */}
          <div className={`mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['H', 'T', 'M', 'L'].map((letter, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-background flex items-center justify-center text-[10px] text-white font-bold">
                    {letter}
                  </div>
                ))}
              </div>
              <span><strong className="text-foreground">1000+</strong> học sinh tin tưởng</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1"><strong className="text-foreground">4.9/5</strong> đánh giá</span>
            </div>
          </div>

          {/* Classroom showcase */}
          <div className={`mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl shadow-blue-900/10 border border-border/30">
              <img
                src="/room1.jpeg"
                alt="Không gian lớp học dạy toán Thầy Long - phòng học hiện đại tại Rạch Giá, Kiên Giang"
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                width="963"
                height="1280"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-sm font-semibold">Không gian học tập hiện đại</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl shadow-blue-900/10 border border-border/30">
              <img
                src="/room2.jpeg"
                alt="Dạy thêm toán Rạch Giá - lớp nhóm nhỏ 5-10 học sinh, giáo viên hướng dẫn tận tình tại Kiên Giang"
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                width="960"
                height="1280"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-sm font-semibold">Lớp học thân thiện, gần gũi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
