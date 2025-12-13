import FeatureCard from './FeatureCard'
function Features() {
  const features = [
    { 
      icon: "📈", 
      title: "Mood Tracking", 
      desc: "Visualize your emotional patterns with beautiful charts and gain insights into what affects your wellbeing.",
      gradient: "from-violet-500 to-purple-600"
    },
    { 
      icon: "✨", 
      title: "Habit Building", 
      desc: "Create positive routines that stick. Track streaks and celebrate your progress with satisfying checkmarks.",
      gradient: "from-fuchsia-500 to-pink-600"
    },
    { 
      icon: "📝", 
      title: "Daily Journaling", 
      desc: "Express yourself freely in a private space. Reflect on your day and watch your growth over time.",
      gradient: "from-purple-500 to-indigo-600"
    },
    { 
      icon: "🎯", 
      title: "Goal Setting", 
      desc: "Set meaningful wellness goals and break them down into achievable steps with smart reminders.",
      gradient: "from-blue-500 to-cyan-600"
    },
    { 
      icon: "🧘", 
      title: "Mindfulness Tools", 
      desc: "Access guided meditations, breathing exercises, and relaxation techniques whenever you need them.",
      gradient: "from-teal-500 to-emerald-600"
    },
    { 
      icon: "📊", 
      title: "Progress Insights", 
      desc: "Get AI-powered insights about your mental health trends and personalized recommendations.",
      gradient: "from-green-500 to-lime-600"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 font-semibold text-sm mb-4">
            FEATURES
          </div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
            Everything You Need for
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Better Mental Health
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Powerful tools designed to help you understand, track, and improve your mental wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
}
export default Features