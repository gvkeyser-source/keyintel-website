import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Gauge, Zap, Compass } from "lucide-react";

export const Route = createFileRoute("/what-is-bi")({
  head: () => ({
    meta: [
      { title: "What is Business Intelligence — KeyIntel" },
      {
        name: "description",
        content:
          "Business intelligence turns raw corporate data into clean reports, dashboards and visualisations for evidence based decisions.",
      },
      { property: "og:title", content: "What is Business Intelligence — KeyIntel" },
      {
        property: "og:description",
        content:
          "Understand what BI means and why your business needs it to grow.",
      },
    ],
  }),
  component: WhatIsBI,
});

const benefits = [
  {
    icon: BarChart3,
    title: "Improved Reporting",
    body: "Simplifies daily analysis using interactive tools that anyone in the business can read.",
  },
  {
    icon: Gauge,
    title: "Greater Efficiency",
    body: "Spots operational bottlenecks across workflows so teams focus on the work that moves the needle.",
  },
  {
    icon: Zap,
    title: "Faster Decision Making",
    body: "Delivers real time insights for quick adjustments before small issues become expensive ones.",
  },
  {
    icon: Compass,
    title: "Smart Strategy",
    body: "Replaces guesswork with long term, evidence based planning grounded in measurable outcomes.",
  },
];

function WhatIsBI() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-page relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              Education
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Understanding Business Intelligence
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              What BI means and why your business needs it to grow.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8 md:p-12">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            A simple definition
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Business intelligence is the practice of turning raw corporate data into clean
            reports, dashboards and visualisations so leaders can make evidence based decisions.
            It combines the plumbing that moves information between systems with the tooling
            that puts it in front of the people who act on it.
          </p>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Done well, BI removes the guesswork from the running of a business. Done poorly, it
            adds another layer of confusion on top of an already messy stack. The difference is
            in the design of the pipelines, the discipline of the definitions and the quality
            of the questions being asked.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Key benefits
          </h2>
          <p className="mt-4 text-muted-foreground">
            The advantages compound. Each layer of clarity unlocks the next.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary/40"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
