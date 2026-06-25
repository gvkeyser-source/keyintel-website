import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/what-is-bi", label: "What is BI" },
  { to: "/pricing", label: "Pricing" },
  { to: "/dashboard", label: "Client Dashboard" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative h-9 w-9 rounded-md bg-gradient-accent shadow-glow flex items-center justify-center">
        <span className="font-display font-bold text-primary-foreground text-lg">K</span>
        <div className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full bg-cyan-accent" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-base tracking-tight">Key Intel</span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Data Intelligence</span>
      </div>
    </Link>
  );
}

function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  active ? "text-foreground bg-surface" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Link
            to="/pricing"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md bg-gradient-accent text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Book a Consultation
          </Link>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-surface"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Corporate level data infrastructure and strategic intelligence at a fraction of the cost of building an internal team.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 hover:text-foreground transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Compliance</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Hosted in Oracle Cloud Infrastructure, Sydney region</li>
            <li>Compliant with the Privacy Act 2020</li>
            <li>Australian and New Zealand data sovereignty</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Key Intel. All rights reserved.</p>
          <p className="font-mono">Enterprise grade. SME priced.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
