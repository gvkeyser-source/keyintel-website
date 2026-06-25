import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database, LineChart, Lightbulb, FileSpreadsheet, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KeyIntel — Do More With Your Data" },
      {
        name: "description",
        content:
          "Fractional business performance for mid market companies. Executive level data infrastructure and intelligence without the internal team cost.",
      },
      { property: "og:title", content: "KeyIntel — Do More With Your Data" },
      {
        property: "og:description",
        content:
          "Executive level data infrastructure and strategic intelligence at a fraction of the cost.",
      },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  {
    icon: Database,
    title: "Automated Data Integration",
    body: "Connecting separate systems into a single source of truth so every team works from the same numbers.",
  },
  {
    icon: LineChart,
    title: "Live Performance Dashboards",
    body: "Creating clear, real time visual reporting tools that surface what matters the moment it changes.",
  },
  {
    icon: Lightbulb,
    title: "Actionable Business Intelligence",
    body: "Fixing operational inefficiencies using clean data, turning insight into measurable outcomes.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-page relative py-24 md:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Fractional business performance
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Do More With Your Data
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Your data at your finger tips. Access executive level data infrastructure and
              strategic intelligence at a fraction of the cost of building an internal team.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem and Solution */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <FileSpreadsheet className="h-4 w-4" />
              The problem
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              Trapped in messy spreadsheets
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mid market businesses lose weeks every quarter wrangling exports, reconciling versions
              and chasing definitions across teams. Leadership receives reports that are out of
              date the moment they arrive, and decisions stall while analysts copy and paste.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Disconnected systems and duplicated data",
                "Manual reporting that breaks every month",
                "No single source of truth for executives",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-primary/20 bg-surface-elevated p-8 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                <Sparkles className="h-4 w-4" />
                The KeyIntel way
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold">
                An outsourced performance function
              </h2>
              <p className="mt-4 text-muted-foreground">
                We embed senior data leadership into your business to engineer pipelines, build
                live dashboards and translate the numbers into action. Continuous, clear results
                without recruiting a team.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                {[
                  "Unified pipelines into one source of truth",
                  "Always on dashboards for every function",
                  "Strategic recommendations, not just charts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="container-page py-12 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Core capabilities
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete data function delivered as a service, covering integration, visualisation
            and the strategy that turns information into outcomes.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary/40"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <cap.icon className="h-5 w-5" />
              </div>
              <div className="mt-6 text-xs font-mono text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold">{cap.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{cap.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="container-page py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Ready to put your data to work
              </h2>
              <p className="mt-4 text-muted-foreground">
                Book an introductory call to discuss your reporting workflows and walk away with a
                clear view of where to invest first.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="mailto:hello@keyintel.co"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                hello@keyintel.co
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-muted-foreground">
                We reply within one business day.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
