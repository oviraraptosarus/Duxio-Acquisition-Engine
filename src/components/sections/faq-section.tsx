import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need more followers before this works?",
    a: "Not necessarily. The system is designed to help coaches make better use of existing attention and leads.",
  },
  {
    q: "Do I need a complicated funnel?",
    a: "No. The system should match the actual gap in your client journey.",
  },
  {
    q: "Is this just a website or funnel?",
    a: "No. Duxio looks at the entire client acquisition journey.",
  },
  {
    q: "What happens after the audit?",
    a: "You receive an analysis of potential gaps. If there is a fit, you can review the recommended system with Duxio.",
  },
  {
    q: "Is the audit really free?",
    a: "Yes. The audit is designed to provide useful information before any sales conversation.",
  },
  {
    q: "Do you guarantee clients or revenue?",
    a: "No. We never make guaranteed-result claims. We can explain potential economic value, but we do not promise outcomes.",
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
