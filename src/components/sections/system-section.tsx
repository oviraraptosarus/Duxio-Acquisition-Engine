import { Magnet, UserPlus, Filter, CalendarCheck, Clock, Handshake, Sprout } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "ATTRACT",
    body: "Turn strangers into an audience that actually pays attention to your message.",
    icon: Magnet,
    span: "col-span-1 sm:col-span-2 lg:col-span-2",
  },
  {
    n: "02",
    title: "CAPTURE",
    body: "Give interested prospects an irresistible reason to hand over their contact info.",
    icon: UserPlus,
    span: "col-span-1 lg:col-span-1",
  },
  {
    n: "03",
    title: "QUALIFY",
    body: "Filter out the tire-kickers so you only speak to people who are ready to buy.",
    icon: Filter,
    span: "col-span-1 lg:col-span-1",
  },
  {
    n: "04",
    title: "BOOK",
    body: "Eliminate the back-and-forth and get qualified prospects directly on your calendar.",
    icon: CalendarCheck,
    span: "col-span-1 sm:col-span-2 lg:col-span-2",
  },
  {
    n: "05",
    title: "FOLLOW UP",
    body: "Automate reminders so your show-up rates skyrocket.",
    icon: Clock,
    span: "col-span-1 lg:col-span-1",
  },
  {
    n: "06",
    title: "CONVERT",
    body: "Step into sales conversations with prospects who are already pre-sold.",
    icon: Handshake,
    span: "col-span-1 lg:col-span-1",
  },
  {
    n: "07",
    title: "NURTURE",
    body: "Stay top-of-mind with prospects who aren't ready to buy today, until they are.",
    icon: Sprout,
    span: "col-span-1 lg:col-span-1",
  },
];

export function SystemSection() {
  return (
    <section id="system" className="scroll-mt-20 border-t border-line bg-surface transition-colors">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-3xl">
          <span className="section-label">The Mechanism</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            The 7-Part Client Acquisition System
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Most coaches have pieces of this system. The problem is that those pieces aren't
            connected. Here's the full journey, from attention to a qualified sales conversation. 
            When this works correctly, you get more qualified conversations, less wasted marketing spend, and more time back.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className={`card-soft border-accent/15 bg-card group relative overflow-hidden p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-accent/40 ${s.span}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-5xl font-bold text-accent/20 transition-colors group-hover:text-accent/40">
                      {s.n}
                    </span>
                  </div>
                  
                  <div className="mt-auto pt-10">
                    <h3 className="text-lg font-bold tracking-wide text-foreground">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
          
          <div
            className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col justify-center rounded-2xl p-8 sm:p-12 transition-all hover:scale-[1.01]"
            style={{
              background: "linear-gradient(135deg, var(--accent), color-mix(in oklab, var(--accent) 40%, black))",
            }}
          >
            <div className="max-w-2xl">
              <p className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                We don't sell technology.
              </p>
              <p className="mt-2 text-xl font-semibold leading-snug text-white/80 sm:text-2xl">
                We engineer this exact ecosystem around your coaching business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
