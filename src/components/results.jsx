import { Card } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react"

const stats = [
  {
    number: "3 bước",
    label: "học hiểu bản chất, luyện đúng dạng bài và theo dõi tiến độ bằng LMS",
    icon: TrendingUp,
    color: "from-primary to-emerald-500",
  },
  {
    number: "1000+",
    label: "học sinh từng theo học và được xây nền tảng Toán theo từng giai đoạn",
    icon: Users,
    color: "from-sky-500 to-sky-700",
  },
  {
    number: "40+",
    label: "năm kinh nghiệm giảng dạy giúp việc phân nhóm và chữa lỗi sát thực tế hơn",
    icon: Award,
    color: "from-amber-500 to-orange-500",
  },
]

const commitments = [
  "Xác định điểm mạnh, điểm yếu và mục tiêu học tập ngay từ đầu.",
  "Theo dõi tiến độ liên tục bằng bài tập, bài kiểm tra và phản hồi cho phụ huynh.",
]

export function Results() {
  return (
    <section id="results" className="relative overflow-hidden bg-gradient-to-b from-muted/40 to-background py-20 sm:py-32">
      <div className="absolute top-0 left-1/2 -z-10 h-96 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-100/30 via-sky-100/35 to-amber-100/30 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="tape-label mb-4">Thành tích nổi bật</span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Kết quả học tập được xây từ <span className="gradient-text">quy trình rõ ràng</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Trung tâm ưu tiên sự tiến bộ bền vững, không chạy theo cảm giác học nhiều nhưng thiếu nền tảng.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="dossier-panel card-hover relative overflow-hidden p-8 text-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-[0.06]`} />
                <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color}`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div className="relative mt-5 text-5xl font-bold text-slate-950">{stat.number}</div>
                <div className="relative mt-3 text-sm leading-6 text-muted-foreground">{stat.label}</div>
              </Card>
            )
          })}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-center text-2xl font-bold">Điều phụ huynh thường đánh giá cao</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {commitments.map((commitment) => (
              <div key={commitment} className="dossier-panel card-hover flex gap-3 rounded-[1.4rem] p-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
                <p className="text-sm leading-relaxed text-muted-foreground">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
