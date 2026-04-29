import { useState } from "react"
import { ArrowRight, MessageCircle, Phone, MapPin, Mail, Check, AlertCircle } from "lucide-react"
import { siteConfig } from "@/site/site-config"

const ATTRIBUTION_STORAGE_KEY = "edusmart:first-touch-attribution"

const getLeadAttribution = () => {
  if (typeof window === "undefined") {
    return { source: "direct", sourceDetail: "", referrer: "", landingPagePath: "/", utm: {} }
  }

  const cached = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)
  if (cached) {
    try {
      return JSON.parse(cached)
    } catch {
      window.sessionStorage.removeItem(ATTRIBUTION_STORAGE_KEY)
    }
  }

  const currentUrl = new URL(window.location.href)
  const params = currentUrl.searchParams
  const referrer = document.referrer || ""
  let referrerHost = ""
  if (referrer) {
    try {
      referrerHost = new URL(referrer).hostname.replace(/^www\./, "")
    } catch {
      referrerHost = ""
    }
  }
  const pathname = currentUrl.pathname || "/"
  const utm = {
    source: params.get("utm_source") || "",
    medium: params.get("utm_medium") || "",
    campaign: params.get("utm_campaign") || "",
    term: params.get("utm_term") || "",
    content: params.get("utm_content") || "",
  }

  const medium = utm.medium.toLowerCase()
  const sourceToken = utm.source.toLowerCase()

  let source = "direct"
  if (/(cpc|ppc|paid|ads|adset|remarketing|social-paid)/.test(medium) || /(facebook|meta|tiktok|googleads|zalo-ads)/.test(sourceToken)) {
    source = "paid-ads"
  } else if (pathname.startsWith("/blog") || pathname.startsWith("/tai-lieu")) {
    source = "organic-blog"
  } else if (params.get("ref") || (referrerHost && !referrerHost.includes(currentUrl.hostname.replace(/^www\./, "")))) {
    source = "referral"
  }

  const attribution = {
    source,
    sourceDetail: utm.source || referrerHost || pathname,
    referrer,
    landingPagePath: `${pathname}${currentUrl.search}`,
    utm,
  }

  window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution))
  return attribution
}

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", studentName: "", grade: "", phone: "", goal: "" })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const validate = () => {
    const next = {}
    if (!formData.name.trim()) next.name = "Vui lòng nhập họ tên phụ huynh"
    if (!formData.phone.trim()) next.phone = "Vui lòng nhập số điện thoại"
    else if (!/^[0-9\s\-+()]{10,}$/.test(formData.phone.replace(/\s/g, ""))) next.phone = "Số điện thoại không hợp lệ"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError("")
    if (!validate()) return

    setIsLoading(true)
    try {
      const API_URL = import.meta.env.VITE_API_URL || "https://smartedu-backend.io.vn/api"
      const attribution = getLeadAttribution()
      const payload = {
        name: formData.name,
        grade: formData.grade,
        phone: formData.phone,
        goal: [formData.studentName && `Học sinh: ${formData.studentName}`, formData.goal].filter(Boolean).join(" — "),
        ...attribution,
      }
      const response = await fetch(`${API_URL}/leads/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Có lỗi xảy ra, vui lòng thử lại")
      }
      setIsSubmitted(true)
      setTimeout(() => {
        setFormData({ name: "", studentName: "", grade: "", phone: "", goal: "" })
        setIsSubmitted(false)
      }, 4000)
    } catch (error) {
      setSubmitError(error.message || "Không thể kết nối đến server. Vui lòng thử lại sau.")
    } finally {
      setIsLoading(false)
    }
  }

  const fieldStyle = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 4,
    padding: "14px 16px",
    color: "var(--color-on-accent)",
    fontFamily: "var(--font-body)",
    fontSize: 14.5,
    outline: "none",
    width: "100%",
  }

  return (
    <section id="contact" className="bg-deep" style={{ padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Form */}
          <div>
            <div className="eyebrow mb-4" style={{ color: "var(--color-accent-soft)" }}>
              Đăng ký học thử
            </div>
            <h2 className="h-section mb-5" style={{ color: "var(--color-on-accent)" }}>
              Để lại thông tin — Thầy sẽ gọi lại trong vòng 24 giờ.
            </h2>
            <p className="lead mb-9" style={{ color: "var(--color-on-accent-soft)" }}>
              Buổi học thử miễn phí. Phụ huynh có thể ngồi quan sát hoặc theo dõi qua EduSmart.
            </p>

            {isSubmitted ? (
              <div
                className="animate-in flex items-center gap-3 rounded p-5"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "var(--color-on-accent)",
                }}
              >
                <Check className="h-6 w-6 shrink-0" />
                <div>
                  <div className="text-base font-semibold">Đăng ký thành công.</div>
                  <div className="text-sm opacity-80">Cảm ơn bạn — chúng tôi sẽ liên hệ trong 24 giờ.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <input
                    placeholder="Họ tên phụ huynh *"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: undefined })
                    }}
                    style={fieldStyle}
                    className="placeholder:text-white/40"
                  />
                  {errors.name && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs" style={{ color: "#FBBF24" }}>
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Số điện thoại *"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value })
                      if (errors.phone) setErrors({ ...errors, phone: undefined })
                    }}
                    style={fieldStyle}
                    className="placeholder:text-white/40"
                  />
                  {errors.phone && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs" style={{ color: "#FBBF24" }}>
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.phone}
                    </div>
                  )}
                </div>
                <input
                  placeholder="Tên học sinh"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  style={fieldStyle}
                  className="placeholder:text-white/40"
                />
                <input
                  placeholder="Lớp (6–12)"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  style={fieldStyle}
                  className="placeholder:text-white/40"
                />
                <textarea
                  placeholder="Bạn cần tư vấn gì?"
                  rows={3}
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  style={{ ...fieldStyle, gridColumn: "1 / -1", resize: "none" }}
                  className="placeholder:text-white/40"
                />

                <div className="col-span-full mt-1 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex h-[54px] flex-1 items-center justify-center gap-2 rounded-full px-7 text-[15.5px] font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{
                      background: "var(--color-on-accent)",
                      color: "var(--color-accent-deep)",
                      border: "none",
                      cursor: isLoading ? "wait" : "pointer",
                      minWidth: 200,
                    }}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                          aria-hidden
                        />
                        Đang gửi…
                      </>
                    ) : (
                      <>
                        Gửi đăng ký
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <a
                    href={siteConfig.zaloHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[54px] items-center gap-2 rounded-full border px-7 text-[15.5px] font-semibold no-underline transition-opacity hover:opacity-90"
                    style={{
                      borderColor: "rgba(255,255,255,0.35)",
                      color: "var(--color-on-accent)",
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Zalo
                  </a>
                </div>

                {submitError && (
                  <div
                    className="animate-in col-span-full flex items-center gap-2 rounded p-3 text-sm"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(251,191,36,0.4)",
                      color: "#FBBF24",
                    }}
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {submitError}
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Map + contact info */}
          <div>
            <div
              className="relative mb-6 overflow-hidden rounded-md"
              style={{
                aspectRatio: "5 / 4",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1964.467892518674!2d105.081728!3d10.022158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b33cc27fdf5f%3A0xf099ba93decf08e!2zROG6oXkgdG_DoW4gdGjhuqd5IExvbmc!5e0!3m2!1svi!2s!4v1773394513618!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.85)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí lớp học Toán Thầy Long tại Rạch Giá, Kiên Giang"
              />
            </div>

            <div className="flex flex-col gap-5 text-[14.5px]">
              <div className="grid grid-cols-[auto_1fr] items-start gap-3.5">
                <span className="mt-0.5" style={{ color: "var(--color-accent-soft)" }}>
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-semibold" style={{ color: "var(--color-on-accent)" }}>
                    Địa chỉ
                  </div>
                  <div style={{ color: "var(--color-on-accent-soft)", lineHeight: 1.5 }}>
                    {siteConfig.address.display}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-start gap-3.5">
                <span className="mt-0.5" style={{ color: "var(--color-accent-soft)" }}>
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-semibold" style={{ color: "var(--color-on-accent)" }}>
                    Điện thoại / Zalo
                  </div>
                  <div style={{ color: "var(--color-on-accent-soft)" }}>
                    {siteConfig.phones.join(" · ")}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-start gap-3.5">
                <span className="mt-0.5" style={{ color: "var(--color-accent-soft)" }}>
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-semibold" style={{ color: "var(--color-on-accent)" }}>
                    Giờ học
                  </div>
                  <div style={{ color: "var(--color-on-accent-soft)" }}>
                    Thứ 2 – Thứ 7: 13:00 – 21:00 · CN: 8:00 – 21:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
