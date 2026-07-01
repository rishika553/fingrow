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

  // Show popup after 1.5 s on first visit; respect sessionStorage so it
  // doesn't re-appear if user dismisses it in the same session.
  useEffect(() => {
    const seen = sessionStorage.getItem("fingrow_popup_seen")
    if (seen) return
    const t = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem("fingrow_popup_seen", "1")
    }, 1500)
    return () => clearTimeout(t)
  }, [])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) setOpen(false)
  }

  return (
    <>
      {/* ── Sticky trigger button ── */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open join form"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-[13px] font-semibold text-black shadow-lg shadow-[var(--color-gold)]/30 transition-all duration-200 hover:-translate-y-1 hover:bg-[var(--color-gold-light)] hover:shadow-xl hover:shadow-[var(--color-gold)]/40 active:scale-95"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-black/50" />
        </span>
        Join free
      </button>

      {/* ── Modal overlay ── */}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <motion.div
              key="popup-card"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md rounded-2xl border border-[#e8e8e8] bg-background p-8 shadow-2xl sm:p-10"
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-foreground/40 transition-colors hover:bg-[#f2f2f2] hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              {state.ok ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <CheckCircle2 className="mb-4 h-12 w-12 text-[var(--color-gold)]" />
                  <h2 className="text-xl font-semibold text-foreground">You&apos;re in!</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We&apos;ve saved your details and we&apos;ll send the WhatsApp group link to
                    your number shortly. Welcome to Fingrow.
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-6 rounded-lg bg-[var(--color-gold)] px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[var(--color-gold-light)]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {/* Gold accent bar */}
                  <div className="mb-6 h-1 w-12 rounded-full bg-[var(--color-gold)]" />

                  <h2
                    id="popup-title"
                    className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                  >
                    Join the Fingrow community
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Enter your details and we&apos;ll add you to the WhatsApp learning group. Free,
                    no obligation.
                  </p>

                  <form action={formAction} className="mt-6 flex flex-col gap-4">
                    <Field label="Your name">
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Jane Trader"
                        className="w-full rounded-lg border border-[#ddd] bg-[#fafafa] px-3.5 py-2.5 text-sm text-foreground outline-none transition-all duration-200 focus:border-[var(--color-gold)] focus:bg-background focus:ring-2 focus:ring-[var(--color-gold)]/20"
                      />
                    </Field>
                    <Field label="WhatsApp number">
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="+91 90000 00000"
                        className="w-full rounded-lg border border-[#ddd] bg-[#fafafa] px-3.5 py-2.5 text-sm text-foreground outline-none transition-all duration-200 focus:border-[var(--color-gold)] focus:bg-background focus:ring-2 focus:ring-[var(--color-gold)]/20"
                      />
                    </Field>
                    <Field label="Where are you in your journey?">
                      <select
                        name="stage"
                        defaultValue="beginner"
                        className="w-full rounded-lg border border-[#ddd] bg-[#fafafa] px-3.5 py-2.5 text-sm text-foreground outline-none transition-all duration-200 focus:border-[var(--color-gold)] focus:bg-background focus:ring-2 focus:ring-[var(--color-gold)]/20"
                      >
                        <option value="beginner">Just getting started — complete beginner</option>
                        <option value="basic">Some basic knowledge, not consistent yet</option>
                        <option value="intermediate">Intermediate — want structured learning</option>
                        <option value="trading">Already trading, want community & analysis</option>
                      </select>
                    </Field>

                    {state.error ? (
                      <div
                        role="alert"
                        className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
                      >
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {state.error}
                      </div>
                    ) : null}

                    <SubmitButton />

                    <p className="text-center text-xs leading-relaxed text-muted-foreground/70">
                      No spam. No sales pressure. Just the group link and a welcome.
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

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-gold)] py-3.5 text-[15px] font-semibold text-black transition-all duration-200 hover:bg-[var(--color-gold-light)] hover:shadow-lg hover:shadow-[var(--color-gold)]/25 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Adding you...
        </>
      ) : (
        <>
          Join the free learning group
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </>
      )}
    </button>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground/70">{label}</span>
      {children}
    </label>
  )
}
