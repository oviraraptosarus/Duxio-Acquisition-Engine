import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a massive audience for this to work?",
    a: "No. This system is designed to monetize the attention you already have, turning passive lurkers into booked calls without spending a dime on ads.",
  },
  {
    q: "Do I need a complicated funnel?",
    a: "No. Complexity kills conversions. We build lean, high-performing architectures tailored specifically to patch the exact revenue leaks in your current client journey.",
  },
  {
    q: "Is this just a website or landing page?",
    a: "No. A standalone website won't save your business. We engineer the complete end-to-end acquisition ecosystem—from lead capture to calendar injection.",
  },
  {
    q: "What happens after the free audit?",
    a: "We'll map out your exact acquisition flow and pinpoint where high-ticket clients are dropping off. If there's a fit, we'll show you the exact architecture needed to fix it.",
  },
  {
    q: "Is the audit really free?",
    a: "Yes. We lead with value. The audit provides you with an actionable breakdown of your funnel leaks before you ever commit to a sales conversation.",
  },
  {
    q: "Do you guarantee clients or revenue?",
    a: "No. We guarantee a world-class acquisition ecosystem designed for high-ticket conversion. Your offer and sales ability ultimately close the deal.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="text-center">
          <span className="section-label">FAQ</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-background">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
