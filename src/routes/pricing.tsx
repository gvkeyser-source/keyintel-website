import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — KeyIntel" },
      {
        name: "description",
        content:
          "Transparent engagement models for fractional business intelligence. Reviews, embedded consulting, advisory retainers and managed dashboards.",
      },
      { property: "og:title", content: "Transparent Pricing Models — KeyIntel" },
      {
        property: "og:description",
        content: "Enterprise capability without the overhead.",
      },
    ],
  }),
  component: PricingPage,
});

type Tier = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  summary: string;
  scope: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Data Maturity Review",
    price: "$500",
    cadence: "Fixed one off fee",
    tagline: "Complete data health check",
    summary:
      "A complete health check for your data. We look under the hood to see how you collect and use information, then hand you a clear, actionable roadmap. No ongoing obligation.",
    scope: "Covers existing reporting workflows and delivers a strategic data roadmap.",
  },
  {
    name: "Fractional Embedded Consultant",
    price: "$750",
    cadence: "Standard day rate",
    tagline: "Senior data leadership on your team",
    summary:
      "Senior data leadership integrated into your team without the executive salary. We agree on a set schedule of days. Requires 30 days notice to change.",
    scope: "Continuous hands on operational integration billed at a simple daily rate.",
    featured: true,
  },
  {
    name: "Advisory Retainer",
    price: "$2,000",
    cadence: "Monthly retainer",
    tagline: "On demand expertise every month",
    summary:
      "Secure on demand expertise every month to keep your projects moving. Billed in advance for a set bucket of hours. Extra hours are billed at our standard rate. Unused hours do not roll over.",
    scope: "Fixed monthly hour allocation with additional hours billed in arrears.",
  },
  {
    name: "Managed BI Platform",
    price: "$50",
    cadence: "Per connected system, monthly",
    tagline: "Hosted dashboard infrastructure",
    summary:
      "An optional add on to our consulting packages. We build, host and manage a secure corporate dashboard website for you using top tier tools. Access ends if the consulting agreement stops.",
    scope:
      "Managed Apache Superset platform instance. Client owns the data; KeyIntel owns the configurations.",
  },
];

function PricingPage() {
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
              Engagement models
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Transparent Pricing Models
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Enterprise capability without the overhead.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                "relative flex flex-col rounded-2xl border bg-surface p-7 transition-colors",
                tier.featured
                  ? "border-primary/60 bg-surface-elevated shadow-[var(--shadow-card)]"
                  : "border-border hover:border-primary/30",
              ].join(" ")}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {tier.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold">{tier.price}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{tier.cadence}</p>

              <p className="mt-6 text-sm text-muted-foreground">{tier.summary}</p>

              <div className="mt-6 rounded-xl border border-border/70 bg-background/40 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  Commercial scope
                </div>
                <p className="mt-2 text-sm text-foreground/90">{tier.scope}</p>
              </div>

              <div className="mt-auto pt-7">
                <a
                  href="mailto:hello@keyintel.co"
                  className={[
                    "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.01]",
                    tier.featured
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                      : "border border-border bg-background text-foreground",
                  ].join(" ")}
                >
                  <Check className="h-4 w-4" />
                  Enquire
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All fees quoted in USD. Engagements can be combined to suit your maturity and pace.
        </p>
      </section>
    </>
  );
}
