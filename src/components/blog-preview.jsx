import { blogPosts } from "@/content/blog-posts"
import { ArrowRight, Clock3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredPosts = blogPosts.slice(0, 3)

export function BlogPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 sm:py-32">
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Blog học Toán
            </div>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Thêm nhiều trang nội dung để <span className="gradient-text">mở rộng SEO tự nhiên</span>
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Blog tập trung vào nhu cầu tìm kiếm thật của phụ huynh và học sinh tại Rạch Giá: ôn thi vào 10, THPT, phương
              pháp học và kinh nghiệm đồng hành cùng con.
            </p>
          </div>

          <Button size="lg" variant="outline" className="rounded-full bg-white/80" asChild>
            <a href="/blog/">
              Xem tất cả bài viết
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="card-hover rounded-3xl border border-slate-200/80 bg-white/90 p-7 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{post.category}</p>
                <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                  <Clock3 className="h-3.5 w-3.5" />
                  {post.readingTime}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
              <a
                href={`/blog/${post.slug}/`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-primary"
              >
                Đọc bài viết
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
