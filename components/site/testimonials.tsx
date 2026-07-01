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
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          What members say
        </span>
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          From the community.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.author} delay={i * 0.08}>
            <figure className="group h-full rounded-2xl border border-[#e0ddd6] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">
              <div className="mb-4 flex gap-1 text-[var(--color-gold)]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-foreground/50">
                — {r.author}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
