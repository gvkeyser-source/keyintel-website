import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/what-is-bi", label: "What is BI" },
  { to: "/pricing", label: "Pricing" },
  { to: "/example-dashboard", label: "Example Dashboard" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            K
          </span>
          <span>
            Key<span className="text-primary">Intel</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/"
          hash="contact"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] sm:inline-flex"
        >
          Contact Us
        </Link>
      </div>
      <nav className="container-page flex items-center gap-5 overflow-x-auto pb-3 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="whitespace-nowrap text-sm text-muted-foreground"
            activeProps={{ className: "text-foreground" }}
            activeOptions={{ exact: true }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <div className="font-display text-lg font-semibold">
            Key<span className="text-primary">Intel</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Fractional business performance, delivered on demand.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} KeyIntel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
