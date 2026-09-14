import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              to="/coach-client-acquisition"
              className="flex items-center gap-3"
              aria-label="Duxio home"
            >
              {/* Icon with gradient mask */}
              <div className="relative flex items-center justify-center">
                <img src="/logo-icon.png" alt="" className="h-8 w-auto opacity-0" />
                <div 
                  className="absolute inset-0 bg-brand-gradient"
                  style={{ 
                    WebkitMaskImage: 'url(/logo-icon.png)', 
                    WebkitMaskSize: 'contain', 
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center' 
                  }} 
                />
              </div>
              {/* Text with gradient mask */}
              <div className="relative flex items-center justify-center">
                <img src="/logo-text.png" alt="" className="h-6 w-auto opacity-0" />
                <div 
                  className="absolute inset-0 bg-brand-gradient"
                  style={{ 
                    WebkitMaskImage: 'url(/logo-text.png)', 
                    WebkitMaskSize: 'contain', 
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center' 
                  }} 
                />
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We engineer end-to-end client acquisition ecosystems that turn cold traffic and passive lurkers into booked high-ticket sales conversations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <FooterCol
              title="Explore"
              links={[
                { label: "Free 8-Min Training", href: "#vsl" },
                { label: "The 7-Part System", href: "#system" },
                { label: "FAQ", href: "#faq" },
              ]}
            />
            <FooterCol
              title="Get Started"
              links={[
                { label: "Map My Revenue Leaks", href: "#audit" },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Duxio. Client acquisition systems for coaches.
          </p>
          <p className="text-xs text-muted-foreground">
            No guaranteed results. We build the system around the business.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
