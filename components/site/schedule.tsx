import { Reveal } from "./reveal"

const SESSIONS = [
  {
    day: "Mon · Wed · Fri",
    title: "Trading education",
    desc: "8 PM on Zoom. Concepts, chart reading, and Q&A with the community.",
  },
  {
    day: "Tue · Thu",
    title: "Live market analysis",
    desc: "6–8 PM on Zoom. Experts walk through live markets in real time.",
  },
  {
    day: "Daily",
    title: "Signal breakdowns",
    desc: "Daily updates and trade setups — explained with the full reasoning.",
  },
]

export function Schedule() {
  return (
    <section className="mx-auto max-w-5xl border-t border-[#e0ddd6] px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          Live session schedule
        </span>
        <h2 className="max-w-xl text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Structured sessions, five days a week.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SESSIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-[#e0ddd6] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[var(--color-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-[var(--color-gold)]">
                {s.day}
              </span>
              <h3 className="mb-2 text-[15px] font-semibold text-foreground transition-colors group-hover:text-[var(--color-gold)]">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">{s.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
