import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

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
      "Thầy dạy rất dễ hiểu, không áp lực. Em đã đỗ vào lớp chuyên Toán trường THPT Chuyên Huỳnh Mẫn Đạt với điểm 9.5. Cảm ơn thầy!",
    author: "Em Trần Minh Khoa",
    role: "Học sinh lớp 10 Chuyên Toán, Rạch Giá",
    initials: "MK",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    quote:
      "Lớp dạy toán ở Rạch Giá chất lượng, giáo viên tận tâm. Con em tiến bộ rõ rệt chỉ sau 1 tháng. Rất đáng để đầu tư!",
    author: "Anh Lê Văn Tùng",
    role: "Phụ huynh học sinh lớp 11, Kiên Giang",
    initials: "VT",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "Em từng học nhiều nơi ở Rạch Giá nhưng chỉ ở lớp Thầy Long em mới thực sự hiểu Toán. Giờ em tự tin ôn thi THPT Quốc gia!",
    author: "Em Phạm Thu Hà",
    role: "Học sinh lớp 12, Rạch Giá",
    initials: "TH",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    quote:
      "EduSmart LMS giúp tôi theo dõi bài tập và tiến độ của con mỗi ngày. Tôi không cần chờ đến cuối kỳ mới biết con học như thế nào.",
    author: "Chị Trần Thị Mai",
    role: "Phụ huynh học sinh lớp 8, Rạch Giá",
    initials: "TM",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    quote:
      "Con tôi từ 4 điểm Toán lên 7.5 chỉ trong 2 học kỳ. Thầy chữa bài rất kỹ và giải thích theo cách con hiểu được.",
    author: "Anh Nguyễn Văn Hùng",
    role: "Phụ huynh học sinh lớp 7, Kiên Giang",
    initials: "VH",
    gradient: "from-sky-500 to-indigo-500",
  },
]

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2))
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2))

function TestimonialCard({ quote, author, role, initials, gradient, className }) {
  return (
    <figure
      className={cn(
        "relative w-72 shrink-0 cursor-pointer overflow-hidden rounded-[1.6rem] border border-slate-200/80 p-5",
        "bg-white shadow-sm transition-shadow duration-300 hover:shadow-md",
        className,
      )}
    >
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-sm leading-relaxed text-slate-700 mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-white text-xs font-bold`}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{author}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-muted/30 to-background py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="tape-label mb-4">Học viên nói gì</span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Cảm nhận của <span className="gradient-text">học viên &amp; phụ huynh</span> tại Rạch Giá
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Những chia sẻ chân thực từ học sinh và phụ huynh đang học Toán tại Rạch Giá, Kiên Giang
          </p>
        </div>
      </div>

      <div className="relative mt-16 flex flex-col gap-4 [--duration:35s]">
        {/* Fade masks on left and right */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <Marquee pauseOnHover>
          {firstRow.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover>
          {secondRow.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
