import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/content/blog-posts"

const featuredPosts = blogPosts.slice(0, 3)

export function BlogPreview() {
  return (
    <section id="blog" className="bg-base" style={{ padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[640px]">
            <div className="eyebrow mb-4">Bài viết mới nhất</div>
            <h2 className="h-section m-0">
              Góc viết của Thầy Long — về cách dạy, học và đồng hành cùng con.
            </h2>
          </div>
          <a
            href="/blog/"
            className="inline-flex h-[46px] items-center gap-2 rounded-full border px-5 text-[14.5px] font-semibold no-underline transition-opacity hover:opacity-80"
            style={{ borderColor: "var(--color-rule)", color: "var(--color-ink)" }}
          >
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post, i) => {
            const isMid = i === 1
            return (
              <a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="block no-underline"
                style={{ color: "inherit" }}
              >
                <div
                  className="mb-4 w-full"
                  style={{
                    aspectRatio: "16 / 10",
                    background: isMid
                      ? "var(--color-accent-deep)"
                      : "var(--color-accent-tint)",
                    borderRadius: 4,
                  }}
                />
                <div
                  className="eyebrow mb-2.5"
                  style={{ letterSpacing: "0.14em" }}
                >
                  {post.category}
                </div>
                <h3
                  className="font-head"
                  style={{
                    fontWeight: 500,
                    fontSize: 22,
                    lineHeight: 1.25,
                    margin: "0 0 12px",
                    color: "var(--color-ink)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {post.title}
                </h3>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 12.5,
                    color: "var(--color-muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {post.readingTime}
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
