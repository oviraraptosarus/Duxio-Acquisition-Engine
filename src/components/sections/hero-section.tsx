import { Play, ArrowRight, ShieldCheck } from "lucide-react";

const vslTeasers = [
  "The 5 hidden revenue leaks in your coaching funnel",
  "How to ethically capture \"lurking\" prospects",
  "The exact follow-up sequence that doubles show-up rates",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* soft ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute left-[20%] top-[10%] -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-[20%] top-[20%] -z-10 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-5 pb-12 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-chip">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Free Training for Coaches
          </span>

          <h1 className="mt-7 text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Add 3-5 High-Ticket Coaching Clients This Month (Without Buying Generic Leads).
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            90% of your audience is consuming your content but never booking a call. Discover the 7-part architecture that captures lost traffic and turns passive followers into pre-sold calendar appointments.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#vsl"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(var(--accent),0.5)] sm:w-auto"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch the Free Training
            </a>
            <a
              href="#audit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 sm:w-auto"
            >
              Reveal My Hidden Revenue Leaks
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              No hard pitch. We just find the leaks.
            </p>
            <span className="hidden h-3 w-px bg-line sm:block" aria-hidden />
            <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              The exact framework used to scale high-ticket programs
            </p>
          </div>
        </div>

        <VslPlayer />
      </div>
    </section>
  );
}

function VslPlayer() {
  return (
    <div id="vsl" className="mt-14 scroll-mt-20 sm:mt-16">
      <div className="mx-auto mb-5 max-w-2xl text-center">
        <span className="section-label">Free Training</span>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Where Are You Losing Potential Clients?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Watch this free 8-minute training to discover the 5 biggest leaks in a coach's client
          acquisition journey.
        </p>
      </div>

      <div className="card-elevated group relative mx-auto max-w-4xl overflow-hidden p-2">
        <div
          className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl"
          style={{
            background:
              "linear-gradient(150deg, oklch(0.18 0.004 264) 0%, oklch(0.14 0.004 264) 60%, oklch(0.24 0.03 256) 130%)",
          }}
        >
          {/* subtle grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <button
            aria-label="Play free training"
            className="group/play relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform hover:scale-105"
          >
            <span
              className="absolute inset-0 -z-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--accent) 50%, transparent), transparent 70%)",
              }}
            />
            <Play className="h-8 w-8 translate-x-0.5 fill-foreground text-foreground" />
          </button>

          <div className="absolute bottom-3 left-3 rounded-md bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
            Free Training · 7–10 min
          </div>
        </div>
      </div>

      {/* VSL teaser strip — entices the watch, sits right under the video */}
      <div className="mx-auto mt-5 grid max-w-2xl gap-2.5 sm:grid-cols-3">
        {vslTeasers.map((t) => (
          <div
            key={t}
            className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3.5 py-2.5 text-xs font-medium text-foreground"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {t}
          </div>
        ))}
      </div>

      {/* post-video CTA — moves the watch toward the audit */}
      <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-line bg-surface px-5 py-5 text-center sm:px-7">
        <p className="text-sm font-medium text-foreground sm:text-base">
          After watching, get your free Coach Funnel Audit.
        </p>
        <a
          href="#audit"
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(var(--accent),0.5)]"
        >
          Reveal My Hidden Revenue Leaks
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
