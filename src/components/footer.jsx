import { Facebook, MessageCircle, Phone, ArrowUpRight } from "lucide-react"
import { blogPosts } from "@/content/blog-posts"
import { primaryNav, siteConfig } from "@/site/site-config"

const featuredPosts = blogPosts.slice(0, 3)

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-[linear-gradient(180deg,#f7f4ea_0%,#fffdf8_100%)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div>
            <img
              src="/logo.webp"
              alt="Dạy Toán Thầy Long - Logo trung tâm dạy Toán tại Rạch Giá"
              className="h-16 w-auto object-contain"
              width="234"
              height="128"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              Trung tâm dạy Toán tại Rạch Giá, Kiên Giang với mô hình lớp nhỏ, lộ trình rõ ràng và nền tảng EduSmart LMS
              để phụ huynh theo dõi tiến độ học tập.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href={siteConfig.lmsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition-colors hover:text-slate-950"
              >
                Vào LMS
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Đăng ký học thử
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Điều hướng</h3>
            <ul className="mt-5 space-y-3">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/#faq" className="text-sm text-slate-600 transition-colors hover:text-primary">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Bài viết mới</h3>
            <ul className="mt-5 space-y-4">
              {featuredPosts.map((post) => (
                <li key={post.slug}>
                  <a href={`/blog/${post.slug}/`} className="group block">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">{post.category}</p>
                    <p className="mt-1 text-sm font-medium text-slate-800 transition-colors group-hover:text-primary">
                      {post.title}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Liên hệ</h3>
            <ul className="mt-5 space-y-3">
              {siteConfig.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={siteConfig.zaloHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                  Zalo hỗ trợ phụ huynh và học sinh
                </a>
              </li>
              <li className="text-sm leading-7 text-slate-600">{siteConfig.address.display}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Dạy Toán Thầy Long. Trung tâm dạy Toán tại Rạch Giá, Kiên Giang.</p>
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.facebook.com/daytoanthaylong", icon: Facebook, label: "Facebook Dạy Toán Thầy Long Rạch Giá" },
              { href: siteConfig.zaloHref, icon: MessageCircle, label: "Zalo Dạy Toán Thầy Long" },
              { href: `tel:${siteConfig.phones[1].replace(/\s/g, "")}`, icon: Phone, label: "Gọi điện Dạy Toán Thầy Long Rạch Giá" },
            ].map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:border-primary hover:text-primary"
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
