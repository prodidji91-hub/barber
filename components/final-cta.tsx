"use client"

import Image from "next/image"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { BOOKING_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/site"
import { useLanguage } from "@/components/language-provider"

export function FinalCta() {
  const { t } = useLanguage()

  return (
    <section id="reservar" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
        <Image
          src="/images/vista-portrait.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl px-6 py-16 sm:px-12 lg:px-16">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-gold">{t.cta.eyebrow}</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{t.cta.body}</p>
          <p className="mt-4 text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
            {t.cta.meta} {WHATSAPP_NUMBER}
          </p>

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
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
