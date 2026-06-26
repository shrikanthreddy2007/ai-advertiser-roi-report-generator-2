import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { generateReportFn } from "@/lib/report-api";

export const Route = createFileRoute("/report")({
  head: () => ({
    meta: [
      { title: "Campaign ROI Report — Telangana Today" },
      {
        name: "description",
        content:
          "AI-generated ROI report breaking down campaign performance, strengths, and recommendations.",
      },
    ],
  }),
  component: ReportPage,
});

const faqs = [
  { q: "How does the AI calculate ROI?", a: "Our proprietary neural engine cross-references real-time ad spend with multi-touch attribution models and historical industry benchmarks to provide a weighted performance score." },
  { q: "Is my campaign data private?", a: "Absolutely. All data is encrypted at rest and in transit. We follow SOC2 compliance standards and never use your specific campaign data to train public models." },
  { q: "How accurate are the suggestions?", a: "Our suggestions have a 94% confidence interval based on retrospective testing of over 500k active advertiser campaigns within the region." },
  { q: "Can I export these reports?", a: "Yes, reports can be exported in PDF, JSON, or CSV formats. You can also generate a secure public link for external stakeholder review." },
];

function ReportPage() {
  const [reportData, setReportData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  const handleCopy = () => {
    const textToCopy = `
Campaign Analysis Report: ${displayData.campaignName}
Client: ${displayData.clientName}
Calculated ROI: ${displayData.roi} (${displayData.roiStatus})
Impressions: ${displayData.impressions}
Conversions: ${displayData.conversions}

Executive Summary:
${displayData.executiveSummary}

Final Recommendation:
${displayData.recommendation}
    `.trim();

    navigator.clipboard.writeText(textToCopy);
    toast.success("Report summary copied to clipboard!");
  };

  const handlePrint = () => {
    window.print();
  };

  const submitFeedback = () => {
    if (rating === 0) {
      toast.error("Please select a star rating first.");
      return;
    }

    if (typeof window !== "undefined") {
      const feedbackStr = localStorage.getItem("report_feedback");
      let feedbacks = [];
      if (feedbackStr) {
        try {
          feedbacks = JSON.parse(feedbackStr);
        } catch (e) {
          feedbacks = [];
        }
      }

      const feedbackItem = {
        id: `FB-${Math.floor(1000 + Math.random() * 9000)}`,
        campaignName: displayData.campaignName,
        clientName: displayData.clientName,
        rating: rating,
        comment: feedbackText,
        date: new Date().toLocaleDateString(),
      };

      feedbacks.unshift(feedbackItem);
      localStorage.setItem("report_feedback", JSON.stringify(feedbacks));
      toast.success("Thank you for your feedback! Review saved.");
      
      setRating(0);
      setFeedbackText("");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("current_report");
      if (data) {
        setReportData(JSON.parse(data));
      }
    }
  }, []);

  const handleRegenerate = async () => {
    if (typeof window === "undefined") return;
    const inputsStr = localStorage.getItem("current_report_inputs");
    if (!inputsStr) {
      toast.error("No campaign input parameters found to regenerate.");
      return;
    }

    setLoading(true);
    toast.loading("Regenerating ROI Report...", { id: "regen" });

    try {
      const payload = JSON.parse(inputsStr);
      const result = await generateReportFn({ data: payload });

      if (!result) {
        throw new Error("Failed to regenerate report");
      }

      localStorage.setItem("current_report", JSON.stringify(result));
      setReportData(result);
      toast.success("ROI Report regenerated successfully!", { id: "regen" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to regenerate.", { id: "regen" });
    } finally {
      setLoading(false);
    }
  };

  const defaultData = {
    clientName: "TechFlow Pro",
    campaignName: "Q3 2023 Advertiser Campaign",
    duration: "30 Days",
    platform: "Programmatic Display",
    budget: "10000",
    clicks: "120000",
    impressions: "2.4M",
    conversions: "18.2K",
    roi: "4.8x",
    roiStatus: "Strong Positive",
    executiveSummary: "The Q3 2023 Advertiser Campaign for 'TechFlow Pro' has exceeded historical benchmarks by 14.2%. Leveraging automated bid adjustments and high-fidelity creative sets, the campaign achieved a significant reduction in CPA while maintaining steady reach across Telangana's core demographics. The data suggests a shift towards video-first consumption in tier-2 cities.",
    budgetUtilization: "92.4%",
    targetDemographic: "Tech Enthu (18-35)",
    strengths: [
      {
        title: "Creative Resonance",
        description: "Video ads outperformed static banners by 40% in CTR across all devices."
      },
      {
        title: "Geo-Optimization",
        description: "Hyderabad clusters showed 3x higher conversion rates than predicted models."
      }
    ],
    suggestions: [
      {
        title: "Landing Page",
        description: "Mobile bounce rate is high (62%). Recommend optimizing for 4G/Edge speeds."
      },
      {
        title: "Frequency Capping",
        description: "User fatigue detected in 10+ exposure group. Implement stricter capping."
      }
    ],
    recommendation: "Double the investment in short-form video assets and shift 15% of the display budget towards native content placements. The campaign is currently on a high-growth trajectory and can sustain a 30% budget increase without significant ROI diminishing returns.",
    aiRecommendations: [
      "Establish bid multipliers on high-performing publishers in programmatic display networks.",
      "Optimize creative messaging variations highlighting pricing transparency versus feature benefits.",
      "Tighten frequency capping at 3 exposures per week to prevent audience ad fatigue."
    ]
  };

  const displayData = reportData || defaultData;

  return (
    <AppShell>
      <div className="relative z-10 max-w-[1100px] mx-auto space-y-xl">
        {/* Header actions */}
        <div className="flex flex-wrap gap-md justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-bold text-on-surface">
              {displayData.campaignName}
            </h2>
            <p className="text-on-surface-variant text-body-lg">
              Client: {displayData.clientName} • Generated on {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="flex gap-sm flex-wrap print:hidden">
            <button 
              onClick={handleCopy}
              className="px-lg py-sm bg-surface-container border border-outline-variant rounded-lg flex items-center gap-sm text-body-md hover:bg-surface-variant transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-body-lg">content_copy</span>
              Copy
            </button>
            <button 
              onClick={handlePrint}
              className="px-lg py-sm bg-surface-container border border-outline-variant rounded-lg flex items-center gap-sm text-body-md hover:bg-surface-variant transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-body-lg">picture_as_pdf</span>
              PDF
            </button>
            <button 
              onClick={handleRegenerate}
              disabled={loading}
              className="px-lg py-sm bg-tertiary-container text-on-tertiary-container rounded-lg flex items-center gap-sm text-body-md hover:brightness-110 transition-all disabled:opacity-50 cursor-pointer"
            >
              <span className={`material-symbols-outlined text-body-lg ${loading ? 'animate-spin' : ''}`}>
                {loading ? "sync" : "refresh"}
              </span>
              {loading ? "Regenerating..." : "Regenerate"}
            </button>
            <button className="px-lg py-sm bg-primary text-on-primary rounded-lg flex items-center gap-sm text-body-md hover:brightness-110 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-body-lg">save</span>
              Save
            </button>
          </div>
        </div>

        {/* Report Card */}
        <section className="glass-panel rounded-3xl overflow-hidden p-3xl">
          <div className="grid grid-cols-12 gap-lg mb-2xl">
            <div className="col-span-12 md:col-span-8">
              <h3 className="text-headline-md text-primary mb-md">Executive Summary</h3>
              <p className="text-body-lg leading-relaxed text-on-surface-variant">
                {displayData.executiveSummary}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 bg-surface-container-low rounded-2xl p-lg border border-outline-variant/30 flex flex-col justify-center items-center text-center">
              <div className="text-secondary text-display-lg leading-tight">{displayData.roi}</div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-widest">
                Calculated ROI
              </div>
              <div className="mt-md px-sm py-xs bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-label-md flex items-center gap-xs">
                <span className="material-symbols-outlined text-body-md">
                  {(displayData.roiStatus || "").toLowerCase().includes("underperforming") ? "trending_down" : "trending_up"}
                </span>
                {displayData.roiStatus || "Positive"}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-outline-variant/20 mb-2xl" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl">
            {/* Left */}
            <div className="space-y-2xl">
              <div>
                <SectionTitle icon="assignment" color="text-primary">Campaign Overview</SectionTitle>
                <ul className="space-y-sm text-on-surface-variant text-body-md">
                  <Row label="Budget Utilization" value={displayData.budgetUtilization} />
                  <Row label="Target Demographic" value={displayData.targetDemographic} />
                  <Row label="Duration" value={displayData.duration} />
                </ul>
              </div>
              <div>
                <SectionTitle icon="check_circle" color="text-secondary">Strengths</SectionTitle>
                <div className="space-y-sm">
                  {displayData.strengths?.map((strength: any, idx: number) => (
                    <PillCard tone="secondary" key={idx}>
                      <span className="text-secondary font-bold">{strength.title}:</span> {strength.description}
                    </PillCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-2xl">
              <div>
                <SectionTitle icon="bolt" color="text-tertiary">Performance Highlights</SectionTitle>
                <div className="grid grid-cols-2 gap-md">
                  <Metric label="Impressions" value={displayData.impressions} />
                  <Metric label="Conversions" value={displayData.conversions} />
                </div>
              </div>
              <div>
                <SectionTitle icon="lightbulb" color="text-error">Improvement Suggestions</SectionTitle>
                <div className="space-y-sm">
                  {displayData.suggestions?.map((suggestion: any, idx: number) => (
                    <PillCard tone="error" key={idx}>
                      <span className="text-error font-bold">{suggestion.title}:</span> {suggestion.description}
                    </PillCard>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Strategic Recommendations Checklist */}
          {displayData.aiRecommendations && displayData.aiRecommendations.length > 0 && (
            <div className="mt-2xl p-xl bg-secondary/5 border border-secondary/20 rounded-2xl mb-lg">
              <h4 className="text-title-lg text-secondary flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined">psychology</span>
                AI Strategic Next Steps
              </h4>
              <ul className="space-y-md text-on-surface-variant text-body-md">
                {displayData.aiRecommendations.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-md items-start p-md bg-surface-container-low border border-outline-variant/10 rounded-xl">
                    <span className="material-symbols-outlined text-secondary select-none">assignment_turned_in</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendation */}
          <div className="mt-2xl p-xl bg-primary-container/20 border border-primary/20 rounded-2xl">
            <h4 className="text-title-lg text-primary flex items-center gap-sm mb-md">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              Final Recommendation
            </h4>
            <p className="text-body-lg text-on-primary-container">
              {displayData.recommendation}
            </p>
          </div>
        </section>

        {/* Rating & Feedback Form */}
        <section className="glass-panel rounded-3xl overflow-hidden p-3xl mt-xl print:hidden">
          <h3 className="text-headline-md text-primary mb-xs">Rate this AI Report</h3>
          <p className="text-on-surface-variant text-body-md mb-lg">
            Your feedback helps us train and improve the AI ROI analysis engine.
          </p>
          <div className="space-y-lg">
            <div>
              <label className="block text-label-md text-on-surface-variant mb-xs">Rating</label>
              <div className="flex gap-sm">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform active:scale-90 hover:scale-110 cursor-pointer"
                  >
                    <span 
                      className="material-symbols-outlined text-[32px]"
                      style={{
                        fontVariationSettings: rating >= star ? "'FILL' 1" : undefined,
                        color: rating >= star ? "#e0b034" : "var(--color-outline-variant)"
                      }}
                    >
                      star
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-label-md text-on-surface-variant mb-xs">Comments & Feedback</label>
              <textarea
                rows={3}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="What went well? Any calculations or assumptions that were off?"
                className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
              />
            </div>
            
            <button
              onClick={submitFeedback}
              className="px-xl py-md bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer"
            >
              Submit Rating & Review
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-3xl space-y-lg">
          <h3 className="text-headline-md text-center text-on-surface">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="glass-panel p-lg rounded-2xl cursor-pointer hover:bg-surface-variant/30 transition-all group"
              >
                <summary className="flex justify-between items-center mb-sm list-none">
                  <span className="text-body-lg text-on-surface font-semibold">{f.q}</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-3xl mb-2xl relative p-3xl rounded-[2rem] bg-surface-container-highest border border-white/10 overflow-hidden text-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(180,197,255,0.08)_0%,transparent_70%)] animate-pulse" />
          </div>
          <div className="relative z-10 space-y-xl">
            <h2 className="text-display-lg max-w-2xl mx-auto leading-tight">
              Generate Professional Advertiser ROI Reports in Seconds
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Empower your marketing team with AI-driven insights that drive growth and maximize
              every dollar spent.
            </p>
            <Link
              to="/generate"
              className="inline-block px-3xl py-lg bg-primary text-on-primary rounded-full text-headline-md font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95"
            >
              Start Generating Reports
            </Link>
          </div>
        </section>

        <footer className="pb-xl text-center text-on-surface-variant text-label-md">
          © 2023 Telangana Today. All intelligence benchmarks are AI-simulated and based on
          available network metadata.
        </footer>
      </div>
    </AppShell>
  );
}

function ActionBtn({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="px-lg py-sm bg-surface-container border border-outline-variant rounded-lg flex items-center gap-sm text-body-md hover:bg-surface-variant transition-all">
      <span className="material-symbols-outlined text-body-lg">{icon}</span>
      {label}
    </button>
  );
}

function SectionTitle({
  icon,
  color,
  children,
}: {
  icon: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <h4 className="text-title-lg text-on-surface flex items-center gap-sm mb-md">
      <span className={`material-symbols-outlined ${color}`}>{icon}</span>
      {children}
    </h4>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex justify-between border-b border-outline-variant/10 pb-sm">
      <span>{label}</span>
      <span className="text-on-surface font-semibold">{value}</span>
    </li>
  );
}

function PillCard({
  tone,
  children,
}: {
  tone: "secondary" | "error";
  children: React.ReactNode;
}) {
  const cls =
    tone === "secondary"
      ? "bg-secondary/5 border-secondary/10"
      : "bg-error/5 border-error/10";
  return (
    <div className={`p-md border rounded-xl text-body-md ${cls}`}>{children}</div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface-container-highest/30 p-md rounded-xl border border-white/5">
      <div className="text-label-md text-on-surface-variant">{label}</div>
      <div className="text-title-lg font-bold text-on-surface">{value}</div>
    </div>
  );
}
