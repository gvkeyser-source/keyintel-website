import { createFileRoute } from "@tanstack/react-router";
import { Shield, Database, LayoutDashboard } from "lucide-react";

export const Route = createFileRoute("/example-dashboard")({
  head: () => ({
    meta: [
      { title: "Example Dashboard — KeyIntel" },
      {
        name: "description",
        content:
          "A public demonstration of a hosted Apache Superset dashboard delivered by KeyIntel.",
      },
      { property: "og:title", content: "Interactive Client Dashboard Demonstration — KeyIntel" },
      {
        property: "og:description",
        content: "Hosted securely to ensure strict data sovereignty and compliance.",
      },
    ],
  }),
  component: ExampleDashboardPage,
});

function ExampleDashboardPage() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Interactive Client Dashboard Demonstration
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A live preview of the kind of reporting surface delivered through the Managed BI Platform.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-primary/30 bg-surface-elevated p-5">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Shield className="h-4 w-4" />
            </div>
            <h2 className="mt-4 font-display text-sm font-semibold">Data sovereignty</h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Hosted securely to ensure strict data sovereignty and compliance.
            </p>
          </div>

          <nav className="rounded-2xl border border-border bg-surface p-3 text-sm">
            {[
              { icon: LayoutDashboard, label: "Overview", active: true },
              { icon: Database, label: "Pipelines" },
              { icon: LayoutDashboard, label: "Revenue" },
              { icon: LayoutDashboard, label: "Operations" },
              { icon: LayoutDashboard, label: "Customers" },
            ].map((item) => (
              <div
                key={item.label}
                className={[
                  "flex items-center gap-3 rounded-lg px-3 py-2.5",
                  item.active
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground",
                ].join(" ")}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                {item.active && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </div>
            ))}
          </nav>

          <div className="rounded-2xl border border-border bg-surface p-5 text-xs text-muted-foreground">
            <div className="font-semibold text-foreground">Powered by Apache Superset</div>
            <p className="mt-2">
              Managed and configured by KeyIntel. Client retains full ownership of underlying data.
            </p>
          </div>
        </aside>

        {/* Main embed area */}
        <div className="rounded-2xl border border-border bg-surface p-4 md:p-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Live embed
              </div>
              <div className="font-display text-lg font-semibold">Executive Overview</div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Public demonstration
            </span>
          </div>

          <div className="mt-6 flex min-h-[520px] items-center justify-center rounded-xl border border-dashed border-border bg-background/40 p-10 text-center">
            <div className="max-w-md">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <p className="mt-6 font-mono text-sm text-muted-foreground">
                [The owner of the web page will embed Live Apache Superset Dashboard Code Here]
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Replace this block with your Superset embed iframe or SDK component.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
