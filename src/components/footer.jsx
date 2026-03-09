import { Facebook, MessageCircle, Phone, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-muted/30 to-muted/60">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img
                src="/logo.webp"
                alt="Dạy Toán Thầy Long - Logo trung tâm dạy Toán tại Rạch Giá"
                className="h-16 w-auto object-contain"
                width="234"
                height="128"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Trung tâm dạy Toán uy tín với phương pháp hiểu bản chất, giúp học sinh yêu thích Toán và đạt kết quả cao.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Chương trình học</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#curriculum" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Toán lớp 6-9
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Toán nâng cao & thi vào 10
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Toán 10-12 & THPT Quốc gia
                </a>
              </li>
              <li>
                <a href="https://lms.daytoanthaylong.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Nền tảng EduSmart LMS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Về chúng tôi</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#value" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#teacher" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Đội ngũ giáo viên
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Học viên nói gì
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Liên hệ</h3>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="tel:0918877407" className="hover:text-primary transition-colors">0918 877 407</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <a href="https://zalo.me/0918877407" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Zalo: 0918 877 407</a>
              </li>
              <li className="text-sm text-muted-foreground">Hẻm 1, Đường Nguyễn Tuân, Phường Rạch Giá, Tỉnh An Giang</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Dạy Toán Thầy Long. Made with <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> in Vietnam
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: "#", icon: Facebook, label: "Facebook" },
              { href: "#", icon: MessageCircle, label: "Zalo" },
              { href: "#", icon: Phone, label: "Phone" },
            ].map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
