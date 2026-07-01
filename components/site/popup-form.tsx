"use client"

import { useEffect, useState, useRef } from "react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { motion, AnimatePresence } from "motion/react"
import { X, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submit, type State } from "@/app/actions/join"

const initialState: State = { ok: false }

export function PopupForm() {
  const [open, setOpen] = useState(false)
  const [state, formAction] = useActionState(submit, initialState)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) setOpen(false)
  }

  return (
    <>
      {/* Sticky "Join free" button — bottom right */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open join form"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-[13px] font-semibold text-black shadow-lg shadow-[var(--color-gold)]/30 transition-all duration-200 hover:bg-[var(--color-gold-light)] hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-black/50" />
        </span>
        Join free
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            key="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdrop}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <motion.div
              key="popup-card"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-t-2xl bg-[#0a0a0a] px-5 pb-8 pt-5 shadow-2xl sm:max-w-md sm:rounded-2xl sm:px-8 sm:pb-10 sm:pt-8"
            >
              {/* drag handle — mobile only */}
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20 sm:hidden" />

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              {state.ok ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <CheckCircle2 className="mb-3 h-12 w-12 text-[var(--color-gold)]" />
                  <h2 className="text-lg font-bold text-white">You&apos;re in!</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    Details saved! Click below to join the WhatsApp community now.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/F3JA4gChfe3HVFGbUvQPWg?s=cl&p=a&ilr=1&amv=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-[var(--color-gold-light)] hover:shadow-lg hover:shadow-[var(--color-gold)]/25 active:scale-95"
                  >
                    Join WhatsApp Group
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-4 h-1 w-8 rounded-full bg-[var(--color-gold)]" />
                  <h2
                    id="popup-title"
                    className="text-lg font-bold tracking-tight text-white"
                  >
                    Join the Fingrow community
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    Enter your details and we&apos;ll add you to the WhatsApp learning group — free.
                  </p>

                  <form action={formAction} className="mt-5 flex flex-col gap-3">
                    <Field label="Your name">
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Jane Trader"
                        className="w-full rounded-lg border border-white/10 bg-white px-3 py-2.5 text-sm text-[#0a0a0a] outline-none transition-all focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
                      />
                    </Field>
                    <Field label="WhatsApp number">
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="+91 90000 00000"
                        className="w-full rounded-lg border border-white/10 bg-white px-3 py-2.5 text-sm text-[#0a0a0a] outline-none transition-all focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
                      />
                    </Field>
                    <Field label="Where are you in your journey?">
                      <select
                        name="stage"
                        defaultValue="beginner"
                        className="w-full rounded-lg border border-white/10 bg-white px-3 py-2.5 text-sm text-[#0a0a0a] outline-none transition-all focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
                      >
                        <option value="beginner">Complete beginner</option>
                        <option value="basic">Some knowledge, not consistent</option>
                        <option value="intermediate">Intermediate — want structure</option>
                        <option value="trading">Already trading, want community</option>
                      </select>
                    </Field>

                    {state.error && (
                      <div
                        role="alert"
                        className="flex items-start gap-2 rounded-lg border border-red-400/30 bg-red-900/30 px-3 py-2 text-sm text-red-300"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{state.error}</span>
                      </div>
                    )}

                    <PopupSubmitButton />

                    <p className="text-center text-xs text-white/35">
                      No spam. No pressure. Just the group link.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function PopupSubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-gold)] py-3 text-sm font-semibold text-black transition-all hover:bg-[var(--color-gold-light)] hover:shadow-lg hover:shadow-[var(--color-gold)]/25 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <><Loader2 className="h-4 w-4 animate-spin" /> Adding you...</>
      ) : (
        <>Join the free learning group <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>
      )}
    </button>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-white/70">{label}</span>
      {children}
    </label>
  )
}
