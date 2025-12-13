
function FeatureCard({ icon, title, desc, gradient }) {
  return (
    <div className="group relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl mb-5 shadow-lg`}>
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
      
      <div className="mt-4 flex items-center text-violet-600 dark:text-violet-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more 
        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
}
export default FeatureCard