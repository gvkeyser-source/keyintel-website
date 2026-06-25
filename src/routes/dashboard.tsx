import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Shield, Lock, MapPin, ChevronDown, Activity, DollarSign, TrendingUp, Gauge, Database, Users } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Client Dashboard — Key Intel" },
      { name: "description", content: "Secure multi tenant analytics environment. Managed Apache Superset hosted in Oracle Cloud Sydney for Australian and New Zealand data sovereignty." },
      { property: "og:title", content: "Client Dashboard — Key Intel" },
      { property: "og:description", content: "Secure multi tenant analytics environment with Keycloak identity management." },
    ],
  }),
  component: Dashboard,
});

function Sparkline({ trend = "up" }: { trend?: "up" | "down" }) {
  const points = trend === "up" ? "0,28 10,22 20,24 30,18 40,20 50,12 60,14 70,8 80,10 90,4 100,6" : "0,6 10,10 20,8 30,14 40,12 50,20 60,18 70,24 80,22 90,28 100,26";
  return (
    <svg viewBox="0 0 100 32" className="w-full h-10">
      <defs>
        <linearGradient id={`g-${trend}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.16 200)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.78 0.16 200)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points} fill="none" stroke="oklch(0.78 0.16 200)" strokeWidth="1.5" />
      <polygon points={`${points} 100,32 0,32`} fill={`url(#g-${trend})`} />
    </svg>
  );
}

function BarChart() {
  const bars = [40, 65, 55, 80, 45, 90, 70, 85, 60, 95, 75, 88];
  return (
    <div className="flex items-end gap-1.5 h-32">
      {bars.map((h, i) => (
        <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan-accent/40 to-violet-accent/80" style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

function Donut() {
  return (
    <svg viewBox="0 0 42 42" className="w-32 h-32">
      <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="oklch(0.28 0.05 270)" strokeWidth="4" />
      <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="oklch(0.78 0.16 200)" strokeWidth="4" strokeDasharray="68 32" strokeDashoffset="25" />
      <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="oklch(0.68 0.22 295)" strokeWidth="4" strokeDasharray="22 78" strokeDashoffset="-43" />
      <text x="21" y="22" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="600">94%</text>
    </svg>
  );
}

function Dashboard() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <SiteLayout>
      {/* App bar */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-accent flex items-center justify-center shadow-glow">
              <Activity className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <div className="font-semibold text-sm">Acme Holdings Pty Ltd</div>
              <div className="text-xs text-muted-foreground font-mono">Tenant: acme-holdings-prod</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-cyan-accent" />
              <span>Secure multi tenant analytics environment. Logged in via Keycloak Identity Management.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 grid lg:grid-cols-[260px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">Workspaces</div>
            <ul className="space-y-1 text-sm">
              {["Executive Overview", "Revenue and Margin", "Operations", "Customer Cohorts", "Data Pipelines"].map((w, i) => (
                <li key={w}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md transition ${
                      i === 0 ? "bg-surface-elevated text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated/60"
                    }`}
                  >
                    {w}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <button
              className="w-full px-4 py-3 flex items-center justify-between text-sm font-medium"
              onClick={() => setInfoOpen(!infoOpen)}
            >
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-cyan-accent" />
                Infrastructure
              </span>
              <ChevronDown className={`h-4 w-4 transition ${infoOpen ? "rotate-180" : ""}`} />
            </button>
            {infoOpen && (
              <div className="px-4 pb-4 space-y-3 text-xs text-muted-foreground border-t border-border pt-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-foreground font-medium">Oracle Cloud Infrastructure</div>
                    <div>Sydney region (ap-sydney-1)</div>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Strict compliance with the Privacy Act 2020. Guarantees local Australian and New Zealand data sovereignty.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="rounded border border-border bg-surface-elevated px-2 py-1.5">
                    <div className="text-[10px] uppercase tracking-wider">Identity</div>
                    <div className="text-foreground font-mono text-xs">Keycloak</div>
                  </div>
                  <div className="rounded border border-border bg-surface-elevated px-2 py-1.5">
                    <div className="text-[10px] uppercase tracking-wider">Engine</div>
                    <div className="text-foreground font-mono text-xs">Superset</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main canvas */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Executive Overview</h1>
              <p className="text-sm text-muted-foreground mt-1 font-mono">Last refresh: 2 minutes ago. Auto refresh every 5 min.</p>
            </div>
            <div className="flex items-center gap-2">
              {["7D", "30D", "QTD", "YTD"].map((r, i) => (
                <button
                  key={r}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono ${
                    i === 1 ? "bg-gradient-accent text-primary-foreground" : "border border-border bg-surface hover:bg-surface-elevated"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, label: "Revenue", value: "$4.82M", delta: "+12.4%", trend: "up" as const },
              { icon: TrendingUp, label: "Margin Preservation", value: "38.6%", delta: "+1.8pp", trend: "up" as const },
              { icon: Gauge, label: "Operational Efficiency", value: "91.2%", delta: "+3.1%", trend: "up" as const },
              { icon: Users, label: "Active Users", value: "12,408", delta: "-2.3%", trend: "down" as const },
            ].map((k) => (
              <div key={k.label} className="rounded-xl border border-border bg-surface p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-8 w-8 rounded-md bg-surface-elevated flex items-center justify-center">
                    <k.icon className="h-4 w-4 text-cyan-accent" />
                  </div>
                  <span className={`text-xs font-mono ${k.trend === "up" ? "text-cyan-accent" : "text-destructive"}`}>{k.delta}</span>
                </div>
                <div className="text-2xl font-display font-bold">{k.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{k.label}</div>
                <div className="mt-3">
                  <Sparkline trend={k.trend} />
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Data Ingestion Rate</h3>
                  <p className="text-xs text-muted-foreground font-mono">Events per hour, last 12 hours</p>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-surface-elevated text-cyan-accent">LIVE</span>
              </div>
              <BarChart />
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-semibold mb-1">Pipeline Health</h3>
              <p className="text-xs text-muted-foreground font-mono mb-4">42 of 45 pipelines green</p>
              <div className="flex items-center justify-center">
                <Donut />
              </div>
              <div className="mt-4 space-y-1.5 text-xs">
                <div className="flex justify-between"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-accent" />Healthy</span><span className="font-mono">68%</span></div>
                <div className="flex justify-between"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-accent" />Degraded</span><span className="font-mono">22%</span></div>
                <div className="flex justify-between"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-muted" />Idle</span><span className="font-mono">10%</span></div>
              </div>
            </div>
          </div>

          {/* Embed placeholder */}
          <div className="rounded-xl border-2 border-dashed border-cyan-accent/40 bg-gradient-to-br from-surface to-surface-elevated p-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono uppercase tracking-wider text-cyan-accent mb-4">
              <Database className="h-3.5 w-3.5" /> Embed Container
            </div>
            <p className="text-foreground font-mono text-sm md:text-base">
              [ Embedded Apache Superset Client Instance Goes Here ]
            </p>
            <p className="mt-3 text-xs text-muted-foreground max-w-md mx-auto">
              An authenticated iframe pointing at your dedicated Superset workspace will render in this canvas, scoped to the tenant of the logged in user.
            </p>
          </div>

          {/* Pipeline table */}
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold">Active Pipelines</h3>
              <span className="text-xs text-muted-foreground font-mono">Updated 14:02 AEST</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                    <th className="px-6 py-3 font-medium">Pipeline</th>
                    <th className="px-6 py-3 font-medium">Source</th>
                    <th className="px-6 py-3 font-medium">Throughput</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { n: "orders_to_warehouse", s: "Shopify", t: "12.4k / hr", st: "ok" },
                    { n: "xero_invoices_sync", s: "Xero API", t: "820 / hr", st: "ok" },
                    { n: "stripe_events_cdc", s: "Stripe", t: "4.1k / hr", st: "warn" },
                    { n: "hubspot_contacts_etl", s: "HubSpot", t: "640 / hr", st: "ok" },
                  ].map((r) => (
                    <tr key={r.n} className="border-b border-border/50 last:border-0">
                      <td className="px-6 py-3 font-mono text-xs">{r.n}</td>
                      <td className="px-6 py-3 text-muted-foreground">{r.s}</td>
                      <td className="px-6 py-3 font-mono text-xs">{r.t}</td>
                      <td className="px-6 py-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-mono ${r.st === "ok" ? "text-cyan-accent" : "text-violet-accent"}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${r.st === "ok" ? "bg-cyan-accent" : "bg-violet-accent animate-pulse"}`} />
                          {r.st === "ok" ? "HEALTHY" : "DEGRADED"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
