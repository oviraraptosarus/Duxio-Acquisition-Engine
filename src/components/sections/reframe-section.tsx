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
              A Funnel Is Not the Goal.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>A funnel is just one small piece of the puzzle.</p>
              <p>
                Stop building isolated funnels. Start building a{" "}
                <span className="font-semibold text-foreground">connected journey</span> that pulls
                strangers straight into qualified sales conversations.
              </p>
              <p>
                Duxio focuses on engineering the entire client journey, not just handing you another
                pretty website that doesn't convert.
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
