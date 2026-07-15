import { Star } from "lucide-react"
import { Reveal } from "./reveal"

const REVIEWS = [
  {
    quote:
      "Pehle sirf YouTube dekh ke trade karta tha — har baar loss. Fingrow ke live sessions mein samjha ki actually kya hota hai market mein. Ab chart padh leta hoon khud.",
    author: "Rahul S.",
    location: "Mumbai",
    initials: "RS",
  },
  {
    quote:
      "Mujhe laga trading sirf rich logon ke liye hai. Yahan se shuru kiya, zero knowledge se. Expert log step by step explain karte hain — koi judgement nahi, sirf learning.",
    author: "Priya M.",
    location: "Delhi",
    initials: "PM",
  },
  {
    quote:
      "Akele padhna bahut tough tha — ek concept samajh aata, doosra bhool jaata. Community mein hazaaron log hain jo same journey mein hain. Bohot comfortable feel hota hai.",
    author: "Arjun K.",
    location: "Hyderabad",
    initials: "AK",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          Real members. Real results.
        </span>
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Unhi logon ki baat — jo aap jaise shuru hue the.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.author} delay={i * 0.08}>
            <figure className="group h-full rounded-2xl border border-white/20 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg hover:shadow-[var(--color-gold)]/10">

              {/* Stars */}
              <div className="mb-4 flex gap-1 text-[var(--color-gold)]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed text-white/70">
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              {/* Author row */}
              <figcaption className="mt-5 flex items-center gap-3">
                {/* Avatar with initials */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/20 text-xs font-bold text-[var(--color-gold)]">
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.author}</p>
                  <p className="text-xs text-white/40">{r.location}</p>
                </div>
              </figcaption>

            </figure>
          </Reveal>
        ))}
      </div>

      {/* Trust note */}
      <Reveal delay={0.2}>
        <p className="mt-8 text-center text-xs text-white/30">
          Names shortened for privacy. Verified community members.
        </p>
      </Reveal>
    </section>
  )
}
