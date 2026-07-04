import { Reveal } from "./reveal"

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
    </section>
  )
}
