import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { F as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppShell } from "./AppShell-D2LxVdlF.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-BYvn66cW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HistoryPage() {
	const navigate = useNavigate();
	const [history, setHistory] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			const historyStr = localStorage.getItem("report_history");
			if (historyStr) try {
				setHistory(JSON.parse(historyStr));
			} catch (e) {
				setHistory([]);
			}
		}
	}, []);
	const handleViewReport = (report) => {
		localStorage.setItem("current_report", JSON.stringify(report));
		const inputs = {
			clientName: report.clientName,
			campaignName: report.campaignName,
			duration: report.duration,
			platform: report.platform,
			impressions: report.impressions ? Number(report.impressions.toString().replace(/[^0-9]/g, "")) : 1e6,
			reach: report.reach ? Number(report.reach.toString().replace(/[^0-9]/g, "")) : 5e5,
			placement: "4",
			budget: report.budget ? Number(report.budget.toString().replace(/[^0-9]/g, "")) : 1e4,
			clicks: report.clicks ? Number(report.clicks.toString().replace(/[^0-9]/g, "")) : 5e4,
			ctr: report.ctr || "5.00",
			conversions: report.conversions ? Number(report.conversions.toString().replace(/[^0-9]/g, "")) : 5e3,
			objective: "conversion",
			notes: ""
		};
		localStorage.setItem("current_report_inputs", JSON.stringify(inputs));
		toast.success(`Loading report: ${report.campaignName}`);
		navigate({ to: "/report" });
	};
	const handleDelete = (id, e) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-[1100px] mx-auto space-y-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-wrap gap-md justify-between items-center pb-md border-b border-outline-variant/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-headline-lg font-bold text-on-surface",
				children: "Generation History"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-on-surface-variant text-body-lg",
				children: "Access previous campaign analytics reports and performance projections."
			})] }), history.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: clearAllHistory,
				className: "px-lg py-sm bg-error/10 hover:bg-error hover:text-on-error border border-error/20 text-error rounded-lg flex items-center gap-sm text-body-md transition-all cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "material-symbols-outlined text-body-lg",
					children: "delete_sweep"
				}), "Clear All"]
			})]
		}), history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "glass-panel p-3xl rounded-3xl text-center space-y-lg max-w-xl mx-auto mt-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "material-symbols-outlined text-[64px] text-on-surface-variant/40",
					children: "history_toggle_off"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-headline-md font-bold text-on-surface",
						children: "No History Found"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-on-surface-variant text-body-md leading-relaxed",
						children: "You haven't generated any ROI analysis reports yet. Input campaign specifics to create your first ledger entry."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate({ to: "/generate" }),
					className: "inline-block px-xl py-md bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer",
					children: "Generate First Report"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-lg mt-lg",
			children: history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: () => handleViewReport(item),
				className: "glass-panel p-xl rounded-2xl hover:border-primary/40 transition-all group cursor-pointer flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-start gap-md mb-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-sm py-xs bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold",
							children: item.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-on-surface-variant",
							children: item.date
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-title-lg font-bold group-hover:text-primary transition-colors line-clamp-1 mb-xs",
						children: item.campaignName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-on-surface-variant mb-lg",
						children: ["Client: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-on-surface font-semibold",
							children: item.clientName
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-md bg-surface-container-low p-md rounded-xl border border-outline-variant/20 mb-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1",
								children: "ROI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-body-md font-bold text-secondary",
								children: item.roi || "N/A"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1",
								children: "Platform"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-body-md font-bold text-on-surface line-clamp-1",
								children: item.platform
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1",
								children: "Spend"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-body-md font-bold text-on-surface",
								children: ["$", Number(item.budget || 0).toLocaleString()]
							})] })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center border-t border-outline-variant/20 pt-md mt-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-secondary flex items-center gap-xs font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "material-symbols-outlined text-sm",
							children: "trending_up"
						}), item.roiStatus || "Positive"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => handleDelete(item.id, e),
							className: "p-sm hover:bg-error/10 hover:text-error text-on-surface-variant rounded-lg transition-colors cursor-pointer",
							title: "Delete entry",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-body-lg",
								children: "delete"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "px-md py-sm bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-xs cursor-pointer",
							children: ["View Report", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-xs",
								children: "arrow_forward"
							})]
						})]
					})]
				})]
			}, item.id))
		})]
	}) });
}
//#endregion
export { HistoryPage as component };
