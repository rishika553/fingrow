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
    <section className="mx-auto max-w-5xl border-t border-white/10 px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          Why FINGROW?
        </span>
        <h2 className="max-w-2xl text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Simple Learning. Expert Guidance. Complete Transparency. Continuous Support.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Everything you need to start and grow your trading journey in one place.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="group h-full rounded-2xl border border-white/20 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[var(--color-gold)] transition-transform duration-300 group-hover:scale-110">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-white transition-colors group-hover:text-[var(--color-gold)]">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{p.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
