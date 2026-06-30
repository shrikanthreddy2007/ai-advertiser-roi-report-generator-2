import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AppShell } from "@/components/AppShell";
import { toast } from "sonner";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Generation History — Telangana Today" },
      {
        name: "description",
        content: "View all previously generated campaign reports and their ROI analytics.",
      },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const historyStr = localStorage.getItem("report_history");
      if (historyStr) {
        try {
          setHistory(JSON.parse(historyStr));
        } catch (e) {
          setHistory([]);
        }
      }
    }
  }, []);

  const handleViewReport = (report: any) => {
    localStorage.setItem("current_report", JSON.stringify(report));
    
    // Reconstruct inputs for regeneration
    const inputs = {
      clientName: report.clientName,
      campaignName: report.campaignName,
      duration: report.duration,
      platform: report.platform,
      impressions: report.impressions ? Number(report.impressions.toString().replace(/[^0-9]/g, "")) : 1000000,
      reach: report.reach ? Number(report.reach.toString().replace(/[^0-9]/g, "")) : 500000,
      placement: "4",
      budget: report.budget ? Number(report.budget.toString().replace(/[^0-9]/g, "")) : 10000,
      clicks: report.clicks ? Number(report.clicks.toString().replace(/[^0-9]/g, "")) : 50000,
      ctr: report.ctr || "5.00",
      conversions: report.conversions ? Number(report.conversions.toString().replace(/[^0-9]/g, "")) : 5000,
      objective: "conversion",
      notes: ""
    };
    localStorage.setItem("current_report_inputs", JSON.stringify(inputs));
    
    toast.success(`Loading report: ${report.campaignName}`);
    navigate({ to: "/report" });
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = history.filter((item) => item.id !== id);
    setHistory(updated);
    localStorage.setItem("report_history", JSON.stringify(updated));
    toast.success("Report deleted from history.");
  };

  const clearAllHistory = () => {
    if (confirm("Are you sure you want to clear all generation history?")) {
      setHistory([]);
      localStorage.removeItem("report_history");
      toast.success("History cleared.");
    }
  };

  return (
    <AppShell>
      <div className="w-full max-w-[1100px] mx-auto space-y-xl">
        <section className="flex flex-wrap gap-md justify-between items-center pb-md border-b border-outline-variant/30">
          <div>
            <h2 className="text-headline-lg font-bold text-on-surface">Generation History</h2>
            <p className="text-on-surface-variant text-body-lg">
              Access previous campaign analytics reports and performance projections.
            </p>
          </div>
          {history.length > 0 && (
            <button
              onClick={clearAllHistory}
              className="px-lg py-sm bg-error/10 hover:bg-error hover:text-on-error border border-error/20 text-error rounded-lg flex items-center gap-sm text-body-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-body-lg">delete_sweep</span>
              Clear All
            </button>
          )}
        </section>

        {history.length === 0 ? (
          <section className="w-full max-w-xl glass-panel p-xl md:p-3xl rounded-3xl text-center space-y-lg mx-auto mt-2xl">
            <span className="material-symbols-outlined text-[64px] text-on-surface-variant/40">
              history_toggle_off
            </span>
            <div className="space-y-sm">
              <h3 className="text-headline-md font-bold text-on-surface">No History Found</h3>
              <p className="text-on-surface-variant text-body-md leading-relaxed">
                You haven't generated any ROI analysis reports yet. Input campaign specifics to create your first ledger entry.
              </p>
            </div>
            <button
              onClick={() => navigate({ to: "/generate" })}
              className="inline-block px-xl py-md bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer"
            >
              Generate First Report
            </button>
          </section>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mt-lg">
            {history.map((item) => (
              <div
                key={item.id}
                onClick={() => handleViewReport(item)}
                className="glass-panel p-xl rounded-2xl hover:border-primary/40 transition-all group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-md mb-md">
                    <span className="px-sm py-xs bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold">
                      {item.id}
                    </span>
                    <span className="text-xs text-on-surface-variant">{item.date}</span>
                  </div>
                  
                  <h3 className="text-title-lg font-bold group-hover:text-primary transition-colors line-clamp-1 mb-xs">
                    {item.campaignName}
                  </h3>
                  <p className="text-xs text-on-surface-variant mb-lg">
                    Client: <span className="text-on-surface font-semibold">{item.clientName}</span>
                  </p>
                  
                  <div className="grid grid-cols-3 gap-md bg-surface-container-low p-md rounded-xl border border-outline-variant/20 mb-lg">
                    <div>
                      <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">ROI</span>
                      <span className="text-body-md font-bold text-secondary">{item.roi || "N/A"}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">Platform</span>
                      <span className="text-body-md font-bold text-on-surface line-clamp-1">{item.platform}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">Spend</span>
                      <span className="text-body-md font-bold text-on-surface">${Number(item.budget || 0).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-outline-variant/20 pt-md mt-md">
                  <span className="text-xs text-secondary flex items-center gap-xs font-semibold">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    {item.roiStatus || "Positive"}
                  </span>
                  <div className="flex gap-sm">
                    <button
                      onClick={(e) => handleDelete(item.id, e)}
                      className="p-sm hover:bg-error/10 hover:text-error text-on-surface-variant rounded-lg transition-colors cursor-pointer"
                      title="Delete entry"
                    >
                      <span className="material-symbols-outlined text-body-lg">delete</span>
                    </button>
                    <button
                      className="px-md py-sm bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-xs cursor-pointer"
                    >
                      View Report
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
