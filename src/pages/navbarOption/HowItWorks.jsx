import React from "react";

const steps = [
  {
    step: "01",
    title: "Create Your Account",
    desc: "Sign up securely and set up your personal mental wellness profile to get started.",
    icon: "👤",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    step: "02",
    title: "Track Your Mood & Journal",
    desc: "Log your daily emotions, stress levels, and thoughts using mood scales and private journaling.",
    icon: "📝",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    step: "03",
    title: "View Insights & Analytics",
    desc: "Visual dashboards show weekly, monthly, and yearly trends to help you understand patterns.",
    icon: "📊",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    step: "04",
    title: "Get Wellness Suggestions",
    desc: "Receive AI or rule-based recommendations like meditation, breathing exercises, and affirmations.",
    icon: "🧘",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    step: "05",
    title: "Connect & Get Support",
    desc: "Access therapists, wellness resources, or community support in a safe and secure environment.",
    icon: "🤝",
    gradient: "from-teal-500 to-emerald-600",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 font-semibold text-sm mb-4">
            HOW IT WORKS
          </div>

          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
            Your Journey to
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Better Mental Wellness
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A simple step-by-step process designed to help you track, understand,
            and improve your mental health.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 shadow-lg hover:shadow-xl transition"
            >
              {/* Step Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold">
                {item.step}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white text-2xl`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
