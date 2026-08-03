"use client"

import Image from "next/image"
import { Check, MapPin } from "lucide-react"
import { Stars } from "@/components/stars"
import { useLanguage } from "@/components/language-provider"

export function Lounge() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.25em] text-gold">{t.lounge.eyebrow}</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            {t.lounge.title}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{t.lounge.body1}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t.lounge.body2}</p>

          <ul className="mt-8 space-y-3">
            {t.lounge.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-background p-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-foreground">{t.lounge.addressTitle}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.lounge.addressSub}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/vista-barber-action.webp"
              alt={t.lounge.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-background/90 to-transparent px-5 pb-5 pt-16">
              <span className="text-xs font-semibold tracking-[0.2em] text-foreground">VISTA BARBER LOUNGE</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                <Stars className="h-3 w-3" />
                5.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
