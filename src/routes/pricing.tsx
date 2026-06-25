import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Check, Stethoscope, UserCog, Clock, Server } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing and Engagement Models — Key Intel" },
      { name: "description", content: "Transparent, performance driven pricing. Corporate capability without the enterprise overhead. Choose the model that matches your data maturity." },
      { property: "og:title", content: "Pricing and Engagement Models — Key Intel" },
      { property: "og:description", content: "Corporate capability without the enterprise overhead." },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    icon: Stethoscope,
    name: "Data Maturity Diagnostic",
    subtitle: "A health check for your data infrastructure.",
    price: "Fixed Fee",
    cadence: "One off. Paid upfront.",
    layman:
      "We look under the hood of your business to see how you collect, store, and use information. We do the digging and hand you a clear, actionable roadmap showing what is broken and how to fix it. No ongoing obligation.",
    commercial:
      "Standalone engagement covering existing reporting workflows and operational systems. Delivery of a strategic data roadmap report.",
    cta: "Start with a Diagnostic",
  },
  {
    icon: UserCog,
    name: "Fractional Embedded Consultant",
    subtitle: "Senior data leadership joined at the hip with your team.",
    price: "Standard Day Rate",
    cadence: "Pre agreed working days.",
    layman:
      "Get a senior data leader integrated into your business operations without the cost of a full time executive salary. Scheduled for pre agreed full working days.",
    commercial:
      "Ongoing daily engagement. Flexible terms requiring a minimum of 30 days written notice from either party to modify or terminate.",
    cta: "Embed a Consultant",
    featured: true,
  },
  {
    icon: Clock,
    name: "Advisory Retainer",
    subtitle: "On demand expertise to keep your data projects moving forward.",
    price: "Monthly Retainer",
    cadence: "Billed in advance via Xero.",
    layman:
      "Secure a set bucket of hours each month to answer your team's questions and maintain momentum. Unused hours do not roll over. Spikes in demand are covered and billed at our standard hourly rate.",
    commercial:
      "Monthly allocation of advisory hours as detailed in the Order Form. Additional hours exceeding the allocation are automatically billed at the premium hourly rate.",
    cta: "Lock in a Retainer",
  },
  {
    icon: Server,
    name: "Managed BI Platform Add on",
    subtitle: "Secure, managed corporate dashboard website.",
    price: "Flat Monthly Fee",
    cadence: "Optional infrastructure add on.",
    layman:
      "Instead of buying expensive software licences, we build, host, and manage a secure analytics platform for your business using top tier open source tools. Available alongside any consulting package.",
    commercial:
      "Non exclusive SaaS provision granting access to a managed Apache Superset instance hosted in a containerised environment. Client retains data ownership. Key Intel retains deployment configurations and data pipeline IP.",
    cta: "Add the Platform",
  },
];

function Pricing() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 lg:pt-32 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-8">
            Engagement Models
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight max-w-4xl mx-auto">
            Transparent, <span className="gradient-text">Performance Driven</span> Pricing
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Corporate capability without the enterprise overhead. Choose the model that matches your current data maturity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 border transition-all flex flex-col ${
                p.featured
                  ? "border-cyan-accent/50 bg-surface-elevated shadow-glow"
                  : "border-border bg-surface hover:border-cyan-accent/30"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-accent text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="h-11 w-11 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 shadow-glow">
                    <p.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.subtitle}</p>
                </div>
              </div>

              <div className="border-y border-border py-5 mb-6">
                <div className="text-3xl font-display font-bold gradient-text">{p.price}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{p.cadence}</div>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-accent mb-2">In plain English</div>
                  <p className="text-sm text-foreground/85 leading-relaxed">{p.layman}</p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-accent mb-2">Commercial Terms</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.commercial}</p>
                </div>
              </div>

              <button
                className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold transition ${
                  p.featured
                    ? "bg-gradient-accent text-primary-foreground shadow-glow hover:opacity-90"
                    : "border border-border bg-surface-elevated hover:bg-surface-elevated/80"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        {/* INCLUSIONS */}
        <div className="mt-20 rounded-2xl border border-border bg-surface p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Every engagement includes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Senior data practitioner as your single point of contact",
              "Documented architecture and data lineage",
              "Australian and New Zealand data sovereignty",
              "Monthly commercial review with leadership",
              "Transparent change management on scope",
              "No vendor licence lock in",
            ].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/85">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
