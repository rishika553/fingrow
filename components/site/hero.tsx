"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--color-ink)] px-5 pb-16 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--color-gold)]/10 blur-3xl animate-float"
      />

      <div className="relative mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mb-5 max-w-2xl text-balance text-[1.75rem] font-bold leading-[1.2] tracking-tight text-white sm:text-5xl"
        >
          Learn how financial markets work — with traders who actually{" "}
          <em className="not-italic text-[var(--color-gold)]">explain it</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mx-auto mb-10 max-w-md text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
        >
          A structured community for forex and crypto. Live sessions, real market analysis, and
          expert guidance — beginner to confident.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-gold)] px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] hover:shadow-xl hover:shadow-[var(--color-gold)]/30 active:scale-95"
          >
            Join the community — free
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
