import { MapPin, Navigation, Clock, Phone } from "lucide-react"

export function Location() {
  return (
    <section id="location" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-blue-50/20 to-background" />
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <MapPin className="h-4 w-4" />
            Vị trí lớp học
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Đến với <span className="gradient-text">lớp học</span> của chúng tôi
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Lớp học nằm ở vị trí thuận tiện, dễ dàng di chuyển
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Info cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl border border-border/50 bg-card shadow-sm card-hover group cursor-pointer">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 transition-all group-hover:scale-110">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Địa chỉ</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Hẻm 1, Đường Nguyễn Tuân, Phường Rạch Giá, Tỉnh An Giang
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl border border-border/50 bg-card shadow-sm card-hover group cursor-pointer">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 transition-all group-hover:scale-110">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Giờ học</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Thứ 2 - Thứ 7: 13:00 - 21:00<br />
                    Chủ nhật: 8:00 - 21:00
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl border border-border/50 bg-card shadow-sm card-hover group cursor-pointer">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 transition-all group-hover:scale-110">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Liên hệ</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    0919 414 006 · 0918 877 407
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=10.02217,105.08156"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <Navigation className="h-4 w-4" />
                Chỉ đường đến lớp học
              </a>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-blue-900/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1000!2d105.08156!3d10.02217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAxJzE5LjgiTiAxMDXCsDA0JzUzLjYiRQ!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí lớp học Toán Thầy Long"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
