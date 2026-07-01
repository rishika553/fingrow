import { Lightbulb, UserCheck, Eye, LifeBuoy } from "lucide-react"
import { Reveal } from "./reveal"

const PILLARS = [
  {
    icon: Lightbulb,
    title: "Simple Learning",
    desc: "Complex market concepts broken down into clear, actionable lessons anyone can follow.",
  },
  {
    icon: UserCheck,
    title: "Expert Guidance",
    desc: "Learn directly from experienced traders who have navigated real markets.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    desc: "No hidden strategies or vague promises — every decision is explained openly.",
  },
  {
    icon: LifeBuoy,
    title: "Continuous Support",
    desc: "An always-on community and live sessions mean you're never left figuring it out alone.",
  },
]

export function WhyFingrow() {
  return (
    <section className="mx-auto max-w-5xl border-t border-[#ebebeb] px-6 py-20">
      <Reveal>
        <span className="mb-3 block text-[11px] uppercase tracking-[0.12em] text-[var(--color-gold)]">
          Why FINGROW?
        </span>
        <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Simple Learning. Expert Guidance. Complete Transparency. Continuous Support.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Everything you need to start and grow your trading journey in one place.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="group h-full rounded-xl border border-[#e8e8e8] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff7e0] text-[var(--color-gold)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 text-[13px] font-semibold text-foreground transition-colors group-hover:text-[var(--color-gold)]">
                {p.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">{p.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
