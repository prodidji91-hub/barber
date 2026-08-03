"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function Showcase() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <div className="relative aspect-[16/10] sm:aspect-[21/9]">
            <Image
              src="/images/vista-showcase.webp"
              alt={t.showcase.imageAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-gold">{t.showcase.eyebrow}</p>
            <h2 className="mt-3 max-w-xl text-balance font-serif text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl">
              {t.showcase.title}
            </h2>
            <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              {t.showcase.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
