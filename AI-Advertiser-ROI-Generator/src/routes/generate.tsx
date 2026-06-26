import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { toast } from "sonner";
import { generateReportFn } from "@/lib/report-api";

export const Route = createFileRoute("/generate")({
  head: () => ({
    meta: [
      { title: "Generate ROI Report — Telangana Today" },
      {
        name: "description",
        content:
          "Provide campaign details and let the AI engine analyze performance and deliver deep ROI insights.",
      },
    ],
  }),
  component: GeneratePage,
});

const steps = [
  { n: "01", color: "primary", icon: "edit_note", title: "Enter Campaign Data", body: "Input core metrics including reach, budget, and placements for the reporting period." },
  { n: "02", color: "secondary", icon: "psychology", title: "AI Analyzes Performance", body: "Our engine cross-references millions of data points to calculate real-world ROI impact." },
  { n: "03", color: "tertiary", icon: "summarize", title: "Generate ROI Summary", body: "Review a comprehensive breakdown of effectiveness and key performance indicators." },
  { n: "04", color: "primary", icon: "ios_share", title: "Export & Share Report", body: "Download white-labeled PDF or share a dynamic link directly with advertisers." },
] as const;

const stepColor: Record<string, { hoverBorder: string; iconBg: string; iconText: string; numberBg: string; numberText: string }> = {
  primary: { hoverBorder: "hover:border-primary/40", iconBg: "bg-primary/10", iconText: "text-primary", numberBg: "group-hover:bg-primary", numberText: "group-hover:text-on-primary" },
  secondary: { hoverBorder: "hover:border-secondary/40", iconBg: "bg-secondary/10", iconText: "text-secondary", numberBg: "group-hover:bg-secondary", numberText: "group-hover:text-on-secondary" },
  tertiary: { hoverBorder: "hover:border-tertiary/40", iconBg: "bg-tertiary/10", iconText: "text-tertiary", numberBg: "group-hover:bg-tertiary", numberText: "group-hover:text-on-tertiary" },
};

const presets = {
  ecommerce: {
    clientName: "Zara Boutique",
    campaignName: "Zara Summer Fashion Blowout",
    duration: "45 Days",
    platform: "Social Media",
    impressions: "850000",
    reach: "420000",
    placement: "6",
    budget: "18500",
    clicks: "68000",
    conversions: "5440",
    notes: "High conversion flight focused on Gen Z apparel discounts. Main attribution window is 7-day click.",
    objective: "conversion",
  },
  saas: {
    clientName: "DataFlow Systems",
    campaignName: "DataFlow Enterprise Beta Signup",
    duration: "60 Days",
    platform: "Search (SEM)",
    impressions: "240000",
    reach: "150000",
    placement: "2",
    budget: "35000",
    clicks: "19200",
    conversions: "960",
    notes: "Targeting CIOs and IT Decision makers. Low volume, high intent placements.",
    objective: "conversion",
  },
  retail: {
    clientName: "Spicy Grill Restaurants",
    campaignName: "Spicy Grill Weekend Lunch Special",
    duration: "14 Days",
    platform: "Connected TV (CTV)",
    impressions: "1200000",
    reach: "850000",
    placement: "8",
    budget: "7500",
    clicks: "48000",
    conversions: "2400",
    notes: "Hyperlocal targeting in tier-1 tech parks. Aiming to drive dinner and weekend reservations.",
    objective: "traffic",
  }
} as const;

function GeneratePage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [objective, setObjective] = useState("conversion");
  const [formState, setFormState] = useState({
    clientName: "",
    campaignName: "",
    duration: "",
    platform: "Programmatic Display",
    impressions: "",
    reach: "",
    placement: "",
    budget: "",
    clicks: "",
    conversions: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const applyPreset = (type: keyof typeof presets) => {
    const preset = presets[type];
    setFormState({
      clientName: preset.clientName,
      campaignName: preset.campaignName,
      duration: preset.duration,
      platform: preset.platform,
      impressions: preset.impressions,
      reach: preset.reach,
      placement: preset.placement,
      budget: preset.budget,
      clicks: preset.clicks,
      conversions: preset.conversions,
      notes: preset.notes,
    });
    setObjective(preset.objective);
    toast.info(`Pre-filled using ${type === 'ecommerce' ? 'Zara E-Commerce' : type === 'saas' ? 'DataFlow SaaS' : 'Restaurant Local'} template!`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const reach = Number(formState.reach || 0);
    const impressions = Number(formState.impressions || 0);
    const clicks = Number(formState.clicks || 0);
    const budget = Number(formState.budget || 0);
    const conversions = Number(formState.conversions || 0);

    // Calculate CTR
    const ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : "0.00";

    const payload = {
      clientName: formState.clientName,
      campaignName: formState.campaignName,
      duration: formState.duration,
      platform: formState.platform,
      impressions,
      reach,
      placement: formState.placement,
      budget,
      clicks,
      ctr,
      conversions,
      objective: objective,
      notes: formState.notes,
    };

    try {
      // Call server function directly
      const result = await generateReportFn({ data: payload });

      if (!result) {
        throw new Error("Failed to generate report");
      }

      // Store in localStorage
      localStorage.setItem("current_report_inputs", JSON.stringify(payload));
      localStorage.setItem("current_report", JSON.stringify(result));

      // Append to report history in localStorage
      if (typeof window !== "undefined") {
        const historyStr = localStorage.getItem("report_history");
        let history = [];
        if (historyStr) {
          try {
            history = JSON.parse(historyStr);
          } catch (err) {
            history = [];
          }
        }
        const historyItem = {
          id: `TT-${Math.floor(1000 + Math.random() * 9000)}`,
          date: new Date().toLocaleDateString(),
          ...result
        };
        history.unshift(historyItem);
        localStorage.setItem("report_history", JSON.stringify(history));
      }

      toast.success("ROI Report generated successfully!");
      navigate({ to: "/report" });
    } catch (error) {
      console.error(error);
      toast.error("Could not generate report.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppShell>
      <div className="max-w-[1200px] mx-auto w-full space-y-xl">
        <section>
          <h2 className="text-headline-lg font-semibold">Generate ROI Report</h2>
          <p className="text-on-surface-variant text-body-lg">
            Provide campaign details to let our AI engine analyze performance and provide deep insights.
          </p>
        </section>

        <section className="grid grid-cols-12 gap-lg">
          {/* Form */}
          <div className="col-span-12 lg:col-span-8 space-y-lg">
            <div className="glass-panel rounded-xl p-xl shadow-sm">
              <div className="flex items-center justify-between mb-lg border-b border-outline-variant/30 pb-md flex-wrap gap-md">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">campaign</span>
                  <h3 className="text-title-lg">Campaign Specifics</h3>
                </div>
                <div className="flex gap-sm items-center flex-wrap">
                  <span className="text-xs text-on-surface-variant font-medium">Presets:</span>
                  <button type="button" onClick={() => applyPreset("ecommerce")} className="px-md py-1 bg-surface-container-low hover:bg-primary/10 hover:text-primary border border-outline-variant/50 rounded-full text-xs font-bold transition-all">E-Commerce</button>
                  <button type="button" onClick={() => applyPreset("saas")} className="px-md py-1 bg-surface-container-low hover:bg-primary/10 hover:text-primary border border-outline-variant/50 rounded-full text-xs font-bold transition-all">SaaS Launch</button>
                  <button type="button" onClick={() => applyPreset("retail")} className="px-md py-1 bg-surface-container-low hover:bg-primary/10 hover:text-primary border border-outline-variant/50 rounded-full text-xs font-bold transition-all">Retail Local</button>
                </div>
              </div>
              <form className="grid grid-cols-2 gap-xl" onSubmit={handleSubmit}>
                <Field label="Advertiser Name" hint="Full legal name for reporting.">
                  <input
                    name="clientName"
                    required
                    value={formState.clientName}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
                    placeholder="e.g. Zara Boutique"
                  />
                </Field>
                <Field label="Campaign Name" hint="Unique identifier for this specific flight.">
                  <input
                    name="campaignName"
                    required
                    value={formState.campaignName}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
                    placeholder="e.g. Zara Summer fashion Blowout"
                  />
                </Field>
                <Field label="Duration">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                      date_range
                    </span>
                    <input
                      name="duration"
                      required
                      value={formState.duration}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
                      placeholder="e.g. 45 Days"
                    />
                  </div>
                </Field>
                <Field label="Type">
                  <select name="platform" value={formState.platform} onChange={handleInputChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all appearance-none cursor-pointer">
                    <option value="Programmatic Display">Programmatic Display</option>
                    <option value="Connected TV (CTV)">Connected TV (CTV)</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Search (SEM)">Search (SEM)</option>
                  </select>
                </Field>

                <div className="col-span-2 mt-md pt-md border-t border-outline-variant/30">
                  <h4 className="text-body-lg font-semibold mb-lg">Performance Metrics</h4>
                </div>

                <Field label="Total Impressions">
                  <input name="impressions" required type="number" placeholder="0" value={formState.impressions} onChange={handleInputChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all" />
                </Field>
                <Field label="Unique Reach">
                  <input name="reach" required type="number" placeholder="0" value={formState.reach} onChange={handleInputChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all" />
                </Field>
                <Field label="Number of Placements">
                  <input name="placement" required type="number" placeholder="0" value={formState.placement} onChange={handleInputChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all" />
                </Field>
                <Field label="Budget ($)">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">$</span>
                    <input name="budget" required type="number" placeholder="0.00" value={formState.budget} onChange={handleInputChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md pl-8 text-body-md input-gradient-focus transition-all" />
                  </div>
                </Field>
                <Field label="Clicks">
                  <input name="clicks" required type="number" placeholder="0" value={formState.clicks} onChange={handleInputChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all" />
                </Field>
                <Field label="Conversions">
                  <input name="conversions" required type="number" placeholder="0" value={formState.conversions} onChange={handleInputChange} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all" />
                </Field>

                <div className="col-span-2">
                  <label className="block text-label-md text-on-surface-variant mb-xs">Primary Objective</label>
                  <div className="flex flex-wrap gap-sm">
                    {[
                      { id: "awareness", label: "Brand Awareness" },
                      { id: "conversion", label: "Conversion" },
                      { id: "traffic", label: "Traffic" },
                    ].map((o) => {
                      const checked = objective === o.id;
                      return (
                        <label
                          key={o.id}
                          className="px-lg py-sm rounded-full border border-outline-variant cursor-pointer hover:bg-surface-variant/30 transition-all flex items-center gap-xs"
                        >
                          <input
                            type="radio"
                            name="objective"
                            className="hidden"
                            checked={checked}
                            onChange={() => setObjective(o.id)}
                          />
                          <div
                            className={`w-3 h-3 rounded-full border ${
                              checked ? "bg-primary border-primary" : "border-outline"
                            }`}
                          />
                          <span className="text-body-md">{o.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-label-md text-on-surface-variant mb-xs">
                    Additional Context / Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formState.notes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Specify any attribution windows or unique market conditions..."
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
                  />
                </div>

                <div className="col-span-2 flex justify-end gap-md mt-lg">
                  <button
                    type="button"
                    className="px-xl py-md text-body-md font-semibold text-on-surface-variant hover:text-on-surface transition-all"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-primary text-on-primary px-2xl py-md rounded-xl text-body-md font-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-70 flex items-center gap-sm"
                  >
                    {submitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">sync</span>
                        Analyzing...
                      </>
                    ) : (
                      "Generate Summary"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar widgets */}
          <div className="col-span-12 lg:col-span-4 space-y-lg">
            <div className="glass-panel rounded-xl p-lg space-y-lg">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary">info</span>
                <h3 className="text-title-lg">Validation Check</h3>
              </div>
              <div className="space-y-md">
                <div className="flex items-start gap-md p-md rounded-lg bg-surface-variant/30">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  <div>
                    <p className="text-label-md">Advertiser Data</p>
                    <p className="text-xs text-on-surface-variant">Validated and verified.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md p-md rounded-lg bg-surface-variant/30">
                  <span className="material-symbols-outlined text-error text-sm">warning</span>
                  <div>
                    <p className="text-label-md text-error">Budget Discrepancy</p>
                    <p className="text-xs text-on-surface-variant">
                      Check impressions vs budget ratio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl h-64 group bg-gradient-to-br from-primary-container/40 via-tertiary-container/30 to-secondary-container/40">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-10" />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 p-lg z-20 w-full">
                <div className="bg-primary/20 text-primary px-sm py-xs rounded text-[10px] font-bold uppercase tracking-widest mb-sm inline-block">
                  Pro Insight
                </div>
                <h4 className="text-title-lg mb-xs">AI Forecast Engine</h4>
                <p className="text-xs text-on-surface-variant line-clamp-2">
                  Our proprietary algorithm predicts ROI variance based on multi-channel placements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="pt-xl border-t border-outline-variant/20">
          <div className="flex items-center justify-between mb-lg">
            <h3 className="text-headline-md font-semibold">Workflow Overview</h3>
            <div className="h-px flex-1 mx-xl bg-outline-variant/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {steps.map((s) => {
              const c = stepColor[s.color];
              return (
                <div
                  key={s.n}
                  className={`glass-panel p-lg rounded-xl relative group transition-all ${c.hoverBorder}`}
                >
                  <div
                    className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant text-label-md font-bold transition-all ${c.numberBg} ${c.numberText}`}
                  >
                    {s.n}
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center mb-md group-hover:scale-110 transition-transform`}
                  >
                    <span className={`material-symbols-outlined ${c.iconText}`}>{s.icon}</span>
                  </div>
                  <h4 className="text-body-lg font-bold mb-sm">{s.title}</h4>
                  <p className="text-xs text-on-surface-variant">{s.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="mt-2xl pt-lg border-t border-outline-variant/20 flex flex-wrap gap-md justify-between items-center text-on-surface-variant">
          <p className="text-xs">
            © 2024 Telangana Today AI Division. All analytical data protected by enterprise encryption.
          </p>
          <div className="flex gap-lg">
            <a className="text-xs hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs hover:text-primary transition-colors" href="#">Documentation</a>
            <a className="text-xs hover:text-primary transition-colors" href="#">Support</a>
          </div>
        </footer>
      </div>
    </AppShell>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="col-span-2 md:col-span-1">
      <label className="block text-label-md text-on-surface-variant mb-xs">{label}</label>
      {children}
      {hint && <span className="text-[11px] text-on-surface-variant/60 mt-1 block">{hint}</span>}
    </div>
  );
}
