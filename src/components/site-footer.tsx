import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              to="/coach-client-acquisition"
              className="flex items-center gap-2.5"
              aria-label="Duxio home"
            >
              <img src="/logo-icon.png" alt="Duxio Icon" className="h-8 w-auto invert contrast-150 grayscale" />
              <img src="/logo-text.png" alt="Duxio Text" className="h-6 w-auto invert contrast-150 grayscale" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We help coaches turn existing attention and leads into more conversations, qualified
              appointments, and clients, through a connected client acquisition system, not just
              another pretty funnel.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol
              title="Explore"
              links={[
                { label: "How It Works", href: "#training" },
                { label: "The System", href: "#system" },
                { label: "Why Duxio", href: "#why" },
                { label: "FAQ", href: "#faq" },
              ]}
            />
            <FooterCol
              title="Get Started"
              links={[
                { label: "Free Coach Funnel Audit", href: "#audit" },
                { label: "How the Audit Works", href: "#how-it-works" },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { label: "Who This Is For", href: "#audience" },
                { label: "Case Studies", href: "#case-studies" },
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
