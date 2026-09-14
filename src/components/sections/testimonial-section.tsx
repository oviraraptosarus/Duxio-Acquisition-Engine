import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Duxio mapped our funnel and found $12k in MRR we were literally leaving on the table. The audit alone was worth more than most paid courses.",
    author: "Sarah J.",
    role: "Fitness Business Coach",
  },
  {
    quote: "We were driving thousands of views but getting zero calls. We implemented the Duxio architecture and added 4 high-ticket clients the next month.",
    author: "Marcus T.",
    role: "B2B Sales Consultant",
  },
  {
    quote: "The progressive profiling form strategy instantly doubled our lead capture rate. It's the most frictionless system we've ever used.",
    author: "Elena R.",
    role: "Leadership Coach",
  },
];

export function TestimonialSection() {
  return (
    <section className="border-t border-line bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="text-center">
          <span className="section-label">Real Results</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Don't Just Take Our Word For It.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how coaches are plugging their revenue leaks.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="card-soft flex flex-col p-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
