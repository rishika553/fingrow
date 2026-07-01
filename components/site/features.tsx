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
    <section id="learn" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          What you&apos;ll learn
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          A complete trading education, delivered live.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <article className="group h-full rounded-2xl border border-white/20 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[var(--color-gold)] transition-transform duration-300 group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-white transition-colors group-hover:text-[var(--color-gold)]">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
