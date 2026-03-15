import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner({ title, description, primaryAction, secondaryAction }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-2xl shadow-slate-950/10 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">Sẵn sàng bắt đầu</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" className="rounded-full bg-white text-slate-950 hover:bg-slate-100" asChild>
                <a href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              {secondaryAction && (
                <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
