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
