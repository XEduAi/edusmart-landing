import { Card } from "@/components/ui/card"
import { GraduationCap, Award, Users } from "lucide-react"
import { useState, useEffect } from "react"

export function TeacherProfile() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageHovered, setImageHovered] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const achievements = [
    {
      icon: GraduationCap,
      text: "Đại học Sư phạm Toán, Vinh",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      text: "40+ năm kinh nghiệm dạy Toán THCS & THPT",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Users,
      text: "Đào tạo hơn +1000 học sinh đạt học sinh giỏi",
      color: "from-emerald-500 to-emerald-600",
    },
  ]

  return (
    <section id="teacher" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-100/20 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Đội ngũ giáo viên
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Giới thiệu <span className="gradient-text">giáo viên</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Đội ngũ giáo viên giàu kinh nghiệm và tâm huyết
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Card className={`overflow-hidden border-border/50 shadow-xl shadow-blue-900/5 transition-all duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <div className="grid gap-0 md:grid-cols-5">
              <div className="md:col-span-2 relative overflow-hidden">
                <div
                  className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-purple-100 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setImageHovered(true)}
                  onMouseLeave={() => setImageHovered(false)}
                >
                  <img
                    src="/images/teacher.jpg"
                    alt="Thầy Nguyễn Văn Long"
                    className={`h-full w-full object-cover transition-all duration-500 ${
                      imageHovered ? "scale-110 brightness-110" : "scale-100"
                    }`}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  {imageHovered && (
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent animate-in" />
                  )}
                </div>
              </div>
              <div className={`flex flex-col justify-center p-8 md:col-span-3 lg:p-12 transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}>
                <div>
                  <h3 className="text-2xl font-bold lg:text-3xl">Thầy Nguyễn Hữu Long</h3>
                  <p className="mt-1 text-sm text-primary font-medium">Giáo viên môn Toán</p>
                </div>

                <div className="mt-8 space-y-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon
                    return (
                      <div
                        key={index}
                        className={`flex gap-4 items-start p-3 rounded-lg transition-all duration-300 group hover:bg-primary/5 cursor-pointer ${
                          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                      >
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${achievement.color} transition-all group-hover:scale-110`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <p className="flex items-center text-sm leading-relaxed font-medium group-hover:text-foreground transition-colors">{achievement.text}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-4 border border-blue-100/50">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;Mỗi học sinh đều có tiềm năng riêng. Nhiệm vụ của giáo viên là khơi dậy đam mê và dẫn dắt các em đến thành công.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
