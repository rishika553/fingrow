import { BookOpen, BarChart3, Eye, Shield, TrendingUp, Users } from "lucide-react"
import { Reveal } from "./reveal"

const FEATURES = [
  {
    icon: BookOpen,
    title: "Market fundamentals",
    desc: "How forex and crypto work, key terms, and reading charts from scratch.",
  },
  {
    icon: BarChart3,
    title: "Trade signal analysis",
    desc: "Read and evaluate setups — entries, stop loss, take profit, and the logic behind them.",
  },
  {
    icon: Eye,
    title: "Live market observation",
    desc: "Watch traders analyse charts in real time and follow the full thought process.",
  },
  {
    icon: Shield,
    title: "Risk management",
    desc: "Size positions, protect capital, and trade with discipline — the most critical skill.",
  },
  {
    icon: TrendingUp,
    title: "Technical analysis",
    desc: "Support and resistance, trends, and building a consistent analytical framework.",
  },
  {
    icon: Users,
    title: "Community learning",
    desc: "Learn alongside thousands at every stage. Share, ask, and grow together.",
  },
]

export function Features() {
  return (
    <section id="learn" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <span className="mb-3 block text-[11px] uppercase tracking-[0.12em] text-[var(--color-gold)]">
          What you&apos;ll learn
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          A complete trading education, delivered live.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <article className="group h-full rounded-xl border border-[#e8e8e8] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff7e0] text-[var(--color-gold)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground transition-colors group-hover:text-[var(--color-gold)]">
                {f.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">{f.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
