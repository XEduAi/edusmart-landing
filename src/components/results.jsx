import { Card } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react"
import { useState, useEffect, useRef } from "react"

function StatCounter({ stat, inView }) {
  const [displayValue, setDisplayValue] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    if (!inView) return

    const parseNumber = (str) => {
      const match = str.match(/\d+/)
      return match ? parseInt(match[0], 10) : 0
    }

    const targetValue = parseNumber(stat.number)
    const increment = Math.ceil(targetValue / 50)
    let current = 0

    const interval = setInterval(() => {
      current += increment
      if (current >= targetValue) {
        setDisplayValue(targetValue)
        clearInterval(interval)
      } else {
        setDisplayValue(current)
      }
    }, 30)

    counterRef.current = interval

    return () => {
      if (counterRef.current) clearInterval(counterRef.current)
    }
  }, [inView, stat.number])

  const suffix = stat.number.replace(/\d/g, "").trim()

  return (
    <div className="text-5xl font-bold gradient-text">
      {displayValue}
      {suffix}
    </div>
  )
}

export function Results() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [inView])

  const stats = [
    { number: "95%", label: "Học sinh tự tin đạt điểm 8+ sau 2 tháng", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
    { number: "1000+", label: "Học sinh đã tự tin với Toán", icon: Users, color: "from-purple-500 to-purple-600" },
    { number: "40+", label: "Năm kinh nghiệm giảng dạy", icon: Award, color: "from-amber-500 to-amber-600" },
  ]

  const commitments = ["Cam kết tiến bộ rõ rệt sau 1 tháng học", "Hỗ trợ học sinh 24/7 qua Zalo/Messenger"]

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-muted/50 to-background py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-96 w-[80%] bg-gradient-to-r from-blue-100/20 via-purple-100/30 to-blue-100/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Thành tích nổi bật
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Kết quả & <span className="gradient-text">Cam kết</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Những con số và cam kết chứng minh chất lượng giảng dạy
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="card-hover relative group overflow-hidden p-8 text-center border-border/50 transition-all duration-500"
                style={{
                  animation: inView ? `slideUp 0.5s ease-out ${index * 100}ms forwards` : "none",
                  opacity: inView ? 1 : 0,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <StatCounter stat={stat} inView={inView} />
                <div className="mt-3 text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            )
          })}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-center text-2xl font-bold">Cam kết của chúng tôi</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex gap-3 rounded-xl border border-border/50 bg-card p-4 card-hover">
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
