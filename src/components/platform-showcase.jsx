import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Monitor,
  BarChart3,
  FileQuestion,
  Bell,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Laptop,
  Smartphone,
  BookOpenCheck,
  ClipboardList,
  TrendingUp,
  Users,
  GraduationCap,
} from "lucide-react"

export function PlatformShowcase() {
  const features = [
    {
      icon: FileQuestion,
      title: "Hệ thống Quiz thông minh",
      description: "Làm bài kiểm tra trực tuyến với đa dạng dạng câu hỏi. Hỗ trợ LaTeX cho công thức Toán học.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: BarChart3,
      title: "Theo dõi tiến độ",
      description: "Dashboard trực quan hiển thị kết quả học tập, điểm mạnh/yếu và lộ trình cải thiện.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: BookOpenCheck,
      title: "Quản lý lớp học",
      description: "Giáo viên dễ dàng quản lý lớp, giao bài tập và theo dõi từng học sinh.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Bell,
      title: "Thông báo real-time",
      description: "Nhận thông báo về bài tập mới, kết quả kiểm tra và lịch học ngay lập tức.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: ClipboardList,
      title: "Ngân hàng đề thi",
      description: "Kho đề thi phong phú từ cơ bản đến nâng cao, cập nhật liên tục theo chương trình mới.",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      icon: Shield,
      title: "Bảo mật & An toàn",
      description: "Dữ liệu học sinh được bảo mật tuyệt đối với hệ thống xác thực an toàn.",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-600",
    },
  ]

  const platformBenefits = [
    "Truy cập mọi lúc, mọi nơi trên mọi thiết bị",
    "Tự động chấm bài và phân tích kết quả",
    "Lộ trình học cá nhân hóa dựa trên AI",
    "Báo cáo tiến độ gửi tự động cho phụ huynh",
    "Hỗ trợ công thức Toán LaTeX chuyên nghiệp",
    "Giao diện thân thiện, dễ sử dụng",
  ]

  return (
    <section id="platform" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-blue-50/30 to-background" />
      <div className="absolute top-1/4 left-0 -z-10 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
            <Zap className="h-4 w-4" />
            <span>Nền tảng học tập trực tuyến</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Nền tảng <span className="gradient-text">EduSmart LMS</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Hệ thống quản lý học tập hiện đại, giúp học sinh và giáo viên kết nối hiệu quả mọi lúc, mọi nơi
          </p>
        </div>

        {/* Platform mockup */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-2 shadow-2xl shadow-blue-900/20">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-1.5 text-xs text-white/60">
                  <Shield className="h-3 w-3" />
                  <span>edusmart.vn/dashboard</span>
                </div>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="rounded-b-2xl bg-gradient-to-br from-slate-50 to-blue-50 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {/* Sidebar mockup */}
                <div className="hidden sm:block rounded-xl bg-white border border-border/50 p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-sm text-foreground">EduSmart</span>
                  </div>
                  {[
                    { icon: Monitor, label: "Dashboard", active: true },
                    { icon: FileQuestion, label: "Bài kiểm tra", active: false },
                    { icon: BarChart3, label: "Kết quả", active: false },
                    { icon: Bell, label: "Thông báo", active: false },
                  ].map((item, i) => {
                    const ItemIcon = item.icon
                    return (
                      <div key={i} className={`flex items-center gap-2 rounded-lg px-3 py-2 mb-1 text-xs ${item.active ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-muted-foreground'}`}>
                        <ItemIcon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Main content mockup */}
                <div className="sm:col-span-2 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Bài đã làm", value: "24", icon: ClipboardList, color: "text-blue-600" },
                      { label: "Điểm TB", value: "8.5", icon: TrendingUp, color: "text-emerald-600" },
                      { label: "Xếp hạng", value: "#3", icon: Users, color: "text-purple-600" },
                    ].map((stat, i) => {
                      const StatIcon = stat.icon
                      return (
                        <div key={i} className="rounded-xl bg-white border border-border/50 p-3 shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</span>
                            <StatIcon className={`h-3.5 w-3.5 ${stat.color}`} />
                          </div>
                          <div className="text-lg sm:text-xl font-bold">{stat.value}</div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Chart mockup */}
                  <div className="rounded-xl bg-white border border-border/50 p-4 shadow-sm">
                    <div className="text-xs font-semibold mb-3">Tiến độ học tập</div>
                    <div className="flex items-end gap-1.5 h-24">
                      {[40, 55, 45, 65, 70, 60, 80, 75, 85, 90, 82, 95].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-blue-400 transition-all duration-300" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-[9px] text-muted-foreground">T1</span>
                      <span className="text-[9px] text-muted-foreground">T12</span>
                    </div>
                  </div>

                  {/* Recent quizzes */}
                  <div className="rounded-xl bg-white border border-border/50 p-4 shadow-sm">
                    <div className="text-xs font-semibold mb-3">Bài kiểm tra gần đây</div>
                    {[
                      { name: "Hình học không gian - Chương 3", score: "9.0", status: "Xuất sắc" },
                      { name: "Đại số - Phương trình bậc 2", score: "8.5", status: "Giỏi" },
                    ].map((quiz, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b last:border-0 border-border/30">
                        <div>
                          <div className="text-xs font-medium">{quiz.name}</div>
                          <div className="text-[10px] text-muted-foreground">{quiz.status}</div>
                        </div>
                        <div className="text-sm font-bold text-emerald-600">{quiz.score}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Device indicators */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Laptop className="h-4 w-4" />
              <span>Desktop</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>Mobile</span>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold sm:text-3xl">Tính năng nổi bật</h3>
            <p className="mt-2 text-muted-foreground">Mọi thứ bạn cần cho việc học tập hiệu quả</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-hover group p-6 border-border/50">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} transition-all duration-300 group-hover:scale-110`}>
                    <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h4 className="mt-4 text-base font-semibold">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Benefits + CTA */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Tại sao nên sử dụng <span className="gradient-text">EduSmart LMS</span>?
              </h3>
              <p className="mt-3 text-muted-foreground">
                Nền tảng được thiết kế riêng cho học sinh Việt Nam, tối ưu cho việc học Toán từ lớp 6 đến 12.
              </p>
              <div className="mt-6 space-y-3">
                {platformBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                    <p className="text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105" asChild>
                  <a href="#contact">
                    Dùng thử miễn phí
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl bg-transparent" asChild>
                  <a href="#contact">Liên hệ tư vấn</a>
                </Button>
              </div>
            </div>

            {/* Stats card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { number: "1000+", label: "Học sinh đang sử dụng", icon: Users, color: "from-blue-500 to-blue-600" },
                  { number: "5000+", label: "Bài quiz đã tạo", icon: FileQuestion, color: "from-purple-500 to-purple-600" },
                  { number: "98%", label: "Hài lòng với nền tảng", icon: CheckCircle2, color: "from-emerald-500 to-emerald-600" },
                  { number: "24/7", label: "Truy cập mọi lúc", icon: Zap, color: "from-amber-500 to-amber-600" },
                ].map((stat, i) => {
                  const StatIcon = stat.icon
                  return (
                    <div key={i} className="card-hover rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm">
                      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                        <StatIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
