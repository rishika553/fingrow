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
            src="/fingrow.jpeg"
            alt="Fingrow"
            width={220}
            height={90}
            className="h-24 w-auto object-contain sm:h-32"
            priority
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 text-base font-medium tracking-wide text-white/70 sm:text-lg"
        >
          Your Trading Partner For Success
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
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
