import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArrowRight, BarChart3, Gauge, Zap, Target, Truck, Gamepad2, Users, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/what-is-bi")({
  head: () => ({
    meta: [
      { title: "What is Business Intelligence — Key Intel" },
      { name: "description", content: "Demystifying Business Intelligence. What BI is and why your business cannot compete effectively without it." },
      { property: "og:title", content: "Demystifying Business Intelligence — Key Intel" },
      { property: "og:description", content: "Why modern businesses cannot compete effectively without Business Intelligence." },
    ],
  }),
  component: WhatIsBI,
});

function WhatIsBI() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-24 lg:pt-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-8">
              Educational Brief
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Demystifying <br /><span className="gradient-text">Business Intelligence</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              What BI is and why your business cannot compete effectively without it.
            </p>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-accent mb-4">Definition</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              From raw signal <br />to <span className="gradient-text">commercial decision</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              Business Intelligence is the practice of turning raw, isolated data into clean reports, dashboards, and visualisations that support evidence based business choices.
            </p>
            <p>
              It combines data collection, semantic modelling layers, and data warehousing to track performance, surface anomalies, and spot trends before competitors do.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-6">
              {["Collect", "Model", "Visualise"].map((step, i) => (
                <div key={step} className="p-4 rounded-lg border border-border bg-surface">
                  <div className="text-xs font-mono text-cyan-accent">0{i + 1}</div>
                  <div className="font-semibold text-foreground mt-1">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-surface border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-accent mb-4">Core Value and Benefits</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why BI is <span className="gradient-text">critical</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: BarChart3, title: "Improved Reporting", body: "Simplifies data analysis with interactive tools that replace static spreadsheets and email PDF reports." },
              { icon: Gauge, title: "Greater Efficiency", body: "Identifies operational bottlenecks across processes such as supply chains, staffing, and fulfilment." },
              { icon: Zap, title: "Faster Decision Making", body: "Accelerates response times by providing real time operational insights to managers when they need them." },
              { icon: Target, title: "Smart Strategy", body: "Supports evidence based planning for long term growth and durable competitive advantage." },
            ].map((b) => (
              <div key={b.title} className="p-8 rounded-xl bg-surface-elevated border border-border hover:border-cyan-accent/40 transition">
                <div className="h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-5 shadow-glow">
                  <b.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL WORLD */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-accent mb-4">Real World Impact</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            How modern enterprises <br /><span className="gradient-text">put BI to work</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Truck, title: "Supplier risk", body: "Monitor concentration, delivery performance, and exposure across the supply chain in one view." },
            { icon: Gamepad2, title: "Gameplay and user trends", body: "Track player progression, drop off points, and feature adoption to inform product roadmaps." },
            { icon: Users, title: "Subscriber churn", body: "Predict which customers are at risk of leaving and trigger retention plays before they walk." },
            { icon: TrendingUp, title: "Dynamic pricing", body: "Optimise pricing strategy in response to demand signals, inventory levels, and competitor positioning." },
          ].map((u) => (
            <div key={u.title} className="p-6 rounded-xl border border-border bg-surface">
              <u.icon className="h-6 w-6 text-cyan-accent mb-4" />
              <h3 className="font-semibold mb-2">{u.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{u.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-accent text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition"
          >
            See how we can help <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
