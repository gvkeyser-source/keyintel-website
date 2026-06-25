import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArrowRight, Database, BarChart3, Lightbulb, Shield, Zap, CheckCircle2, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Key Intel — Do More With Your Data" },
      { name: "description", content: "Transform scattered data into commercial performance. Access corporate level data infrastructure at a fraction of the cost of an internal team." },
      { property: "og:title", content: "Key Intel — Do More With Your Data" },
      { property: "og:description", content: "Transform scattered data into commercial performance with fractional business intelligence." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent animate-pulse" />
              Fractional Business Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              Do More <br />
              With Your <span className="gradient-text">Data</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Transform scattered data into commercial performance. Access corporate level data infrastructure and strategic intelligence at a fraction of the cost of building an internal team.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-accent text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition"
              >
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/what-is-bi"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border bg-surface/60 text-foreground font-semibold hover:bg-surface transition"
              >
                Learn what BI delivers
              </Link>
            </div>
          </div>

          {/* metric strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { v: "70%", l: "Faster reporting cycles" },
              { v: "1/5", l: "Cost of an internal team" },
              { v: "30 days", l: "To first live dashboard" },
              { v: "100%", l: "AU and NZ data sovereignty" },
            ].map((m) => (
              <div key={m.l} className="border-l border-border pl-4">
                <div className="text-3xl font-display font-bold gradient-text">{m.v}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-accent mb-4">The Problem</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Drowning in Data, <br />
              <span className="gradient-text">Starving for Insight</span>
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Medium sized businesses are trapped in spreadsheets, making decisions based on gut feel because full time internal data teams are too expensive to recruit and retain.
            </p>
            <p>
              Traditional consultants deliver static PDF reports that gather dust on a shared drive. By the time the findings reach the leadership team, the market has already moved.
            </p>
            <p className="text-foreground font-medium">
              You do not need another report. You need a living intelligence function.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-surface border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-accent mb-4">Our Solution</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A Fully Outsourced <br />
              Business Performance Function
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Key Intel delivers continuous, actionable intelligence that drives measurable commercial outcomes. Zero recruitment overhead. Zero software licensing battles. A senior data capability that plugs straight into your leadership team.
            </p>
          </div>

          {/* CAPABILITIES GRID */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "Automated Data Integration",
                body: "Securely connecting your disconnected systems to create a single, reliable source of truth across the business.",
              },
              {
                icon: BarChart3,
                title: "Live Performance Dashboards",
                body: "Utilising advanced open source technology like Apache Superset to build real time visual reporting tools your team will actually use.",
              },
              {
                icon: Lightbulb,
                title: "Actionable Business Intelligence",
                body: "Translating complex data into clear commercial insights that fix operational inefficiencies and unlock margin.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group relative p-8 rounded-xl bg-surface-elevated border border-border hover:border-cyan-accent/40 transition-all hover:shadow-glow"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-6 shadow-glow">
                  <c.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-accent mb-4">Why Key Intel</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built for ambitious teams <br />
            <span className="gradient-text">that refuse to guess</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Enterprise Grade, SME Priced",
              body: "The same architecture, governance, and tooling used by Fortune 500 data teams, delivered at a price your finance director will sign off.",
            },
            {
              icon: Zap,
              title: "Rapid, Secure Implementation",
              body: "Pre built deployment patterns and containerised infrastructure mean your first live dashboards are running in weeks, not quarters.",
            },
            {
              icon: TrendingUp,
              title: "Evidence Based Decisions",
              body: "Stop debating opinions. Start interrogating the data. Every commercial conversation grounded in a shared, trusted source of truth.",
            },
          ].map((c) => (
            <div key={c.title} className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-md border border-border bg-surface flex items-center justify-center">
                <c.icon className="h-5 w-5 text-cyan-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-elevated to-surface p-10 md:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Ready to put your data to work?
              </h3>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl">
                Start with a Data Maturity Diagnostic. A fixed fee health check that hands you a clear, actionable roadmap. No ongoing obligation.
              </p>
              <ul className="mt-6 space-y-2">
                {["Full audit of existing reporting workflows", "Strategic data roadmap report", "Zero ongoing commitment"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-cyan-accent" /> {i}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-accent text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition justify-self-start md:justify-self-end"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
