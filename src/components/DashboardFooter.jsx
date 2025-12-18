function DashboardFooter({ sidebarCollapsed }) {
  return (
    <footer
      className={`fixed bottom-0 right-0
      ${sidebarCollapsed ? "left-20" : "left-64"}
      bg-white dark:bg-slate-900
      border-t border-slate-200 dark:border-slate-800
      px-6 py-4 transition-all duration-300`}
    >
      <div className="flex justify-between items-center text-sm text-slate-600 dark:text-slate-400">
        <p>© {new Date().getFullYear()} MindTrack</p>
        <p className="hidden sm:block">Built for your wellness journey</p>
      </div>
    </footer>
  );
}

export default DashboardFooter;
