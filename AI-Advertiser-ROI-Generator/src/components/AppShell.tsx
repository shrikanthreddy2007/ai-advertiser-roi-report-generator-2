import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const navItems = [
  { to: "/", label: "Dashboard", icon: "dashboard" },
  { to: "/generate", label: "Generate", icon: "analytics" },
  { to: "/history", label: "History", icon: "history" },
  { to: "/admin", label: "Admin", icon: "admin_panel_settings" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="custom-scrollbar">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-60 bg-surface-container border-r border-outline-variant/30 shadow-sm flex flex-col p-lg z-50 print:hidden">
        <div className="mb-2xl">
          <h1 className="text-headline-md font-bold text-on-surface">Telangana Today</h1>
          <p className="text-label-md text-on-surface-variant opacity-70">AI Advertiser ROI</p>
        </div>
        <nav className="flex-1 space-y-base">
          {navItems.map((item, idx) => {
            const active =
              (item.to === "/" && pathname === "/" && idx === 0) ||
              (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <Link
                key={`${item.to}-${idx}`}
                to={item.to}
                className={
                  active
                    ? "flex items-center gap-md bg-secondary-container text-on-secondary-container rounded-lg px-md py-sm transition-colors duration-150 active:scale-95"
                    : "flex items-center gap-md text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 px-md py-sm rounded-lg transition-colors duration-150 active:scale-95"
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                <span className="text-body-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto pt-lg border-t border-outline-variant/20">
          <Link
            to="/generate"
            className="w-full bg-primary-container text-on-primary-container py-sm rounded-xl text-body-md font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm shadow-lg shadow-primary-container/20"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Campaign
          </Link>
          <div className="mt-lg flex items-center gap-md">
            <img
              className="w-10 h-10 rounded-full border-2 border-outline-variant/30 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1KJutEvOebjPTjmssJPSP2M__nbdgjJm_cW1wTCBNsmRvnZBQfWrixtzUSffa8L-zxPhv6YZqgYtzIv6po-rSYlGwTJ-hOtSUJs7_Ur46If-j45gkty-YUseMSh5t9MyGMB0F0p5vAxm1tbDp1dOinZVGJ0DeovPXB4Li_XiqVdE3YdqMnFdbYK-_zZKK_WBydVG5tcIiyZBTmq3R1LWO1aLualBKzp80dAeIks8VhYKLbHeVmNQhcrBf3hLgS_npz5uqXgQ-JFQ"
              alt="Alex Chen"
            />
            <div className="overflow-hidden">
              <p className="text-body-md font-bold truncate">Alex Chen</p>
              <p className="text-label-md text-on-surface-variant truncate">Premium Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Header */}
      <header className="fixed top-0 left-60 right-0 h-16 bg-surface/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-margin-desktop z-40 shadow-lg shadow-black/40 print:hidden">
        <div className="flex items-center bg-surface-container-low border border-outline-variant/30 rounded-full px-md py-1.5 w-96 focus-within:ring-2 focus-within:ring-primary transition-all">
          <span className="material-symbols-outlined text-on-surface-variant">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 focus:outline-none text-body-md w-full ml-2 placeholder:text-on-surface-variant/50"
            placeholder="Search campaigns..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-lg">
          <div className="flex items-center gap-md text-on-surface-variant">
            <button className="material-symbols-outlined hover:text-primary transition-all">
              notifications
            </button>
            <button className="material-symbols-outlined hover:text-primary transition-all">
              help
            </button>
          </div>
          <div className="h-6 w-px bg-outline-variant/30" />
          <p className="text-body-lg font-bold text-primary">Telangana Today</p>
        </div>
      </header>

      <main className="ml-60 pt-24 px-margin-desktop pb-2xl min-h-screen relative overflow-hidden print:ml-0 print:pt-4 print:px-0 print:overflow-visible">
        {children}
      </main>
    </div>
  );
}
