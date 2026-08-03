"use client"

import { useState } from "react"
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react"
import { BOOKING_URL, MAPS_URL, NAV_LINKS } from "@/lib/site"
import { Logo } from "@/components/logo"
import { useLanguage } from "@/components/language-provider"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="Vista Barber Lounge" className="shrink-0">
          <Logo className="h-11 w-auto" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {t.nav.ubicacion}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label={t.common.langLabel}
            className="hidden items-center rounded-full border border-border p-0.5 text-[11px] font-semibold tracking-widest sm:flex"
          >
            {(["ES", "EN"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === l ? "bg-gold text-gold-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-gold-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.common.book}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium tracking-widest text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-3 text-sm font-medium tracking-widest text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {t.nav.ubicacion}
            </a>

            <div
              role="group"
              aria-label={t.common.langLabel}
              className="mx-3 mt-2 flex items-center gap-1 self-start rounded-full border border-border p-0.5 text-[11px] font-semibold tracking-widest"
            >
              {(["ES", "EN"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`rounded-full px-3 py-1.5 transition-colors ${
                    lang === l ? "bg-gold text-gold-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold tracking-[0.12em] text-gold-foreground"
            >
              {t.common.book}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
