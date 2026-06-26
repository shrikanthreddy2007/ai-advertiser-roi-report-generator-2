import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-D2LxVdlF.js
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		to: "/",
		label: "Dashboard",
		icon: "dashboard"
	},
	{
		to: "/generate",
		label: "Generate",
		icon: "analytics"
	},
	{
		to: "/history",
		label: "History",
		icon: "history"
	},
	{
		to: "/admin",
		label: "Admin",
		icon: "admin_panel_settings"
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "custom-scrollbar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed left-0 top-0 h-full w-60 bg-surface-container border-r border-outline-variant/30 shadow-sm flex flex-col p-lg z-50 print:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-headline-md font-bold text-on-surface",
							children: "Telangana Today"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-label-md text-on-surface-variant opacity-70",
							children: "AI Advertiser ROI"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 space-y-base",
						children: navItems.map((item, idx) => {
							const active = item.to === "/" && pathname === "/" && idx === 0 || item.to !== "/" && pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: active ? "flex items-center gap-md bg-secondary-container text-on-secondary-container rounded-lg px-md py-sm transition-colors duration-150 active:scale-95" : "flex items-center gap-md text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 px-md py-sm rounded-lg transition-colors duration-150 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined",
									style: active ? { fontVariationSettings: "'FILL' 1" } : void 0,
									children: item.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-body-md",
									children: item.label
								})]
							}, `${item.to}-${idx}`);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto pt-lg border-t border-outline-variant/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/generate",
							className: "w-full bg-primary-container text-on-primary-container py-sm rounded-xl text-body-md font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm shadow-lg shadow-primary-container/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-[20px]",
								children: "add"
							}), "New Campaign"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-lg flex items-center gap-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "w-10 h-10 rounded-full border-2 border-outline-variant/30 object-cover",
								src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KJutEvOebjPTjmssJPSP2M__nbdgjJm_cW1wTCBNsmRvnZBQfWrixtzUSffa8L-zxPhv6YZqgYtzIv6po-rSYlGwTJ-hOtSUJs7_Ur46If-j45gkty-YUseMSh5t9MyGMB0F0p5vAxm1tbDp1dOinZVGJ0DeovPXB4Li_XiqVdE3YdqMnFdbYK-_zZKK_WBydVG5tcIiyZBTmq3R1LWO1aLualBKzp80dAeIks8VhYKLbHeVmNQhcrBf3hLgS_npz5uqXgQ-JFQ",
								alt: "Alex Chen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-body-md font-bold truncate",
									children: "Alex Chen"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-label-md text-on-surface-variant truncate",
									children: "Premium Account"
								})]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "fixed top-0 left-60 right-0 h-16 bg-surface/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-margin-desktop z-40 shadow-lg shadow-black/40 print:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center bg-surface-container-low border border-outline-variant/30 rounded-full px-md py-1.5 w-96 focus-within:ring-2 focus-within:ring-primary transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "material-symbols-outlined text-on-surface-variant",
						children: "search"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "bg-transparent border-none focus:ring-0 focus:outline-none text-body-md w-full ml-2 placeholder:text-on-surface-variant/50",
						placeholder: "Search campaigns...",
						type: "text"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-md text-on-surface-variant",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "material-symbols-outlined hover:text-primary transition-all",
								children: "notifications"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "material-symbols-outlined hover:text-primary transition-all",
								children: "help"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-px bg-outline-variant/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body-lg font-bold text-primary",
							children: "Telangana Today"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "ml-60 pt-24 px-margin-desktop pb-2xl min-h-screen relative overflow-hidden print:ml-0 print:pt-4 print:px-0 print:overflow-visible",
				children
			})
		]
	});
}
//#endregion
export { AppShell as t };
