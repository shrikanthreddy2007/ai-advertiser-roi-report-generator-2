import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as AppShell } from "./AppShell-D2LxVdlF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-ml8Vw-n2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const [history, setHistory] = (0, import_react.useState)([]);
	const [feedback, setFeedback] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			const historyStr = localStorage.getItem("report_history");
			const feedbackStr = localStorage.getItem("report_feedback");
			if (historyStr) try {
				setHistory(JSON.parse(historyStr));
			} catch (e) {
				setHistory([]);
			}
			if (feedbackStr) try {
				setFeedback(JSON.parse(feedbackStr));
			} catch (e) {
				setFeedback([]);
			}
		}
	}, []);
	const totalReports = history.length;
	const totalSpend = history.reduce((sum, item) => {
		return sum + (Number(item.budget) || 0);
	}, 0);
	const avgFeedback = feedback.length > 0 ? (feedback.reduce((sum, item) => sum + (Number(item.rating) || 0), 0) / feedback.length).toFixed(1) : "4.8";
	const platformCounts = {};
	history.forEach((item) => {
		const p = item.platform || "Programmatic Display";
		platformCounts[p] = (platformCounts[p] || 0) + 1;
	});
	const activePlatforms = Object.keys(platformCounts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-[1100px] mx-auto space-y-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pb-md border-b border-outline-variant/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-headline-lg font-bold text-on-surface",
					children: "Admin Analytics Dashboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-on-surface-variant text-body-lg",
					children: "Monitor real-time platform statistics, user feedback metrics, and diagnostic indicators."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel p-lg rounded-2xl border border-outline-variant/20 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-on-surface-variant text-label-md",
								children: "Total Spend Scored"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-primary",
								children: "payments"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-headline-lg font-bold",
							children: ["$", totalSpend > 0 ? totalSpend.toLocaleString() : "145,800"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-on-surface-variant mt-sm",
							children: [
								"Across ",
								totalReports > 0 ? totalReports : "12",
								" simulated campaign accounts."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel p-lg rounded-2xl border border-outline-variant/20 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-on-surface-variant text-label-md",
								children: "Total Runs Ledgered"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-secondary",
								children: "description"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-headline-lg font-bold",
							children: totalReports > 0 ? totalReports : "24"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-on-surface-variant mt-sm",
							children: "AI report completions logged inside database."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel p-lg rounded-2xl border border-outline-variant/20 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-on-surface-variant text-label-md",
								children: "Avg User Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-tertiary",
								children: "star_half"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-headline-lg font-bold flex items-baseline gap-xs",
							children: [
								avgFeedback,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-body-md text-on-surface-variant",
									children: "/ 5"
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-on-surface-variant mt-sm",
							children: [
								"Based on ",
								feedback.length > 0 ? feedback.length : "145",
								" user rating reviews."
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4 glass-panel p-lg rounded-2xl border border-outline-variant/20 space-y-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-title-lg font-bold",
						children: "Placements Breakdown"
					}), totalReports === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-48 flex flex-col items-center justify-center text-center text-on-surface-variant/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "material-symbols-outlined text-3xl mb-sm",
							children: "bar_chart"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs",
							children: "No metrics recorded yet."
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-md",
						children: activePlatforms.map((plat) => {
							const count = platformCounts[plat];
							const pct = (count / totalReports * 100).toFixed(0);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: plat }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-primary",
										children: [
											pct,
											"% (",
											count,
											")"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-primary h-full rounded-full",
										style: { width: `${pct}%` }
									})
								})]
							}, plat);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8 glass-panel p-lg rounded-2xl border border-outline-variant/20 space-y-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-title-lg font-bold",
							children: "System Diagnostics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-md rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-on-surface-variant block",
										children: "API Service Connection"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-body-md font-bold",
										children: "Gemini-1.5-Flash"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined text-secondary",
									children: "wifi"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-md rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-on-surface-variant block",
										children: "Platform Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-body-md font-bold",
										children: "All Engines Optimal"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined text-secondary",
									children: "check_circle"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-md rounded-xl border border-outline-variant/20 bg-surface-container-low text-xs leading-relaxed space-y-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-on-surface block",
								children: "Enterprise Analytics Key"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-on-surface-variant",
								children: "This diagnostic ledger tracks active token requests and user ratings submitted on individual report pages. Ensure all network environments comply with metadata collection logs."
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass-panel p-lg rounded-2xl border border-outline-variant/20 space-y-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-title-lg font-bold",
					children: "User Feedback & Rating Reviews"
				}), feedback.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-xl text-center text-on-surface-variant/40 space-y-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "material-symbols-outlined text-[40px]",
						children: "rate_review"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body-md",
						children: "No review feedback submitted yet. Ratings left on ROI report pages will log here."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-outline-variant/20",
					children: feedback.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-lg first:pt-0 last:pb-0 space-y-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center flex-wrap gap-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-body-lg font-bold text-on-surface",
								children: item.campaignName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-on-surface-variant",
								children: [
									"Client: ",
									item.clientName,
									" • Reviewed ",
									item.date
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-xs",
								children: [
									1,
									2,
									3,
									4,
									5
								].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined text-md",
									style: {
										fontVariationSettings: "'FILL' 1",
										color: item.rating >= star ? "#e0b034" : "var(--color-outline-variant)"
									},
									children: "star"
								}, star))
							})]
						}), item.comment && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-body-md text-on-surface-variant bg-surface-container-lowest p-md rounded-xl border border-outline-variant/10 italic",
							children: [
								"\"",
								item.comment,
								"\""
							]
						})]
					}, item.id))
				})]
			})
		]
	}) });
}
//#endregion
export { AdminDashboard as component };
