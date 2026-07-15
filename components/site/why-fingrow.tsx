"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "./reveal"

const IMAGES = [
  { src: "/fingrow-img1.jpeg", alt: "Live Trading Education 5 Days a Week" },
  { src: "/fingrow-img2.jpeg", alt: "Live Trading Education Community" },
  { src: "/fingrow-img3.jpeg", alt: "Trading Education Community — Learn Live With Experts" },
]

export function WhyFingrow() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((idx: number) => {
    setDirection(idx > active ? 1 : -1)
    setActive(idx)
  }, [active])

  const prev = () => go((active - 1 + IMAGES.length) % IMAGES.length)
  const next = useCallback(() => go((active + 1) % IMAGES.length), [active, go])

  // Auto-advance every 4 s
  useEffect(() => {
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="mx-auto max-w-5xl border-t border-white/10 px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          Why FINGROW?
        </span>
        <h2 className="max-w-2xl text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Everything you need to start and grow your trading journey in one place.
        </h2>
      </Reveal>

      {/* Carousel */}
      <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-white/10"
        style={{ aspectRatio: "1 / 1", maxHeight: 560 }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.32, 0, 0.67, 0] }}
            className="absolute inset-0"
          >
            <Image
              src={IMAGES[active].src}
              alt={IMAGES[active].alt}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-[var(--color-gold)] hover:text-black"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-[var(--color-gold)] hover:text-black"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-[var(--color-gold)]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
