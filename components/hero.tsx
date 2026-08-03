"use client"

import Image from "next/image"
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react"
import { BOOKING_URL, WHATSAPP_URL } from "@/lib/site"
import { Stars } from "@/components/stars"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative flex min-h-screen items-end overflow-hidden pt-16">
      <Image
        src="/images/vista-interior.webp"
        alt={t.hero.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="mb-5 text-[11px] font-medium tracking-[0.25em] text-gold">{t.hero.eyebrow}</p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {t.hero.titleTop}
          <br />
          <span className="text-gold">{t.hero.titleBottom}</span>
        </h1>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">{t.hero.body}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-gold-foreground transition-opacity hover:opacity-90"
          >
            {t.common.book}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.common.whatsappAria}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t.common.whatsapp}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs tracking-wider text-muted-foreground">
          <div className="flex items-center gap-2">
            <Stars className="h-4 w-4" />
            <span className="font-semibold text-foreground">{t.hero.ratingStrong}</span>
            <span aria-hidden="true">·</span>
            <span>{t.hero.ratingSub}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
            <span>{t.hero.location}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-4 z-10 hidden items-center gap-2 text-[10px] tracking-[0.3em] text-muted-foreground sm:right-6 lg:flex">
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        {t.hero.scroll}
      </div>
    </section>
  )
}
