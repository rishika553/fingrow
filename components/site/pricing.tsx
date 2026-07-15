import { Check, Lock, Unlock } from "lucide-react"
import { Reveal } from "./reveal"

const FREE_ITEMS = [
  "WhatsApp community group access",
  "Beginner crash course",
  "Community support & peer learning",
]

const PAID_ITEMS = [
  "Live education sessions — Mon, Wed & Fri at 8 PM",
  "Live market analysis with experts — Tue & Thu",
  "Daily trade signal breakdowns and market updates",
  "Crash course access for faster onboarding",
  "Lifetime community support",
]

export function Pricing() {
  return (
    <section className="bg-[var(--color-ink)] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            What you get
          </span>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/60">
            The WhatsApp group and crash course are completely free — no catch.
            Full live sessions and expert analysis require a membership.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Free tier */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-[var(--color-gold)]/30 bg-[#111] p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
                  <Unlock className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold text-[var(--color-gold)] uppercase tracking-wide">Free — always</span>
              </div>
              <ul className="flex flex-col gap-3">
                {FREE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Paid tier */}
          <Reveal delay={0.14}>
            <div className="h-full rounded-2xl border border-white/15 bg-[#111] p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/50">
                  <Lock className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold text-white/70 uppercase tracking-wide">Membership required</span>
              </div>
              <ul className="flex flex-col gap-3">
                {PAID_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/55">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
