import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"

const testimonials = [
  {
    quote:
      "Sau 3 tháng học, con mình từ sợ Toán thành người thích làm bài khó! Điểm số tăng từ 5 lên 8.5. Cảm ơn thầy Long rất nhiều!",
    author: "Chị Nguyễn Thị Hoa",
    role: "Phụ huynh học sinh lớp 9",
    initials: "NH",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote:
      "Thầy dạy rất dễ hiểu, không áp lực. Em đã đỗ vào lớp chuyên Toán trường THPT Chuyên với điểm 9.5. Cảm ơn thầy!",
    author: "Em Trần Minh Khoa",
    role: "Học sinh lớp 10 Chuyên Toán",
    initials: "MK",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    quote: "Lớp học chất lượng, giáo viên tận tâm. Con em tiến bộ rõ rệt chỉ sau 1 tháng. Rất đáng để đầu tư!",
    author: "Anh Lê Văn Tùng",
    role: "Phụ huynh học sinh lớp 11",
    initials: "VT",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    quote: "Em từng học nhiều nơi nhưng chỉ ở đây em mới thực sự hiểu Toán. Giờ em tự tin làm bài thi THPT Quốc gia!",
    author: "Em Phạm Thu Hà",
    role: "Học sinh lớp 12",
    initials: "TH",
    gradient: "from-amber-500 to-orange-500",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [AutoPlay({ delay: 5000 })]
  )
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true)
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setPrevButtonDisabled(!emblaApi.canScrollPrev())
      setNextButtonDisabled(!emblaApi.canScrollNext())
    }

    emblaApi.on("init", onSelect)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi])

  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-muted/30 to-background py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Học viên nói gì
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Cảm nhận của <span className="gradient-text">học viên & phụ huynh</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Những chia sẻ chân thực từ học sinh và phụ huynh
          </p>
        </div>

        <div className="mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 -mx-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4 sm:flex-[0_0_50%] lg:flex-[0_0_50%]">
                  <Card className="card-hover group relative overflow-hidden border-border/50 h-full transition-all duration-300">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />
                    <CardContent className="p-6 sm:p-8">
                      <Quote className="h-8 w-8 text-primary/10 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-pretty leading-relaxed text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} text-white text-sm font-bold`}>
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{testimonial.author}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              disabled={prevButtonDisabled}
              className="p-2 rounded-full border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className="h-2 w-2 rounded-full bg-muted hover:bg-primary transition-all duration-300"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              disabled={nextButtonDisabled}
              className="p-2 rounded-full border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
