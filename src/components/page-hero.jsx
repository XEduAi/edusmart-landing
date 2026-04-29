import { ArrowRight } from "lucide-react"

export function PageHero({
  eyebrow,
  title,
  description,
  highlights = [],
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="bg-base" style={{ padding: "96px 0 80px" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="eyebrow mb-5">{eyebrow}</div>
            <h1
              className="font-head"
              style={{
                fontSize: "clamp(36px, 4.6vw, 64px)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "var(--color-ink)",
                textWrap: "balance",
                margin: 0,
              }}
            >
              {title}
            </h1>
            {description && (
              <p
                className="mt-6 max-w-[640px]"
                style={{
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: "var(--color-body)",
                  textWrap: "pretty",
                }}
              >
                {description}
              </p>
            )}

            {(primaryAction || secondaryAction) && (
              <div className="mt-9 flex flex-wrap gap-3">
                {primaryAction && (
                  <a
                    href={primaryAction.href}
                    className="inline-flex h-[48px] items-center gap-2 rounded-full px-6 text-[14.5px] font-semibold no-underline transition-opacity hover:opacity-90"
                    style={{
                      background: "var(--color-accent-deep)",
                      color: "var(--color-on-accent)",
                    }}
                  >
                    {primaryAction.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
                {secondaryAction && (
                  <a
                    href={secondaryAction.href}
                    className="inline-flex h-[48px] items-center gap-2 rounded-full border px-6 text-[14.5px] font-semibold no-underline transition-opacity hover:opacity-80"
                    style={{
                      borderColor: "var(--color-rule)",
                      color: "var(--color-ink)",
                    }}
                  >
                    {secondaryAction.label}
                  </a>
                )}
              </div>
            )}
          </div>

          {highlights.length > 0 && (
            <dl
              className="flex flex-col gap-0"
              style={{ borderTop: "1px solid var(--color-rule)" }}
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[140px_1fr] items-baseline gap-4"
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid var(--color-rule)",
                  }}
                >
                  <dt
                    className="font-mono text-[11px] uppercase"
                    style={{ color: "var(--color-muted)", letterSpacing: "0.16em" }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    className="m-0 font-head"
                    style={{
                      fontSize: 17,
                      fontWeight: 500,
                      lineHeight: 1.4,
                      color: "var(--color-ink)",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  )
}
