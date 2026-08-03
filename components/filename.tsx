import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        icon: 'size-8',
        'icon-xs':
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        'icon-sm':
          'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
        'icon-lg': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

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

"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { type Dict, type Lang, translations } from "@/lib/i18n"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "vista-lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ES")

  // Restore the saved preference on mount.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "ES" || saved === "EN") {
      setLangState(saved)
    }
  }, [])

  // Keep <html lang> and storage in sync with the active language.
  useEffect(() => {
    document.documentElement.lang = lang === "ES" ? "es" : "en"
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggle = useCallback(() => setLangState((prev) => (prev === "ES" ? "EN" : "ES")), [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t: translations[lang] }),
    [lang, setLang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/vista-logo.jpg"
      alt="Vista Barber Lounge"
      className={`w-auto rounded-md object-contain ${className ?? ""}`}
    />
  )
}

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

"use client"

import { ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/logo"
import { Stars } from "@/components/stars"
import { useLanguage } from "@/components/language-provider"
import {
  BOOKING_URL,
  INSTAGRAM_URL,
  MAPS_URL,
  NAV_LINKS,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/site"

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-6 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Stars className="h-3.5 w-3.5" />
              {t.footer.rating}
            </div>
          </div>

          <FooterCol title={t.footer.navTitle}>
            {NAV_LINKS.map((link) => {
              const label = t.nav[link.key]
              return (
                <FooterLink key={link.href} href={link.href}>
                  {label.charAt(0) + label.slice(1).toLowerCase()}
                </FooterLink>
              )
            })}
            <FooterLink href={MAPS_URL} external>
              {t.footer.locationLink}
            </FooterLink>
          </FooterCol>

          <FooterCol title={t.footer.contactTitle}>
            <FooterLink href={BOOKING_URL} external>
              {t.footer.bookLink}
            </FooterLink>
            <FooterLink href={INSTAGRAM_URL} external>
              Instagram
            </FooterLink>
            <FooterLink href={WHATSAPP_URL} external>
              WhatsApp: {WHATSAPP_NUMBER}
            </FooterLink>
          </FooterCol>

          <FooterCol title={t.footer.addressTitle}>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.footer.address}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:opacity-80"
            >
              {t.footer.directions}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-[11px] tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights.replace("{year}", String(year))}</p>
          <p>{t.footer.place}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[10px] font-semibold tracking-[0.25em] text-foreground">{title}</h3>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  )
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </a>
  )
}

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

"use client"

import { useLanguage } from "@/components/language-provider"

export function SkipLink() {
  const { t } = useLanguage()
  return (
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-gold-foreground"
    >
      {t.common.skip}
    </a>
  )
}
