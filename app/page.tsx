import { OptInForm } from "@/components/opt-in-form"
import { TrendingUp, ShieldCheck, Zap, PlayCircle, Star, CheckCircle2 } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Beginner-friendly",
    description: "No experience needed. Follow the step-by-step blueprint from day one.",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    description: "The exact system beginners use to grow consistent daily income.",
  },
  {
    icon: ShieldCheck,
    title: "Proven framework",
    description: "A repeatable process, not guesswork or one-off luck.",
  },
]

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_100%_at_50%_0%,oklch(0.76_0.16_158/0.18),transparent_70%)]"
      />

      {/* Nav */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <TrendingUp className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">LeadVaultsHub</span>
        </div>
        <div className="hidden items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Free access — limited time
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 pb-20 pt-6 sm:pt-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          <PlayCircle className="h-4 w-4 text-primary" aria-hidden="true" />
          Free affiliate training
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-balance text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          New to online money-making? Discover the exact{" "}
          <span className="text-primary">affiliate blueprint</span> beginners use to earn daily.
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Watch the short training below, then grab instant free access to the full course — no experience or upfront
          budget required.
        </p>

        {/* Video */}
        <div className="mt-10 w-full">
          <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-black/40">
            <div className="overflow-hidden rounded-xl bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full"
                src="https://d1yei2z3i6k35z.cloudfront.net/14614305/68de444c1d111_01.mp4"
              >
                {"Your browser does not support the video tag."}
              </video>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <benefit.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Opt-in card */}
        <div
          id="get-access"
          className="mt-12 w-full scroll-mt-8 rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-black/40 sm:p-8"
        >
          <h2 className="text-center text-xl font-bold tracking-tight text-foreground text-balance sm:text-2xl">
            Get instant access to the course
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground text-pretty">
            Enter your details below and we&apos;ll send the full blueprint straight to your inbox.
          </p>
          <OptInForm />
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
            100% free. Unsubscribe anytime. Your info stays private.
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="max-w-md text-center text-sm text-muted-foreground text-pretty">
            Trusted by thousands of beginners taking their first step toward online income.
          </p>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} LeadVaultsHub. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
