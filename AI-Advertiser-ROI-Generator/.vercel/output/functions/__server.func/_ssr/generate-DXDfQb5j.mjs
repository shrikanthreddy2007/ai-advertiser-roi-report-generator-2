import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { F as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppShell } from "./AppShell-D2LxVdlF.mjs";
import { t as generateReportFn } from "./report-api-CqHvI0_R.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/generate-DXDfQb5j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		n: "01",
		color: "primary",
		icon: "edit_note",
		title: "Enter Campaign Data",
		body: "Input core metrics including reach, budget, and placements for the reporting period."
	},
	{
		n: "02",
		color: "secondary",
		icon: "psychology",
		title: "AI Analyzes Performance",
		body: "Our engine cross-references millions of data points to calculate real-world ROI impact."
	},
	{
		n: "03",
		color: "tertiary",
		icon: "summarize",
		title: "Generate ROI Summary",
		body: "Review a comprehensive breakdown of effectiveness and key performance indicators."
	},
	{
		n: "04",
		color: "primary",
		icon: "ios_share",
		title: "Export & Share Report",
		body: "Download white-labeled PDF or share a dynamic link directly with advertisers."
	}
];
var stepColor = {
	primary: {
		hoverBorder: "hover:border-primary/40",
		iconBg: "bg-primary/10",
		iconText: "text-primary",
		numberBg: "group-hover:bg-primary",
		numberText: "group-hover:text-on-primary"
	},
	secondary: {
		hoverBorder: "hover:border-secondary/40",
		iconBg: "bg-secondary/10",
		iconText: "text-secondary",
		numberBg: "group-hover:bg-secondary",
		numberText: "group-hover:text-on-secondary"
	},
	tertiary: {
		hoverBorder: "hover:border-tertiary/40",
		iconBg: "bg-tertiary/10",
		iconText: "text-tertiary",
		numberBg: "group-hover:bg-tertiary",
		numberText: "group-hover:text-on-tertiary"
	}
};
var presets = {
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
		objective: "conversion"
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
		objective: "conversion"
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
		objective: "traffic"
	}
};
function GeneratePage() {
	const navigate = useNavigate();
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [objective, setObjective] = (0, import_react.useState)("conversion");
	const [formState, setFormState] = (0, import_react.useState)({
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
		notes: ""
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value
		}));
	};
	const applyPreset = (type) => {
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
			notes: preset.notes
		});
		setObjective(preset.objective);
		toast.info(`Pre-filled using ${type === "ecommerce" ? "Zara E-Commerce" : type === "saas" ? "DataFlow SaaS" : "Restaurant Local"} template!`);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		const reach = Number(formState.reach || 0);
		const impressions = Number(formState.impressions || 0);
		const clicks = Number(formState.clicks || 0);
		const budget = Number(formState.budget || 0);
		const conversions = Number(formState.conversions || 0);
		const ctr = impressions > 0 ? (clicks / impressions * 100).toFixed(2) : "0.00";
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
			objective,
			notes: formState.notes
		};
		try {
			const result = await generateReportFn({ data: payload });
			if (!result) throw new Error("Failed to generate report");
			localStorage.setItem("current_report_inputs", JSON.stringify(payload));
			localStorage.setItem("current_report", JSON.stringify(result));
			if (typeof window !== "undefined") {
				const historyStr = localStorage.getItem("report_history");
				let history = [];
				if (historyStr) try {
					history = JSON.parse(historyStr);
				} catch (err) {
					history = [];
				}
				const historyItem = {
					id: `TT-${Math.floor(1e3 + Math.random() * 9e3)}`,
					date: (/* @__PURE__ */ new Date()).toLocaleDateString(),
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-[1200px] mx-auto w-full space-y-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-headline-lg font-semibold",
				children: "Generate ROI Report"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-on-surface-variant text-body-lg",
				children: "Provide campaign details to let our AI engine analyze performance and provide deep insights."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-12 gap-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-12 lg:col-span-8 space-y-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel rounded-xl p-xl shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-lg border-b border-outline-variant/30 pb-md flex-wrap gap-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined text-primary",
									children: "campaign"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-title-lg",
									children: "Campaign Specifics"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-sm items-center flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-on-surface-variant font-medium",
										children: "Presets:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => applyPreset("ecommerce"),
										className: "px-md py-1 bg-surface-container-low hover:bg-primary/10 hover:text-primary border border-outline-variant/50 rounded-full text-xs font-bold transition-all",
										children: "E-Commerce"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => applyPreset("saas"),
										className: "px-md py-1 bg-surface-container-low hover:bg-primary/10 hover:text-primary border border-outline-variant/50 rounded-full text-xs font-bold transition-all",
										children: "SaaS Launch"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => applyPreset("retail"),
										className: "px-md py-1 bg-surface-container-low hover:bg-primary/10 hover:text-primary border border-outline-variant/50 rounded-full text-xs font-bold transition-all",
										children: "Retail Local"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "grid grid-cols-2 gap-xl",
							onSubmit: handleSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Advertiser Name",
									hint: "Full legal name for reporting.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "clientName",
										required: true,
										value: formState.clientName,
										onChange: handleInputChange,
										className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all",
										placeholder: "e.g. Zara Boutique"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Campaign Name",
									hint: "Unique identifier for this specific flight.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "campaignName",
										required: true,
										value: formState.campaignName,
										onChange: handleInputChange,
										className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all",
										placeholder: "e.g. Zara Summer fashion Blowout"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Duration",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none",
											children: "date_range"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "duration",
											required: true,
											value: formState.duration,
											onChange: handleInputChange,
											className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all",
											placeholder: "e.g. 45 Days"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Type",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "platform",
										value: formState.platform,
										onChange: handleInputChange,
										className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all appearance-none cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Programmatic Display",
												children: "Programmatic Display"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Connected TV (CTV)",
												children: "Connected TV (CTV)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Social Media",
												children: "Social Media"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Search (SEM)",
												children: "Search (SEM)"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 mt-md pt-md border-t border-outline-variant/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-body-lg font-semibold mb-lg",
										children: "Performance Metrics"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Total Impressions",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "impressions",
										required: true,
										type: "number",
										placeholder: "0",
										value: formState.impressions,
										onChange: handleInputChange,
										className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Unique Reach",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "reach",
										required: true,
										type: "number",
										placeholder: "0",
										value: formState.reach,
										onChange: handleInputChange,
										className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Number of Placements",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "placement",
										required: true,
										type: "number",
										placeholder: "0",
										value: formState.placement,
										onChange: handleInputChange,
										className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Budget ($)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant",
											children: "$"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "budget",
											required: true,
											type: "number",
											placeholder: "0.00",
											value: formState.budget,
											onChange: handleInputChange,
											className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md pl-8 text-body-md input-gradient-focus transition-all"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Clicks",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "clicks",
										required: true,
										type: "number",
										placeholder: "0",
										value: formState.clicks,
										onChange: handleInputChange,
										className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Conversions",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "conversions",
										required: true,
										type: "number",
										placeholder: "0",
										value: formState.conversions,
										onChange: handleInputChange,
										className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-label-md text-on-surface-variant mb-xs",
										children: "Primary Objective"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-sm",
										children: [
											{
												id: "awareness",
												label: "Brand Awareness"
											},
											{
												id: "conversion",
												label: "Conversion"
											},
											{
												id: "traffic",
												label: "Traffic"
											}
										].map((o) => {
											const checked = objective === o.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "px-lg py-sm rounded-full border border-outline-variant cursor-pointer hover:bg-surface-variant/30 transition-all flex items-center gap-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "radio",
														name: "objective",
														className: "hidden",
														checked,
														onChange: () => setObjective(o.id)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-3 h-3 rounded-full border ${checked ? "bg-primary border-primary" : "border-outline"}` }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-body-md",
														children: o.label
													})
												]
											}, o.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-label-md text-on-surface-variant mb-xs",
										children: "Additional Context / Notes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "notes",
										value: formState.notes,
										onChange: handleInputChange,
										rows: 3,
										placeholder: "Specify any attribution windows or unique market conditions...",
										className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2 flex justify-end gap-md mt-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "px-xl py-md text-body-md font-semibold text-on-surface-variant hover:text-on-surface transition-all",
										children: "Discard"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: submitting,
										className: "bg-primary text-on-primary px-2xl py-md rounded-xl text-body-md font-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-70 flex items-center gap-sm",
										children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "material-symbols-outlined animate-spin",
											children: "sync"
										}), "Analyzing..."] }) : "Generate Summary"
									})]
								})
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 lg:col-span-4 space-y-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel rounded-xl p-lg space-y-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-secondary",
								children: "info"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-title-lg",
								children: "Validation Check"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-md p-md rounded-lg bg-surface-variant/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined text-secondary text-sm",
									children: "check_circle"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-label-md",
									children: "Advertiser Data"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-on-surface-variant",
									children: "Validated and verified."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-md p-md rounded-lg bg-surface-variant/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined text-error text-sm",
									children: "warning"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-label-md text-error",
									children: "Budget Discrepancy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-on-surface-variant",
									children: "Check impressions vs budget ratio."
								})] })]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-xl h-64 group bg-gradient-to-br from-primary-container/40 via-tertiary-container/30 to-secondary-container/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-48 h-48 bg-primary/20 blur-3xl rounded-full" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 p-lg z-20 w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-primary/20 text-primary px-sm py-xs rounded text-[10px] font-bold uppercase tracking-widest mb-sm inline-block",
										children: "Pro Insight"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-title-lg mb-xs",
										children: "AI Forecast Engine"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-on-surface-variant line-clamp-2",
										children: "Our proprietary algorithm predicts ROI variance based on multi-channel placements."
									})
								]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-xl border-t border-outline-variant/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-headline-md font-semibold",
						children: "Workflow Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 mx-xl bg-outline-variant/30" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg",
					children: steps.map((s) => {
						const c = stepColor[s.color];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `glass-panel p-lg rounded-xl relative group transition-all ${c.hoverBorder}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `absolute -top-3 -left-3 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant text-label-md font-bold transition-all ${c.numberBg} ${c.numberText}`,
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center mb-md group-hover:scale-110 transition-transform`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `material-symbols-outlined ${c.iconText}`,
										children: s.icon
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-body-lg font-bold mb-sm",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-on-surface-variant",
									children: s.body
								})
							]
						}, s.n);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-2xl pt-lg border-t border-outline-variant/20 flex flex-wrap gap-md justify-between items-center text-on-surface-variant",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs",
					children: "© 2024 Telangana Today AI Division. All analytical data protected by enterprise encryption."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-xs hover:text-primary transition-colors",
							href: "#",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-xs hover:text-primary transition-colors",
							href: "#",
							children: "Documentation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-xs hover:text-primary transition-colors",
							href: "#",
							children: "Support"
						})
					]
				})]
			})
		]
	}) });
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "col-span-2 md:col-span-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-label-md text-on-surface-variant mb-xs",
				children: label
			}),
			children,
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] text-on-surface-variant/60 mt-1 block",
				children: hint
			})
		]
	});
}
//#endregion
export { GeneratePage as component };
