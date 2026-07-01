import { Reveal } from "./reveal"

const AUDIENCE = [
  {
    title: "Complete beginners",
    desc: "Never traded before? The education is structured from the ground up — no assumed knowledge.",
  },
  {
    title: "Self-taught learners",
    desc: "Hit a wall learning alone? The live community format fills gaps faster than solo study.",
  },
  {
    title: "Inconsistent traders",
    desc: "Trading without a real system? Build one — with structure and real guidance.",
  },
  {
    title: "Curious professionals",
    desc: "Want to understand how global markets work? Start here, in a supportive environment.",
  },
]

export function Audience() {
  return (
    <section className="mx-auto max-w-5xl border-t border-[#ebebeb] px-6 py-20">
      <Reveal>
        <span className="mb-3 block text-[11px] uppercase tracking-[0.12em] text-[var(--color-gold)]">
          Who this is for
        </span>
        <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Built for anyone who wants to genuinely understand markets.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {AUDIENCE.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <article className="group h-full rounded-xl border border-[#e8e8e8] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <h3 className="mb-1.5 text-[13px] font-semibold text-foreground transition-colors group-hover:text-[var(--color-gold)]">
                {a.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">{a.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
