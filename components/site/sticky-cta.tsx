"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight } from "lucide-react"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  // Show after user scrolls past the hero (~300px)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[rgba(10,10,10,0.95)] px-4 py-3 backdrop-blur-md sm:px-6"
        >
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
            <p className="hidden text-sm font-medium text-white/70 sm:block">
              Ab bina roadmap ke trade karna band kijiye.{" "}
              <span className="text-[var(--color-gold)]">Free group mein join karein.</span>
            </p>
            <p className="text-sm font-medium text-white/70 sm:hidden">
              <span className="text-[var(--color-gold)]">Free group join karein →</span>
            </p>
            <a
              href="#join"
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-[var(--color-gold-light)] hover:shadow-lg hover:shadow-[var(--color-gold)]/25 active:scale-95"
            >
              Trading Journey Shuru Karein
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
