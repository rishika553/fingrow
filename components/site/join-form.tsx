"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { motion } from "motion/react"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submit, type State } from "@/app/actions/join"

const initialState: State = { ok: false }

export function JoinForm() {
  const [state, formAction] = useActionState(submit, initialState)

  return (
    <section id="join" className="border-t border-[#e0ddd6] bg-[var(--color-surface)] px-5 py-16 sm:px-8 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-md rounded-2xl border border-[#e0ddd6] bg-white p-7 shadow-md sm:p-10"
      >
        {state.ok ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="mb-4 h-14 w-14 text-[var(--color-gold)]" />
            <h2 className="text-xl font-bold text-foreground">You&apos;re in!</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/60">
              We&apos;ve saved your details and we&apos;ll send the WhatsApp group link to your
              number shortly. Welcome to Fingrow.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-center text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Join the Fingrow community
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-foreground/55">
              Enter your details and we&apos;ll add you to the WhatsApp learning group. Free, no
              obligation.
            </p>

            <form action={formAction} className="mt-7 flex flex-col gap-5">
              <Field label="Your name">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Jane Trader"
                  className="w-full rounded-xl border border-[#d8d4cc] bg-[#f7f5f1] px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-foreground/35 focus:border-[var(--color-gold)] focus:bg-white focus:ring-2 focus:ring-[var(--color-gold)]/20"
                />
              </Field>
              <Field label="WhatsApp number">
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+91 90000 00000"
                  className="w-full rounded-xl border border-[#d8d4cc] bg-[#f7f5f1] px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-foreground/35 focus:border-[var(--color-gold)] focus:bg-white focus:ring-2 focus:ring-[var(--color-gold)]/20"
                />
              </Field>
              <Field label="Where are you in your journey?">
                <select
                  name="stage"
                  defaultValue="beginner"
                  className="w-full rounded-xl border border-[#d8d4cc] bg-[#f7f5f1] px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-[var(--color-gold)] focus:bg-white focus:ring-2 focus:ring-[var(--color-gold)]/20"
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
                  className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{state.error}</span>
                </div>
              ) : null}

              <SubmitButton />

              <p className="text-center text-xs leading-relaxed text-foreground/40">
                No spam. No sales pressure. Just the group link and a welcome.
              </p>
            </form>
          </>
        )}
      </motion.div>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-gold)] py-4 text-base font-semibold text-black transition-all duration-200 hover:bg-[var(--color-gold-light)] hover:shadow-lg hover:shadow-[var(--color-gold)]/25 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
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
      <span className="mb-1.5 block text-sm font-semibold text-foreground/70">{label}</span>
      {children}
    </label>
  )
}
