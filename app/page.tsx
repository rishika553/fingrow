import { SiteNav } from "@/components/site/nav"
import { Hero } from "@/components/site/hero"
import { TrustBar } from "@/components/site/trust-bar"
import { WhyFingrow } from "@/components/site/why-fingrow"
import { Schedule } from "@/components/site/schedule"
import { Pricing } from "@/components/site/pricing"
import { Testimonials } from "@/components/site/testimonials"
import { JoinForm } from "@/components/site/join-form"
import { SiteFooter } from "@/components/site/footer"
import { PopupForm } from "@/components/site/popup-form"
import { StickyCTA } from "@/components/site/sticky-cta"

export default function Page() {
  return (
    <main className="bg-background pb-16">
      <SiteNav />
      <Hero />
      <TrustBar />
      <Schedule />
      <WhyFingrow />
      <Pricing />
      <Testimonials />
      <JoinForm />
      <SiteFooter />
      <PopupForm />
      <StickyCTA />
    </main>
  )
}
