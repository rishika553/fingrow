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
    <section id="join" className="bg-[#0a0a0a] px-5 py-16 sm:px-8 sm:py-20">

      {/* Trust strip above form */}
      <div className="mx-auto mb-8 max-w-md">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-1.5 text-xs text-white/40">
            <span className="text-green-400">✓</span> Registered Indian company (EVPL)
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/40">
            <span className="text-green-400">✓</span> 10,000+ members since 2022
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/40">
            <span className="text-green-400">✓</span> No tips. No signals. Pure education.
          </span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-md rounded-2xl border border-white/20 bg-[#0a0a0a] p-8 shadow-xl sm:p-10"
      >
        {state.ok ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="mb-4 h-14 w-14 text-[var(--color-gold)]" />
            <h2 className="text-xl font-bold text-white">You&apos;re in!</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Details saved! Click below to join the WhatsApp community now.
            </p>
            <a
              href="https://chat.whatsapp.com/F3JA4gChfe3HVFGbUvQPWg?s=cl&p=a&ilr=1&amv=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-[var(--color-gold-light)] hover:shadow-lg active:scale-95"
            >
              Join WhatsApp Group
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <>
            <h2 className="text-center text-xl font-bold tracking-tight text-white sm:text-2xl">
              Join the Fingrow community
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-white/60">
              Enter your details and we&apos;ll add you to the WhatsApp learning group. Free, no
              obligation.
            </p>

            <form action={formAction} className="mt-7 flex flex-col gap-4">
              <Field label="Name">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-white/15 bg-[#1a1a1a] px-3.5 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
                />
              </Field>

              <Field label="City">
                <input
                  required
                  name="city"
                  type="text"
                  placeholder="Your city"
                  className="w-full rounded-lg border border-white/15 bg-[#1a1a1a] px-3.5 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
                />
              </Field>

              <Field label="Contact Number">
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+91 90000 00000"
                  className="w-full rounded-lg border border-white/15 bg-[#1a1a1a] px-3.5 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
                />
              </Field>

              <Field label="Experience Level">
                <select
                  name="level"
                  defaultValue="fresher"
                  className="w-full rounded-lg border border-white/15 bg-[#1a1a1a] px-3.5 py-3 text-sm text-white outline-none transition-all focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
                >
                  <option value="fresher">Fresher</option>
                  <option value="fresher-learning">Fresher + Learning</option>
                  <option value="experienced">Experienced</option>
                </select>
              </Field>

              {state.error ? (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-lg border border-red-400/30 bg-red-900/30 px-3.5 py-2.5 text-sm text-red-300"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{state.error}</span>
                </div>
              ) : null}

              <SubmitButton />

              <p className="text-center text-xs leading-relaxed text-white/35">
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
      className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-gold)] py-3.5 text-[15px] font-semibold text-black transition-all duration-200 hover:bg-[var(--color-gold-light)] hover:shadow-lg hover:shadow-[var(--color-gold)]/25 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <><Loader2 className="h-4 w-4 animate-spin" /> Adding you...</>
      ) : (
        <>Trading Journey Shuru Karein <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>
      )}
    </button>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-white/70">{label}</span>
      {children}
    </label>
  )
}
