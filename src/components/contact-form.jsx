import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, MessageCircle, Send, Sparkles, Check, AlertCircle } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    phone: "",
    goal: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên"
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Họ tên phải dài ít nhất 3 ký tự"
    }

    if (!formData.grade.trim()) {
      newErrors.grade = "Vui lòng nhập lớp học"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
    } else if (!/^[0-9\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", grade: "", phone: "", goal: "" })
      setIsSubmitted(false)
    }, 2000)

    setIsLoading(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Điện thoại",
      value: "0919 414 006",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Điện thoại",
      value: "0918 877 407",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: MessageCircle,
      label: "Zalo / Messenger",
      value: "0918 877 407",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: "141 Đường Nguyễn Tuân, Phường Rạch Giá, Tỉnh An Giang",
      color: "from-amber-500 to-amber-600",
    },
  ]

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-blue-50/20 to-background" />
      <div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Đăng ký miễn phí
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Đăng ký <span className="gradient-text">học thử</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Điền thông tin để nhận tư vấn và đăng ký học thử miễn phí
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          <Card className={`p-8 border-border/50 shadow-xl shadow-blue-900/5 transition-all duration-300 ${isSubmitted ? "ring-2 ring-green-500" : ""}`}>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-center">Đăng ký thành công!</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ với bạn sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                    Họ và tên học sinh <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: undefined })
                      }}
                      className={`rounded-xl h-11 transition-all duration-200 ${
                        errors.name ? "border-red-500 focus:ring-red-200" : "focus:ring-primary"
                      }`}
                    />
                    {formData.name && !errors.name && (
                      <Check className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                    )}
                  </div>
                  {errors.name && (
                    <div className="flex items-center gap-2 text-sm text-red-500 mt-1 animate-in">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade" className="text-sm font-semibold flex items-center gap-2">
                    Lớp học hiện tại <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="grade"
                      placeholder="Lớp 9"
                      value={formData.grade}
                      onChange={(e) => {
                        setFormData({ ...formData, grade: e.target.value })
                        if (errors.grade) setErrors({ ...errors, grade: undefined })
                      }}
                      className={`rounded-xl h-11 transition-all duration-200 ${
                        errors.grade ? "border-red-500 focus:ring-red-200" : "focus:ring-primary"
                      }`}
                    />
                    {formData.grade && !errors.grade && (
                      <Check className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                    )}
                  </div>
                  {errors.grade && (
                    <div className="flex items-center gap-2 text-sm text-red-500 mt-1 animate-in">
                      <AlertCircle className="h-4 w-4" />
                      {errors.grade}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold flex items-center gap-2">
                    Số điện thoại phụ huynh <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0123 456 789"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value })
                        if (errors.phone) setErrors({ ...errors, phone: undefined })
                      }}
                      className={`rounded-xl h-11 transition-all duration-200 ${
                        errors.phone ? "border-red-500 focus:ring-red-200" : "focus:ring-primary"
                      }`}
                    />
                    {formData.phone && !errors.phone && (
                      <Check className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                    )}
                  </div>
                  {errors.phone && (
                    <div className="flex items-center gap-2 text-sm text-red-500 mt-1 animate-in">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goal" className="text-sm font-semibold">Mục tiêu học tập</Label>
                  <Textarea
                    id="goal"
                    placeholder="Ví dụ: Nâng cao điểm số, thi vào 10, học sinh giỏi..."
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    rows={4}
                    className="rounded-xl transition-all duration-200 focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl py-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Đang gửi...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Đăng ký ngay
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ
                </p>
              </form>
            )}
          </Card>

          <div className="space-y-6">
            <Card className="p-8 border-border/50 shadow-xl shadow-blue-900/5">
              <h3 className="text-xl font-bold">Thông tin liên hệ</h3>
              <div className="mt-6 space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-3 rounded-lg hover:bg-muted transition-all duration-300 cursor-pointer group"
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} transition-all group-hover:scale-110`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{info.label}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{info.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            {/* Special offer card */}
            <Card className="p-6 border-border/50 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100/50">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-lg">Ưu đãi đặc biệt</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Đăng ký ngay để nhận <span className="font-semibold text-primary">1 buổi học thử miễn phí</span> và tư vấn lộ trình học tập cá nhân hóa!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
