import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { faqData } from "@/content/faqs"
import { siteConfig } from "@/site/site-config"

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-base" style={{ padding: "96px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-start gap-20 lg:grid-cols-[0.9fr_1.4fr]">
          {/* Sticky left column */}
          <div className="lg:sticky lg:top-28">
            <div className="eyebrow mb-4">Câu hỏi thường gặp</div>
            <h2 className="h-section">Phụ huynh hay hỏi gì trước khi cho con học?</h2>
            <p className="lead mt-4">
              Nếu câu hỏi của bạn chưa có ở đây, hãy nhắn Zalo hoặc gọi trực tiếp — Thầy hoặc trợ giảng sẽ trả lời trong ngày.
            </p>
            <div className="mt-6">
              <a
                href={siteConfig.zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[46px] items-center gap-2 rounded-full px-5 text-[14.5px] font-semibold no-underline transition-opacity hover:opacity-90"
                style={{
                  background: "var(--color-accent-deep)",
                  color: "var(--color-on-accent)",
                }}
              >
                <MessageCircle className="h-4 w-4" />
                Nhắn Zalo
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div style={{ borderTop: "1px solid var(--color-rule)" }}>
            {faqData.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.question} style={{ borderBottom: "1px solid var(--color-rule)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 bg-transparent text-left"
                    style={{ padding: "22px 0", border: "none", cursor: "pointer", color: "var(--color-ink)" }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                        letterSpacing: "-0.005em",
                        color: "var(--color-ink)",
                      }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform"
                      style={{
                        background: isOpen ? "var(--color-accent-deep)" : "var(--color-accent-soft)",
                        color: isOpen ? "var(--color-on-accent)" : "var(--color-accent-deep)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height,padding] duration-300 ease-out"
                    style={{
                      maxHeight: isOpen ? 320 : 0,
                      paddingBottom: isOpen ? 22 : 0,
                    }}
                  >
                    <p
                      className="m-0 max-w-[640px]"
                      style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--color-body)" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
