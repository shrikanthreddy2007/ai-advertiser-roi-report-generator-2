import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppShell } from "./AppShell-D2LxVdlF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BNl1ow-G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		icon: "auto_graph",
		color: "primary",
		title: "AI Report Generation",
		body: "Autonomous generation of deep-dive ROI analysis using LLM-based logic and statistical engines."
	},
	{
		icon: "history",
		color: "secondary",
		title: "Generation History",
		body: "A complete chronological ledger of every analysis run, allowing for point-in-time comparisons."
	},
	{
		icon: "bookmarks",
		color: "tertiary",
		title: "Saved Reports",
		body: "Pin your most critical performance reviews and collaborative templates for immediate team access."
	},
	{
		icon: "file_export",
		color: "primary",
		title: "Export Options",
		body: "Seamless export to PDF, XLSX, or live Notion dashboards with automated scheduling enabled."
	},
	{
		icon: "verified",
		color: "secondary",
		title: "AI Quality Rating",
		body: "Confidence scores for every projection, ensuring your marketing decisions are based on high-integrity data."
	},
	{
		icon: "admin_panel_settings",
		color: "tertiary",
		title: "Admin Analytics",
		body: "Global view of platform usage, credit allocation, and team efficiency metrics for larger enterprises."
	}
];
var testimonials = [
	{
		quote: "The ROI forecasting accuracy is unlike anything we've used before. It reduced our weekly reporting time from 14 hours to just 15 minutes.",
		name: "Sarah Miller",
		role: "Director of Growth, VeloTech",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJZLXCeAcNc5fVaArVdGs-sozjdIp9RulbrFOUO_N4srQexznZgdbeq5ng2k_6eiLzk9Ee7fKBL2o5WOnnoAjpQTUvcn65QhQQRafnhC678aO6QRC3vNnlcByPtkzDI3JiiiiCPcd93oZ0D2QefGW11MWISE0DvVeVq_ApUyaodW3n7Ia9WLxNPjQF8GkK7pcjY3C-Ihgb_M32gjFWyQtUrtDGpsTf3eNYrfERQ3m-Zrl4l23HD14Lor19mmLVf-_n8hKOkAeGy2c"
	},
	{
		quote: "Implementing Telangana Today changed our perspective on AI. The quality of insight provided by the ROI engine is truly enterprise-grade.",
		name: "David Grant",
		role: "Lead Strategist, Nexus Ad Group",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnOnYsIwJzXCejvgvrRYY9M8l8zSHFa7664c8Hj2cNsctBjM5qp_-z3UH-Ag0VHQ4nW8JuAtptR55hatjR_N9_JM2bAhyPTQ_U_LATbdcdQNat_UQ7AUEQPAvi-CHMl6ETdZKshsYQt5dw4RU_sEZwYWGBsNRlD58iDVnMmLmh5rv6fEQzFA6KKMuD4KxQt8NVcp7eBcsI7_6PPmXfWA-ALmWQIeWLZri2pOW4XUlhajkr3Bop-BpE-83h4qLhHXbk2JzXRqo6exo"
	},
	{
		quote: "Finally, a dashboard that speaks the language of marketing managers. The visual representation of ROI is clear, crisp, and extremely useful for client meetings.",
		name: "Elena Rodriguez",
		role: "VP of Marketing, GlobalStream",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtTjjXLUiCHk0bi-CaQaR0-_A7Igs4aDrQqc891lF8fmwRvA51QRcSN2-MQDo-BkGoeNkTd-Kvb4BKHIoZ_wmO9XFdcqMweLq0nz-7tLqHrSuJ-1qtLra_N_vEtQMJ65HuGE88RUCGyyLa98EBWvp0Gwg26_4BDHtYjzIMpTUOb1dCbwdpm8VhlfNMlon_7l0aUKu80GVnfKJHjIqPOShYIE4pvLuCBf-6__LYO5Z16SUDNrhd6tms5uueIacVZ6N9IKA0XW7Duz4"
	}
];
var colorMap = {
	primary: {
		bg: "bg-primary/10",
		hoverBg: "group-hover:bg-primary",
		hoverText: "group-hover:text-on-primary"
	},
	secondary: {
		bg: "bg-secondary/10",
		hoverBg: "group-hover:bg-secondary",
		hoverText: "group-hover:text-on-secondary"
	},
	tertiary: {
		bg: "bg-tertiary/10",
		hoverBg: "group-hover:bg-tertiary",
		hoverText: "group-hover:text-on-tertiary"
	}
};
function Dashboard() {
	const [stats, setStats] = (0, import_react.useState)({
		totalGenerated: 1248,
		avgRating: "4.8",
		campaignsProcessed: 856,
		todayDelta: 24,
		reviewsCount: 856
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			const historyStr = localStorage.getItem("report_history");
			const feedbackStr = localStorage.getItem("report_feedback");
			let historyCount = 0;
			let feedbackCount = 0;
			let feedbackSum = 0;
			if (historyStr) try {
				historyCount = JSON.parse(historyStr).length;
			} catch (e) {}
			if (feedbackStr) try {
				const feedback = JSON.parse(feedbackStr);
				feedbackCount = feedback.length;
				feedbackSum = feedback.reduce((sum, item) => sum + (Number(item.rating) || 0), 0);
			} catch (e) {}
			const totalGen = 1248 + historyCount;
			const campaignsProc = 856 + historyCount;
			setStats({
				totalGenerated: totalGen,
				avgRating: feedbackCount > 0 ? ((4.8 * 856 + feedbackSum) / (856 + feedbackCount)).toFixed(1) : "4.8",
				campaignsProcessed: campaignsProc,
				todayDelta: 24 + historyCount,
				reviewsCount: 856 + feedbackCount
			});
		}
	}, []);
	const dynamicKpis = [
		{
			label: "Total Generated",
			value: stats.totalGenerated.toLocaleString(),
			icon: "description",
			iconColor: "text-primary",
			delta: "12%",
			deltaLabel: "vs last month"
		},
		{
			label: "Avg AI Rating",
			value: stats.avgRating,
			suffix: "/5",
			icon: "star_half",
			iconColor: "text-secondary"
		},
		{
			label: "Campaigns Processed",
			value: stats.campaignsProcessed.toLocaleString(),
			icon: "rocket_launch",
			iconColor: "text-tertiary",
			delta: stats.todayDelta.toString(),
			deltaLabel: "today"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] -z-10 rounded-full animate-pulse-glow" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] -z-10 rounded-full" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1200px] mx-auto w-full space-y-3xl px-margin-mobile md:px-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mb-3xl relative grid grid-cols-1 lg:grid-cols-12 gap-xl items-center pt-md lg:pt-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-12 lg:col-span-7 flex flex-col justify-center items-start text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-[42px] md:text-[56px] lg:text-[68px] font-bold leading-[1.1] tracking-tight text-on-surface mb-[24px]",
								children: [
									"AI Advertiser ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "roi-gradient-text",
										children: "ROI Report"
									}),
									" Generator"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-on-surface-variant text-[16px] md:text-[18px] lg:text-[20px] leading-[1.8] max-w-[650px] mb-[36px] text-left",
								children: "Harness the power of neural-driven marketing analytics to dissect campaign performance. Transform raw ad data into actionable intelligence with precision AI-scoring and automated ROI projections."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center gap-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/generate",
									className: "bg-primary hover:bg-primary/90 text-on-primary px-xl py-md rounded-xl font-bold flex items-center gap-sm transition-all shadow-xl shadow-primary/20 text-[16px] active:scale-95 cursor-pointer",
									children: ["Generate Report", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "material-symbols-outlined text-[20px]",
										children: "auto_awesome"
									})]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-12 lg:col-span-5 relative group print:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative glass-panel rounded-3xl p-xl border border-white/10 shadow-2xl space-y-lg transform hover:-translate-y-1 transition-all duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center pb-md border-b border-white/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-secondary uppercase tracking-widest font-bold",
										children: "Real-time Analysis"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-body-lg font-bold text-on-surface",
										children: "Campaign Preview"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "material-symbols-outlined text-secondary animate-pulse",
										children: "monitoring"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-surface-container-low p-md rounded-xl border border-white/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-on-surface-variant uppercase tracking-wider block mb-xs",
												children: "Budget"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-body-lg font-bold text-on-surface",
												children: "$18,500"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-surface-container-low p-md rounded-xl border border-white/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-on-surface-variant uppercase tracking-wider block mb-xs",
												children: "Estimated ROI"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-body-lg font-bold text-secondary",
												children: "5.4x"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-surface-container-low p-md rounded-xl border border-white/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-on-surface-variant uppercase tracking-wider block mb-xs",
												children: "Impressions"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-body-lg font-bold text-on-surface",
												children: "850K"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-surface-container-low p-md rounded-xl border border-white/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-on-surface-variant uppercase tracking-wider block mb-xs",
												children: "CTR"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-body-lg font-bold text-primary",
												children: "8.0%"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-xs font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-on-surface-variant",
											children: "Social Media Engagement"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-secondary",
											children: "Optimal"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full bg-surface-container-highest h-3 rounded-full overflow-hidden border border-white/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-gradient-to-r from-primary to-secondary h-full rounded-full w-[82%]" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-xs text-xs text-on-surface-variant bg-surface-container-low p-sm rounded-lg border border-white/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-secondary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Attribution: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Zara Summer Fashion" })] })]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid grid-cols-12 gap-lg mb-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-lg",
						children: dynamicKpis.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card p-lg rounded-xl flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-on-surface-variant text-label-md",
									children: k.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `material-symbols-outlined ${k.iconColor}`,
									children: k.icon
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-headline-lg font-bold",
								children: [k.value, k.suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-body-md text-on-surface-variant",
									children: k.suffix
								})]
							})] }), k.delta ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-md flex items-center gap-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-secondary text-label-md font-bold flex items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "material-symbols-outlined text-sm",
											children: "trending_up"
										}),
										" ",
										k.delta
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-on-surface-variant text-label-md opacity-60",
									children: k.deltaLabel
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-md flex items-center gap-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-1",
									children: [[
										0,
										1,
										2,
										3
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary/30" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-on-surface-variant text-label-md opacity-60 ml-1",
									children: [
										"Based on ",
										stats.reviewsCount.toLocaleString(),
										" reviews"
									]
								})]
							})]
						}, k.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-12 lg:col-span-4 glass-card p-lg rounded-xl relative overflow-hidden group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-on-surface font-bold text-body-lg",
									children: "Monthly Usage"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-on-surface-variant hover:text-primary transition-all",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "material-symbols-outlined",
										children: "more_horiz"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-end justify-between h-32 gap-2 mt-4 px-2",
								children: [
									40,
									60,
									45,
									80,
									95,
									30,
									55
								].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-full rounded-t-sm transition-all ${h === 95 ? "bg-secondary hover:brightness-110" : "bg-outline-variant/30 hover:bg-primary/50"}`,
									style: { height: `${h}%` }
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-surface/20 to-transparent pointer-events-none" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mb-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-md mb-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[2px] bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-headline-md font-bold",
							children: "Advanced Capabilities"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg",
						children: features.map((f) => {
							const c = colorMap[f.color];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-card p-lg rounded-xl group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `w-12 h-12 ${c.bg} rounded-lg flex items-center justify-center mb-lg ${c.hoverBg} ${c.hoverText} transition-all duration-300`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "material-symbols-outlined",
											children: f.icon
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-title-lg font-bold mb-sm",
										children: f.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-body-md text-on-surface-variant leading-relaxed",
										children: f.body
									})
								]
							}, f.title);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mb-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-md mb-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[2px] bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-headline-md font-bold",
							children: "Trusted by Industry Experts"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-lg",
						children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card p-lg rounded-xl flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1 text-secondary mb-md",
									children: [
										0,
										1,
										2,
										3,
										4
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "material-symbols-outlined text-[18px]",
										style: { fontVariationSettings: "'FILL' 1" },
										children: "star"
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-body-md text-on-surface leading-relaxed italic mb-lg flex-1",
									children: [
										"\"",
										t.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: t.img,
										alt: t.name,
										className: "w-10 h-10 rounded-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-body-md font-bold",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-label-md text-on-surface-variant",
										children: t.role
									})] })]
								})
							]
						}, t.name))
					})]
				})
			]
		})
	] });
}
//#endregion
export { Dashboard as component };
