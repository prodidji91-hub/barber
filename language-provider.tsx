"use client"

import { Sparkles, Scissors, Building2, UserRound, Ruler, Zap, CalendarClock, Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const ICONS = [Sparkles, Scissors, Building2, UserRound, Ruler, Zap, CalendarClock, Star]

export function Benefits() {
  const { t } = useLanguage()

  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-gold">{t.benefits.eyebrow}</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            {t.benefits.title}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{t.benefits.body}</p>
          <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            {t.benefits.count}
          </div>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {t.benefits.reasons.map((reason, i) => {
            const Icon = ICONS[i]
            return (
              <li key={reason.title} className="group bg-card p-7 transition-colors hover:bg-secondary">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-gold transition-colors group-hover:border-gold/40">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-2xl text-border transition-colors group-hover:text-gold/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
