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
