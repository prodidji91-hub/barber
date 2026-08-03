"use client"

import { Stars } from "@/components/stars"
import { useLanguage } from "@/components/language-provider"

export function Reviews() {
  const { t } = useLanguage()

  return (
    <section id="resenas" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-gold">{t.reviews.eyebrow}</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            {t.reviews.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.reviews.items.map((review) => (
            <article key={review.name} className="flex flex-col rounded-2xl border border-border bg-background p-7">
              <Stars className="h-4 w-4" />
              <p className="mt-5 flex-1 text-pretty leading-relaxed text-foreground">
                {`\u201C${review.quote}\u201D`}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-serif text-sm font-semibold text-gold">
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
