function DashboardCard({ title, value, subtitle }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-slate-700 dark:text-white">
        {title}
      </h3>
      <p className="text-3xl font-bold mt-2 text-violet-600">
        {value}
      </p>
      <p className="text-sm text-slate-500 mt-1">
        {subtitle}
      </p>
    </div>
  );
}

export default DashboardCard;
