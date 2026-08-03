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
