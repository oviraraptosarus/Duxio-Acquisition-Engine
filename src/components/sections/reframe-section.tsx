const systemParts = [
  "Strategy",
  "Lead Capture",
  "Funnels",
  "CRM",
  "Automation",
  "Lead Nurturing",
  "Booking",
  "Follow-Up",
  "Conversion Optimization",
  "Tracking",
];

export function ReframeSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="card-soft p-8">
            <span className="section-label">An Important Reframe</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              A Pretty Funnel Will Not Save You.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>A standalone funnel is just one small, isolated piece of the puzzle.</p>
              <p>
                Stop building disconnected landing pages. Start engineering a{" "}
                <span className="font-semibold text-foreground">frictionless journey</span> that pulls
                cold traffic straight into high-ticket sales conversations.
              </p>
              <p>
                We map, build, and optimize the entire end-to-end client journey—so you never have to worry about "where your next client is coming from" again.
              </p>
            </div>
          </div>

          <div className="card-soft p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              That connected journey can include
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {systemParts.map((p) => (
                <span
                  key={p}
                  className="rounded-lg border border-line bg-surface-2 px-3.5 py-2 text-sm font-medium text-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
