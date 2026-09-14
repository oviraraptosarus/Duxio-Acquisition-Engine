import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle, ShieldCheck } from "lucide-react";
import { submitAudit } from "@/lib/audit.functions";
import {
  auditSchema,
  biggestChallenges,
  leadSources,
  type AuditFormValues,
} from "@/lib/audit-schema";

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
  const submit = useServerFn(submitAudit);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<AuditFormValues>({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    try {
      await submit({ data: values });
      setDone(true);
    } catch {
      setServerError("Something went wrong submitting your audit. Please try again.");
    }
  });

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
            {done ? (
              <SuccessCard />
            ) : (
              <form 
                onSubmit={onSubmit} 
                noValidate 
                className="relative z-10 overflow-hidden rounded-2xl border border-line bg-surface/40 p-6 shadow-2xl backdrop-blur-2xl transition-all sm:p-9"
              >
                <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-primary/5 opacity-50" />
                <div className="absolute -inset-px -z-10 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]" />
                
                {step === 1 ? (
                  <div className="space-y-5">
                    <Field
                      label="What is the biggest bottleneck in your coaching business right now?"
                      required
                      error={errors.biggestChallenge?.message}
                    >
                      <select
                        className={inputCls(!!errors.biggestChallenge)}
                        defaultValue=""
                        {...register("biggestChallenge")}
                      >
                        <option value="" disabled>
                          Select your biggest challenge
                        </option>
                        {biggestChallenges.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </Field>
                    
                    <button
                      type="button"
                      onClick={async () => {
                        const isValid = await trigger("biggestChallenge");
                        if (isValid) setStep(2);
                      }}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-all hover:opacity-90"
                    >
                      Continue
                    </button>
                    
                    <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                      <ShieldCheck className="h-3.5 w-3.5 text-green-500/80" />
                      <span>Step 1 of 2</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="First Name" required error={errors.firstName?.message}>
                        <input
                          type="text"
                          autoComplete="given-name"
                          className={inputCls(!!errors.firstName)}
                          {...register("firstName")}
                        />
                      </Field>
                      <Field label="Email" required error={errors.email?.message}>
                        <input
                          type="email"
                          autoComplete="email"
                          className={inputCls(!!errors.email)}
                          {...register("email")}
                        />
                      </Field>
                    </div>

                    {serverError && (
                      <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/5 p-3.5 text-sm text-destructive">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        "Map My Revenue Leaks"
                      )}
                    </button>
                    
                    <div className="mt-4 flex flex-col items-center justify-center gap-2 text-xs text-muted-foreground sm:flex-row">
                       <div className="flex items-center gap-1.5">
                         <ShieldCheck className="h-3.5 w-3.5 text-green-500/80" />
                         <span>100% secure. No spam.</span>
                       </div>
                       <button 
                         type="button" 
                         onClick={() => setStep(1)}
                         className="underline decoration-muted-foreground/30 underline-offset-2 hover:text-foreground"
                       >
                         Back to Step 1
                       </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessCard() {
  return (
    <div className="card-elevated p-8 text-center sm:p-12">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-foreground">Your audit request is in.</h3>
      <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
        We'll review your client acquisition journey and send your breakdown shortly. Check your
        inbox, and keep an eye out for the next steps.
      </p>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors",
    "placeholder:text-muted-foreground/70",
    "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
    hasError ? "border-destructive" : "border-input",
  ].join(" ");
}
