import { LanguageProvider } from "@/components/language-provider"
import { SkipLink } from "@/components/skip-link"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { InfoStrip } from "@/components/info-strip"
import { Benefits } from "@/components/benefits"
import { Lounge } from "@/components/lounge"
import { Numbers } from "@/components/numbers"
import { Showcase } from "@/components/showcase"
import { Reviews } from "@/components/reviews"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SkipLink />
        <SiteHeader />
        <main id="contenido">
          <Hero />
          <InfoStrip />
          <Benefits />
          <Lounge />
          <Numbers />
          <Showcase />
          <Reviews />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
