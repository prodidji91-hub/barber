"use client"

import { MessageCircle } from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/site"
import { useLanguage } from "@/components/language-provider"

export function InfoStrip() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {t.info.items.map((item) => (
          <div key={item.label} className="px-6 py-7 lg:px-8">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-gold">{item.label}</p>
            <p className="mt-2 font-serif text-lg text-foreground">{item.title}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{item.sub}</p>
          </div>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.common.whatsappAria}
          className="group flex flex-col justify-center border-t border-border px-6 py-7 transition-colors hover:bg-secondary sm:border-t lg:border-l lg:border-t-0 lg:px-8"
        >
          <p className="text-[10px] font-semibold tracking-[0.25em] text-gold">{t.info.contactLabel}</p>
          <p className="mt-2 font-serif text-lg text-foreground">{WHATSAPP_NUMBER}</p>
          <span className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {t.info.contactSub}
          </span>
        </a>
      </div>
    </section>
  )
}
