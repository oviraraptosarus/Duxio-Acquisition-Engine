import { AuditForm } from "@/components/audit-form";

const steps = [
  {
    n: "1",
    title: "Tell us about your business",
    body: "Share your offer, audience, and current numbers through the form.",
  },
  {
    n: "2",
    title: "We analyze your client journey",
    body: "We identify potential leaks across traffic, capture, nurturing, and booking.",
  },
  {
    n: "3",
    title: "Receive your key opportunities",
    body: "Get a clear breakdown. If there's a fit, we can review the recommended system together.",
  },
];

export function AuditCtaSection() {
  return (
    <section id="audit" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          {/* Left Column: Why & How It Works */}
          <div className="lg:col-span-2">
            <span className="section-label">Free Coach Funnel Audit</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Stop Guessing. Let Us Find Your Revenue Leaks.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Submit your current funnel details below. We will map out your exact acquisition flow, pinpoint where high-ticket clients are dropping off, and show you exactly how to fix it—zero obligations.
            </p>

            <div className="mt-10 space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                How It Works
              </h3>
              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                      {s.n}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">{s.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
              We do not promise guaranteed revenue or guaranteed client results. The audit is designed
              to give you useful, honest insight before any sales conversation.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3">
            <AuditForm />
          </div>
        </div>
      </div>
    </section>
  );
}
