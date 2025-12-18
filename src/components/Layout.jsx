import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DashboardFooter from "./DashboardFooter";

export default function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div className="flex-1 min-h-screen flex flex-col">
        <Header sidebarCollapsed={sidebarCollapsed} />
        <main className="flex-1 px-6 pt-16 pb-12 overflow-y-auto">
          <Outlet />
        </main>
        <DashboardFooter sidebarCollapsed={sidebarCollapsed} />
      </div>
    </div>
  );
}
