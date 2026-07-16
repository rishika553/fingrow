import { Reveal } from "./reveal"
import { Lock, Unlock } from "lucide-react"

const SESSIONS = [
  {
    day: "Mon · Wed · Fri",
    title: "Live trading education",
    desc: "8 PM on Zoom. Structured lessons — market concepts, chart reading, and live Q&A.",
    badge: "Membership",
    paid: true,
  },
  {
    day: "Tue · Thu",
    title: "Live market analysis",
    desc: "6–8 PM on Zoom. Experts walk through live markets step by step, in real time.",
    badge: "Membership",
    paid: true,
  },
  {
    day: "Daily",
    title: "Signal breakdowns",
    desc: "Daily trade setups explained with full reasoning — not just signals, but the logic behind them.",
    badge: "Membership",
    paid: true,
  },
]

export function Schedule() {
  return (
    <section className="mx-auto max-w-5xl border-t border-white/10 px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          Live session schedule
        </span>
        <h2 className="max-w-xl text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Structured live sessions, five days a week.
        </h2>

        {/* Free vs Paid clarity banner */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#111] p-5 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
              <Unlock className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Free — WhatsApp group + crash course</p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/50">
                Join the community group instantly. Get access to the beginner crash course. No payment needed.
              </p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-white/10 sm:block" />
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/60">
              <Lock className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Membership — live sessions + full access</p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/50">
                All live Zoom classes, daily signal breakdowns, and expert market analysis require a membership.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SESSIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/20 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[var(--color-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)]">
                  {s.day}
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/40">
                  <Lock className="h-2.5 w-2.5" /> {s.badge}
                </span>
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-white transition-colors group-hover:text-[var(--color-gold)]">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{s.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

    </section>
  )
}
