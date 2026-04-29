import { ArrowRight } from "lucide-react"

export function CtaBanner({ title, description, primaryAction, secondaryAction }) {
  return (
    <section className="bg-deep" style={{ padding: "80px 0" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_auto] lg:gap-16">
          <div className="max-w-[720px]">
            <div
              className="eyebrow mb-4"
              style={{ color: "var(--color-accent-soft)" }}
            >
              Sẵn sàng bắt đầu
            </div>
            <h2
              className="font-head"
              style={{
                fontSize: "clamp(28px, 3.4vw, 44px)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--color-on-accent)",
                textWrap: "balance",
                margin: 0,
              }}
            >
              {title}
            </h2>
            <p
              className="mt-4 max-w-[560px]"
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--color-on-accent-soft)",
              }}
            >
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={primaryAction.href}
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold no-underline transition-opacity hover:opacity-90"
              style={{
                background: "var(--color-on-accent)",
                color: "var(--color-accent-deep)",
              }}
            >
              {primaryAction.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border px-7 text-[15px] font-semibold no-underline transition-opacity hover:opacity-90"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "var(--color-on-accent)",
                }}
              >
                {secondaryAction.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
