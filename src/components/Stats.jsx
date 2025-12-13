
function Stats() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "1M+", label: "Moods Tracked" },
    { value: "95%", label: "User Satisfaction" },
    { value: "4.9★", label: "App Rating" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-violet-600 to-fuchsia-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-violet-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Stats