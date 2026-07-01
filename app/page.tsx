import { SiteNav } from "@/components/site/nav"
import { Hero } from "@/components/site/hero"
import { TrustBar } from "@/components/site/trust-bar"
import { Features } from "@/components/site/features"
import { WhyFingrow } from "@/components/site/why-fingrow"
import { Schedule } from "@/components/site/schedule"
import { Pricing } from "@/components/site/pricing"
import { Testimonials } from "@/components/site/testimonials"
import { JoinForm } from "@/components/site/join-form"
import { SiteFooter } from "@/components/site/footer"
import { PopupForm } from "@/components/site/popup-form"

export default function Page() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Hero />
      <TrustBar />
      <Features />
      <WhyFingrow />
      <Schedule />
      <Pricing />
      <Testimonials />
      <JoinForm />
      <SiteFooter />
      {/* Sticky join button + auto popup — renders above all content */}
      <PopupForm />
    </main>
  )
}
