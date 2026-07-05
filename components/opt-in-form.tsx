"use client"

import { useState, type FormEvent } from "react"
import { User, Mail, ArrowRight, PartyPopper } from "lucide-react"

export function OptInForm() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!firstName.trim() || !email.trim()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 px-6 py-8 text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
          <PartyPopper className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="text-lg font-semibold text-foreground text-pretty">
          {"You're in, "}
          {firstName.trim()}
          {"!"}
        </p>
        <p className="text-sm text-muted-foreground text-pretty">
          Check your inbox — we&apos;ve sent access to the full course.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
      <label htmlFor="first-name" className="sr-only">
        First name
      </label>
      <div className="relative">
        <User
          className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          id="first-name"
          name="first-name"
          type="text"
          autoComplete="given-name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full rounded-xl border border-border bg-background/60 py-3.5 pl-11 pr-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
        />
      </div>

      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <div className="relative">
        <Mail
          className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-border bg-background/60 py-3.5 pl-11 pr-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
        />
      </div>

      <button
        type="submit"
        className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring/50"
      >
        Gain Free Access
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
    </form>
  )
}
