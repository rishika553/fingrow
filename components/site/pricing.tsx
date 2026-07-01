import { Check } from "lucide-react"
import { Reveal } from "./reveal"

const INCLUDED = [
  "Live education sessions — Mon, Wed & Fri at 8 PM",
  "Live market analysis with experts — Tue & Thu",
  "Daily trade signal breakdowns and market updates",
  "Community WhatsApp group access",
  "Crash course access for faster onboarding",
  "Lifetime community support",
]

export function Pricing() {
  return (
    <section className="bg-[var(--color-ink)] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Community membership
          </span>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Everything included. One simple plan.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
            Access to all live sessions, signal breakdowns, expert market observation, and the full
            community — for six months.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="group flex items-start gap-3 text-sm text-white/75">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold)]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="leading-relaxed transition-colors group-hover:text-white">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
