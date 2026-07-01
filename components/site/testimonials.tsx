import { Star } from "lucide-react"
import { Reveal } from "./reveal"

const REVIEWS = [
  {
    quote:
      "I spent months on YouTube and nothing clicked. The live sessions explained concepts in a way I could actually follow and apply.",
    author: "Community member, Mumbai",
  },
  {
    quote:
      "Watching an expert go through live charts and explain exactly what they're looking at — that's what finally taught me to read markets.",
    author: "Community member, Delhi",
  },
  {
    quote:
      "Learning alone is hard. Having thousands of people at different stages in the same group made the process far less overwhelming.",
    author: "Community member, Hyderabad",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <span className="mb-3 block text-[11px] uppercase tracking-[0.12em] text-[var(--color-gold)]">
          What members say
        </span>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          From the community.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.author} delay={i * 0.08}>
            <figure className="group h-full rounded-xl border border-[#e8e8e8] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <div className="mb-3 flex gap-0.5 text-[var(--color-gold)]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-3.5 w-3.5 fill-current transition-transform duration-200 group-hover:scale-110"
                    style={{ transitionDelay: `${s * 30}ms` }}
                  />
                ))}
              </div>
              <blockquote className="text-[13px] leading-relaxed text-muted-foreground">
                {r.quote}
              </blockquote>
              <figcaption className="mt-3 text-xs text-foreground/50">— {r.author}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
