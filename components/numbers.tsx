"use client"

import { useLanguage } from "@/components/language-provider"

export function Numbers() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] text-gold">{t.numbers.eyebrow}</p>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight">
              {t.numbers.title}
            </h2>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {t.numbers.stats.map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-8">
                <dt className="font-serif text-4xl text-gold">{stat.value}</dt>
                <dd className="mt-3 text-[10px] font-semibold tracking-[0.2em] text-foreground">{stat.label}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
