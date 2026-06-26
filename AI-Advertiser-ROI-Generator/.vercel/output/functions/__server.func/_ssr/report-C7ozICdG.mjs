import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppShell } from "./AppShell-D2LxVdlF.mjs";
import { t as generateReportFn } from "./report-api-CqHvI0_R.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-C7ozICdG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		q: "How does the AI calculate ROI?",
		a: "Our proprietary neural engine cross-references real-time ad spend with multi-touch attribution models and historical industry benchmarks to provide a weighted performance score."
	},
	{
		q: "Is my campaign data private?",
		a: "Absolutely. All data is encrypted at rest and in transit. We follow SOC2 compliance standards and never use your specific campaign data to train public models."
	},
	{
		q: "How accurate are the suggestions?",
		a: "Our suggestions have a 94% confidence interval based on retrospective testing of over 500k active advertiser campaigns within the region."
	},
	{
		q: "Can I export these reports?",
		a: "Yes, reports can be exported in PDF, JSON, or CSV formats. You can also generate a secure public link for external stakeholder review."
	}
];
function ReportPage() {
	const [reportData, setReportData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [rating, setRating] = (0, import_react.useState)(0);
	const [feedbackText, setFeedbackText] = (0, import_react.useState)("");
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
			if (feedbackStr) try {
				feedbacks = JSON.parse(feedbackStr);
			} catch (e) {
				feedbacks = [];
			}
			const feedbackItem = {
				id: `FB-${Math.floor(1e3 + Math.random() * 9e3)}`,
				campaignName: displayData.campaignName,
				clientName: displayData.clientName,
				rating,
				comment: feedbackText,
				date: (/* @__PURE__ */ new Date()).toLocaleDateString()
			};
			feedbacks.unshift(feedbackItem);
			localStorage.setItem("report_feedback", JSON.stringify(feedbacks));
			toast.success("Thank you for your feedback! Review saved.");
			setRating(0);
			setFeedbackText("");
		}
	};
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			const data = localStorage.getItem("current_report");
			if (data) setReportData(JSON.parse(data));
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
			const result = await generateReportFn({ data: JSON.parse(inputsStr) });
			if (!result) throw new Error("Failed to regenerate report");
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
	const displayData = reportData || {
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
		strengths: [{
			title: "Creative Resonance",
			description: "Video ads outperformed static banners by 40% in CTR across all devices."
		}, {
			title: "Geo-Optimization",
			description: "Hyderabad clusters showed 3x higher conversion rates than predicted models."
		}],
		suggestions: [{
			title: "Landing Page",
			description: "Mobile bounce rate is high (62%). Recommend optimizing for 4G/Edge speeds."
		}, {
			title: "Frequency Capping",
			description: "User fatigue detected in 10+ exposure group. Implement stricter capping."
		}],
		recommendation: "Double the investment in short-form video assets and shift 15% of the display budget towards native content placements. The campaign is currently on a high-growth trajectory and can sustain a 30% budget increase without significant ROI diminishing returns.",
		aiRecommendations: [
			"Establish bid multipliers on high-performing publishers in programmatic display networks.",
			"Optimize creative messaging variations highlighting pricing transparency versus feature benefits.",
			"Tighten frequency capping at 3 exposures per week to prevent audience ad fatigue."
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 max-w-[1100px] mx-auto space-y-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-md justify-between items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-headline-lg font-bold text-on-surface",
					children: displayData.campaignName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-on-surface-variant text-body-lg",
					children: [
						"Client: ",
						displayData.clientName,
						" • Generated on ",
						(/* @__PURE__ */ new Date()).toLocaleDateString()
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-sm flex-wrap print:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleCopy,
							className: "px-lg py-sm bg-surface-container border border-outline-variant rounded-lg flex items-center gap-sm text-body-md hover:bg-surface-variant transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-body-lg",
								children: "content_copy"
							}), "Copy"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handlePrint,
							className: "px-lg py-sm bg-surface-container border border-outline-variant rounded-lg flex items-center gap-sm text-body-md hover:bg-surface-variant transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-body-lg",
								children: "picture_as_pdf"
							}), "PDF"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleRegenerate,
							disabled: loading,
							className: "px-lg py-sm bg-tertiary-container text-on-tertiary-container rounded-lg flex items-center gap-sm text-body-md hover:brightness-110 transition-all disabled:opacity-50 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `material-symbols-outlined text-body-lg ${loading ? "animate-spin" : ""}`,
								children: loading ? "sync" : "refresh"
							}), loading ? "Regenerating..." : "Regenerate"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "px-lg py-sm bg-primary text-on-primary rounded-lg flex items-center gap-sm text-body-md hover:brightness-110 transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-body-lg",
								children: "save"
							}), "Save"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass-panel rounded-3xl overflow-hidden p-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-lg mb-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-12 md:col-span-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-headline-md text-primary mb-md",
								children: "Executive Summary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-body-lg leading-relaxed text-on-surface-variant",
								children: displayData.executiveSummary
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-12 md:col-span-4 bg-surface-container-low rounded-2xl p-lg border border-outline-variant/30 flex flex-col justify-center items-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-secondary text-display-lg leading-tight",
									children: displayData.roi
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-label-md text-on-surface-variant uppercase tracking-widest",
									children: "Calculated ROI"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-md px-sm py-xs bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-label-md flex items-center gap-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "material-symbols-outlined text-body-md",
										children: (displayData.roiStatus || "").toLowerCase().includes("underperforming") ? "trending_down" : "trending_up"
									}), displayData.roiStatus || "Positive"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-outline-variant/20 mb-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								icon: "assignment",
								color: "text-primary",
								children: "Campaign Overview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-sm text-on-surface-variant text-body-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Budget Utilization",
										value: displayData.budgetUtilization
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Target Demographic",
										value: displayData.targetDemographic
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Duration",
										value: displayData.duration
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								icon: "check_circle",
								color: "text-secondary",
								children: "Strengths"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-sm",
								children: displayData.strengths?.map((strength, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillCard, {
									tone: "secondary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-secondary font-bold",
											children: [strength.title, ":"]
										}),
										" ",
										strength.description
									]
								}, idx))
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								icon: "bolt",
								color: "text-tertiary",
								children: "Performance Highlights"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
									label: "Impressions",
									value: displayData.impressions
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
									label: "Conversions",
									value: displayData.conversions
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								icon: "lightbulb",
								color: "text-error",
								children: "Improvement Suggestions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-sm",
								children: displayData.suggestions?.map((suggestion, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillCard, {
									tone: "error",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-error font-bold",
											children: [suggestion.title, ":"]
										}),
										" ",
										suggestion.description
									]
								}, idx))
							})] })]
						})]
					}),
					displayData.aiRecommendations && displayData.aiRecommendations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2xl p-xl bg-secondary/5 border border-secondary/20 rounded-2xl mb-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-title-lg text-secondary flex items-center gap-sm mb-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined",
								children: "psychology"
							}), "AI Strategic Next Steps"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-md text-on-surface-variant text-body-md",
							children: displayData.aiRecommendations.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-md items-start p-md bg-surface-container-low border border-outline-variant/10 rounded-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined text-secondary select-none",
									children: "assignment_turned_in"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2xl p-xl bg-primary-container/20 border border-primary/20 rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-title-lg text-primary flex items-center gap-sm mb-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined",
								style: { fontVariationSettings: "'FILL' 1" },
								children: "verified"
							}), "Final Recommendation"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body-lg text-on-primary-container",
							children: displayData.recommendation
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass-panel rounded-3xl overflow-hidden p-3xl mt-xl print:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-headline-md text-primary mb-xs",
						children: "Rate this AI Report"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-on-surface-variant text-body-md mb-lg",
						children: "Your feedback helps us train and improve the AI ROI analysis engine."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-label-md text-on-surface-variant mb-xs",
								children: "Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-sm",
								children: [
									1,
									2,
									3,
									4,
									5
								].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setRating(star),
									className: "transition-transform active:scale-90 hover:scale-110 cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "material-symbols-outlined text-[32px]",
										style: {
											fontVariationSettings: rating >= star ? "'FILL' 1" : void 0,
											color: rating >= star ? "#e0b034" : "var(--color-outline-variant)"
										},
										children: "star"
									})
								}, star))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-label-md text-on-surface-variant mb-xs",
								children: "Comments & Feedback"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								value: feedbackText,
								onChange: (e) => setFeedbackText(e.target.value),
								placeholder: "What went well? Any calculations or assumptions that were off?",
								className: "w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-md text-body-md input-gradient-focus transition-all"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: submitFeedback,
								className: "px-xl py-md bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer",
								children: "Submit Rating & Review"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-3xl space-y-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-headline-md text-center text-on-surface",
					children: "Frequently Asked Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-lg",
					children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "glass-panel p-lg rounded-2xl cursor-pointer hover:bg-surface-variant/30 transition-all group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex justify-between items-center mb-sm list-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-body-lg text-on-surface font-semibold",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform group-open:rotate-180",
								children: "expand_more"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-on-surface-variant text-body-md",
							children: f.a
						})]
					}, f.q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-3xl mb-2xl relative p-3xl rounded-[2rem] bg-surface-container-highest border border-white/10 overflow-hidden text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-0 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1/2 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(180,197,255,0.08)_0%,transparent_70%)] animate-pulse" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 space-y-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-display-lg max-w-2xl mx-auto leading-tight",
							children: "Generate Professional Advertiser ROI Reports in Seconds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body-lg text-on-surface-variant max-w-xl mx-auto",
							children: "Empower your marketing team with AI-driven insights that drive growth and maximize every dollar spent."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/generate",
							className: "inline-block px-3xl py-lg bg-primary text-on-primary rounded-full text-headline-md font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95",
							children: "Start Generating Reports"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "pb-xl text-center text-on-surface-variant text-label-md",
				children: "© 2023 Telangana Today. All intelligence benchmarks are AI-simulated and based on available network metadata."
			})
		]
	}) });
}
function SectionTitle({ icon, color, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
		className: "text-title-lg text-on-surface flex items-center gap-sm mb-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `material-symbols-outlined ${color}`,
			children: icon
		}), children]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex justify-between border-b border-outline-variant/10 pb-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-on-surface font-semibold",
			children: value
		})]
	});
}
function PillCard({ tone, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `p-md border rounded-xl text-body-md ${tone === "secondary" ? "bg-secondary/5 border-secondary/10" : "bg-error/5 border-error/10"}`,
		children
	});
}
function Metric({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface-container-highest/30 p-md rounded-xl border border-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-label-md text-on-surface-variant",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-title-lg font-bold text-on-surface",
			children: value
		})]
	});
}
//#endregion
export { ReportPage as component };
