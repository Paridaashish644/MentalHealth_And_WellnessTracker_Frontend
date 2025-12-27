import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "App User",
    feedback:
      "This app helped me recognize my emotional patterns clearly. Journaling daily has improved my self-awareness.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Ananya Das",
    role: "College Student",
    feedback:
      "During exam stress, the mood tracker and mindfulness tools really helped me stay calm and focused.",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    name: "Dr. S. Mohanty",
    role: "Therapist",
    feedback:
      "A thoughtfully designed platform that encourages emotional reflection and healthy mental habits.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    name: "Priya Verma",
    role: "Working Professional",
    feedback:
      "The progress insights motivated me to take mental wellness seriously. Clean UI and powerful features.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Amit Kumar",
    role: "Software Engineer",
    feedback:
      "Tracking burnout signs early helped me maintain balance. This app feels supportive, not overwhelming.",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    name: "Neha Singh",
    role: "HR Manager",
    feedback:
      "A great mental wellness companion for professionals. Simple, private, and genuinely helpful.",
    gradient: "from-green-500 to-lime-600",
  },
];

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 font-semibold text-sm mb-4">
            TESTIMONIALS
          </div>

          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
            Trusted by People on Their
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Mental Wellness Journey
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real stories from users who are building healthier minds and better habits.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition"
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${t.gradient} flex items-center justify-center text-white text-xl mb-4`}
              >
                ❝
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                “{t.feedback}”
              </p>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {t.name}
                </h4>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

