import { User, Bell, Settings } from "lucide-react";

export default function Header({ sidebarCollapsed = false }) {
  return (
    <header
      className={`fixed top-0 right-0 z-10 h-16
      ${sidebarCollapsed ? "left-20" : "left-64"}
      bg-white dark:bg-slate-900
      border-b border-slate-200 dark:border-slate-800
      px-6 transition-all duration-300`}
    >
      <div className="flex h-full items-center justify-between">
        <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
          Wellness Dashboard
        </h1>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <Bell size={20} className="text-slate-600 dark:text-slate-300" />
          </button>
          <button className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <Settings
              size={20}
              className="text-slate-600 dark:text-slate-300"
            />
          </button>
          <div className="flex items-center gap-3 pl-4 ml-2 border-l border-slate-200 dark:border-slate-700">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow">
              <User size={18} className="text-white" />
            </div>
            <div className="hidden sm:block text-sm leading-tight">
              <p className="text-slate-500 dark:text-slate-400 text-xs">
                Subhrajit Swain
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
