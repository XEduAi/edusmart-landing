import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#value", label: "Giới thiệu" },
    { href: "#curriculum", label: "Chương trình học" },
    { href: "#platform", label: "Nền tảng LMS" },
    { href: "#teacher", label: "Giáo viên" },
    { href: "#testimonials", label: "Học viên" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "border-b border-border/40 bg-background/95 backdrop-blur-xl shadow-sm"
        : "border-b border-border/20 bg-background/60 backdrop-blur-xl"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">EduSmart</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <Button size="sm" variant="outline" className="hidden sm:inline-flex bg-transparent rounded-lg" asChild>
              <a href="#platform">Xem nền tảng</a>
            </Button>
            <Button size="sm" className="hidden sm:inline-flex rounded-lg shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all" asChild>
              <a href="#contact">Đăng ký ngay</a>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="animate-in border-t border-border/40 bg-background/95 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href)
                    setIsOpen(false)
                  }}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeLink === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full mt-2 rounded-lg">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Đăng ký ngay
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
