"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--color-ink)] px-5 pb-16 pt-12 text-center sm:px-8 sm:pb-20 sm:pt-20"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--color-gold)]/10 blur-3xl animate-float"
      />

      <div className="relative mx-auto max-w-3xl">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 flex justify-center"
        >
          <Image
            src="/logo.png"
            alt="Fingrow"
            width={550}
            height={300}
            className="h-40 w-auto object-contain mix-blend-lighten sm:h-48"
            priority
          />
        </motion.div>

        {/* Pain-point hook */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-3 text-2xl font-bold leading-snug tracking-tight text-white sm:text-4xl"
        >
          Har trade ke baad sirf loss hi dikh raha hai?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mb-10 text-base leading-relaxed text-white/65 sm:text-lg"
        >
          Ab bina roadmap ke trade karna band kijiye — join karo India ki sabse active{" "}
          <span className="text-[var(--color-gold)] font-semibold">live trading education community</span>.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-gold)] px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] hover:shadow-xl hover:shadow-[var(--color-gold)]/30 active:scale-95"
          >
            Trading Journey Shuru Karein
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Urgency nudge */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs font-medium text-white/60">
              Next batch starts <span className="text-white font-semibold">Monday</span> — limited seats
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
