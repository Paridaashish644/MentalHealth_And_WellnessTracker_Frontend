function Features() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-4 text-center">
          Platform Features
        </h1>
        <p className="text-slate-400 text-center mb-12">
          A complete mental health and wellness solution designed to help you
          understand, track, and improve your well-being.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mood Tracking */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">🧠 Mood Tracking</h2>
            <p className="text-slate-400">
              Log your daily moods using emoji sliders or rating scales.
              Track emotional patterns over time to better understand your
              mental state.
            </p>
          </div>

          {/* Journaling */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">📓 Daily Journaling</h2>
            <p className="text-slate-400">
              Maintain a private digital journal to express thoughts,
              emotions, and daily experiences in a safe and secure space.
            </p>
          </div>

          {/* Analytics */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">📊 Analytics Dashboard</h2>
            <p className="text-slate-400">
              Visualize your mental health trends with weekly, monthly,
              and yearly charts for mood, stress, and sleep patterns.
            </p>
          </div>

          {/* Wellness Suggestions */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">🌱 Wellness Suggestions</h2>
            <p className="text-slate-400">
              Receive personalized wellness tips such as meditation,
              breathing exercises, affirmations, and journaling prompts
              using AI or rule-based recommendations.
            </p>
          </div>

          {/* Sleep & Stress */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">😴 Sleep & Stress Monitoring</h2>
            <p className="text-slate-400">
              Track sleep duration and stress levels to identify habits
              affecting your mental and emotional health.
            </p>
          </div>

          {/* Therapist & Community */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">🤝 Therapist & Community Support</h2>
            <p className="text-slate-400">
              Connect with certified therapists or participate in
              moderated community discussions for guidance and support.
            </p>
          </div>

          {/* Admin Dashboard */}
          <div className="bg-slate-800 p-6 rounded-xl shadow md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">🛠️ Admin Analytics Dashboard</h2>
            <p className="text-slate-400">
              Administrators can manage users, monitor reports, analyze
              platform usage, and ensure system security and content quality.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Features;
