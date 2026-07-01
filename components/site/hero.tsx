"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--color-ink)] px-5 pb-14 pt-16 text-center sm:px-6 sm:pb-16 sm:pt-20">
      {/* subtle animated accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-gold)]/10 blur-3xl animate-float"
      />

      <div className="relative mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mb-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.18] tracking-tight text-white sm:text-5xl"
        >
          Learn how financial markets work — with traders who actually{" "}
          <em className="not-italic text-[var(--color-gold)]">explain it</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mx-auto mb-9 max-w-md text-pretty text-base leading-relaxed text-white/55"
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
            className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-7 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] hover:shadow-xl hover:shadow-[var(--color-gold)]/25"
          >
            Join the community — free
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
