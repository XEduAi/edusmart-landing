import { Button } from "@/components/ui/button"
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
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(13,148,136,0.14),_transparent_38%),radial-gradient(circle_at_82%_20%,_rgba(245,158,11,0.16),_transparent_28%),linear-gradient(180deg,_#fffdf8_0%,_#f7f4ea_60%,_#ffffff_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">{description}</p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              {primaryAction && (
                <Button size="lg" className="rounded-full shadow-md shadow-primary/20" asChild>
                  <a href={primaryAction.href}>
                    {primaryAction.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {secondaryAction && (
                <Button size="lg" variant="outline" className="rounded-full bg-white/80" asChild>
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                </Button>
              )}
            </div>
          )}

          {highlights.length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/80 bg-white/80 p-5 text-left shadow-sm">
                  <p className="text-sm font-medium text-slate-500">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
