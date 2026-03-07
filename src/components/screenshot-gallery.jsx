import { useState } from "react"
import { Monitor, FileQuestion, Star, Trophy } from "lucide-react"

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Monitor,
    image: "/screenshots/ss-dashboard.png",
    title: "Tổng quan học tập",
    description: "Xem toàn bộ lớp học, bài tập sắp tới và hoạt động gần đây ngay trên một màn hình.",
  },
  {
    id: "quiz",
    label: "Làm bài kiểm tra",
    icon: FileQuestion,
    image: "/screenshots/ss-quiz.png",
    title: "Bài kiểm tra trực tuyến",
    description: "Giao diện làm bài hiện đại với hỗ trợ công thức Toán LaTeX, đếm ngược thời gian và điều hướng câu hỏi nhanh.",
  },
  {
    id: "result",
    label: "Kết quả",
    icon: Star,
    image: "/screenshots/ss-result.png",
    title: "Xem kết quả chi tiết",
    description: "Sau khi nộp bài, học sinh thấy ngay tỷ lệ đúng, đáp án và giải thích từng câu hỏi.",
  },
  {
    id: "achievements",
    label: "Thành tích",
    icon: Trophy,
    image: "/screenshots/ss-achievements.png",
    title: "Hệ thống huy hiệu & XP",
    description: "Gamification giúp học sinh có động lực học tập — tích lũy XP, lên cấp và mở khóa huy hiệu.",
  },
]

export function ScreenshotGallery() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const active = tabs.find((t) => t.id === activeTab)

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/40 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
            <Monitor className="h-4 w-4" />
            <span>Giao diện thực tế</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trải nghiệm <span className="gradient-text">EduSmart LMS</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Xem giao diện thực tế của nền tảng học tập mà học sinh Thầy Long đang sử dụng hàng ngày
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Screenshot + description */}
        <div className="mx-auto max-w-5xl">
          {/* Description bar */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 px-1">
            <h3 className="font-semibold text-foreground">{active.title}</h3>
            <span className="hidden sm:block text-muted-foreground">—</span>
            <p className="text-sm text-muted-foreground">{active.description}</p>
          </div>

          {/* Browser chrome wrapper */}
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-slate-900 to-slate-800 p-2 shadow-2xl shadow-blue-900/20">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 mb-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs text-white/50 w-48 justify-center">
                  edusmart.vn
                </div>
              </div>
            </div>

            {/* Screenshot image */}
            <div className="relative overflow-hidden rounded-b-xl rounded-t-sm">
              {tabs.map((tab) => (
                <img
                  key={tab.id}
                  src={tab.image}
                  alt={tab.title}
                  className={`w-full object-cover object-top transition-all duration-500 ${
                    activeTab === tab.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute inset-0 translate-y-2 pointer-events-none"
                  }`}
                  style={{ maxHeight: "520px" }}
                />
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={tab.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
